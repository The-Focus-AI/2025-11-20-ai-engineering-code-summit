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
edited: true
---

# Context, Memory, and The Harness: Where Product Differentiation Really Happens

Itamar Friedman from https://www.qodo.ai/ presented data showing that 76% of developers don't fully trust AI-generated code. "They don't trust the context that the LLM has." This isn't about model capabilities — it's about whether the harness can maintain enough relevant context while filtering out noise. Qodo's response was to build their Context Engine, which pulls in logs, history, and PR comments to give models the right information at the right time.

![](slides/2025-11-20-12-02-gemini-edited.jpg)

Katelyn Lesse, Head of API Engineering at [Anthropic](https://www.anthropic.com/), is emphatic: "Memory + Context Editing" is "the way to go" for managing Claude's working memory. Memory retrieves relevant context when needed (see [Claude Code docs](https://code.claude.com/docs/en/memory)). Context Editing clears out the cruft—old tool results, unnecessary content—from the context window.

![](slides/2025-11-20-09-08-gemini-edited.jpg)

"Effective agentic systems require both expanding capabilities and managing constraints." Give Claude more tools via MCP and code execution, sure—but also actively manage what stays in memory and what gets pruned. Add features *and* architect the interaction layer.

"For some, the harness might be the special sauce of the product," said OpenAI's Bill Chen. [OpenAI](https://openai.com/)'s Codex? Dozens of trillions of tokens per week. The harness is where steerability meets reliability, where intelligence combines with habit to keep agents useful across model versions.  And we've got plenty of versions of plenty of models.

![](slides/2025-11-20-11-15-gemini-edited.jpg)

"Hard to track the models and we aren't making the problem easier for anybody". Don't bet on any single model. "The harness"—the abstraction layer between models and production: prompts, agent loops, tools, context management. They went against the grain a bit saying that post-training on specific tools made decoupling difficult, though many others seemed to think that the models have moved beyond that low level coupling. But either way, it's nice to see the model profusion acknowledged.

OpenAI claims that prompts don't port well across models, custom tools are out of training distribution, and latency forces context tradeoffs. Maybe so, maybe no, but harness can help manage the chaos better than prompt microtuning ever could. As Chen put it: "Steerability = intelligence + habit. Training has side effects."


[Replit](https://replit.com/)'s VP of AI Michele Catasta has a fix for context pollution: subagents. "Subagent invoked by the core loop with a task and fresh context." Each subagent gets a clean slate, preventing the gradual degradation that happens when irrelevant info piles up in the context window, avoiding "context pollution"

![](slides/2025-11-20-09-29-gemini-edited.jpg)

Replit has 22 million creators, many non-technical. Catasta: more than 30% of features in user-generated apps are broken, and "users don't want to spend time doing testing." They've added in proactive validation features to push through that last bit. Each subagent gets fresh context to help fight the "accumulations of whatevers" (to be honest he might have say accumlation of errors but I like the idea of the carelessness of vibe coding being ultimately the issue of quality.)

Samir Mody at [The Browser Company](https://thebrowser.company/) treats prompting as craft practiced by many team members beyond engineering. They build prompt editing tools right into the product, at least the internal dev builds. This 10x'd iteration speed — both with GEPA based tools to optimization but also working within the actual real world context of the active session. Single-page prompts become multipage skill-generation systems.

The harness is where the game is won or lost. Models keep improving—"new models will raise the trust ceiling"—but the real work is that layer between raw capabilities and production reliability. Parallel tool execution, security sandboxing, context compaction, MCP support. That's the foundation.

Chen's advice: "Build where the models are going." Invest in harnesses that ride the wave of model improvements. Architect for steerability through tools and context management, not just prompt engineering. The "special sauce" isn't in your model choice—it's in the abstraction layer you build around it.
