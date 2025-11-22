# Bill Chen & Brian Fioca (OpenAI) - Future-Proof Coding Agents: Building Reliable Systems That Outlast Model Cycles

**Time:** 11:00 AM

**Speaker Bios:** Bill Chen is Product Manager at OpenAI. Brian Fioca works in Engineering at OpenAI.

**Speaker Profiles:** [Bill Chen](../speakers/bill-chen.md) | [Brian Fioca](../speakers/brian-fioca.md)

**Company:** OpenAI creates GPT models and coding assistants, including advanced reasoning capabilities.

**Focus:** How to build coding agents that remain reliable as models evolve. Critical for understanding production-grade agent architecture.

**Reference:** [YouTube Link](https://www.youtube.com/watch?v=cMSprbJ95jg)

## Slides

![](slides/2025-11-20-10-22-gemini-edited.jpg)
![](slides/2025-11-20-10-25-gemini-edited.jpg)
![](slides/2025-11-20-11-15-gemini-edited.jpg)

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
