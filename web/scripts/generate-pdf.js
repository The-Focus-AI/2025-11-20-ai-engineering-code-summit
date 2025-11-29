#!/usr/bin/env node
/**
 * PDF Generator using paged.js
 *
 * Uses the official paged.js "rendered" event to detect completion.
 * Based on: https://github.com/pagedjs/pagedjs-cli
 */
import { chromium } from 'playwright';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { PDFDocument, PDFName, PDFString, PDFDict } from 'pdf-lib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const outputPath = join(projectRoot, '..', 'output.pdf');

const PORT = 4321;
const BASE_URL = `http://localhost:${PORT}`;
const TIMEOUT = 120000; // 2 minutes

async function isServerRunning() {
  try {
    const response = await fetch(`${BASE_URL}/`, {
      method: 'HEAD',
      signal: AbortSignal.timeout(2000)
    });
    return response.ok;
  } catch {
    return false;
  }
}

async function waitForServer(maxRetries = 30, delay = 1000) {
  for (let i = 0; i < maxRetries; i++) {
    if (await isServerRunning()) {
      console.log('✓ Server is ready');
      return true;
    }
    await new Promise(resolve => setTimeout(resolve, delay));
    process.stdout.write('.');
  }
  console.log('\n✗ Server failed to start');
  return false;
}

function startServer() {
  console.log('Starting development server...');
  const server = spawn('npm', ['run', 'dev'], {
    cwd: projectRoot,
    stdio: 'pipe',
    shell: true
  });

  server.stdout.on('data', (data) => {
    if (data.toString().includes('Local:')) {
      console.log('\n✓ Development server started');
    }
  });

  server.stderr.on('data', (data) => {
    const msg = data.toString();
    if (!msg.includes('ExperimentalWarning')) {
      console.error(msg);
    }
  });

  return server;
}

// Wait for paged.js to finish using its native "rendered" event
async function waitForPagedJsRendered(page) {
  console.log('Waiting for Paged.js to render...');

  // Expose a function that paged.js will call when done
  let renderResolve;
  const renderPromise = new Promise((resolve) => {
    renderResolve = resolve;
  });

  await page.exposeFunction('onPagedJsRendered', (msg, totalPages, width, height) => {
    console.log(`  ${msg}`);
    renderResolve({ totalPages, width, height });
  });

  // Inject script to listen for paged.js "rendered" event
  await page.evaluate((timeout) => {
    // Check if PagedPolyfill exists and listen for rendered event
    const checkAndListen = () => {
      if (window.PagedPolyfill) {
        // Listen for the rendered event
        window.PagedPolyfill.on('rendered', (flow) => {
          const msg = `Rendered ${flow.total} pages in ${flow.performance}ms`;
          window.onPagedJsRendered(msg, flow.total, flow.width, flow.height);
        });
        return true;
      }
      return false;
    };

    // If PagedPolyfill isn't ready yet, poll for it
    if (!checkAndListen()) {
      const startTime = Date.now();
      const interval = setInterval(() => {
        if (checkAndListen()) {
          clearInterval(interval);
        } else if (Date.now() - startTime > timeout) {
          clearInterval(interval);
          // Fallback: check for .pagedjs_pages directly
          const pages = document.querySelectorAll('.pagedjs_page');
          if (pages.length > 0) {
            window.onPagedJsRendered(`Fallback: found ${pages.length} pages`, pages.length, 0, 0);
          }
        }
      }, 100);
    }
  }, TIMEOUT);

  // Wait for the rendered event with timeout
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Paged.js render timeout')), TIMEOUT);
  });

  try {
    const result = await Promise.race([renderPromise, timeoutPromise]);
    return result;
  } catch (error) {
    // Fallback: check if pages exist anyway
    const fallbackCount = await page.evaluate(() => {
      return document.querySelectorAll('.pagedjs_page').length;
    });
    if (fallbackCount > 0) {
      console.log(`  Fallback: detected ${fallbackCount} pages`);
      return { totalPages: fallbackCount, width: 0, height: 0 };
    }
    throw error;
  }
}

async function waitForImages(page) {
  console.log('Waiting for images...');
  const result = await page.evaluate(() => {
    const images = Array.from(document.images);
    const pending = images.filter(img => !img.complete);

    if (pending.length === 0) {
      return { total: images.length, loaded: images.length, failed: 0 };
    }

    return Promise.all(
      pending.map(img => new Promise(resolve => {
        const timeout = setTimeout(() => resolve(false), 10000);
        img.onload = () => { clearTimeout(timeout); resolve(true); };
        img.onerror = () => { clearTimeout(timeout); resolve(false); };
      }))
    ).then(results => ({
      total: images.length,
      loaded: images.length - pending.length + results.filter(Boolean).length,
      failed: results.filter(r => !r).length
    }));
  });

  console.log(`  ${result.loaded}/${result.total} images loaded`);
  if (result.failed > 0) {
    console.log(`  ⚠ ${result.failed} images failed`);
  }
  return result;
}

