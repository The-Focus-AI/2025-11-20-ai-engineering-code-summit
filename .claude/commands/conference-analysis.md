---
description: Analyze conference notes - insert slides, split sessions, identify themes, write analysis
---

You are analyzing conference notes to produce organized insights and content.

## Overview
You will orchestrate a multi-step analysis process:
1. Insert photo references into source notes based on timestamps
2. **speaker-extract** agent: Splits notes into individual session files (with slides)
3. **theme-explorer** agent: Identifies major themes across sessions
4. **deep-explorer** agent: Finds additional patterns and emerging themes
5. Interactive refinement: Collaborate with user to finalize theme structure
6. Analysis agents: Write detailed theme narratives (referencing slides)

## Process

### Step 1: Ask for the file path
Ask the user: "What's the path to your conference notes file?"

Wait for their response.

### Step 2: Insert photo references
Check if there's a `slides/` directory in the same location as the notes file.

If found:
- List all slides with timestamps in the filename (format: YYYY-MM-DD-HH-MM-*.jpg)
- Read the conference notes file
- For each photo timestamp, find the closest session/section in the notes
- Insert `![](slides/YYYY-MM-DD-HH-MM-filename.jpg)` at the appropriate location
- Save the updated notes file

Tell the user: "Inserted [N] photo references into the notes based on timestamps."

If no slides directory found, skip this step.

### Step 3: Launch speaker-extract agent
Use the Task tool with subagent_type="general-purpose" and description="speaker-extract: Split conference notes into session files"

Extract the date from the source file (e.g., "2025-11-20.md" → "2025-11-20").
Create a directory named [DATE] (e.g., "2025-11-20/") if it doesn't exist.

Give it this task:
```
Read the conference notes at [FILE_PATH].

Split them into individual session files with this structure:
- Format: MM-DD-HH-MM-speaker-name-company.md (e.g., 11-21-09-11-barry-zhang-mahesh-murag-anthropic.md)
- One file per speaker/session
- Extract session time, speaker name, company, and all notes for that session
- IMPORTANT: Include any ![](slides/...) image references that fall within that session's timeframe
- Create a separate file called MM-DD-day-overview.md with any recurring themes or general notes from the top

Save all files in the [DATE]/ directory (e.g., 2025-11-20/ for Day 1, 2025-11-21/ for Day 2).

Return a summary of:
- How many session files were created
- List of all speakers/sessions
- Any recurring themes noted in the overview
```

Wait for completion. Show the user what was created.

### Step 4: Launch theme-explorer agent
Ask the user: "Do you have any initial theme ideas? (Or press enter to let me find them all)"

Wait for their response.

Use the Task tool with subagent_type="general-purpose" and description="theme-explorer: Identify major conference themes"

Give it this task:
```
Read all the session files created in [DATE]/ directory (e.g., 2025-11-20/).

Identify 4-6 major themes that emerged across the conference.

User's initial ideas: [USER_INPUT or "none - find them all"]

For each theme:
1. Give it a clear, compelling name
2. Write 2-3 sentences describing it
3. List which speakers addressed it (with their session file names)
4. Identify a "lead voice" - the speaker who best represents this theme
5. Note any relevant slides from the sessions

Return your findings in this format:

## Theme [N]: [Name]
**Description:** [2-3 sentences]
**Lead Voice:** [Speaker name]
**Key Speakers:** [List with session file references]
**slides:** [List any relevant image references]
**Why it matters:** [1 sentence]

Also note any themes that could be merged or split.
```

Wait for completion. Present the themes to the user.

### Step 5: Deep theme exploration
Ask the user: "Let's talk about it - see what else you might have found"

Wait for their response.

Use the Task tool with subagent_type="general-purpose" and description="Find additional themes in sessions"

