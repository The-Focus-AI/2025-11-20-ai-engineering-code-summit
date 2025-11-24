---
description: Research speakers, create/update profiles with photos and social links
---

Research speakers and create or update individual markdown files with professional background, social links, profile photos, and properly structured bio content.

## Instructions

This command handles both creating new speaker profiles and updating existing ones. It will:

1. Check if the speaker file already exists in `speakers/[speaker-slug].md`
2. For existing files: Update with social links, download photos, restructure content
3. For new files: Create from scratch with full research
4. Always ensure: correct frontmatter format, downloaded photos, proper bio structure

**CRITICAL: NEVER MAKE UP INFORMATION.** Always verify social media profiles actually exist before adding them. If you cannot verify a LinkedIn profile exists, set it to `null`. Accuracy is paramount - making up information is completely unacceptable.

## Usage

Single speaker:
```
/speaker-decorator asaf-bord
```

Multiple speakers:
```
/speaker-decorator ammaar-reshi kat-kampf michele-catasta
```

All speakers (finds all session files):
```
/speaker-decorator
```

## Process for Each Speaker

### 1. Check if File Exists
- If exists: Read current content to preserve good information
- If doesn't exist: Start fresh with full research

### 2. Research & Gather Information

**Social Profiles:**
- LinkedIn (extract username ONLY from URL)
- Twitter/X (extract handle WITHOUT @ and full URL)
- GitHub (extract username ONLY from URL)
- Personal website (full URL)

**Bio Information:**
- Current role and what they're working on
- Notable background/achievements (if readily available)
- Company information
- Referenced materials from their talk (tools, papers, demos, repos)
- Keep research minimal and focused

### 3. Create/Update Frontmatter

Use this EXACT format:

```yaml
---
name: [Full Name]
company: [Company Name]
company_url: "[Company URL]"
role: [Title/Role]
session: [Session Title]
session_file: [Relative path to session file]
linkedin: [username-only or null]
twitter: [handle-without-@ or null]
twitter_url: "[Full Twitter URL or null]"
github: [username-only or null]
github_url: "[Full GitHub URL or null]"
website: "[Personal website URL or null]"
image: "/photos/[speaker-slug].jpg"
decorated: true
---
```

**CRITICAL FORMAT RULES:**
- `session_file`: Path relative to project root (e.g., `2025-11-21/11-21-09-31-speaker.md`, NOT `../2025-11-21/...`)
- `linkedin`: Username ONLY - **VERIFY IT EXISTS** before adding (e.g., `steveyegge`, NOT `https://linkedin.com/in/steveyegge/` or `@steveyegge`)
- `twitter`: Handle WITHOUT @ (e.g., `Steve_Yegge`, NOT `@Steve_Yegge`)
- `twitter_url`: Full URL (e.g., `"https://twitter.com/Steve_Yegge"`)
- `github`: Username ONLY (e.g., `steveyegge`, NOT `https://github.com/steveyegge` or `@steveyegge`)
- `github_url`: Full URL (e.g., `"https://github.com/steveyegge"`)
- `website`: Full URL to personal site
- `image`: Local path (e.g., `"/photos/asaf-bord.jpg"`)

### 4. Structure Markdown Body

**IMPORTANT:** Keep profiles CONDENSED and CONCISE. Follow the Nik Pash pattern (see `speakers/nik-pash.md`) or Aparna Dhinakaran pattern (see `speakers/aparna-dhinakaran.md`). Link out to external content instead of including detailed information inline. Target ~50-70 lines total, not 200+.

**Good Example Patterns:**
- **Nik Pash** (60 lines): Minimalist agent developer with contrarian philosophy. Shows how to structure philosophy section with bold subheadings and brief explanations, not long quotes.
- **Aparna Dhinakaran** (65 lines): ML observability founder with research background. Demonstrates how to condense extensive technical content into a focused bio, linking to external resources (Medium, blog) instead of including all details inline. Philosophy section uses bold subheadings with concise explanations rather than detailed methodology.

