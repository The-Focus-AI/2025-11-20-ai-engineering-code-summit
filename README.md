# The Architecture of Kino: AI Engineering Code Summit 2025

**From "slop" to quality: How 25 sessions revealed the path to thoughtful AI systems**

This repository contains comprehensive notes, analysis, and synthesis from the AI Engineering Code Summit held November 20-21, 2025. Across two days and dozens of sessions from leaders at Anthropic, OpenAI, Google DeepMind, Meta, Netflix, and more, a clear architecture emerged: quality AI engineering requires human thinking at the center, environments as universal abstraction, specialized models through RL, capability over scaffolding, and open data as infrastructure.

**About:** [about.md](about.md) - Conference details, author bio, and repository overview

## Overview

- **Day 1 (Nov 20)**: [Theme Overview](2025-11-20-themes.md) - 6 major themes
- **Day 2 (Nov 21)**: [Theme Overview](2025-11-21-themes.md) - 5 major themes
- **Executive Synthesis**: [Cross-conference insights](executive-synthesis.md) (run `/executive-synthesis` to generate)

## Executive Summaries

Use `/theme-summary` to generate concise executive summaries from detailed theme analyses:

### Day 1 (November 20)

- **[2025-11-20-summary.md](2025-11-20-summary.md)** - Executive summary (~670 words, ~3 min read)
- **[2025-11-20-presentation.md](2025-11-20-presentation.md)** - Slide deck (15 slides, ready for styling with Marp/reveal.js)
- **[2025-11-20-one-pager.md](2025-11-20-one-pager.md)** - One-pager (~450 words, ~2 min read)

**Individual Theme Files:**
- [Trust, Role Changes, and Infrastructure](2025-11-20/themes/trust-role-changes-infrastructure.md)
- [Context, Memory, and The Harness](2025-11-20/themes/context-memory-harness.md)
- [SDLC Evolution: Amplified Practices](2025-11-20/themes/sdlc-evolution-amplified-practices.md)
- [ROI Reality Check](2025-11-20/themes/roi-reality-check.md)
- [Proactive vs Reactive UX](2025-11-20/themes/proactive-vs-reactive-ux.md)
- [Economics of AI Engineering](2025-11-20/themes/economics-ai-engineering.md)

### Day 2 (November 21)

- **[2025-11-21-summary.md](2025-11-21-summary.md)** - Executive summary (~1,074 words, ~5 min read)
- **[2025-11-21-presentation.md](2025-11-21-presentation.md)** - Slide deck (20 slides, ready for styling with Marp/reveal.js)
- **[2025-11-21-one-pager.md](2025-11-21-one-pager.md)** - One-pager (~528 words, ~2 min read)

**Individual Theme Files:**
- [Context Engineering & Human-AI Collaboration](2025-11-21/themes/context-engineering-human-ai-collaboration.md)
- [Environments as Universal Abstraction](2025-11-21/themes/environments-universal-abstraction.md)
- [Reinforcement Learning for Specialized Models](2025-11-21/themes/reinforcement-learning-specialized-models.md)
- [Model Quality Over Scaffolding](2025-11-21/themes/model-quality-over-scaffolding.md)
- [Data Collection & Quality as Bottleneck](2025-11-21/themes/data-collection-quality-bottleneck.md)

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
- `YYYY-MM-DD/MM-DD-HH-MM-speaker-name-company.md` - Individual session files with notes and slides
- `YYYY-MM-DD/MM-DD-day-overview.md` - High-level themes from that day
- `YYYY-MM-DD-themes.md` - Detailed analysis at top level (~6,000-7,000 words)

### 4. Generate Executive Synthesis

After processing all conference days, create a cross-conference synthesis:

```bash
/executive-synthesis
```

This will:
- Analyze all theme overview documents (YYYY-MM-DD-themes.md files)
- Identify meta-patterns across the entire conference
- Generate executive summary with strategic insights
- Create synthesis document: `executive-synthesis.md`