Give it this task:
```
Review all the session files from [DATE]/ directory again.

We've already identified these major themes:
[LIST THEMES FROM STEP 4]

Look for OTHER emerging patterns or themes that might have been overlooked, such as:
- Specific technologies or approaches (MCP, browser control, TUI vs GUI, multimodal)
- Economic or business model implications
- Agent architectures (subagents, tool design patterns)
- Benchmarking and evaluation patterns
- Data collection and quality emphasis
- Speed vs intelligence tradeoffs
- Community/open source movements
- Cultural movements or philosophies

Return any additional themes you find with:
- Theme name
- Key speakers who addressed it
- Why it's distinct from themes already identified
- Whether it deserves its own theme or should be folded into an existing one
- Recommendations for merging or restructuring existing themes
```

Wait for completion. Present additional findings to the user.

### Step 6: Interactive theme refinement
Present all themes found (initial + deep exploration).

Ask the user specific questions:
- "Should we merge any themes? (e.g., 'merge themes 1 and 6 together')"
- "Which speaker should be the lead voice? What should be the title focus?"
- "Are there themes that need splitting or combining?"
- "What did I miss that matters to you?"

Iterate with the user to finalize 4-6 themes with:
- Clear, compelling titles
- Identified lead voices
- Merged/split as appropriate
- Strong thematic coherence

Show the final refined theme structure before proceeding.

### Step 7: Launch analysis agents (parallel)
Tell the user: "Launching [N] parallel agents to write detailed analysis for each theme..."

For each theme, launch a Task with subagent_type="general-purpose" and description="Write analysis for [THEME_NAME]"

Give each agent this task:
```
Write a detailed 600-800 word analysis of: [THEME_NAME]

[THEME_DESCRIPTION]

Read these session files:
[LIST OF RELEVANT SESSION FILES WITH SLIDE COUNTS]

**Special instructions:**
- **Think hard.** This is publication-quality analysis.
- Open with the central tension or most provocative insight
- Use direct quotes extensively - let speakers' voices drive the narrative
- Include concrete numbers and examples (e.g., "1000 examples → 10-point improvement")
- Reference slides using ![](slides/...) where they illustrate key points
- Make subsections (use ###) to break up complex themes
- Connect different speakers' perspectives to show convergence or tension
- For merged themes: show how the parts fit together coherently
- End sections with forward-looking implications
- Position [LEAD_VOICE] as the primary voice but weave in others

Return ONLY the writeup text with markdown formatting and photo references.
```

After all agents complete, collate their outputs into a single markdown file: "YYYY-MM-DD-themes.md" (saved at top level, e.g., "2025-11-20-themes.md") with:

**Structure:**
- Title with conference name and date
- Introduction paragraph (200-300 words) that:
  - Sets the conference context (opening remarks, overall vibe, key moment)
  - Frames the themes as interconnected insights
  - Uses a compelling hook from the conference
- Each theme analysis (with photo references and subsections)
- Conclusion (200-300 words) that:
  - Shows how themes interconnect
  - Provides forward-looking synthesis
  - Ends with a memorable closing thought from a speaker

**Target:** 6,000-7,000 words total

Show the user it's been created with word count and theme count.

### Step 8: Summary
Tell the user:

"Conference analysis complete!

Created:
- [N] session files in [DATE]/ directory (with photo references)
- 1 day overview in [DATE]/ directory
- YYYY-MM-DD-themes.md at top level ([X] words, [N] themes)

File structure:
- Top level: 2025-MM-DD.md (raw notes), 2025-MM-DD-themes.md (analysis)
- [DATE]/ directory: Individual session files and day overview"

Ask: "Would you like me to generate LinkedIn posts from these themes?"

## Important Notes
- **Use TodoWrite tool throughout** to track progress across all steps
  - Mark todos as in_progress before starting each major step
  - Mark completed immediately after finishing
  - Keep user informed of progress
- ALWAYS insert slides first before splitting sessions
- Use parallel agent execution wherever possible (Step 7)
- Always wait for user input before proceeding to next step
- Include date in output filenames to avoid overwriting
- Preserve photo references throughout the process
- Show progress and what's being created at each step
- If any agent fails, explain what happened and offer to retry
- The deep exploration step (Step 5) is critical - don't skip it
- Theme refinement (Step 6) should be collaborative and iterative
- Analysis agents need the "think hard" instruction for quality output
