---
brand: "TheFOCUS.ai"
project: "TheFocusAI"
doc_no: "RM-2025-HZ"
event: "AI Engineer Code Summit 2025"
dates: "November 19-22, 2025"
attended_dates: "November 20-22, 2025"
location: "Midtown Manhattan, New York, NY"
website: "https://www.ai.engineer/code"
format: "Single-track, invite-only conference"
focus: "Top AI engineers building coding agents and AI-powered development tools"
---

# AI Engineering Code Summit 2025 - Analysis & Insights

This repository contains comprehensive notes, analysis, and synthesis from the **AI Engineer Code Summit 2025** held November 19-22, 2025 in Midtown Manhattan, New York. These notes cover the Leadership Sessions (Nov 20) and Engineering Sessions (Nov 21).

## An experiment

![Workflow Diagram](/images/workflow-diagram.png)

In a spasm of uncharacterist orgnanizatioal enthusiasm, I took it upon myself to capture notes on every talk. It turned
out to be an excellent way to keep engaged and locked in.

First I used Coment went to [https://www.ai.engineer/schedule] and asked it to:

> go through each of the schedules talks today and give me a brief bio of who is speaking, what their company does, and what to focus on

I then copied that resulting markdown into my daily Obsidian note, and I started typing furiously.  Typing with
complete disregard for what keys I was mashing, not even attemption to correct spelling, just capturing whatever stuck out.

I was also snapping photos on my phone.

## nano-banana

At some point I thought you know I'm at an AI conference, lets do some image manipulating, 
so /while I was taking notes/ I also fired up [claude code](https://www.claude.com/product/claude-code) and 
[vibe coded an image processor](https://github.com/The-Focus-AI/nano-banana-cli) to 
[extract slides from an image](https://github.com/The-Focus-AI/nano-banana-cli/blob/main/prompts/slide-extractor.md), 
also looking in the metadata to rename the file as a date with a time stamp.

## mash them together

At the end of each day, I asked [claude](https://www.claude.com/product/claude-code) to intereest the image slides
into the right section of the file -- the talks had the time in there -- and that's how we get

- [2025-11-20.md](https://github.com/The-Focus-AI/2025-11-20-ai-engineering-code-summit/blob/main/2025-11-20.md)
- [2025-11-21.md](https://github.com/The-Focus-AI/2025-11-20-ai-engineering-code-summit/blob/main/2025-11-21.md) 

## post processing

Now I started asking claude to figure out how to program itself.

### Prompt: [conference-analsys.md](https://github.com/The-Focus-AI/2025-11-20-ai-engineering-code-summit/blob/main/.claude/commands/conference-analysis.md)

This was something like 

> i want to build a command that helps me make sense of the themes in this talk, ask me questions about what i want one at time until you know what to do.

I use that pattern a lot, one question at a time.  I used to say something like 
"ask me the question that will give you the most important information first" but now it just knows.


### Prompt: [theme-summary.md](https://github.com/The-Focus-AI/2025-11-20-ai-engineering-code-summit/blob/main/.claude/commands/theme-summary.md)

> refine the themes even more, making them into a pyrmind, first a summary, then a one pager,and then a presentation

The problem is that prose it produces is so stultifyingly boring, but this was
and interesting thought process to fiddling with the information architecture.

This helped figure out which talk really had to do with which theme for example.

### Prompt: [speaker-decorator.md](https://github.com/The-Focus-AI/2025-11-20-ai-engineering-code-summit/blob/main/.claude/commands/speaker-decorator.md)

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



## About the Author

**Will Schenk** is a father, entrepreneur, technologist and aspiring woodsman living in the woods of Northwest Connecticut with his wife Ksenia, four boys, and one baby girl.

In 2010, Will cofounded [HappyFunCorp](https://www.crunchbase.com/person/will-schenk), a software development company focused on mobile product development. He stepped back from day-to-day operations in January 2022 and sold the company later that year. He then took a professional break from technology, moved to the woods to focus on family, and started [Cornwall Market](https://willschenk.com/), a brick and mortar food market. He's also the cofounder of [Tezlab](https://willschenk.com/), a mobile app helping users understand how to use their Tesla and Rivian vehicles.

During his break, the world of generative AI emerged, drawing him back to the tech space. He founded [The Focus AI](https://thefocus.ai/) in November 2024, working with clients to apply AI technology in real-world scenarios and exploring practical implementations of AI in software development.

Will maintains a personal blog at [willschenk.com](https://willschenk.com/) where he writes lab notes, how-to guides, and thought fragments about technology, programming, and life in Connecticut.

**Links:**
- Website: [willschenk.com](https://willschenk.com/)
- GitHub: [@wschenk](https://github.com/wschenk)
- Twitter/X: [@wschenk](https://x.com/wschenk)
- LinkedIn: [Will Schenk](https://www.linkedin.com/in/will-schenk-420266/)
- Company: [The Focus AI](https://thefocus.ai/)

