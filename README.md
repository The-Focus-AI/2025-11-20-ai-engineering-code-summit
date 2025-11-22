# AI Engineering Code Summit 2025 - Conference Notes

This repository contains raw notes, analysis, and synthesis from the AI Engineering Code Summit held November 20-21, 2025.

## Overview

- **Day 1 (Nov 20)**: [Theme Overview](2025-11-20-conference-themes-overview.md) - 4 major themes
- **Day 2 (Nov 21)**: [Theme Overview](2025-11-21-conference-themes-overview.md) - 5 major themes
- **Executive Synthesis**: [Cross-conference insights](2025-11-20-executive-synthesis.md) (run `/executive-synthesis` to generate)

## Workflow: From Raw Notes to Executive Summary

### 1. Pre-Conference Setup

**Prepare speaker schedule:**
- Copy the conference schedule into a markdown file (e.g., `2025-11-20.md`)
- Split into sections by session
- Include time frames for each session (format: `HH:MM am/pm`)
  ```markdown
  ## 9:00am - 9:20am | Speaker Name, Company
  - Topic: Session title
  ```

**Setup photo capture:**
- Have your phone/camera ready for slides
- Create a `photos/` directory to store raw photos

### 2. During the Conference

**Take notes with timestamps:**
- Write notes in real-time under each session header
- Don't worry about perfect formatting - just capture the key points
- Include timestamps when ideas/quotes happen (optional but helpful)
- Note any particularly important slides

**Capture slides:**
- Take photos of important slides throughout each session
- Don't worry about organizing - just capture everything
- Photos should include timestamps (most phones do this automatically)

### 3. Post-Conference Processing

**Extract slides from photos:**

Use [nano-banana-cli](https://github.com/The-Focus-AI/nano-banana-cli) to process photos:

```bash
# Process all photos and extract slides with timestamps
nano-banana extract-slides photos/ -o slides/
```

This will:
- Extract slide content from photos
- Apply Gemini enhancement for clarity
- Add timestamps to filenames (format: `YYYY-MM-DD-HH-MM-gemini-edited.jpg`)
- Save to `slides/` directory

**Run conference analysis:**

```bash
# For each day, run the conference analysis command
/conference-analysis
```

This automated workflow will:
1. Insert photo references into your notes based on timestamps
2. Split notes into individual session files (one per speaker)
3. Identify major themes across all sessions
4. Perform deep exploration to find additional patterns
5. Collaborate with you to refine theme structure
6. Launch parallel agents to write detailed analysis for each theme
7. Generate a comprehensive conference overview document

The command will ask for:
- Path to your conference notes file
- Initial theme ideas (or let it find them automatically)
- Feedback on theme refinement (merge/split/adjust lead voices)

**Output files:**
- `MM-DD-HH-MM-speaker-name-company.md` - Individual session files with notes and slides
- `MM-DD-day-overview.md` - High-level themes from that day
- `YYYY-MM-DD-conference-themes-overview.md` - Detailed analysis (~6,000-7,000 words)

### 4. Generate Executive Synthesis

After processing all conference days, create a cross-conference synthesis:

```bash
/executive-synthesis
```

This will:
- Analyze all theme overview documents
- Identify meta-patterns across the entire conference
- Generate executive summary with strategic insights
- Create synthesis document: `YYYY-MM-DD-executive-synthesis.md`

## Repository Structure

```
.
├── README.md                                    # This file
├── 2025-11-20.md                               # Day 1 raw notes
├── 2025-11-21.md                               # Day 2 raw notes
├── 2025-11-20-conference-themes-overview.md    # Day 1 analysis
├── 2025-11-21-conference-themes-overview.md    # Day 2 analysis
├── 2025-11-20-executive-synthesis.md           # Cross-conference synthesis
├── 11-20-day-overview.md                       # Day 1 theme summary
├── 11-21-day-overview.md                       # Day 2 theme summary
├── 11-20-HH-MM-speaker-name-company.md         # Individual sessions (Day 1)
├── 11-21-HH-MM-speaker-name-company.md         # Individual sessions (Day 2)
├── photos/                                      # Raw photos from conference
├── slides/                                      # Extracted slides with timestamps
│   └── YYYY-MM-DD-HH-MM-gemini-edited.jpg
└── .claude/
    └── commands/
        ├── conference-analysis.md               # Main analysis workflow
        └── executive-synthesis.md               # Cross-conference synthesis
```

## Key Files

### Analysis Documents

- **[2025-11-20-conference-themes-overview.md](2025-11-20-conference-themes-overview.md)** - Day 1 deep dive (4 themes)
- **[2025-11-21-conference-themes-overview.md](2025-11-21-conference-themes-overview.md)** - Day 2 deep dive (5 themes)
- **[2025-11-20-executive-synthesis.md](2025-11-20-executive-synthesis.md)** - Executive summary across both days

### Session Files

Individual session notes are named: `MM-DD-HH-MM-speaker-name-company.md`

Example: `11-21-09-11-barry-zhang-mahesh-murag-anthropic.md`

Each file contains:
- Session time and speaker info
- Raw notes from the talk
- Embedded slide references
- Key quotes and insights

## Commands Reference

### `/conference-analysis`
Multi-step workflow to analyze a conference day:
- Inserts slide references based on timestamps
- Splits notes into individual session files
- Identifies and refines themes collaboratively
- Generates comprehensive theme analysis

### `/executive-synthesis`
Creates strategic synthesis across multiple conference days:
- Analyzes all theme overview documents
- Identifies meta-patterns and convergence
- Generates executive-level insights

## Tips for Best Results

**Note-taking:**
- Include session headers with exact times
- Capture direct quotes (mark with `"..."`)
- Note speaker reactions and audience moments
- Mark particularly important points with `*` or `**`

**Photo capture:**
- Take photos of all key slides
- Get clear shots (lighting matters!)
- Don't worry about duplicates - nano-banana will handle it
- Capture diagrams, code examples, and data visualizations

**Theme refinement:**
- The `/conference-analysis` command is collaborative - engage with it
- Suggest mergers when themes overlap
- Identify strong "lead voices" for each theme
- Push for first-class treatment of important patterns

**Quality output:**
- The "think hard" instruction in analysis agents matters
- Request concrete examples and quotes
- Ask for subsections in complex themes
- Ensure themes interconnect in the final document

## Tools Used

- **[nano-banana-cli](https://github.com/The-Focus-AI/nano-banana-cli)** - Extract and enhance slides from photos using Gemini
- **Claude Code** - Multi-agent analysis and synthesis via custom slash commands
- **Task agents** - Parallel processing for theme analysis

## License

Conference notes and analysis are for internal use and learning.
