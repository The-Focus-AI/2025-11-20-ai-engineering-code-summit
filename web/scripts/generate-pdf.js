#!/usr/bin/env node
import { chromium } from 'playwright';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const outputPath = join(projectRoot, '..', 'output.pdf');

// Default port for Astro dev server
const PORT = 4321;
const BASE_URL = `http://localhost:${PORT}`;

// Check if server is already running
async function isServerRunning() {
  try {
    const response = await fetch(`${BASE_URL}/`, { 
      method: 'HEAD',
      signal: AbortSignal.timeout(2000)
    });
    return response.ok;
  } catch (error) {
    return false;
  }
}

// Wait for server to be ready
async function waitForServer(maxRetries = 30, delay = 1000) {
  for (let i = 0; i < maxRetries; i++) {
    if (await isServerRunning()) {
      console.log('✓ Server is ready');
      return true;
    }
    await new Promise(resolve => setTimeout(resolve, delay));
    process.stdout.write('.');
  }
  console.log('\n✗ Server failed to start in time');
  return false;
}

// Start the dev server
function startServer() {
  console.log('Starting development server...');
  const server = spawn('npm', ['run', 'dev'], {
    cwd: projectRoot,
    stdio: 'pipe',
    shell: true
  });

  let serverOutput = '';
  server.stdout.on('data', (data) => {
    const output = data.toString();
    serverOutput += output;
    // Check if server is ready (Astro typically outputs "Local:" when ready)
    if (output.includes('Local:') || output.includes(`localhost:${PORT}`)) {
      console.log('\n✓ Development server started');
    }
  });

  server.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  return server;
}

