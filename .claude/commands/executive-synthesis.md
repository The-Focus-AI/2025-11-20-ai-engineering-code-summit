---
description: Synthesize conference insights into executive report with technology themes, economic impacts, and state of understanding
---

You are creating an executive-level synthesis report from conference summaries.

## Overview
This process analyzes all daily conference summaries to produce a comprehensive report on:
- Major technology themes (e.g., intelligent automation, structured organizational change)
- Economic impacts (productivity gains, job role transformations)
- Industry state of understanding (where the field currently stands)
- Strategic implications for leadership

## Process

### Step 1: Discover and load all summaries
Look for all conference summary files:
- Daily notes at top level (YYYY-MM-DD.md)
- Theme overviews at top level (YYYY-MM-DD-themes.md)
- Day directories (YYYY-MM-DD/) containing individual session files and day overviews
- Any other relevant analysis files

Read ALL theme overview files (YYYY-MM-DD-themes.md) to build comprehensive understanding.

Tell the user: "Found and loaded [N] theme overview files covering [date range]."

### Step 2: Interactive theme exploration
Present an initial analysis to the user:

"Based on my review of the conference materials, I've identified several potential meta-themes:

**Technology & Architecture Themes:**
- [List 3-4 high-level technology patterns you observed]

**Organizational & Economic Themes:**
- [List 3-4 patterns around how work, roles, and economics are changing]

**Maturity & Understanding:**
- [List 2-3 insights about where the industry currently stands]

What resonates with you? Are there other themes you want me to explore? Any specific angles you want emphasized?"

Wait for user response and discussion.

### Step 3: Deep thematic analysis
Based on the user's feedback, conduct deeper analysis:

"I'm going to do a deep analysis across all conference content looking for:"
1. Cross-session patterns and convergence
2. Contradictions or tension points
3. Economic/productivity data and claims
4. Organizational transformation stories
5. Technical architecture patterns
6. Leading vs lagging indicators of change

Present findings as:
- **Technology Architecture Themes**: Scaffolding, context management, verification systems, etc.
- **Economic Impact Patterns**: Specific ROI data, productivity metrics, compensation models
- **Organizational Evolution**: Role changes, skill requirements, resistance patterns
- **Measurement & Maturity**: How success is being measured, where organizations are on adoption curve
- **Future Signals**: What's coming next based on current trajectories

Ask user: "Which themes should be primary in the executive report? Any that should be merged or expanded?"

Wait for user guidance.

### Step 4: Draft executive report structure
Propose report structure:

"Here's the proposed executive report structure:

## Executive Summary (1 page)
- 3-5 key takeaways
- Critical decision points for leadership

## State of the Industry (2-3 pages)
- Where we are in AI-assisted development maturity
- What's working vs what's hype
- Key bifurcation points (winners vs laggers)

## Technology Themes (3-4 pages)
[List the 3-4 major technology themes]

## Economic & Organizational Impact (2-3 pages)
- Productivity data and ROI reality
- Changing cost structures
- Role evolution and compensation models
- Change management insights

## Strategic Implications (1-2 pages)
- What this means for different organizational types
- Investment priorities
- Risk factors

## Appendix
- Speaker/company index
- Data sources and studies cited
- Further reading

Does this structure work? Any sections to add/remove/reorder?"

Wait for user approval/modifications.

### Step 5: Generate executive report
Tell the user: "Writing comprehensive executive report..."

Create a file named: `YYYY-MM-DD-executive-synthesis.md`

The report should:
- Be written for executive/leadership audience (assume technical literacy but focus on strategic implications)
- Include specific data points, percentages, and company examples from the conference
- Reference speakers by name and company to add authority
- Use subheadings and formatting for easy scanning
- Include compelling quotes where they add impact
- Connect themes to show systemic patterns
- Be clear about what's proven vs what's emerging vs what's speculative
- Provide actionable insights, not just description

Length: 4,000-6,000 words depending on content depth.

### Step 6: Generate executive summary
Extract and refine the executive summary into a separate standalone document:
`YYYY-MM-DD-executive-summary.md`

This should be:
- 1-2 pages maximum
- Bullet-point friendly for presentation slides
- Focused on key takeaways and decision points
- Include 3-5 critical data points that tell the story
- Clear on recommended actions/considerations

### Step 7: Conversation and refinement
Present both documents to the user and ask:

"I've created two documents:
1. Full executive synthesis ([X] words)
2. Executive summary ([Y] words)

Key themes highlighted:
[List the major themes covered]

Would you like me to:
- Expand any particular section?
- Add more data/examples on specific topics?
- Adjust the tone or focus?
- Create additional deliverables (slide outline, briefing doc, etc.)?"

Continue conversation to refine based on user needs.

## Important Guidelines

**Analytical Approach:**
- Look for convergence: when multiple speakers independently arrive at same conclusions
- Identify tensions: where perspectives conflict or data seems contradictory
- Distinguish between vendor pitches and validated outcomes
- Connect micro examples to macro patterns
- Use the "three data points make a trend" rule

**Writing Style:**
- Direct, confident executive voice
- Data-driven but narrative-compelling
- Avoid jargon unless necessary, define when used
- Use concrete examples to illustrate abstract concepts
- Structure for scanning (execs often skim first)
- Include "so what?" for every major point

**Technology Themes to Watch For:**
- Context management and memory architectures
- Verification vs execution patterns
- Scaffolding vs model capability debates
- Specialized vs general-purpose model economics
- Human-in-loop vs autonomous patterns
- Infrastructure and environment abstractions

**Economic/Organizational Patterns to Watch For:**
- Specific productivity percentages and ROI data
- Cost structure changes (per-seat vs per-output vs per-token)
- Role evolution (support→engineering, managers→contributors)
- Compensation model experiments
- Adoption bottlenecks and success factors
- Leading vs lagging organization characteristics
- Change management and resistance patterns

**State of Industry Indicators:**
- % of orgs at scale vs pilot stage
- Greenfield vs brownfield performance gaps
- Trust and quality concerns
- Measurement frameworks being used
- Investment priorities and budgets

**Questions to Answer:**
- Where is real ROI being demonstrated vs where is it hype?
- What separates successful from unsuccessful AI adoption?
- How are economic fundamentals of software development changing?
- What organizational changes are required (not just optional)?
- What's the timeline for these changes?
- What are the leading indicators of transformation?
- What should leaders be doing now vs waiting to see?

## Deliverables
1. `YYYY-MM-DD-executive-synthesis.md` - Full analysis report
2. `YYYY-MM-DD-executive-summary.md` - Standalone executive summary
3. Interactive conversation to refine and explore themes
4. Optional: Additional formats based on user needs
