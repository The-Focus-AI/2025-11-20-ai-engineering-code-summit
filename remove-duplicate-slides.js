#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const directories = ['2025-11-20', '2025-11-21'];
const rootDir = __dirname;

function removeDuplicateSlidesInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  const newLines = [];
  const seenSlides = new Set();
  let removedCount = 0;

  lines.forEach((line, index) => {
    // Check if this line contains a slide reference
    const slideMatch = line.match(/^!\[.*?\]\(((?:\.\.\/)?slides\/[^)]+)\)$/);

    if (slideMatch) {
      const slidePath = slideMatch[1];

      // If we've already seen this slide, skip it
      if (seenSlides.has(slidePath)) {
        console.log(`   Removing duplicate at line ${index + 1}: ${slidePath}`);
        removedCount++;
        return; // Skip this line
      }

      seenSlides.add(slidePath);
    }

    newLines.push(line);
  });

  if (removedCount > 0) {
    fs.writeFileSync(filePath, newLines.join('\n'));
    return removedCount;
  }

  return 0;
}

console.log('🧹 Removing duplicate slides from session files...\n');

let totalRemoved = 0;
let filesModified = 0;

// Process each directory
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
      console.log(`Processing ${dir}/${file}...`);

      const removed = removeDuplicateSlidesInFile(filePath);

      if (removed > 0) {
        console.log(`✅ Removed ${removed} duplicate(s) from ${file}\n`);
        totalRemoved += removed;
        filesModified++;
      } else {
        console.log(`   No duplicates found\n`);
      }
    }
  });
});

// Summary
console.log('='.repeat(60));
console.log(`✅ Done! Removed ${totalRemoved} duplicate slide(s) from ${filesModified} file(s)`);