// Generate PDF using Playwright
async function generatePDF() {
  console.log('\nLaunching browser...');
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  // Listen to console messages from the page
  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('Paged.js') || text.includes('pages rendered')) {
      console.log(`[Browser] ${text}`);
    }
  });

  try {
    console.log(`Navigating to ${BASE_URL}/paged...`);
    await page.goto(`${BASE_URL}/paged`, {
      waitUntil: 'networkidle',
      timeout: 60000
    });

    console.log('Waiting for page content to load...');
    
    // First, verify all source content is loaded
    const sourceContent = await page.evaluate(() => {
      const body = document.body;
      return {
        articleCount: document.querySelectorAll('article').length,
        sectionCount: document.querySelectorAll('section').length,
        totalTextLength: body.innerText.length,
        bodyHeight: body.scrollHeight
      };
    });
    console.log(`Source content loaded: ${sourceContent.articleCount} articles, ${sourceContent.sectionCount} sections, ${sourceContent.totalTextLength} chars`);
    
    // Wait for Paged.js script to load
    console.log('Waiting for Paged.js to load...');
    await page.waitForFunction(() => {
      return typeof window.PagedPolyfill !== 'undefined';
    }, { timeout: 30000 });
    
    // Wait a bit for Paged.js to initialize
    await page.waitForTimeout(2000);
    
    console.log('Waiting for Paged.js to process content...');

    // Wait for Paged.js to finish rendering all pages
    const pageCount = await page.evaluate(async () => {
      return new Promise((resolve) => {
        let lastPageCount = 0;
        let stableCount = 0;
        const startTime = Date.now();
        
        const checkStatus = () => {
          const pagesContainer = document.querySelector('.pagedjs_pages');
          const pages = pagesContainer ? pagesContainer.querySelectorAll('.pagedjs_page') : [];
          const currentCount = pages.length;
          
          if (currentCount === lastPageCount && currentCount > 0) {
            stableCount++;
            // Page count stable for 10 consecutive checks (5 seconds) to ensure it's really done
            if (stableCount >= 10) {
              console.log(`Paged.js finished rendering ${currentCount} pages`);
              resolve(currentCount);
              return;
            }
          } else {
            if (currentCount > lastPageCount) {
              console.log(`Paged.js: ${currentCount} pages rendered...`);
            }
            lastPageCount = currentCount;
            stableCount = 0;
          }
          
          // Timeout after 120 seconds
          if (Date.now() - startTime > 120000) {
            console.log(`Timeout: Paged.js rendered ${currentCount} pages`);
            resolve(currentCount);
            return;
          }
          
          // Continue checking
          setTimeout(checkStatus, 500);
        };
        
        // Start checking immediately
        checkStatus();
      });
    });
    
    console.log(`✓ Detected ${pageCount} pages rendered by Paged.js`);
    
    // Additional wait to ensure everything is fully rendered and images loaded
    console.log('Waiting for final rendering and images to load...');
    await page.waitForTimeout(5000);

    // Wait for any images to load
    await page.evaluate(() => {
      return Promise.all(
        Array.from(document.images)
          .filter(img => !img.complete)
          .map(img => new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve; // Continue even if image fails
            setTimeout(resolve, 5000); // Timeout after 5s
          }))
      );
    });

    // Get final page count and verify multiple times that it's stable
    console.log('Verifying page count is stable...');
    let finalPageCount = 0;
    for (let i = 0; i < 3; i++) {
      await page.waitForTimeout(2000);
      const documentInfo = await page.evaluate(() => {
        const pages = document.querySelectorAll('.pagedjs_page');
        const pagesContainer = document.querySelector('.pagedjs_pages');
        return {
          pageCount: pages.length,
          containerHeight: pagesContainer ? pagesContainer.scrollHeight : 0,
          bodyHeight: document.body.scrollHeight,
          documentHeight: document.documentElement.scrollHeight,
          lastPageText: pages.length > 0 ? pages[pages.length - 1].innerText.substring(0, 100) : 'no pages'
        };
      });
      
      console.log(`Check ${i + 1}: ${documentInfo.pageCount} pages detected`);
      if (documentInfo.pageCount > finalPageCount) {
        finalPageCount = documentInfo.pageCount;
        console.log(`  Page count increased to ${finalPageCount}`);
      } else if (documentInfo.pageCount === finalPageCount && finalPageCount > 0) {
        console.log(`  Page count stable at ${finalPageCount} pages`);
      }
    }
    
    const documentInfo = await page.evaluate(() => {
      const pages = document.querySelectorAll('.pagedjs_page');
      const pagesContainer = document.querySelector('.pagedjs_pages');
      return {
        pageCount: pages.length,
        containerHeight: pagesContainer ? pagesContainer.scrollHeight : 0,
        bodyHeight: document.body.scrollHeight,
        documentHeight: document.documentElement.scrollHeight
      };
    });
    
    console.log(`Final document info:`, documentInfo);
    console.log(`Generating PDF from ${documentInfo.pageCount} pages...`);
    
    if (documentInfo.pageCount < 10) {
      console.log(`⚠ Warning: Only ${documentInfo.pageCount} pages detected. This seems low.`);
      console.log('Waiting additional time for Paged.js to finish...');
      await page.waitForTimeout(10000);
      
      // Check again
      const recheckInfo = await page.evaluate(() => {
        return {
          pageCount: document.querySelectorAll('.pagedjs_page').length
        };
      });
      console.log(`After additional wait: ${recheckInfo.pageCount} pages`);
    }
    
    // Set a large viewport to ensure we can see everything
    await page.setViewportSize({ width: 1200, height: 20000 });
    
    // Force Paged.js to render all content by scrolling through the entire document
    console.log('Scrolling through document to trigger full Paged.js rendering...');
    await page.evaluate(async () => {
      const container = document.querySelector('.pagedjs_pages');
      const scrollHeight = container ? container.scrollHeight : document.body.scrollHeight;
      
      // Scroll in increments to trigger lazy rendering
      for (let i = 0; i < scrollHeight; i += 500) {
        window.scrollTo(0, i);
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      
      // Scroll back to top and wait
      window.scrollTo(0, 0);
      await new Promise(resolve => setTimeout(resolve, 2000));
    });
    
    // Re-check page count after scrolling
    const finalCheck = await page.evaluate(() => {
      const pages = document.querySelectorAll('.pagedjs_page');
      return {
        pageCount: pages.length,
        totalHeight: document.querySelector('.pagedjs_pages')?.scrollHeight || 0,
        lastPageText: pages.length > 0 ? pages[pages.length - 1].innerText.substring(0, 150) : 'no pages'
      };
    });
    console.log(`After scrolling: ${finalCheck.pageCount} pages, height: ${finalCheck.totalHeight}px`);
    if (finalCheck.pageCount < 20) {
      console.log(`⚠ Still only ${finalCheck.pageCount} pages. Last page preview: ${finalCheck.lastPageText}...`);
    }
    
    // Enable print media emulation so @page CSS rules are applied
    console.log('Enabling print media emulation...');
    await page.emulateMedia({ media: 'print' });
    await page.waitForTimeout(1000);
    
    // Verify all content is in the DOM
    const contentCheck = await page.evaluate(() => {
      const articles = document.querySelectorAll('article');
      const sections = document.querySelectorAll('section');
      return {
        articleCount: articles.length,
        sectionCount: sections.length,
        bodyTextLength: document.body.innerText.length,
        hasContent: document.body.innerText.length > 10000 // Should have substantial content
      };
    });
    console.log(`Content check: ${contentCheck.articleCount} articles, ${contentCheck.sectionCount} sections, ${contentCheck.bodyTextLength} chars`);
    
    if (!contentCheck.hasContent) {
      console.log('⚠ Warning: Content seems incomplete. Waiting longer...');
      await page.waitForTimeout(5000);
    }
    
    // Use Chrome DevTools Protocol to access native print functionality
    // This uses the browser's actual print engine which respects CSS @page rules
    console.log('Generating PDF using browser native print (CDP)...');
    const client = await page.context().newCDPSession(page);
    
    // Print to PDF using native browser print functionality
    // This will use the @page CSS rules from the stylesheet
    const pdfResult = await client.send('Page.printToPDF', {
      printBackground: true,
      paperWidth: 8.5,  // Letter width in inches
      paperHeight: 11,  // Letter height in inches
      marginTop: 0.75,
      marginBottom: 1.0,
      marginLeft: 0.75,
      marginRight: 0.75,
      preferCSSPageSize: false, // Use the paperWidth/paperHeight above
      displayHeaderFooter: false, // @page rules handle headers/footers
    });
    
    // Write the PDF to file
    const fs = await import('fs/promises');
    await fs.writeFile(outputPath, Buffer.from(pdfResult.data, 'base64'));
    
    console.log(`✓ PDF generated successfully: ${outputPath}`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Main execution
async function main() {
  let server = null;
  let serverStartedByUs = false;

  try {
    // Check if server is already running
    if (await isServerRunning()) {
      console.log('✓ Server is already running');
    } else {
      // Start the server
      server = startServer();
      serverStartedByUs = true;
      
      // Wait for server to be ready
      const isReady = await waitForServer();
      if (!isReady) {
        throw new Error('Server failed to start');
      }
      
      // Give it a bit more time to fully initialize
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    // Generate PDF
    await generatePDF();

    // Cleanup
    if (server && serverStartedByUs) {
      console.log('\nShutting down development server...');
      server.kill();
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    process.exit(0);
  } catch (error) {
    console.error('\n✗ Error:', error.message);
    if (server && serverStartedByUs) {
      server.kill();
    }
    process.exit(1);
  }
}

main();

