---
description: Research speakers and create individual speaker profile files
---

Research all speakers from the conference and create individual markdown files with their professional background, social links, and referenced materials.

## Instructions

1. Create a `speakers/` directory if it doesn't exist
2. Find all session files from the specified conference day(s)
3. For EACH speaker, launch a separate Task agent that will:
   - Research the speaker's background, social profiles, company info
   - Find referenced materials (tools, papers, demos)
   - WRITE the results directly to `speakers/[speaker-slug].md`

4. Launch ALL agents in PARALLEL in a single message
5. First check to see if there's an slug already
6. After all agents complete, create a master `speakers/README.md` index file

## Agent Instructions Template

Each agent should receive this prompt:

```
Research speaker: [Speaker Name] from [Company]
Session: [Session Title]
Session file: [Path to session file]

Your task:
1. Search the web for comprehensive information about this speaker
2. Find their LinkedIn, Twitter/X, GitHub, personal site
3. Research their company and role
4. Find referenced materials from their talk (tools, papers, demos, repos)
5. WRITE your findings directly to: speakers/[speaker-slug].md

Use this EXACT format for the file:

---
# [Full Name]

**Company:** [Company Name] ([website])
**Role:** [Title/Role]
**Session:** [Session Title] ([link to session file])

## Social & Professional Links
- LinkedIn: [URL or "Not found"]
- Twitter/X: [@handle](URL) or "Not found"
- GitHub: [@username](URL) or "Not found"
- Personal site: [URL or "Not found"]
- Other: [Additional links]

## About [Company Name]
[2-3 sentences about the company]

## Speaker Background
[2-4 sentences about their expertise and relevant work]

## Referenced Materials
- [Tool/Paper/Demo name]: [URL] - [Brief description]

## Related Content
- [Title]: [URL]

## Research Notes
[Additional context, recent projects, interesting findings]

---

IMPORTANT:
- Write ONLY to the specified file path
- Use kebab-case for the filename (e.g., katelyn-lesse.md)
- Include actual URLs, not placeholders
- Note "Not found" rather than omitting missing info
```

## File Organization

```
speakers/
├── README.md                    # Master index
├── katelyn-lesse.md
├── michele-catasta.md
├── lisa-orr.md
└── ...
```

## Success Criteria
- Each speaker gets their own file
- All agents run in parallel
- Files are written directly (not returned)
- Master index links to all speaker files
- Organized by company, topic, and social handles
