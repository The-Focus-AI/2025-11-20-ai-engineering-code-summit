---
description: Generate information architecture and navigation frontmatter for conference content
---

You are an expert information architect for the "AI Engineering Code Summit 2025". Your task is to analyze the pyramid of conference content and generate proper YAML frontmatter for navigation and discovery.

## Content Pyramid Structure

The conference content is organized in a pyramid from most compressed to most detailed:

**Level 1: Executive (Top of Pyramid)**
- `executive-summary.md` - 2-page distillation for leadership
- `executive-synthesis.md` - 6,500-word comprehensive analysis

**Level 2: Daily Summaries**
- `YYYY-MM-DD-summary.md` - Pyramid-structured daily summaries (~500-700 words)
- `YYYY-MM-DD-one-pager.md` - Ultra-compressed daily summaries (~400-500 words)
- `YYYY-MM-DD-presentation.md` - Slide decks (10-15 slides)

**Level 3: Daily Themes**
- `YYYY-MM-DD-themes.md` - Comprehensive theme analyses (6,000-7,000 words) with quotes and slides

**Level 4: Individual Sessions**
- `YYYY-MM-DD/MM-DD-HH-MM-speaker-name-company.md` - Individual session notes
- `YYYY-MM-DD/MM-DD-day-overview.md` - Daily overview files

**Level 5: Reference Materials**
- `speakers/[speaker-slug].md` - Individual speaker profiles
- `speakers/README.md` - Speaker directory
- `idea-log.md` - Personal notes and ideas

## Taxonomy Rules

### Document Type
Choose the most specific type:
- `executive-summary` - Top-level synthesis for leadership
- `daily-summary` - Daily pyramid summary
- `daily-themes` - Daily thematic analysis
- `session-notes` - Individual session/talk notes
- `speaker-profile` - Speaker background and research
- `reference` - Supporting materials, directories, logs

### Track (for session-notes and daily-themes only)
- `Leadership` - Organizational strategy, ROI, culture, management, trust, high-level trends (typically Day 1)
- `Engineering` - Technical implementation, code, architecture, tools, testing, technologies (typically Day 2)
- `Hybrid` - Sessions covering both leadership and engineering perspectives

### Topics
Choose 1-4 most relevant tags from this controlled list:

**Organizational & Strategic:**
- `Trust & Predictability` - Trust building, psychological safety, predictability through verification
- `ROI & Economics` - Cost structures, productivity gains, business value, pricing models
- `Change Management` - Organizational transformation, resistance patterns, adoption strategies
- `Role Transformation` - How engineering roles are changing, new specialist roles emerging

**Technical & Architectural:**
- `Context Engineering` - Context management, environments, specs, documentation
- `Verification & Testing` - Outcome-driven verification, autonomous testing, quality gates
- `Agents & Autonomy` - Agentic workflows, autonomous coding, proactive agents
- `The Harness` - Abstraction layers, tool orchestration, context management infrastructure

**Development & Process:**
- `SDLC Evolution` - Software development lifecycle changes, code review, bottleneck migration
- `Data & Training` - Training data quality, RL, fine-tuning, benchmarks, open data
- `Specialization` - Custom models, ARFT, prompt tuning, domain-specific agents
- `UX & Cognitive Load` - Developer experience, proactive vs reactive, speed vs intelligence

**Foundational:**
- `Infrastructure` - Environments, MCP, deployment, compute
- `Measurement` - Observability, metrics, environment cleanliness index
- `Failure Modes` - Slop taxonomy, when the Trust Stack breaks

### Key Concepts
Extract 3-5 key concepts/phrases that appear in the content (for search and discovery):
- Use actual phrases from the conference (e.g., "Trust Stack", "40% dumb zone", "vibe coding")
- Include data points if significant (e.g., "35-40% productivity gains", "93% pilot purgatory")
- Include speaker attributions for memorable quotes (e.g., "What's good for humans is good for AI")

### Navigation Hints
Specify relationships to other content:
- `summary_of` - Points to more detailed content (e.g., summary points to themes)
- `detailed_in` - Points to compression of this content (e.g., themes point to summary)
- `sessions_included` - Lists session files covered in a theme
- `part_of_day` - Links session to its day directory
- `speaker_profile` - Links to speaker's profile file
- `related_topics` - Links to other files covering similar topics

## Your Task

1. **Scan the content pyramid** starting from Level 1 (executive) down to Level 5 (reference)
2. **For each file**, analyze its content and generate appropriate YAML frontmatter
3. **Build navigation relationships** between files (summary → themes → sessions → speakers)
4. **Create a sitemap visualization** showing the complete information architecture

