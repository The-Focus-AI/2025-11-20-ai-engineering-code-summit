---
brand: "TheFOCUS.ai"
project: "TheFocusAI"
doc_no: "AI-ENG-2025"
event: "AI Engineer Code Summit 2025"
dates: "November 19-22, 2025"
attended_dates: "November 20-22, 2025"
location: "Midtown Manhattan, New York, NY"
website: "https://www.ai.engineer/code"
format: "Single-track, invite-only conference"
focus: "Top AI engineers building coding agents and AI-powered development tools"
diagram: "/images/workflow-diagram.png"
---

# AI Engineering Code Summit 2025 - Analysis & Insights

This repository contains comprehensive notes, analysis, and synthesis from the **AI Engineer Code Summit 2025** held November 19-22, 2025 in Midtown Manhattan, New York. These notes cover the Leadership Sessions (Nov 20) and Engineering Sessions (Nov 21).

## Notes

Most of this was based on my note taking and phone-photo snapping work on side at the conference.  I wrote down the quotes as they happened but I wasn't able to verify anything.  From my notes, I used claude to expand, contract, expand again, and contract again the content.  Look through for themes, tweaking the ideas, and then reorganizing things into sections.

I designed the basic side using aistudio, copied it over into my claude-managed repo, and iterated on the designs.  I used nano-banana to process the conference photos -- [vibe coded an image processor](https://github.com/The-Focus-AI/nano-banana-cli) which also can double as a Claude Code skill -- and generate the diagrams for the posts.  The [process-slides](https://github.com/The-Focus-AI/2025-11-20-ai-engineering-code-summit/blob/main/.claude/commands/process-slides.md) prompt then read each slide and figured out which speaker it went it.

After choosing all of the themes, I then went back and rewrote all of the articles because boy does AI generated prose really.  Its not this but its that.  Sigh.

## Raw notes & Photos

- [2025-11-20.md](https://github.com/The-Focus-AI/2025-11-20-ai-engineering-code-summit/blob/main/2025-11-20.md)
- [2025-11-21.md](https://github.com/The-Focus-AI/2025-11-20-ai-engineering-code-summit/blob/main/2025-11-21.md) 

## Some of the prompts that got us here:

- [conference-analsys.md](https://github.com/The-Focus-AI/2025-11-20-ai-engineering-code-summit/blob/main/.claude/commands/conference-analysis.md)
- [process-slides.md](https://github.com/The-Focus-AI/2025-11-20-ai-engineering-code-summit/blob/main/.claude/commands/process-slides.md)
- [theme-summary.md](https://github.com/The-Focus-AI/2025-11-20-ai-engineering-code-summit/blob/main/.claude/commands/theme-summary.md)
- [speaker-decorator.md](https://github.com/The-Focus-AI/2025-11-20-ai-engineering-code-summit/blob/main/.claude/commands/speaker-decorator.md)
- [tighten-prose.md](https://github.com/The-Focus-AI/2025-11-20-ai-engineering-code-summit/blob/main/.claude/commands/tighten-prose.md)
- [semantic-overlap.md](https://github.com/The-Focus-AI/2025-11-20-ai-engineering-code-summit/blob/main/.claude/commands/semantic-overlap.md)

But ultimately, you just gotta type everything in from scratch.

## A discoursive journey into subagents

The speaker decorator was fun: I wrote that with a prompt, then I'd trigger it with "look through all the speakers that don't have a photo and run a subagent for them 10 at a time".  The agent could drive itself, who needs flow control when it's smart enough to do it own its own.

