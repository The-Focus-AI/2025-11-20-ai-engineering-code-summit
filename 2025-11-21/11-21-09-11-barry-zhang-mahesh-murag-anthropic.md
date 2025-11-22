## 9:11am - 9:30am | Don't Build Agents, Build Skills Instead

**Speakers:** Barry Zhang & Mahesh Murag (both Members of Technical Staff, Anthropic)

**Speaker Profiles:** [Barry Zhang](../speakers/barry-zhang.md) | [Mahesh Murag](../speakers/mahesh-murag.md)

**Bio:** Members of Technical Staff, Anthropic

**Topic:** How Skills are the solution for agents to work reliably in production by packaging procedural knowledge that agents can dynamically load

![](slides/2025-11-21-09-09-gemini-edited.jpg)
![](slides/2025-11-21-09-10-gemini-edited.jpg)
![](slides/2025-11-21-09-11-gemini-edited.jpg)
![](slides/2025-11-21-09-12-gemini-edited.jpg)
![](slides/2025-11-21-09-13-gemini-edited.jpg)
![](slides/2025-11-21-09-14-gemini-edited.jpg)
![](slides/2025-11-21-09-15-gemini-edited.jpg)
![](slides/2025-11-21-09-16-gemini-edited.jpg)
![](slides/2025-11-21-09-17-gemini-edited.jpg)
![](slides/2025-11-21-09-18-gemini-edited.jpg)
![](slides/2025-11-21-09-19-gemini-edited.jpg)
![](slides/2025-11-21-09-20-gemini-edited.jpg)
![](slides/2025-11-21-09-21-gemini-edited.jpg)
![](slides/2025-11-21-09-22-gemini-edited.jpg)
![](slides/2025-11-21-09-23-gemini-edited.jpg)
![](slides/2025-11-21-09-24-gemini-edited.jpg)
![](slides/2025-11-21-09-25-gemini-edited.jpg)
![](slides/2025-11-21-09-26-gemini-edited.jpg)
![](slides/2025-11-21-09-27-gemini-edited.jpg)
![](slides/2025-11-21-09-28-gemini-edited.jpg)
![](slides/2025-11-21-09-29-gemini-edited.jpg)

### Notes

- still notice gaps with agents
- not always experiences for how it works
- the reason why we built skills instead of agents
- claude agent SDK does something out the box
- "code is all you need"
	- we don't need to have multiple agents
- "the agent underneath is more universal that we thought"
	- claude code is general purpose agent
- skills are files and we can use that a way to manage thing
	- can put scripts inside of a skill
- skills are progressively disclosed
	- just the top
	- then when you need more it gets the full file
	- and that can extend to include scripts
- 1000s of skills in the last 5 weeks
- Foundations Skills
	- Document Skills (Anthropic)
	- Scientific Skills (k-dense-ai) scientific research skills
	- Browserbase - automation anything in the browse
	- Notion - notion skills to edit stuff
	- Fortune 100 - org-wide skills
	- Enterprise FinTech for 1000s of SWEs
- trends
	- more complex, production-grade skills
	- complementing MCPs tools
	- non-developers building high-value skills
- Complete picture
	- Agent loop
		- File system
		- MCP Servers
	- Give them a library of skills
- Agent with MCP server and a set of skills
	- Claude for Financial Services
	- Claude for Life Sciences
- How skills evolve in the future
	- Testing and evaluation
- huge value of skills is around sharing and execution
- skill can collect institutional knowledge
- building the skills and sharing them will help make your own agents more capable
- vision of evolving knowledge base
	- especially when claude can make new skills
	- skills makes the concept of memory more tangible
- "We think we've converged on the architecture to build agents"
