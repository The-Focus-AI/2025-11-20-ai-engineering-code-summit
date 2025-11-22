---
description: Load day theme file, extract key points, and generate 1-2 page executive summary
---

You are creating a concise executive summary from a detailed conference theme analysis.

## Overview
This command takes a comprehensive daily theme analysis (YYYY-MM-DD-themes.md) and distills it into a true executive summary using pyramid structure: start at the top with the single most important insight, then layer in supporting points. The goal is 1/4 the reading time of the full themes document while preserving the key insights.

**Pyramid Principle:**
- Top: The ONE thing executives must know
- Second layer: 3-5 critical insights that support the main point
- Third layer: Selective evidence and examples (only the most compelling)
- Bottom: Actionable takeaways

The summary is NOT a condensed version of each theme. It's a synthesis that answers: "If I only have 5 minutes, what must I know?"

## Process

### Step 1: Load the theme file and idea log
Ask the user: "Which day's themes would you like to summarize? Please provide the date (YYYY-MM-DD) or full file path."

Wait for user response.

Load the specified file (either YYYY-MM-DD-themes.md or the provided path).

Search for an idea log file using Glob (pattern: `**/idea-log.md` or `**/idea_log.md` or `**/*idea*log*.md`). The idea log contains personal notes and ideas inspired by the talks, revealing what the note-taker thought was most important. If found, load it.

Tell the user:
- "Loaded [filename] - found [N] major themes covering [brief description]."
- If idea log found: "Also loaded [idea-log-path] - [X] ideas/notes captured. This will help identify what resonated most."
- If no idea log: "No idea log found - proceeding with themes only."

### Step 2: Extract pyramid structure
Analyze the theme file (and idea log if available) to build a pyramid:

1. **Identify the apex** - What's the single most important meta-insight that ties everything together? This should be one sentence that captures the essence of the entire day. If the idea log exists, look for recurring patterns in what excited or concerned the note-taker.

2. **Identify 3-5 supporting pillars** - What are the critical insights that support this main point? These shouldn't be theme summaries—they should be the key discoveries. Use the idea log to validate which insights truly resonated.

3. **Select killer evidence** - For each pillar, what's the ONE most compelling data point or example? Be ruthless—only include what's truly memorable. The idea log may highlight which examples stuck with the note-taker.

4. **Extract actionable implications** - What should organizations DO based on this? If the idea log contains action items or "to explore" notes, incorporate those insights.

Present to the user:

"I've analyzed the themes. Here's the pyramid structure:

**APEX (The one thing):**
[Single sentence capturing the essence]

**Supporting Pillars (3-5 critical insights):**
1. [Insight with one killer stat/example]
2. [Insight with one killer stat/example]
3. [Insight with one killer stat/example]
4. [If needed]
5. [If needed]

**What to DO:**
- [Actionable takeaway #1]
- [Actionable takeaway #2]
- [Actionable takeaway #3]

Does this capture the essence? Any adjustments to the apex or pillars?"

Wait for user feedback.

### Step 3: Write the summary
After user approves the pyramid structure, write the summary.

Tell the user: "Writing executive summary..."

Create a file named: `YYYY-MM-DD-summary.md`

**Required Structure:**

```
# [Conference Day] - Executive Summary

**[APEX as bold headline - one sentence]**

[2-3 sentences explaining why this matters]

**The Evidence**

[3-5 short, punchy paragraphs - one per pillar]
[Each: state insight → provide killer evidence → done]
[Total for this section: 300-400 words]

**What To Do**

- [Action 1]
- [Action 2]
- [Action 3]
- [Action 4 if needed]
- [Action 5 if needed]
```

**Critical constraints:**
- Total length: **500-700 words maximum** (NOT 1000-2400!)
- Reading time: **3 minutes**
- Be ruthless: If it's not in the top 20% most important, cut it
- No theme-by-theme walkthrough
- No need to mention all themes
- Focus on synthesis, not summary

### Step 4: Create presentation (10-15 slides)
After summary is written, ask the user:

"Summary complete. Should I create the presentation deck now? It will be 10-15 slides focused on key takeaways."

Wait for approval.

If approved, create `YYYY-MM-DD-presentation.md` with:
- Slide 1: Title + apex
- Slides 2-6: One slide per pillar (insight + evidence)
- Slides 7-11: Selected deep dives (only the most compelling details)
- Slide 12: What to do
- Slide 13: Questions

**Presentation principles:**
- 10-15 slides MAXIMUM
- Each slide: one key point
- Visually scannable
- No walls of text
- Use slides to tell a story, not dump information

### Step 5: Create one-pager
After presentation, ask the user:

"Presentation complete. Should I create the one-pager now? It will be even more compressed than the summary."

Wait for approval.

If approved, create `YYYY-MM-DD-one-pager.md` with:
- Apex (bold)
- 3-5 bullet points (one per pillar, with killer stat)
- What to do (3-5 bullets)
- Total: 400-500 words

### Step 6: Update README
After all three files are created, update the README.md to add the new files to the appropriate section.

### Step 7: Present final deliverables
Show the user:

"Complete! Created three deliverables:

**[YYYY-MM-DD-summary.md](YYYY-MM-DD-summary.md)** - [X] words, ~3 min read
- Apex: [state it]
- Pillars: [count]

**[YYYY-MM-DD-presentation.md](YYYY-MM-DD-presentation.md)** - [X] slides
- Story arc from apex → evidence → action

**[YYYY-MM-DD-one-pager.md](YYYY-MM-DD-one-pager.md)** - [X] words, ~2 min read
- Ultra-compressed for quick sharing

README updated.

Any refinements needed?"

## Important Guidelines

**Distillation principles:**
- Every sentence must earn its place
- Data points over general statements
- Patterns over individual sessions
- Implications over descriptions
- Clarity over completeness

**What to emphasize:**
- Surprising insights or convergence
- Concrete metrics (percentages, dollar amounts, timelines)
- Real organizational examples
- Practical applications
- Tensions or debates

**What to de-emphasize:**
- Obvious or common knowledge
- Vendor pitches without validation
- Technical minutiae
- Session-by-session recaps
- Background context (assume familiarity with AI/tech)

**Structural tips:**
- Use descriptive headings that convey insight ("Trust Through Infrastructure" not "Theme 1")
- Put punch lines first, then evidence
- Use bullets for lists, paragraphs for narrative
- Bold key terms or data points for scanning
- Break up text with strategic whitespace

**Tone:**
- Authoritative but accessible
- Data-driven but narrative
- Balanced (acknowledge nuance)
- Forward-looking (what it means, not just what was said)

## Output
1. `YYYY-MM-DD-summary.md` - 1-2 page executive summary
2. Interactive refinement based on user feedback
3. Optional: Ultra-compressed version or presentation bullets if requested

## Example Key Points Structure

Good:
- "Support teams at Zapier are moving into engineering roles after achieving 70% accuracy with AI coding tools - a role transformation that would have been impossible 6 months ago"
- "Capital One's principle: 'What's good for humans is good for AI' - the same infrastructure investments (better tooling, clearer docs, robust testing) that make developers productive are exactly what agents need"

Bad:
- "There was a session about trust and AI"
- "Multiple speakers discussed the importance of good documentation"

## Tips
- Think "executive briefing" not "detailed notes"
- Aim for quotable insights
- Make it shareable (people should want to forward it)
- Test: Could someone make a decision based on this summary?