## Repository Structure

```
.
├── README.md                                    # This file
├── 2025-11-20.md                               # Day 1 raw notes (top level)
├── 2025-11-21.md                               # Day 2 raw notes (top level)
├── 2025-11-20-themes.md                        # Day 1 analysis (top level)
├── 2025-11-21-themes.md                        # Day 2 analysis (top level)
├── executive-synthesis.md                       # Cross-conference synthesis (top level)
├── 2025-11-20/                                 # Day 1 directory
│   ├── 11-20-day-overview.md                   # Day 1 theme summary
│   ├── 11-20-HH-MM-speaker-name-company.md    # Individual sessions
│   └── themes/                                 # Individual theme files
│       └── theme-slug.md                       # Theme with frontmatter
├── 2025-11-21/                                 # Day 2 directory
│   ├── 11-21-day-overview.md                   # Day 2 theme summary
│   ├── 11-21-HH-MM-speaker-name-company.md    # Individual sessions
│   └── themes/                                 # Individual theme files
│       └── theme-slug.md                       # Theme with frontmatter
├── photos/                                      # Raw photos from conference
├── slides/                                      # Extracted slides with timestamps
│   └── YYYY-MM-DD-HH-MM-gemini-edited.jpg
└── .claude/
    └── commands/
        ├── conference-analysis.md               # Main analysis workflow
        └── executive-synthesis.md               # Cross-conference synthesis
```

**Organization principle:**
- **Top level**: Source notes (YYYY-MM-DD.md), theme analyses (YYYY-MM-DD-themes.md), executive synthesis
- **Day directories** (YYYY-MM-DD/): Individual session files and day overview
- **Supporting assets**: photos/ and slides/ directories

## Key Files

### Analysis Documents (Top Level)

- **[2025-11-20-themes.md](2025-11-20-themes.md)** - Day 1 deep dive (6 themes, ~6,500 words)
- **[2025-11-21-themes.md](2025-11-21-themes.md)** - Day 2 deep dive (5 themes, ~6,500 words)
- **[executive-synthesis.md](executive-synthesis.md)** - Executive summary across both days (run `/executive-synthesis`)

### Executive Summaries

**Day 1:**
- **[2025-11-20-summary.md](2025-11-20-summary.md)** - Executive summary (~1,150 words, ~3 min read)
- **[2025-11-20-presentation.md](2025-11-20-presentation.md)** - Slide deck (15 slides)
- **[2025-11-20-one-pager.md](2025-11-20-one-pager.md)** - One-pager (~540 words, ~2 min read)

**Day 2:**
- **[2025-11-21-summary.md](2025-11-21-summary.md)** - Executive summary (~1,074 words, ~5 min read)
- **[2025-11-21-presentation.md](2025-11-21-presentation.md)** - Slide deck (20 slides)
- **[2025-11-21-one-pager.md](2025-11-21-one-pager.md)** - One-pager (~528 words, ~2 min read)

### Raw Notes (Top Level)

- **[2025-11-20.md](2025-11-20.md)** - Day 1 raw conference notes with timestamps
- **[2025-11-21.md](2025-11-21.md)** - Day 2 raw conference notes with timestamps

### Session Files (Day Directories)

Individual session notes are in day directories: `YYYY-MM-DD/MM-DD-HH-MM-speaker-name-company.md`

Example: [2025-11-21/11-21-09-11-barry-zhang-mahesh-murag-anthropic.md](2025-11-21/11-21-09-11-barry-zhang-mahesh-murag-anthropic.md)

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

### `/theme-summary`
Generates concise executive summaries from detailed theme analyses:
- Creates executive summary (~1,150 words, ~3 min read)
- Generates presentation slide deck (15 slides, markdown, ready for styling)
- Produces one-pager (~540 words, ~2 min read)
- Focuses on pyramid structure: apex insight → supporting pillars → actionable takeaways
- Optimized for stakeholder sharing and quick executive briefings

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
