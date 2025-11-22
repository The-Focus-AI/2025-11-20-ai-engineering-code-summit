## 2:25pm - 2:44pm | Amp Code: Next-Generation AI Coding

**Speaker:** Beyang Liu, Co-founder & CTO, Amp Code / Sourcegraph

**Speaker Profile:** [Full Speaker Profile](../speakers/beyang-liu.md)

**Bio:** Co-founder & CTO, Amp Code / Sourcegraph

**Topic:** Introduction to Amp Code and its approach to AI-powered software development

![](slides/2025-11-21-14-24-gemini-edited.jpg)
![](slides/2025-11-21-14-25-gemini-edited.jpg)
![](slides/2025-11-21-14-26-gemini-edited.jpg)
![](slides/2025-11-21-14-27-gemini-edited.jpg)
![](slides/2025-11-21-14-28-gemini-edited.jpg)
![](slides/2025-11-21-14-29-gemini-edited.jpg)
![](slides/2025-11-21-14-30-gemini-edited.jpg)
![](slides/2025-11-21-14-31-gemini-edited.jpg)
![](slides/2025-11-21-14-32-gemini-edited.jpg)
![](slides/2025-11-21-14-33-gemini-edited.jpg)
![](slides/2025-11-21-14-34-gemini-edited.jpg)
![](slides/2025-11-21-14-35-gemini-edited.jpg)
![](slides/2025-11-21-14-36-gemini-edited.jpg)
![](slides/2025-11-21-14-37-gemini-edited.jpg)
![](slides/2025-11-21-14-38-gemini-edited.jpg)
![](slides/2025-11-21-14-39-gemini-edited.jpg)
![](slides/2025-11-21-14-40-gemini-edited.jpg)
![](slides/2025-11-21-14-41-gemini-edited.jpg)
![](slides/2025-11-21-14-42-gemini-edited.jpg)
![](slides/2025-11-21-14-43-gemini-edited.jpg)

### Notes

- quiry
- connects to emacs or whatever other editor
- wrote their own tui
- "having found the motivations yet to fork vs code"
- most of the time doing code review
	- (smarter linting)
- why is this different
	- mcp or customer tools
		- focus most of our attention on the internal tools calls of amp
		- avoiding context confusion with having too many mcps tools
		- tool calls themselves eat up context (context management again!)
		- subagents are the solve to clean up the context messiness
			- conserve and extend the context
			- 4 major subagents
				- finder -> codebase search
				- oracle -> reasoning, careful review (this is how amp does reasoning)
				- librarian -> library use
				- kraken -> refactoring model
	- models vs agents
		- smart agent
			- oracle
			- librarian
			- finder
		- rush
			- quick path
		- between intelligence and speed

	- to reason to not reason
		- only switch the main model a few days ago
	- gui vs tui
		- we are doing both
		- an editor is more of a "readitor"
		- very fleshed out diff editor and how to explore what you see

	- smart or face
	- is coding still a craft
	- smart or cheap
		- rush models aren't free but close
		- costs
		- the have ads inside!
* We need to relearn the craft of how to code together
	* the ability to share threads with each other
	* there's a link here to midjourney/discord that is really interesting
* buildcrew.team
