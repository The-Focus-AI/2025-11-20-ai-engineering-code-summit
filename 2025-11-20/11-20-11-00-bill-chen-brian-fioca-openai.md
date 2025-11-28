---
title: "Future-Proof Coding Agents"
speaker: "Bill Chen & Brian Fioca"
company: "OpenAI"
track: "Leadership"
topics:
  - "Agents & Autonomy"
  - "Context & Memory"
  - "Trust & Safety"
---

**Time:** 11:00 AM

**Speaker Bios:** Bill Chen is Product Manager at OpenAI. Brian Fioca works in Engineering at OpenAI.

**Speaker Profiles:** [Bill Chen](../speakers/bill-chen.md) | [Brian Fioca](../speakers/brian-fioca.md)

**Company:** OpenAI creates GPT models and coding assistants, including advanced reasoning capabilities.

**Focus:** How to build coding agents that remain reliable as models evolve. Critical for understanding production-grade agent architecture.

**Reference:** [YouTube Link](https://www.youtube.com/watch?v=cMSprbJ95jg)

## Slides

### Slide: 10-22
![Slide](../slides/2025-11-20-10-22-gemini-edited.jpg)

**Key Point:** Trust in AI grows through predictability and understanding, allowing users to delegate larger tasks with less oversight. The concept of "fingerspitzengefühl" (intuitive feel) becomes important in human-AI collaboration for navigating complex situations.

**Literal Content:**
- Title: "Gene's Hopes And Favorite Findings"
- DORA logo in top right
- Pink background
- Three bullet points:
  - "Observation: as I've worked with AI more, I trust the AI to do larger tasks"
  - "One strange definition of trust: to what degree do can I predict how another party will act and react — the more I trust the other party, I can make bigger requests, with fewer words, with less feedback"
  - "The notion of *fingerspitzengefühl*: person's instinctive ability to handle complex, uncertain situations with intuition, tact, and sensitivity (thank you Idan Gazit, GitHub)"

### Slide: 10-25
![Slide](../slides/2025-11-20-10-25-gemini-edited.jpg)

**Key Point:** This is a resource slide offering extensive materials on DevOps, AI development, and organizational transformation, inviting attendees to email for access to Gene Kim's research and publications.

**Literal Content:**
- Title: "Want More Learn More?"
- Left side lists resources including:
  - Excerpts of Vibe Coding and *Wiring the Winning Organization*
  - Updates on benchmarking GenAI and developers
  - Best talks from ETLS Community
  - PDF and audio excerpts from *The Unicorn Project*
  - Eight excerpts from *Beyond The Phoenix Project* audio series w/John Willis
  - 140 page excerpts from *The DevOps Handbook* and *The Phoenix Project*
  - Videos and slides from DevOps Enterprise 2014-2019
  - One hour excerpt of *The Phoenix Project* audiobook
- Contact information: "realgenekim@SendYourSlides.com" with subject "vibe"
- @RealGeneKim handle

### Slide: 11-15
![Slide](../slides/2025-11-20-11-15-gemini-edited.jpg)

**Key Point:** OpenAI is presenting three architectural patterns for integrating Codex as a sub-agent: direct SDK integration, MCP-based tool exposure in agent frameworks, and IDE wrapper integration through Zed ACP. This demonstrates multiple integration strategies for different use cases.

**Literal Content:**
- Title: "Sub-agent patterns"
- Pink background
- Three numbered sections:
  - "01 Codex SDK" - "Codex can be called through a Typescript library, programmatically via exec, or as a GitHub Action."
  - "02 Agents SDK + MCP" - "You can expose Codex via MCP as a tool in Agents SDK, as well as give it MCP hooks to call back to your API"
  - "03 Zed ACP" - "Instead of building a harness in your IDE, wrap Codex and pass through UI/UX"
- Footer: "OpenAI | Confidential and proprietary."

## Notes

- Ground is shifting so fast
- Agents
	- Agents
	- Harnesses
	- Agents and subagents
- Talking about Codex specifically
- 3 parts
	- Interface
	- Models
	- Harness (focus on today)
		- Prompts
		- Agent loop
		- Tools + tools descriptions
			- Semantic search
			- Web search
			- Patch / edit
			- Browser
- "Hard to track the models and we aren't making the problem easier for anybody" people need to adapt to the new models
- Harness
	- The surface area that the model uses to talk to the user and code and interact with tools
	- For some the harness might be the special sauce of the product
	- Challenges
		- Custom tools be out of distribution (doesn't know how to use it)
		- Prompt engineering needs to fit in with how to use the tool
		- Poor portability of prompts across models
		- Latency -> context management -> API
			- **Codex Map should do that for you**
			- https://openai.com/index/gpt-5-1-codex-max/
		- Steerability = intelligence + habit
			- Training has side effects
			- E.g. apply patch quicks
			- Prompts aren't interchangeable
			- Harness driving steering > prompt microtuning
- "I like the solution that you came up with but it took too long to come up with, what can I do to make it better"
- Harness + model combined
	- Many things under the hood
	- Parallel tools
	- Security and sandboxing
	- Context compaction
	- MCP support
	- Images and screenshots
- Examples
	- Use Codex to organize photos into a folder
	- Analyze a huge amount of CSV files in the terminal
- Use Codex the agent inside of your own agent
	- Durable platform that rides the wave instead of drowning in it
- Can be called through the SDK, agents SDK + MCP + Zed ACP
	- Can build out software that it needs that it doesn't have
	- Zed wraps Codex into a layer
- You can customize the coding agent
	- Align the tools to be in distribution of how it was trained
- **Dozen of trillions of tokens per week**
- Build where the models are going
- New models will raise the trust ceiling
