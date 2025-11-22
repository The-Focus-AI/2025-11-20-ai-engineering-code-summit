# Katelyn Lesse (Anthropic) - Evolving Claude APIs for Agents

**Time:** 8:49 AM (approx)

**Speaker Bio:** Head of API Engineering at Anthropic. Previously worked at Stripe and Betterment. Leading the Claude Developer Platform.

**Company:** Anthropic develops Claude, with capabilities including parallel tool execution, Model Context Protocol (MCP), and extended thinking with tool use.

**Focus:** Understand how Anthropic's latest Claude APIs enable developers to build "unhobbled" autonomous agents that can work for hours on complex tasks. Pay attention to MCP and context management features.

## Slides

![](slides/2025-11-20-08-49-gemini-edited.jpg)
![](slides/2025-11-20-08-50-gemini-edited.jpg)
![](slides/2025-11-20-09-08-gemini-edited.jpg)

## Notes

* Building powerful agentic systems using claude
* "Give claude a computer"
* Claude running tools
	* How does this fit in with skills
* Managing context window
* MCP as a way to interact with external systems
* Memory tool as a way to bring back info into the context when you need it
	* First version is the file system
	* https://code.claude.com/docs/en/memory
* Context editing
	* Helps you clear things out that shouldn't be in the window
	* Clearing out tool results
* Memory tool with context editing -> the way to go
* Code execution tool
	* Can we do this with dagger

Anthropic is hiring

## Key Points Summary

**Core Thesis:** Building powerful agentic systems by giving Claude computer access and the right tools

**Main Components:**

1. **Tool Integration** - Claude running tools directly, with Skills as a framework for specialized capabilities
2. **MCP (Model Context Protocol)** - Standard way to connect Claude to external systems and data sources
3. **Memory System** - Retrieves relevant context when needed (file system-based initially)
4. **Context Editing** - Manually clear unnecessary content (especially old tool results) from the window
5. **Best Practice:** Memory tool + context editing together = optimal context management
6. **Code Execution** - Native tool (question: Can Dagger be used here?)

**Bottom Line:** Effective agentic systems require both expanding capabilities (tools, MCP) and managing constraints (memory, context editing)

---

## Tweet Options

**Concise version:** Building powerful agentic systems with Claude: Give it computer access, connect external systems via MCP, manage context with memory + editing, and let it execute code. The key is balancing capability expansion with smart context management.

**Technical version:** Claude agentic system stack: • Tools + Skills for capabilities • MCP for external integrations
• Memory tool for context retrieval • Context editing to clear bloat Combo of memory + editing = the way to manage your context window effectively

**Punchy version:** Want powerful Claude agents? Give Claude a computer, connect it to your systems (MCP), manage the context window smartly (memory + editing), and let it execute code. Context management is just as critical as capability expansion.

Which style fits your audience best?