async function extractBookmarks(page) {
  return await page.evaluate(() => {
    const bookmarks = [];
    const pages = document.querySelectorAll('.pagedjs_page');

    const getPageNumber = (element) => {
      for (let i = 0; i < pages.length; i++) {
        if (pages[i].contains(element)) return i + 1;
      }
      return 1;
    };

    const sections = [
      { id: 'title', title: 'Title' },
      { id: 'executive-summary', title: 'Executive Summary' },
      { id: 'toc', title: 'Contents' },
      { id: 'leadership', title: 'Leadership Track', hasArticles: true },
      { id: 'engineering', title: 'Engineering Track', hasArticles: true },
      { id: 'about', title: 'About This Report' },
      { id: 'author', title: 'About the Author' }
    ];

    for (const section of sections) {
      const el = document.querySelector(`#${section.id}`);
      if (!el) continue;

      const bookmark = {
        title: section.title,
        page: getPageNumber(el),
        level: 0,
        children: []
      };

      if (section.hasArticles) {
        el.querySelectorAll('article').forEach(article => {
          const h3 = article.querySelector('h3');
          if (h3) {
            bookmark.children.push({
              title: h3.textContent.trim(),
              page: getPageNumber(article),
              level: 1
            });
          }
        });
      }

      bookmarks.push(bookmark);
    }

    return bookmarks;
  });
}

async function addPdfBookmarks(pdfBytes, bookmarks) {
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const context = pdfDoc.context;

  pdfDoc.setTitle('AI Engineering World\'s Fair 2025 - Full Report');
  pdfDoc.setAuthor('Will Schenk / TheFocus AI');
  pdfDoc.setSubject('Conference coverage and analysis');
  pdfDoc.setKeywords(['AI', 'engineering', 'conference', 'LLM', 'agents']);
  pdfDoc.setCreator('TheFocus AI Report Generator');
  pdfDoc.setProducer('paged.js + Playwright + pdf-lib');
  pdfDoc.setCreationDate(new Date());

  console.log('\nAdding PDF bookmarks:');

  const pages = pdfDoc.getPages();
  const flatBookmarks = [];

  for (const b of bookmarks) {
    console.log(`  ${b.title} (page ${b.page})`);
    flatBookmarks.push({ ...b });
    for (const c of (b.children || [])) {
      console.log(`    - ${c.title} (page ${c.page})`);
      flatBookmarks.push({ ...c });
    }
  }

  const outlineRefs = [];
  for (const bookmark of flatBookmarks) {
    const pageIndex = Math.min(Math.max(0, bookmark.page - 1), pages.length - 1);
    const pageRef = pages[pageIndex].ref;

    const outlineDict = PDFDict.withContext(context);
    outlineDict.set(PDFName.of('Title'), PDFString.of(bookmark.title));
    outlineDict.set(PDFName.of('Dest'), context.obj([pageRef, PDFName.of('Fit')]));
    outlineDict.set(PDFName.of('Count'), context.obj(0));
    outlineRefs.push(context.register(outlineDict));
  }

  let topLevelFirst = null;
  let topLevelLast = null;
  let prevTopLevel = null;
  let flatIndex = 0;

  for (const bookmark of bookmarks) {
    const ref = outlineRefs[flatIndex];
    const dict = context.lookup(ref);

    if (!topLevelFirst) topLevelFirst = ref;
    topLevelLast = ref;

    if (prevTopLevel) {
      context.lookup(prevTopLevel).set(PDFName.of('Next'), ref);
      dict.set(PDFName.of('Prev'), prevTopLevel);
    }

    const childCount = bookmark.children?.length || 0;
    if (childCount > 0) {
      const firstChildIdx = flatIndex + 1;
      const lastChildIdx = flatIndex + childCount;

      dict.set(PDFName.of('First'), outlineRefs[firstChildIdx]);
      dict.set(PDFName.of('Last'), outlineRefs[lastChildIdx]);
      dict.set(PDFName.of('Count'), context.obj(childCount));

      let prevChild = null;
      for (let i = firstChildIdx; i <= lastChildIdx; i++) {
        const childDict = context.lookup(outlineRefs[i]);
        childDict.set(PDFName.of('Parent'), ref);
        if (prevChild !== null) {
          context.lookup(outlineRefs[prevChild]).set(PDFName.of('Next'), outlineRefs[i]);
          childDict.set(PDFName.of('Prev'), outlineRefs[prevChild]);
        }
        prevChild = i;
      }
    }

    prevTopLevel = ref;
    flatIndex += 1 + childCount;
  }

  if (topLevelFirst && topLevelLast) {
    const outlinesDict = PDFDict.withContext(context);
    outlinesDict.set(PDFName.of('Type'), PDFName.of('Outlines'));
    outlinesDict.set(PDFName.of('First'), topLevelFirst);
    outlinesDict.set(PDFName.of('Last'), topLevelLast);
    outlinesDict.set(PDFName.of('Count'), context.obj(bookmarks.length));
    const outlinesRef = context.register(outlinesDict);

    flatIndex = 0;
    for (const bookmark of bookmarks) {
      context.lookup(outlineRefs[flatIndex]).set(PDFName.of('Parent'), outlinesRef);
      flatIndex += 1 + (bookmark.children?.length || 0);
    }

    pdfDoc.catalog.set(PDFName.of('Outlines'), outlinesRef);
    pdfDoc.catalog.set(PDFName.of('PageMode'), PDFName.of('UseOutlines'));
  }

  console.log(`✓ Added ${flatBookmarks.length} bookmarks`);
  return await pdfDoc.save();
}

