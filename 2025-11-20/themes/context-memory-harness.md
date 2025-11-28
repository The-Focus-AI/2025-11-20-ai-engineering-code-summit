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
  - "76% of developers don't trust AI code because they don't trust the context"
  - "The harness is the competitive advantage - models commoditize, abstraction layers don't"
  - "OpenAI processes dozens of trillions of tokens per week through their harness"
  - "Steerability = intelligence + habit - the harness drives steering better than prompts"
edited: true
---

[Qodo](https://www.qodo.ai/)'s Itamar Friedman presented data: 76% of developers don't fully trust AI-generated code. "They don't trust the context that the LLM has." This isn't about model capabilities—it's about whether the harness can maintain enough relevant context while filtering out noise.

![](slides/2025-11-20-12-02-gemini-edited.jpg)

Qodo's Context Engine pulls in logs, history, and PR comments to give models the right information at the right time. The quality issues teams face split into code-level problems (security vulnerabilities, insufficient test coverage, technical debt) and process-level challenges (learning gaps, inadequate verification, missing guardrails).

![](slides/2025-11-20-12-09-gemini-edited.jpg)

Katelyn Lesse, Head of API Engineering at [Anthropic](https://www.anthropic.com/), is emphatic: "Memory + Context Editing" is "the way to go" for managing Claude's working memory. Memory retrieves relevant context when needed. Context Editing clears out the cruft—old tool results, unnecessary content—from the context window.

![](slides/2025-11-20-09-08-gemini-edited.jpg)

"Effective agentic systems require both expanding capabilities and managing constraints." Give Claude more tools via MCP and code execution—but also actively manage what stays in memory and what gets pruned. Add features *and* architect the interaction layer.

"For some, the harness might be the special sauce of the product," said [OpenAI](https://openai.com/)'s Bill Chen. Codex processes dozens of trillions of tokens per week. The harness is where steerability meets reliability, where intelligence combines with habit to keep agents useful across model versions.

![](slides/2025-11-20-11-15-gemini-edited.jpg)

"Hard to track the models and we aren't making the problem easier for anybody." Don't bet on any single model. "The harness"—the abstraction layer between models and production: prompts, agent loops, tools, context management. OpenAI claims prompts don't port well across models, custom tools are out of training distribution, and latency forces context tradeoffs. The harness can help manage the chaos better than prompt microtuning ever could. As Chen put it: "Steerability = intelligence + habit."

[Replit](https://replit.com/)'s VP of AI Michele Catasta has a fix for context pollution: subagents. "Subagent invoked by the core loop with a task and fresh context." Each subagent gets a clean slate, preventing the gradual degradation when irrelevant info piles up in the context window.

![](slides/2025-11-20-09-29-gemini-edited.jpg)

[The Browser Company](https://thebrowser.company/)'s Samir Mody treats prompting as craft practiced by many team members beyond engineering. They build prompt editing tools right into internal dev builds. This 10x'd iteration speed. Single-page prompts become multipage skill-generation systems.

The harness is where the game is won or lost. Models keep improving—"new models will raise the trust ceiling"—but the real work is that layer between raw capabilities and production reliability. Parallel tool execution, security sandboxing, context compaction, MCP support. Chen's advice: "Build where the models are going." The special sauce isn't in your model choice—it's in the abstraction layer you build around it.