## Output Format

For each file, return ONLY the YAML frontmatter block:

```yaml
---
title: "Extracted Title"
document_type: "executive-summary" | "daily-summary" | "daily-themes" | "session-notes" | "speaker-profile" | "reference"
date: "YYYY-MM-DD" (if applicable)
day: 1 | 2 (if applicable)
speaker: "Speaker Name" (if applicable)
company: "Company Name" (if applicable)
track: "Leadership" | "Engineering" | "Hybrid" (for sessions and themes only)
topics:
  - "Topic 1"
  - "Topic 2"
  - "Topic 3"
key_concepts:
  - "Concept or quote 1"
  - "Concept or quote 2"
  - "Data point or framework"
navigation:
  summary_of: ["file1.md", "file2.md"] (if this summarizes other content)
  detailed_in: ["summary.md"] (if there's a compressed version)
  sessions_included: ["session1.md", "session2.md"] (for theme files)
  part_of_day: "YYYY-MM-DD" (for session files)
  speaker_profile: "speakers/speaker-slug.md" (for sessions)
  related_topics: ["other-file.md"] (files covering similar topics)
word_count: approximate word count
reading_time: "X minutes"
---
```

## Sitemap Visualization

After generating frontmatter for all files, create a sitemap showing:

**Level 1: Executive**
- executive-summary.md (2 min read) → Links to all daily summaries
- executive-synthesis.md (20 min read) → Links to all themes

**Level 2: Daily (Nov 20)**
- 2025-11-20-summary.md (3 min) → Links to themes
- 2025-11-20-one-pager.md (2 min) → Links to themes
- 2025-11-20-presentation.md (slides) → Links to themes

**Level 2: Daily (Nov 21)**
- 2025-11-21-summary.md (3 min) → Links to themes
- 2025-11-21-one-pager.md (2 min) → Links to themes
- 2025-11-21-presentation.md (slides) → Links to themes

**Level 3: Themes (Nov 20)** - extracted from 2025-11-20-themes.md
- Theme 1: [Title] (Leadership) → Links to relevant sessions
- Theme 2: [Title] (Leadership) → Links to relevant sessions
- Theme 3: [Title] (Engineering) → Links to relevant sessions
- Theme 4: [Title] (Hybrid) → Links to relevant sessions
- Theme 5: [Title] (Engineering) → Links to relevant sessions
- Theme 6: [Title] (Economics) → Links to relevant sessions

**Level 3: Themes (Nov 21)** - extracted from 2025-11-21-themes.md
- Theme 1: [Title] (Engineering) → Links to relevant sessions
- Theme 2: [Title] (Engineering) → Links to relevant sessions
- Theme 3: [Title] (Engineering) → Links to relevant sessions
- Theme 4: [Title] (Engineering) → Links to relevant sessions
- Theme 5: [Title] (Engineering) → Links to relevant sessions

**Level 4: Sessions by Day**
- 2025-11-20/ directory (XX sessions)
- 2025-11-21/ directory (XX sessions)