Focus on the **person and their work first**, with company and conference info at the bottom.

**1. First Paragraph (Main Card Bio):**
- This is the ONLY text shown on the main speaker card (`/speakers`)
- Should be 1-2 strong sentences
- **Preferred:** What they're known for
- **Fallback:** Who they are and what they do

Good examples:
- "Leading the development of Amp, a next-generation agentic coding system at Sourcegraph, with deep expertise in code intelligence and developer tools."
- "Head of AI Agents & MCP at WorkOS, specializing in enterprise-grade security for production AI systems."
- "Staff Engineer at Netflix specializing in AI/ML systems at scale and managing software complexity in massive codebases. Author of [The Bug in Your Code](https://example.com), exploring the intersection of software development, AI, and the human dimensions of engineering."

**2. Optional Headline (only if compelling):**
- Skip if you can't write something strong
- Example: `## Legendary Software Engineer — Architect of Code Intelligence, Pioneer of Vibe Coding`
- Example: `## Architect of the Infinite Software Crisis — Champion of Simple Over Easy`
- Must be genuinely descriptive of their impact/reputation

**3. Current Work:**
- What they're doing NOW at their company (2-3 sentences)
- **IMPORTANT:** Research and link to key articles/blog posts they've written
- Include links to their blog, notable essays, or technical writing
- Example: "He writes extensively on [The Bug in Your Code](https://example.com), with notable essays including [Key Article Title](https://example.com/article), which explores..."

**4. Background:**
- Brief career history (2-3 sentences maximum)
- Keep minimal - only what's readily available from LinkedIn/website
- Focus on relevant experience that informs their current work

**5. Philosophy/Approach (if applicable):**
- Brief section on their key philosophy or approach
- **CRITICAL:** Include only 2-3 most IMPACTFUL quotes maximum
- Don't include detailed explanations - link out to their articles instead
- Example format:
```markdown
## Philosophy on [Topic]

[Speaker's] approach emphasizes [key theme]:

> "[Most impactful quote]"

> "[Second impactful quote]"

> "[Third impactful quote - optional]"

[One sentence about their methodology or approach]
```

**6. Referenced Materials (OPTIONAL - only if they built specific tools):**
- Only include if speaker created/maintains specific tools mentioned in talk
- Format: `- [Tool name]: [URL] - [Brief description]`
- Skip this section entirely if not applicable

**7. Company Information (near bottom):**
- Brief 2-3 sentence section about their company
- What the company does and why it's relevant
- Only if relevant context for understanding their role

**8. Conference Appearance (at bottom):**
```markdown
## Conference Appearance

**Event:** AI Engineering Code Summit 2025
**Date:** [Date from session file]
**Time:** [Time from session file]
**Session:** [Session title from frontmatter]

[Brief 2-3 sentence summary of presentation themes and approach]
```

**What NOT to Include:**
- ❌ "Social & Professional Links" section (handled by frontmatter)
- ❌ Detailed session notes or slide-by-slide content (those belong in the session file)
- ❌ Long explanations of concepts or methodologies (link to their articles instead)
- ❌ More than 2-3 quotes (keep only the most impactful)
- ❌ Detailed breakdowns of their methodology (summarize briefly and link out)
- ❌ "Strategic Implications" or similar analysis sections
- ❌ "Key Principles" lists (unless very brief - 3-5 items max)
- ❌ Duplicate information from session notes page
- ❌ Boilerplate or generic text
- ❌ Embedded images in markdown (handled separately)

**CRITICAL GUIDELINES:**
- The speaker bio should be CONDENSED - target 50-70 lines total
- Link out to external content (their blog, articles, talks) instead of including everything inline
- The speaker bio file should focus on WHO they are, not detailed WHAT of their talk
- All detailed session notes, slides, quotes, and technical content belong in the session file
- The Conference Appearance section should have only a brief 2-3 sentence summary
- Use speakers/nik-pash.md or speakers/aparna-dhinakaran.md as gold standard references for structure and length

