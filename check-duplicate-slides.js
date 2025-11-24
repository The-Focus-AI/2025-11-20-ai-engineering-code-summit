#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const directories = ['2025-11-20', '2025-11-21'];
const rootDir = __dirname;

// Store all slides found with their locations
const slidesMap = new Map(); // slide path -> array of {file, lineNumber}

function checkFileForDuplicateSlides(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const fileName = path.basename(filePath);

  const duplicatesInFile = [];
  const seenInFile = new Set();

  lines.forEach((line, index) => {
    // Match slide references like ![](../slides/something.png) or ![](slides/something.png)
    const slideMatch = line.match(/!\[.*?\]\(((?:\.\.\/)?slides\/[^)]+)\)/g);

    if (slideMatch) {
      slideMatch.forEach(match => {
        const slidePathMatch = match.match(/!\[.*?\]\(((?:\.\.\/)?slides\/[^)]+)\)/);
        if (slidePathMatch) {
          const slidePath = slidePathMatch[1];
          const lineNumber = index + 1;

          // Check for duplicates within the same file
          if (seenInFile.has(slidePath)) {
            duplicatesInFile.push({
              slide: slidePath,
              line: lineNumber
            });
          } else {
            seenInFile.add(slidePath);
          }

          // Track globally
          if (!slidesMap.has(slidePath)) {
            slidesMap.set(slidePath, []);
          }
          slidesMap.get(slidePath).push({
            file: filePath,
            line: lineNumber
          });
        }
      });
    }
  });

  return duplicatesInFile;
}

console.log('🔍 Checking for duplicate slides in session files...\n');

let totalDuplicates = 0;

// Check each directory
directories.forEach(dir => {
  const dirPath = path.join(rootDir, dir);

  if (!fs.existsSync(dirPath)) {
    console.log(`⚠️  Directory not found: ${dir}`);
    return;
  }

  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    // Only check markdown files that look like session files (with timestamps)
    if (file.endsWith('.md') && /^\d{2}-\d{2}-\d{2}-\d{2}/.test(file)) {
      const filePath = path.join(dirPath, file);
      const duplicates = checkFileForDuplicateSlides(filePath);

      if (duplicates.length > 0) {
        console.log(`❌ ${dir}/${file}:`);
        duplicates.forEach(dup => {
          console.log(`   Duplicate slide at line ${dup.line}: ${dup.slide}`);
        });
        console.log();
        totalDuplicates += duplicates.length;
      }
    }
  });
});

// Summary
console.log('\n' + '='.repeat(60));
if (totalDuplicates === 0) {
  console.log('✅ No duplicate slides found within any session file!');
} else {
  console.log(`❌ Found ${totalDuplicates} duplicate slide(s) within session files`);
}

// Show cross-file duplicates (slides appearing in multiple files)
console.log('\n' + '='.repeat(60));
console.log('📊 Cross-file slide usage:\n');

let crossFileDuplicates = 0;
slidesMap.forEach((locations, slide) => {
  if (locations.length > 1) {
    console.log(`🔄 ${slide} appears in ${locations.length} files:`);
    locations.forEach(loc => {
      const relPath = path.relative(rootDir, loc.file);
      console.log(`   - ${relPath}:${loc.line}`);
    });
    console.log();
    crossFileDuplicates++;
  }
});

if (crossFileDuplicates === 0) {
  console.log('✅ No slides are reused across multiple session files');
} else {
  console.log(`ℹ️  ${crossFileDuplicates} slide(s) are used in multiple session files`);
}
