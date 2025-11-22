---
description: Research speakers in parallel and enhance conference notes with professional context, links, and background
---

You are enhancing conference session files with detailed speaker research.

## Overview
This skill takes conference session files and enriches them with comprehensive speaker information by launching parallel research agents. Each agent investigates a speaker's professional background, social presence, GitHub activity, company information, and any referenced projects or papers.

## Process

### Step 1: Discover session files
Ask the user: "Which conference day would you like to enhance with speaker research? Provide a date (YYYY-MM-DD) or 'all' for all days."

Wait for user response.

Based on the response, find all session files:
- If specific date: Look in `YYYY-MM-DD/` directory for files matching `*-HH-MM-*.md`
- If 'all': Search all date directories

Tell the user: "Found [N] session files to enhance with speaker research."

List the sessions found:
```
- [Session 1: Speaker Name, Company]
- [Session 2: Speaker Name, Company]
...
```

Ask: "Proceed with parallel speaker research for all sessions? (yes/no)"

Wait for confirmation.

### Step 2: Launch parallel research agents
Tell the user: "Launching [N] parallel research agents to investigate speakers..."

For EACH session file, launch a Task agent (general-purpose) with this prompt:

```
Research speaker information for: [Speaker Name] from [Company]

Session context: [Session title/topic from file]

Your task:
1. Search the web for [Speaker Name] + [Company] to find:
   - Official company bio/about page
   - LinkedIn profile
   - Twitter/X handle
   - GitHub profile
   - Personal website or blog
   - Recent talks or presentations
   - Publications or papers

2. Gather company information:
   - What does [Company] do?
   - Company website
   - Key products/services relevant to the talk
   - Recent news or funding

3. Find referenced materials:
   - If the talk mentions specific projects, tools, or papers, find links
   - Look for slide decks, blog posts, or videos from this speaker
   - Find related work or previous talks on similar topics

4. Return a structured markdown report with this EXACT format:

---
## Speaker: [Full Name]
**Company:** [Company Name] ([company website])
**Role:** [Their title/role if found]

**Social & Professional Links:**
- LinkedIn: [URL or "Not found"]
- Twitter/X: [URL/@handle or "Not found"]
- GitHub: [URL/@username or "Not found"]
- Personal site: [URL or "Not found"]
- Other: [Any other relevant links]

**About [Company Name]:**
[2-3 sentence description of what the company does, focusing on relevance to AI/tech]

**Speaker Background:**
[2-4 sentences about their expertise, notable work, or background relevant to this talk]

**Referenced Materials:**
[If the talk mentioned specific tools, papers, projects, or demos:]
- [Item name]: [URL and brief description]
- [Item name]: [URL and brief description]

**Related Content:**
[Links to other talks, blog posts, papers by this speaker on similar topics]
- [Title]: [URL]
- [Title]: [URL]

**Research Notes:**
[Any other interesting context, recent projects, or relevant information]
---

IMPORTANT: Return ONLY the markdown report above, with all URLs as actual links. If you cannot find something, explicitly note "Not found" rather than omitting it.
```

Launch ALL agents in PARALLEL (single message with multiple Task tool calls).

### Step 3: Collect and organize results
As agents complete, collect their reports.

Tell the user: "Research complete! Processing [N] speaker profiles..."

Create a master index file: `speaker-directory.md`

Structure:
```markdown
# Speaker Directory - AI Engineering Code Summit 2025

This directory contains research on all speakers from the conference, including professional backgrounds, social links, and referenced materials.

---

## Day 1 - November 20, 2025

### [Time] | Speaker Name, Company
**Session:** [Session title]
**File:** [link to session file]

[Paste the speaker research report here]

---

### [Time] | Speaker Name, Company
...

---

## Day 2 - November 21, 2025

### [Time] | Speaker Name, Company
...

---

## Quick Reference

### By Company
- **Anthropic:** [List speakers]
- **OpenAI:** [List speakers]
- **Google:** [List speakers]
...

### By Topic/Theme
- **Context & Memory:** [List relevant speakers]
- **Agents & Autonomy:** [List relevant speakers]
- **Enterprise Adoption:** [List relevant speakers]
...

### Social Directory
| Speaker | Twitter | GitHub | LinkedIn |
|---------|---------|--------|----------|
| [Name] | [@handle](url) | [@user](url) | [Link](url) |
...
```

### Step 4: Enhance session files
Ask the user: "Would you like me to add speaker profiles directly to each session file as well? (yes/no)"

If yes:
- For each session file, add a "## Speaker Profile" section at the top (after the session header)
- Insert the relevant speaker research
- Keep original notes intact

If no:
- Keep everything in the central `speaker-directory.md`

### Step 5: Generate insights
Analyze the collected research and present:

"Research complete! Here's what I discovered:

**Coverage:**
- Successfully researched: [N] speakers
- Found GitHub profiles: [N]
- Found Twitter/X handles: [N]
- Found referenced materials: [N] items