### 5. Download Profile Photo

**Photo sources (in order of preference):**
1. GitHub avatar: `https://avatars.githubusercontent.com/[username]?v=4` (preferred)
2. LinkedIn profile photo (if accessible)
3. Twitter/X profile photo (if accessible)
4. Substack or personal website photos

**Download command:**
```bash
mkdir -p web/public/photos
curl -L "[Profile photo URL]" -o web/public/photos/[speaker-slug].jpg
```

**Photo requirements:**
- Format: JPEG or PNG
- Size: 200x200 or larger (will be displayed at various sizes)
- Location: `web/public/photos/[speaker-slug].jpg`
- Naming: Must match the speaker's file slug exactly

### 6. Update File

- For new files: Use Write tool to create the complete file
- For existing files: Use Edit tool to update specific sections
- Verify all changes were applied correctly

## Agent Instructions Template

When launching agents for each speaker, use this prompt:

```
Research speaker: [Speaker Name] from [Company]
Session: [Session Title]
Session file: [Path to session file]

STEP 1: Check if file exists at speakers/[speaker-slug].md
- If exists: Read it and preserve good information while updating
- If doesn't exist: Create from scratch

STEP 2: Research (if needed or if missing info)
- Search for LinkedIn, Twitter/X, GitHub, personal website
- Extract usernames/handles correctly (see format rules below)
- Research current role, company, notable work
- **CRITICAL:** Find and link to their key articles, blog posts, essays
- Search for: "[Speaker Name] [Company] blog articles"
- Search for: "[Speaker Name] [Topic from talk] article"
- Find referenced materials from talk (tools, papers, demos) if they built them

STEP 3: Download profile photo
- Try GitHub avatar first: https://avatars.githubusercontent.com/[username]?v=4
- Fall back to LinkedIn, Twitter, or other sources
- Save to: web/public/photos/[speaker-slug].jpg (or .png)
- Verify download was successful

STEP 4: Write/update the file at speakers/[speaker-slug].md

**IMPORTANT:** Keep CONDENSED (target 50-70 lines). Link out to external content. Follow speakers/nik-pash.md or speakers/aparna-dhinakaran.md pattern.

Use EXACT frontmatter format:
---
name: [Full Name]
company: [Company Name]
company_url: "[Company URL]"
role: [Title/Role]
session: [Session Title]
session_file: [Relative path to session file]
linkedin: [username-only or null]
twitter: [handle-without-@ or null]
twitter_url: "[Full Twitter URL or null]"
github: [username-only or null]
github_url: "[Full GitHub URL or null]"
website: "[Personal website URL or null]"
image: "/photos/[speaker-slug].jpg"
decorated: true
---

[1-2 sentence bio for main card - what they're known for. Include link to blog/website if applicable]

## [Optional compelling headline - only if strong]

## Current Work
[2-3 sentences on what they're doing now]

[LINK TO KEY ARTICLES/BLOG POSTS - CRITICAL]
Example: "He writes extensively on [Blog Name](URL), with notable essays including [Article Title](URL), which explores..."

## Background
[2-3 sentences maximum - brief career history]

## Philosophy on [Topic] (OPTIONAL - only if applicable)
[Speaker's] approach emphasizes [key theme]:

> "[Most impactful quote 1]"

> "[Most impactful quote 2]"

> "[Optional quote 3]"

[One sentence about their methodology]

## Referenced Materials (OPTIONAL - only if they built tools)
- [Tool]: [URL] - [Description]

## [Company Name]
[2-3 sentences about company]

## Conference Appearance

**Event:** AI Engineering Code Summit 2025
**Date:** November 20, 2025
**Time:** [Time from session file]
**Session:** [Session title]

[2-3 sentence summary of presentation themes]

CRITICAL FORMAT RULES:
- TARGET 50-70 LINES TOTAL - keep condensed!
- LINK to external articles/blog posts instead of including details
- Include only 2-3 MOST IMPACTFUL quotes maximum (or use bold subheadings with brief explanations)
- session_file: Path relative to project root (2025-11-21/11-21-09-31-speaker.md, NOT ../2025-11-21/...)
- linkedin: Username ONLY - VERIFY IT EXISTS before adding (steveyegge, NOT URL, NOT @username)
- twitter: Handle WITHOUT @ (Steve_Yegge, NOT @Steve_Yegge)
- twitter_url: Full URL ("https://twitter.com/Steve_Yegge")
- github: Username ONLY (steveyegge, NOT URL, NOT @username)
- github_url: Full URL ("https://github.com/steveyegge")
- image: Local path ("/photos/speaker-slug.jpg")
- NO "Social & Professional Links" section in body
- NO detailed session notes in speaker bio file (only brief Conference Appearance summary)
- NO detailed methodology explanations (link to their articles instead)

Return a summary with:
1. Whether file was created new or updated
2. Social links found/updated
3. Photo downloaded successfully (URL and size)
4. Any issues encountered
```

