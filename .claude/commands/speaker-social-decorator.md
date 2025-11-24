---
description: Update speaker profiles with social media links, profile photos, and bio content
---

Update existing speaker markdown files with social media information (LinkedIn, Twitter/X, GitHub, website), download their profile photos, and restructure the bio content to focus on the person first.

## Instructions

1. Read the specified speaker file from `speakers/[speaker-slug].md`
2. Search for the speaker's social media profiles if not already present
3. Update the frontmatter with social media links
4. Download their profile photo and save to `web/public/photos/[speaker-slug].jpg`
5. Restructure the markdown body content following the proper format
6. Verify the photo displays correctly on the website

## Process

For EACH speaker:

1. **Read the speaker file** to check current social media information and content
2. **Search for social profiles** if any are missing or null:
   - LinkedIn profile (extract username from URL)
   - Twitter/X profile (extract handle and full URL)
   - GitHub profile (if applicable)
   - Personal website
3. **Do minimal research** (LinkedIn, personal website) to gather:
   - Current role and what they do
   - Notable background/achievements (if readily available)
   - Company information
4. **Update frontmatter** with found social media information
5. **Restructure markdown body** following the bio content format (see below)
6. **Download profile photo**:
   - Try GitHub avatar first (preferred)
   - Fall back to LinkedIn or Twitter/X if needed
   - Save as `web/public/photos/[speaker-slug].jpg`
   - Create the photos directory if it doesn't exist
7. **Verify** the file was updated and photo was downloaded

## Frontmatter Format

The frontmatter should follow this exact structure:

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
---
```

**IMPORTANT FORMAT RULES:**
- `linkedin`: Username ONLY (e.g., `steveyegge`, NOT `https://linkedin.com/in/steveyegge/` or `@steveyegge`)
- `twitter`: Handle WITHOUT @ symbol (e.g., `Steve_Yegge`, NOT `@Steve_Yegge`)
- `twitter_url`: Full URL (e.g., `"https://twitter.com/Steve_Yegge"`)
- `github`: Username ONLY (e.g., `steveyegge`, NOT `https://github.com/steveyegge` or `@steveyegge`)
- `github_url`: Full URL (e.g., `"https://github.com/steveyegge"`)
- `website`: Full URL to personal site

## Bio Content Format

The markdown body should be structured to focus on the **person and their work first**, with company and conference info at the bottom.

### Structure

**1. First Paragraph (Main Card Bio):**
- This is the ONLY text shown on the main speaker card (`/speakers`)
- Should be 1-2 strong sentences
- **Preferred:** What they're known for (e.g., "Pioneer in enterprise Model Context Protocol implementations and AI agent security.")
- **Fallback:** Who they are (e.g., "Tobin South leads AI Agents & MCP at WorkOS, focusing on enterprise-grade security for production AI systems.")

**2. Optional Headline (only if compelling):**
- Skip if you can't write something strong
- Example: `## Legendary Software Engineer — Architect of Code Intelligence, Pioneer of Vibe Coding`
- Must be genuinely descriptive of their impact/reputation

**3. Current Role & Ventures:**
- What they're doing NOW
- Current projects, initiatives, or work
- Keep focused and relevant

**4. Background/Notable Work (flexible structure):**
- Adapt based on what's available:
  - Career history for experienced folks
  - Notable projects for builders
  - Key achievements for specialists
- Keep it minimal - only what's readily available from LinkedIn/website

**5. Company Information (near bottom):**
- Brief section about their company
- What the company does
- Only if relevant context for understanding their role

**6. Conference Appearance (at bottom):**
```markdown
## Conference Appearance

**Event:** AI Engineering Code Summit 2025
**Date:** [Date from session file]
**Time:** [Time from session file]
**Session:** [Session title from frontmatter]

[Brief summary of what they presented about]
```

### What NOT to Include

- **NO "Social & Professional Links" section** - these are in the navigation already
- **NO duplicate information** from the session notes page
- **NO boilerplate** or generic text
- **NO images/photos** embedded in markdown - handled separately

### Example First Paragraph (for main card)

Good examples:
- "Leading the development of Amp, a next-generation agentic coding system at Sourcegraph, with deep expertise in code intelligence and developer tools."
- "Head of AI Agents & MCP at WorkOS, specializing in enterprise-grade security for production AI systems."
- "Co-founder of Prime Intellect, pioneering decentralized training of frontier AI models."

## Example Usage

```
/speaker-social-decorator ammaar-reshi
```