**Interesting Findings:**
- [Notable pattern or connection]
- [Interesting background or project]
- [Unexpected connection between speakers]

**Follow-up Opportunities:**
- [Speakers with particularly relevant GitHub repos]
- [Speakers active on social who might engage]
- [Referenced tools/papers worth exploring]

Would you like me to:
- Create a 'must-follow' list for social media?
- Generate a list of GitHub repos to explore?
- Identify speakers working on related problems?
- Create presentation slides about speaker backgrounds?"

Wait for user response and provide requested deliverables.

## Important Guidelines

**Research strategy:**
- Use WebSearch for recent/current information
- Look for official sources first (company sites, LinkedIn)
- Cross-reference information across sources
- Note when information is speculative vs confirmed
- Include timestamps for time-sensitive info (funding, roles)

**Quality standards:**
- All URLs must be actual links, not placeholders
- Prefer primary sources (their own GitHub, blog) over secondary
- Include @handles for social media (easier to copy/paste)
- Note if a link requires authentication or access
- Verify that referenced materials are actually relevant

**What to emphasize:**
- Direct connections to the talk topic
- Recent projects or papers (last 1-2 years)
- Open source contributions relevant to AI/dev tools
- Speaking history on similar topics
- Company products that relate to their message

**What to skip:**
- Generic company marketing copy
- Outdated information (old roles, defunct projects)
- Overly personal information
- Information that can't be verified
- Links that are broken or paywalled

**Parallel execution:**
- Launch ALL research agents simultaneously (single message, multiple Task calls)
- This is the most important performance optimization
- Each agent works independently on one speaker
- Collect results as they complete

**Error handling:**
- If a speaker name is ambiguous, note which person was researched
- If very little information is found, note this explicitly
- If company has changed/pivoted, include context
- If referenced materials can't be found, document the search attempt

## Output Files

1. **`speaker-directory.md`** - Central directory with all speaker research
   - Organized by day and time
   - Includes quick reference sections
   - Fully linked and cross-referenced

2. **Enhanced session files** (optional) - Original session files with speaker profiles added

3. **Follow-up lists** (on request):
   - `speakers-to-follow.md` - Social media handles worth following
   - `speaker-github-repos.md` - Interesting repositories to explore
   - `referenced-materials.md` - All tools, papers, demos mentioned

## Example Speaker Profile

```markdown
## Speaker: Max Kanat-Alexander
**Company:** Capital One ([capitalone.com](https://www.capitalone.com))
**Role:** Executive Distinguished Engineer for Developer Experience

**Social & Professional Links:**
- LinkedIn: [linkedin.com/in/maxka](https://www.linkedin.com/in/maxka)
- Twitter/X: [@mkanat](https://twitter.com/mkanat)
- GitHub: [@mkanat](https://github.com/mkanat)
- Personal site: [max.kanat-alexander.com](https://max.kanat-alexander.com)
- Blog: [Code Simplicity](https://codesimplicity.com)

**About Capital One:**
Capital One is a Fortune 500 financial services company with significant investment in developer experience and AI tooling. Their engineering organization serves 120,000+ developers and has been an early enterprise adopter of AI coding assistants.

**Speaker Background:**
Max Kanat-Alexander is author of "Code Simplicity" and a long-time advocate for developer experience and software engineering fundamentals. He leads Capital One's efforts to integrate AI tools while maintaining code quality and developer productivity. Previously worked at Google and has been a major contributor to Bugzilla.

**Referenced Materials:**
- Code Simplicity book: [codesimplicity.com/book](https://codesimplicity.com/book)
- Developer Experience blog: [Articles on AI and DX](https://codesimplicity.com)

**Related Content:**
- "What's Good for Humans is Good for AI" talk: [Previous presentation at DevEx Con]
- Capital One Tech Blog: [developer.capitalone.com](https://developer.capitalone.com)

**Research Notes:**
Strong advocate for "fundamentals-first" approach to AI adoption. Emphasizes that infrastructure improvements for AI (testing, documentation, deterministic environments) are the same improvements that benefit human developers. Well-known in developer experience community.
```

## Success Criteria

A successful speaker decoration provides:
- ✅ Actionable links (users can click and explore immediately)
- ✅ Context that enhances understanding of the talk
- ✅ Connections between speakers and their broader work
- ✅ Follow-up opportunities (people to follow, repos to star, papers to read)
- ✅ Company context that explains their perspective
- ✅ Verification of claims or demos mentioned in talks

## Usage Tips

**When to use this skill:**
- After conference analysis is complete
- Before sharing notes with others (adds credibility and context)
- When preparing follow-up actions
- When building a "who to watch" list in the space

**Combine with:**
- `/conference-analysis` - Run that first to create session files
- `/theme-summary` - Speaker context helps understand theme development
- `/executive-synthesis` - Speaker backgrounds add authority to insights

**Customize:**
- Focus on specific speakers by providing a filtered list
- Request emphasis on certain types of information (GitHub, papers, demos)
- Ask for deeper research on particular individuals
- Request comparison between speakers on similar topics
