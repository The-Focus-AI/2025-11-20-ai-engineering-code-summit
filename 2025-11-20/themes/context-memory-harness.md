---
title: "Context, Memory, and The Harness: Where Product Differentiation Really Happens"
order: 2
header_image: /headers/context-memory-harness.png
topics:
  - "Context & Memory"
  - "Agent Architecture"
  - "Product Differentiation"
  - "Model Context Protocol"
key_speakers:
  - "Bill Chen (OpenAI)"
  - "Brian Fioca (OpenAI)"
  - "Michele Catasta (Replit)"
  - "Katelyn Lesse (Anthropic)"
  - "Itamar Friedman (Qodo)"
  - "Samir Mody (Browser Company)"
key_insights:
  - "The harness is the competitive advantage - models commoditize, abstraction layers don't"
  - "OpenAI processes dozens of trillions of tokens per week through their harness"
  - "76% of developers don't trust AI code because they don't trust the context"
  - "Steerability = intelligence + habit - the harness drives steering better than prompts"
---

# Context, Memory, and The Harness: Where Product Differentiation Really Happens

When OpenAI's Bill Chen and Brian Fioca took the stage at the AI Engineering Code Summit, they delivered a wake-up call: "Hard to track the models and we aren't making the problem easier for anybody." The ground is shifting so fast beneath our feet that betting on any single model is a recipe for obsolescence. Instead, they argued, the real competitive advantage lies in what they call "the harness"—the critical abstraction layer between models and production systems that encompasses prompts, agent loops, tools, and context management.

![](slides/2025-11-20-10-22-gemini-edited.jpg)

"For some, the harness might be the special sauce of the product," Chen explained. At OpenAI, they've seen this play out across their Codex platform, which now processes dozens of trillions of tokens per week. The harness isn't just technical plumbing; it's the strategic surface area where steerability meets reliability, where intelligence combines with habit to create agents that remain useful across model versions.

The challenge is real. Custom tools can be out of distribution—models simply don't know how to use them without careful prompt engineering. Prompts themselves have poor portability across models. And latency issues force careful context management decisions. OpenAI's answer? Build tools like Codex Map that handle context management automatically, and design harnesses that drive steering better than prompt microtuning ever could. As Chen put it: "Steerability = intelligence + habit. Training has side effects."

![](slides/2025-11-20-10-25-gemini-edited.jpg)

This convergence on context management wasn't limited to OpenAI. Across the summit, speakers returned again and again to the problem of keeping models focused and effective. At Replit, VP of AI Michele Catasta described how his team protects their main agent's working memory through an elegant architectural pattern: "Subagent invoked by the core loop with a task and fresh context." This approach prevents what Catasta calls "context pollution"—the gradual degradation of agent performance as irrelevant information accumulates in the context window.

For Replit's 22 million creators, many of whom are non-technical users, this architecture solves a critical UX problem. Catasta noted that more than 30% of features in user-generated apps are broken, and "users don't want to spend time doing testing." By giving subagents fresh context for each task, Replit prevents the "accumulation of small errors" and overcomes what Catasta wryly termed the "accumulations of whatevers" that plague frontier models. The core loop acts as orchestrator, deciding parallelism on the fly while maintaining a clean separation of concerns.

![](slides/2025-11-20-09-29-gemini-edited.jpg)

At Anthropic, Head of API Engineering Katelyn Lesse offered a complementary perspective on context management. Her team has built what she calls "Memory + Context Editing"—and she's emphatic that this combination is "the way to go" for managing Claude's working memory. The Memory tool retrieves relevant context when needed, initially implemented through the file system. But the real innovation is Context Editing, which allows developers to manually clear unnecessary content, especially old tool results, from the context window.

![](slides/2025-11-20-08-49-gemini-edited.jpg)

"Effective agentic systems require both expanding capabilities and managing constraints," Lesse explained. It's not enough to give Claude more tools through MCP (Model Context Protocol) and code execution capabilities. You must also actively manage what stays in memory and what gets pruned. This dual focus—expansion and management—echoes the harness philosophy that Chen and Fioca articulated: the best systems don't just add features, they architect the entire interaction layer.

The importance of this architecture becomes clear when you consider the trust problem. Itamar Friedman from Qodo presented data showing that 76% of developers don't fully trust AI-generated code. When he asked why, the answer was revealing: "They don't trust the context that the LLM has." This isn't just about model capabilities—it's about whether the harness can maintain enough relevant context while filtering out noise. Qodo's response was to build their Context Engine, which pulls in logs, history, and PR comments to give models the right information at the right time.

![](slides/2025-11-20-12-02-gemini-edited.jpg)

The Browser Company's Samir Mody added another dimension to this conversation: treating model behavior as a craft. His team built prompt editors directly into their dev tools, moving all prompts into the browser itself. This 10x'd their iteration speed because engineers could ideate with full context. They even implemented GEPA (a prompt optimization technique) for hill-climbing refinement, turning what might have been a single-page prompt into a multipage system for generating skills based on user input.

What emerges from these conversations is a clear consensus: the harness is where the game is won or lost. Models will continue to improve—Chen and Fioca predict that "new models will raise the trust ceiling"—but the real differentiation happens in how you architect the layer between raw model capabilities and production reliability. Parallel tool execution, security sandboxing, context compaction, MCP support—these aren't ancillary features. They're the foundation on which autonomous agents are built.

As Chen advised: "Build where the models are going." That means investing in harnesses that can ride the wave of model improvements instead of drowning in constant rewrites. It means architecting for steerability through tools and context management, not just prompt engineering. And it means recognizing that the "special sauce" isn't in your model choice—it's in the abstraction layer you build around it.