async function generatePDF() {
  console.log('\nLaunching browser...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('Paged') || text.includes('render')) {
      console.log(`  [browser] ${text}`);
    }
  });

  page.on('pageerror', err => {
    console.error(`  [page error] ${err.message}`);
  });

  try {
    console.log(`Loading ${BASE_URL}/paged...`);

    // Navigate to the page
    await page.goto(`${BASE_URL}/paged`, {
      waitUntil: 'domcontentloaded',
      timeout: TIMEOUT
    });

    // Wait for network to settle (fonts, images starting to load)
    await page.waitForLoadState('networkidle', { timeout: TIMEOUT });

    // Wait for paged.js to fully render using its native event
    const renderResult = await waitForPagedJsRendered(page);
    console.log(`✓ Paged.js complete: ${renderResult.totalPages} pages`);

    // Ensure .pagedjs_pages container exists
    await page.waitForSelector('.pagedjs_pages', { timeout: 10000 });

    // Wait for images to finish loading
    await waitForImages(page);

    // Small delay for any final rendering
    await page.waitForTimeout(1000);

    // Verify we have content
    const finalCheck = await page.evaluate(() => ({
      pageCount: document.querySelectorAll('.pagedjs_page').length,
      hasContent: document.body.innerText.length > 1000
    }));

    if (finalCheck.pageCount < 5) {
      throw new Error(`Only ${finalCheck.pageCount} pages - rendering may have failed`);
    }

    console.log(`Final page count: ${finalCheck.pageCount}`);

    // Extract bookmarks
    console.log('Extracting bookmarks...');
    const bookmarks = await extractBookmarks(page);

    // Generate PDF
    console.log('Generating PDF...');
    const client = await page.context().newCDPSession(page);

    const pdfResult = await client.send('Page.printToPDF', {
      printBackground: true,
      paperWidth: 8.5,
      paperHeight: 11,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      preferCSSPageSize: true,
      displayHeaderFooter: false,
    });

    // Add bookmarks to PDF
    const rawPdf = Buffer.from(pdfResult.data, 'base64');
    const finalPdf = await addPdfBookmarks(rawPdf, bookmarks);

    // Save
    const fs = await import('fs/promises');
    await fs.writeFile(outputPath, finalPdf);

    const sizeMB = (finalPdf.length / 1024 / 1024).toFixed(2);
    console.log(`\n✓ PDF saved: ${outputPath} (${sizeMB} MB)`);

  } finally {
    await browser.close();
  }
}

async function main() {
  let server = null;
  let startedByUs = false;

  try {
    if (await isServerRunning()) {
      console.log('✓ Server already running');
    } else {
      server = startServer();
      startedByUs = true;
      if (!await waitForServer()) {
        throw new Error('Server failed to start');
      }
      await new Promise(r => setTimeout(r, 2000));
    }

    await generatePDF();

    if (server && startedByUs) {
      console.log('\nShutting down server...');
      server.kill();
    }

    process.exit(0);
  } catch (error) {
    console.error('\n✗ Error:', error.message);
    console.error(error.stack);
    if (server && startedByUs) server.kill();
    process.exit(1);
  }
}

main();
