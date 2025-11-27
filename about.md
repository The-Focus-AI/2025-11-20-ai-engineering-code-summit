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

I designes the basic side using aistudio, copied it over into my claude manage repo, and iterated on the designs.  I used nano-banana to process the conference photos -- [vibe coded an image processor](https://github.com/The-Focus-AI/nano-banana-cli) which also can double as a Claude Code skill -- and generate the diagrams for the posts.

After choosing all of the themes, I then went back and rewrote all of the articles because boy does AI generated prose really.  Its not this but its that.  Sigh.

## Raw notes

- [2025-11-20.md](https://github.com/The-Focus-AI/2025-11-20-ai-engineering-code-summit/blob/main/2025-11-20.md)
- [2025-11-21.md](https://github.com/The-Focus-AI/2025-11-20-ai-engineering-code-summit/blob/main/2025-11-21.md) 

## Some of the prompts that got us here:

- [conference-analsys.md](https://github.com/The-Focus-AI/2025-11-20-ai-engineering-code-summit/blob/main/.claude/commands/conference-analysis.md)
- [theme-summary.md](https://github.com/The-Focus-AI/2025-11-20-ai-engineering-code-summit/blob/main/.claude/commands/theme-summary.md)
- [speaker-decorator.md](https://github.com/The-Focus-AI/2025-11-20-ai-engineering-code-summit/blob/main/.claude/commands/speaker-decorator.md)
- [tighten-prose.md](https://github.com/The-Focus-AI/2025-11-20-ai-engineering-code-summit/blob/main/.claude/commands/tighten-prose.md)

But ultimately, you just gotta type everything in from scratch.

## A discouse
This is a fun one that you does a bunch of biographical research on people, what
they're known for, their socials etc.  I also use it to download their photos. 
You can run it using something like

> go through all of the speakers that we don't have bios for yet and run the speaker-decorator in a subagent 10 at a time

And it will do all the magic it does and then writes out the bios.  They generally seem pretty good!
I learned a lot about the speakers this way.

## Website

For this I used Gemini 3 on [aistudio](https://aistudio.google.com/apps) to mock up a few apps.  
I was going for a cybernetic, research lab report vibe.  

I tried a couple of things on, found one that I liked.  Downloaded it, put in in the web folder, 
and told it to convert the implementation to astro, and go crazy.

## More nano-banana

Created a [nano-banana SKILL.md](https://github.com/The-Focus-AI/thefocus-skills/blob/main/nano-banana-imagegen/SKILL.md) that
I used for the theme photos.  And you once you work out a style, you can do things like

> ok spin up a subagent for each of the remaining theme files in @2025-11-20/themes/ and @2025-11-21/themes/ 

## Editing

Now to actually write everything. It's "written" but the only thing I'm happy with is really the
themes and overall structure.  Starting with the exective summary, and then the about page.

## Tokens