**Level 5: Reference**
- speakers/README.md (48 speakers)
- speakers/*.md (individual profiles)
- idea-log.md (personal notes)

## Process

### Step 1: Analyze Executive Level
Read `executive-summary.md` and `executive-synthesis.md`. Generate frontmatter for each.

### Step 2: Analyze Daily Summaries
For each date (2025-11-20, 2025-11-21):
- Read summary, one-pager, presentation files
- Generate frontmatter with navigation to themes
- Extract key topics and concepts

### Step 3: Analyze Daily Themes
For each theme file (2025-11-20-themes.md, 2025-11-21-themes.md):
- Identify individual themes within the file
- Generate frontmatter for the file as a whole
- Extract which sessions each theme references
- Build navigation to session files

### Step 4: Scan Session Directories
For each session file in 2025-11-20/ and 2025-11-21/:
- Extract speaker, company, time
- Determine track (Leadership vs Engineering based on topic)
- Identify topics covered
- Link to speaker profile
- Link to theme files that reference this session

### Step 5: Reference Materials
For speaker profiles and other reference materials:
- Generate appropriate frontmatter
- Link to sessions where they spoke

### Step 6: Generate Sitemap
Create visual representation of the complete information architecture with:
- File paths
- Reading times
- Navigation links
- Topic clusters

## Important Guidelines

**For Track Assignment:**
- Day 1 sessions are typically Leadership (trust, ROI, organizational)
- Day 2 sessions are typically Engineering (technical, implementation)
- Some sessions span both (mark as Hybrid)
- Executive content doesn't have a track (it synthesizes both)

**For Topics:**
- Choose topics that actually appear in the content
- Don't force all topics—use 1-4 most relevant
- Trust & Predictability + Context Engineering are foundational to Day 1
- Data & Training + Specialization are key to Day 2

**For Key Concepts:**
- Use actual conference terminology
- Include memorable quotes with attribution
- Include significant data points (percentages, numbers)
- These help with search and discovery

**For Navigation:**
- Build bidirectional links (summary ↔ themes ↔ sessions)
- Link sessions to speaker profiles
- Group by topic for discovery

## Example Outputs

### Executive Summary Example:
```yaml
---
title: "AI Engineering Code Summit 2025: Executive Summary"
document_type: "executive-summary"
topics:
  - "Trust & Predictability"
  - "ROI & Economics"
  - "Change Management"
  - "Context Engineering"
key_concepts:
  - "Trust Stack (Context → Verification → Predictability → Trust → Familiarity)"
  - "35-40% productivity gains vs 0-10% (environment cleanliness)"
  - "93% in pilot purgatory"
  - "What's good for humans is good for AI (Max Kanat-Alexander)"
  - "Bottleneck migration: Typing → Thinking → Review → Data"
navigation:
  summary_of:
    - "2025-11-20-summary.md"
    - "2025-11-21-summary.md"
    - "executive-synthesis.md"
  related_topics:
    - "2025-11-20-themes.md"
    - "2025-11-21-themes.md"
word_count: 2000
reading_time: "8 minutes"
---
```

### Daily Themes Example:
```yaml
---
title: "AI Engineering Code Summit Day 1: Major Themes & Insights"
document_type: "daily-themes"
date: "2025-11-20"
day: 1
track: "Leadership"
topics:
  - "Trust & Predictability"
  - "Context Engineering"
  - "The Harness"
  - "ROI & Economics"
key_concepts:
  - "Trust Stack architecture"
  - "What's good for humans is good for AI"
  - "35-40% gains with clean code vs 0-10% with messy"
  - "The harness as differentiation"
  - "Support teams shipping code (Zapier)"
navigation:
  detailed_in: ["2025-11-20-summary.md", "2025-11-20-one-pager.md"]
  sessions_included:
    - "2025-11-20/11-20-08-45-katelyn-lesse-anthropic.md"
    - "2025-11-20/11-20-09-25-michele-catasta-replit.md"
    - "2025-11-20/11-20-10-20-bill-chen-brian-fioca-openai.md"
    - "2025-11-20/11-20-15-15-max-kanat-alexander-capital-one.md"
  part_of_conference: "AI Engineering Code Summit 2025"
word_count: 6500
reading_time: "25 minutes"
---
```

### Session Notes Example:
```yaml
---
title: "Evolving Claude APIs for Agents"
document_type: "session-notes"
date: "2025-11-20"
day: 1
time: "08:45"
speaker: "Katelyn Lesse"
company: "Anthropic"
track: "Engineering"
topics:
  - "Agents & Autonomy"
  - "Context Engineering"
  - "The Harness"
key_concepts:
  - "Memory + Context Editing is the way to go"
  - "MCP (Model Context Protocol)"
  - "Effective agentic systems require expanding capabilities AND managing constraints"
navigation:
  part_of_day: "2025-11-20"
  speaker_profile: "speakers/katelyn-lesse.md"
  referenced_in_themes: ["2025-11-20-themes.md"]
  related_topics:
    - "2025-11-20/11-20-09-25-michele-catasta-replit.md"
    - "2025-11-20/11-20-10-20-bill-chen-brian-fioca-openai.md"
word_count: 800
reading_time: "3 minutes"
---
```

### Speaker Profile Example:
```yaml
---
title: "Katelyn Lesse - Anthropic"
document_type: "speaker-profile"
speaker: "Katelyn Lesse"
company: "Anthropic"
role: "Head of API Engineering"
topics:
  - "Agents & Autonomy"
  - "Context Engineering"
key_concepts:
  - "Memory + Context Editing"
  - "MCP (Model Context Protocol)"
  - "Expanding capabilities AND managing constraints"
navigation:
  sessions:
    - "2025-11-20/11-20-08-45-katelyn-lesse-anthropic.md"
  social:
    twitter: "@katelyn_lesse"
    github: "@klesse413"
    linkedin: "katelyn-lesse"
---
```

## Deliverable

Generate:
1. **Frontmatter YAML** for every file in the content pyramid
2. **Complete sitemap** showing the information architecture
3. **Topic clusters** (which files cover which topics)
4. **Navigation recommendations** for a website/documentation system

Present the sitemap first, then offer to generate frontmatter for specific files or batches.