## File Organization

```
speakers/
├── README.md                    # Master index
├── asaf-bord.md
├── ammaar-reshi.md
├── steve-yegge.md
└── ...

web/public/photos/
├── asaf-bord.jpg
├── ammaar-reshi.jpg
├── steve-yegge.jpg
└── ...
```

## Website Integration

The photos and social links automatically display on:
- Speaker index page: `/speakers`
- Individual speaker page: `/speakers/[speaker-slug]`
- Speaker bio page: `/speakers/[speaker-slug]/bio`

The code looks for photos at `/photos/[speaker-slug].jpg` and builds LinkedIn URLs from the username field, Twitter URLs from the twitter_url field, etc.

## Success Criteria

✅ Speaker file created or updated at `speakers/[speaker-slug].md`
✅ Profile is CONDENSED (target 50-70 lines, NOT 200+)
✅ Frontmatter has correct format with username-only fields
✅ Profile photo downloaded to `web/public/photos/[speaker-slug].jpg`
✅ Markdown body follows proper structure:
  - First paragraph is concise 1-2 sentences for main card
  - Person and work first
  - Links to external articles/blog posts included in Current Work section
  - Only 2-3 most impactful quotes OR bold subheadings with brief explanations
  - No detailed methodology explanations (linked out instead)
  - Company info near bottom (2-3 sentences)
  - Conference appearance at bottom (2-3 sentence summary)
  - No social links section in body
  - No embedded images
  - No detailed session notes or analysis sections
✅ Links follow correct format (username vs full URL)
✅ Photo is valid and displays on website
✅ Follows speakers/nik-pash.md or speakers/aparna-dhinakaran.md pattern for length and structure

## Error Handling

- If profile photo download fails, try alternative sources
- If no photo found, note it but continue (don't fail)
- If social profile not found or cannot be verified, use `null` rather than removing field or guessing
- **NEVER guess or make up social media usernames** - if you can't verify it exists, use `null`
- Preserve existing correct values, only update `null` or incorrect fields
- If LinkedIn username seems wrong, verify with WebFetch before keeping it
- If minimal bio information available, keep structure simple but follow format
- If no compelling headline can be written, skip it entirely

## Example Validation

After running the command, verify:

```bash
# Check file exists
ls -lh speakers/asaf-bord.md

# Check photo exists and has reasonable size
ls -lh web/public/photos/asaf-bord.jpg

# View frontmatter format
head -20 speakers/asaf-bord.md
```

## Notes

- Always launch agents in PARALLEL when processing multiple speakers
- Each agent should handle one speaker completely (research + photo + file)
- Agents should write files directly, not return content
- Use kebab-case for filenames (e.g., `michele-catasta.md`)
- Photos are referenced automatically by slug, no need to update frontmatter image field manually (but agents should add it)
- If processing all speakers, first find all session files to get the speaker list
