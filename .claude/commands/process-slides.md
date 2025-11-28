# Process Conference Slides

This command documents the workflow for processing conference slide images into structured documentation and linking them to session notes.

## Overview

This workflow processes slide images from a conference, creates individual markdown documentation for each slide, and integrates them into session notes based on timestamp matching.

## Expected Directory Structure

```
project-root/
├── slides/                    # Input: slide images with timestamps
│   ├── 2025-11-20-08-49-gemini-edited.jpg
│   ├── 2025-11-20-09-15-agents-keynote.jpg
│   └── ...
├── slides-docs/              # Output: generated markdown docs for each slide
│   ├── 2025-11-20-08-49-gemini-edited.md
│   ├── 2025-11-20-09-15-agents-keynote.md
│   └── ...
├── 2025-11-20/              # Session directories with detailed notes
│   ├── session-name.md
│   └── ...
├── 2025-11-21/
│   └── ...
└── 2025-11-20.md            # Schedule notes with speaker timestamps
```

## Workflow Steps

### Step 1: Process Slide Images (10 at a time using parallel subagents)

First, identify all slide images in the `slides/` directory and process them in batches of 10 using parallel subagents.

**Prompt to use:**

```
Process all slide images in the slides/ directory in batches of 10 using parallel subagents. For each slide image:

1. Analyze the image to determine:
   - What talk/session it's from (based on content and context)
   - The literal content shown on the slide (text, diagrams, code, etc.)
   - The key point or takeaway from this slide

2. Create a markdown file in slides-docs/ with the same base name as the image (e.g., slides/2025-11-20-08-49-gemini-edited.jpg becomes slides-docs/2025-11-20-08-49-gemini-edited.md)

3. Use this markdown template:

---
timestamp: YYYY-MM-DD-HH-MM
session: [Session/Talk Name]
---

# [Slide Title/Topic]

## Literal Content

[Document exactly what appears on the slide - all text, code snippets, diagrams described, etc.]

## Key Point

[The main takeaway or insight from this slide]

---

Process slides in batches of 10 at a time to optimize performance. Let me know when you've completed all slides.
```

### Step 2: Review Generated Slide Documentation

After processing, review a sample of the generated slide docs to ensure quality and consistency.

**Prompt to use:**

```
Show me a few examples of the generated slide documentation files from slides-docs/. I want to verify:
- The timestamp extraction is correct
- The session names are identified properly
- The literal content is comprehensive
- The key points are meaningful
```

### Step 3: Link Slides to Session Files

Use the timestamp information from slide filenames to match them with the appropriate session notes based on the schedule.

**Prompt to use:**

```
Now link the slide documentation to the appropriate session files:

1. Read the schedule files (e.g., 2025-11-20.md, 2025-11-21.md) to understand session timing
2. For each slide in slides-docs/, extract the timestamp from the filename
3. Match the timestamp to the corresponding session based on the schedule
4. Update the session notes file to include the slide with:
   - An embedded image of the slide
   - The key point
   - The literal content from the slide documentation

Use this format when adding slides to session notes:

### [Topic/Section Name]

![Slide description](../slides/2025-11-20-08-49-gemini-edited.jpg)

**Key Point:** [The key takeaway from the slide]

**Slide Content:**
[The literal content from the slide]

---

Process all slides and update the appropriate session files.
```

### Step 4: Verify Integration

Check that slides are properly integrated into session notes.

**Prompt to use:**

```
Verify the slide integration:
1. Show me examples of updated session files with embedded slides
2. Confirm all slides from slides-docs/ have been linked to session notes
3. Check for any slides that couldn't be matched to sessions
```

## Tips and Best Practices

### Batch Processing
- Process slides 10 at a time using parallel subagents for optimal performance
- This prevents overwhelming the system and allows for better error handling

### Timestamp Extraction
- Slide filenames should follow the pattern: `YYYY-MM-DD-HH-MM-description.jpg`
- The timestamp is used to match slides to sessions in the schedule
- Ensure slide filenames are properly formatted before processing

### Session Matching
- Cross-reference schedule files to determine which session was happening at each timestamp
- Handle edge cases like breaks between sessions or overlapping content
- If a slide can't be matched definitively, note it for manual review

### Content Documentation
- **Literal Content**: Document exactly what's on the slide (text, code, diagrams)
- **Key Point**: Distill the main message or takeaway
- Be comprehensive but concise

### Directory Organization
- Keep slide images in `slides/` (never delete originals)
- Generate slide docs in `slides-docs/` (one file per slide)
- Update session notes in session directories (e.g., `2025-11-20/`)
- Preserve existing session content when adding slides

## Common Issues and Solutions

### Issue: Too many slides to process at once
**Solution:** Explicitly batch into groups of 10 using parallel subagents

### Issue: Slide timestamp doesn't match any session
**Solution:** Check schedule files for breaks, or manually review the slide content to determine the correct session

### Issue: Duplicate slide documentation
**Solution:** Check slides-docs/ for existing files before regenerating

### Issue: Session file formatting breaks when adding slides
**Solution:** Ensure slides are added to appropriate sections with proper markdown formatting

## Example Complete Workflow

```
1. /process-slides
2. Follow Step 1 prompt to process all slides in batches
3. Follow Step 2 prompt to review generated docs
4. Follow Step 3 prompt to link slides to sessions
5. Follow Step 4 prompt to verify integration
```

## Output Expectations

After completing this workflow, you should have:

1. Individual markdown files for each slide in `slides-docs/`
2. Session notes enhanced with embedded slide images
3. Each slide showing both key points and literal content
4. Proper timestamp-based organization linking slides to sessions
5. Preserved original slide images in `slides/`

---

**Note:** This is a documentation workflow. The slash command provides guidance - you'll need to run each step's prompt to execute the actual processing.