or for multiple speakers:

```
/speaker-social-decorator ammaar-reshi kat-kampf michele-catasta
```

## Steps for Each Speaker

1. **Search for social profiles** (if missing):
   ```
   WebSearch: "[Speaker Name] [Company] LinkedIn"
   WebSearch: "[Speaker Name] [Company] Twitter"
   WebSearch: "[Speaker Name] [Company] GitHub"
   ```

2. **Extract social information**:
   - LinkedIn: Extract username ONLY from URL (e.g., `ammaarsreshi` from `linkedin.com/in/ammaarsreshi/`)
   - Twitter: Extract handle WITHOUT @ (e.g., `ammaar` from `@ammaar`) and full URL
   - GitHub: Extract username ONLY from URL (e.g., `steveyegge` from `github.com/steveyegge`)
   - Website: Full personal site URL

3. **Gather bio information** (minimal research from LinkedIn/website):
   - Current role and what they're working on
   - Notable background/achievements (only if readily visible)
   - Company information
   - Keep it brief - don't deep dive

4. **Restructure markdown body**:
   - Start with 1-2 sentence bio (for main card display)
   - Optional headline if compelling
   - Current role section
   - Background/notable work (adapt structure to what's available)
   - Company information section
   - Conference appearance section with brief summary
   - Remove any "Social & Professional Links" sections
   - Remove any embedded images

5. **Download profile photo**:
   ```bash
   mkdir -p web/public/photos
   curl -L "[Profile photo URL]" -o web/public/photos/[speaker-slug].jpg
   ```

   **Photo sources (in order of preference):**
   - GitHub avatar: `https://avatars.githubusercontent.com/[username]?v=4` (preferred)
   - LinkedIn profile photo (if accessible)
   - Twitter/X profile photo (if accessible)

6. **Update speaker file**:
   - Use Edit tool to update frontmatter with social links
   - Use Edit tool to restructure markdown body content

## Photo Requirements

- Format: JPEG preferred
- Size: 200x200 or larger (will be displayed at various sizes)
- Location: `web/public/photos/[speaker-slug].jpg`
- Naming: Must match the speaker's file slug exactly

## Website Integration

The photos and social links automatically display on:
- Speaker index page: `/speakers`
- Individual speaker page: `/speakers/[speaker-slug]`
- Speaker bio page: `/speakers/[speaker-slug]/bio`

The code looks for photos at `/photos/[speaker-slug].jpg` and builds LinkedIn URLs from the username field, Twitter URLs from the twitter_url field, etc.

## Success Criteria

- Speaker frontmatter updated with social media links in correct format
- Markdown body restructured following the bio content format:
  - First paragraph is concise 1-2 sentences for main card
  - Focus on person and their work first
  - Company info near bottom
  - Conference appearance at bottom with brief summary
  - No social links section in body
  - No embedded images
- Profile photo downloaded and saved to correct location
- Photo displays on website (verify file exists and is valid JPEG)
- Links follow the correct format (username vs full URL)

## Error Handling

- If LinkedIn photo fails, try Twitter/X or GitHub
- If no photos found, note it but continue
- If social profile not found, leave as `null` rather than removing field
- Preserve existing correct values, only update `null` or missing fields
- If minimal bio information available, keep structure simple but still follow format
- If no compelling headline can be written, skip it entirely

## Notes

- **LinkedIn:** Username ONLY in `linkedin` field (NOT full URL, NOT @username)
  - ✅ Correct: `linkedin: steveyegge`
  - ❌ Wrong: `linkedin: "https://linkedin.com/in/steveyegge/"` or `linkedin: "@steveyegge"`

- **Twitter:** Handle WITHOUT @ symbol in `twitter` field, full URL in `twitter_url`
  - ✅ Correct: `twitter: Steve_Yegge` and `twitter_url: "https://twitter.com/Steve_Yegge"`
  - ❌ Wrong: `twitter: "@Steve_Yegge"`

- **GitHub:** Username ONLY in `github` field (NOT full URL, NOT @username)
  - ✅ Correct: `github: steveyegge` and `github_url: "https://github.com/steveyegge"`
  - ❌ Wrong: `github: "@steveyegge"` or `github: "https://github.com/steveyegge"`

- **Website:** Full URL to personal site
- **Photos:** Must be downloaded to `web/public/photos/[speaker-slug].jpg` (NOT just referenced by URL)
- Photos are automatically referenced via speaker slug, no metadata update needed in frontmatter
