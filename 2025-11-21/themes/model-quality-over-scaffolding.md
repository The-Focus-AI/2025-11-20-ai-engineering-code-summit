---
title: "Model Quality Over Scaffolding: Minimalism in Agent Architecture"
order: 4
header_image: /headers/model-quality-over-scaffolding.png
topics:
  - "Model Capability"
  - "Minimalism"
  - "Agent Architecture"
  - "Multi-Model Systems"
key_speakers:
  - "Lee Robinson (Cursor)"
  - "Beyang Liu (Amp Code)"
  - "Joel Becker (METR)"
key_insights:
  - "Use smart models to plan, fast models to execute - deploy the right capability at the right time"
  - "Subagents exist to manage context, not compensate for model weakness"
  - "Tool calls eat up context - clean interfaces should disappear when better models arrive"
  - "Benchmarks determine what frontier models do best - everything traces back to training environments"
edited: true
---

The shift away from elaborate agent scaffolding is already visible in production systems. As base models improve, the architectural patterns that compensate for their limitations become unnecessary overhead. The question for agent builders: what's the minimum viable architecture?

## Cursor: Smart Planning, Fast Execution

Lee Robinson from [Cursor](https://cursor.com/) described their approach with Composer—a faster frontier model built with reinforcement learning. Composer operates at "similar intelligence" to larger models but with dramatically better speed.

The key insight: **use smart models to make the plan, then let Composer "rip through the code."** Deploy the right capability at the right time. Planning requires careful reasoning; execution can be fast once the path is clear.

![](slides/2025-11-21-11-42-gemini-edited.jpg)

This isn't about choosing between intelligence and speed—it's about recognizing that different phases of work have different requirements. The architectural decision is when to invoke which capability.

## Amp Code: Subagents for Context, Not Capability

[Amp Code](https://ampcode.com/), led by Beyang Liu, runs a dual-model system: a "smart" agent for careful reasoning and review, a "rush" agent for speed. But Liu was explicit about the purpose: this architecture exists to **manage context, not compensate for model weakness**.

![](slides/2025-11-21-14-29-gemini-edited.jpg)

"Tool calls themselves eat up context," Liu noted. Each tool invocation consumes tokens that could otherwise hold problem context. Amp's four specialized subagents—Finder (codebase search), Oracle (reasoning), Librarian (library use), Kraken (refactoring)—are clean interfaces that isolate concerns.

The telling detail: "The moment a better base model makes them unnecessary, they should disappear." The architecture is provisional, designed to be obsoleted by model improvements.

## METR: Benchmarks Shape Models

Joel Becker from [METR](https://metr.org/) connected architectural choices to how models improve. "Benchmarks determine what frontier models do best," he observed. "Everything traces back to the environments they've been training against."

![](slides/2025-11-21-16-42-gemini-edited.jpg)

This creates a feedback loop. The benchmarks we build determine what capabilities frontier models develop. If we benchmark for elaborate tool use, models optimize for elaborate tool use. If we benchmark for simple, effective solutions, models optimize for simplicity.

The implication for agent builders: the scaffolding we build today may be training signal for tomorrow's models. Build what you want models to learn.

## The Minimalist Thesis

The pattern across these production systems is clear: architecture should be minimal and provisional. Use multiple models when context management requires it, not because any single model is inadequate. Build clean interfaces that can disappear. Recognize that today's workarounds become tomorrow's technical debt.

The agents that win aren't the ones with sophisticated architectures—they're the ones that deploy the right model capability at the right moment, with the minimum structure required to manage context effectively.
