---
title: "Model Quality Over Scaffolding: The Death of Clever Engineering"
topics:
  - "Model Capability"
  - "Minimalism"
  - "Agent Architecture"
  - "Benchmarks & Training"
key_speakers:
  - "Nik Pash (Cline)"
  - "Lee Robinson (Cursor)"
  - "Beyang Liu (Amp Code)"
  - "Joel Becker (METR)"
key_insights:
  - "Agents aren't bottlenecked by clever tricks anymore - model strength is the main thing"
  - "Terminus beats everything with minimal tool design and no clever tool calling"
  - "Capability beats scaffolding - minimalism wins"
  - "Models only get better when labs train on something hard"
---

# Model Quality Over Scaffolding: The Death of Clever Engineering

"Agents aren't bottlenecked by clever tricks anymore," declared Nik Pash, creator of Cline, in what may be the most consequential insight from the AI Engineering Code Summit. After years of elaborate tool architectures, complex agent frameworks, and sophisticated scaffolding systems, the industry is experiencing a fundamental realization: **the quality of the model is the main thing**. Everything else—the clever engineering, the intricate tool-calling patterns, the elaborate agent orchestration—is rapidly becoming noise.

![](slides/2025-11-21-16-30-gemini-edited.jpg)

The evidence is stark and undeniable. Terminus, with its minimal tool design and no clever tool calling whatsoever, still beats everything on the market. This isn't a fluke or an exception—it's a signal. "Capability beats scaffolding," Pash emphasized, and the data backs him up completely. The agents that win aren't the ones with the most sophisticated architectures; they're the ones running on the best base models. Period.

This represents a profound shift in how we think about building AI coding tools. For years, engineers have focused on crafting elaborate systems—complex retrieval pipelines, sophisticated context management, clever tool-calling patterns, multi-agent orchestration. But Pash's experience at Cline reveals a different story: **minimalism wins**. The basic tools—terminal, grep, filesystem, native tool calling—are all you really need. The rest is distraction.

![](slides/2025-11-21-16-33-gemini-edited.jpg)

"I'm tired of all the little hacks," Pash confessed, expressing a sentiment that resonates across the industry. The endless tweaking, the prompt engineering tricks, the architectural workarounds—they're all symptoms of trying to compensate for model limitations. But as models improve, these hacks become unnecessary. Worse, they become technical debt that obscures what actually matters.

The speed-versus-intelligence tradeoff, however, reveals an important nuance. Lee Robinson from Cursor described how Composer—their faster frontier model built with reinforcement learning—operates at "similar intelligence" but with dramatically improved speed. Users love the responsiveness. The key insight: use smart models to make the plan, then let Composer "rip through the code." This isn't about replacing intelligence with speed; it's about deploying the right capability at the right time.

Amp Code, led by Beyang Liu, has formalized this approach with their dual-model system. Their "smart" agent—powered by Oracle, Librarian, and Finder subagents—handles careful reasoning and review. Their "rush" agent takes the quick path, trading some intelligence for speed. This isn't scaffolding for scaffolding's sake; it's recognizing that different tasks have different requirements. Sometimes you need deep reasoning; sometimes you just need fast execution.

![](slides/2025-11-21-14-30-gemini-edited.jpg)

But crucially, even Amp's sophisticated subagent architecture exists primarily to manage context, not to compensate for model weakness. Liu was explicit about avoiding "context confusion" from too many MCP tools, noting that "tool calls themselves eat up context." The subagents aren't clever tricks—they're clean interfaces to specific capabilities. The moment a better base model makes them unnecessary, they should disappear.

Joel Becker from METR connected this to the deeper question of how models actually improve. Benchmarks, he argued, determine what frontier models do best: "Everything traces back to the environments they've been training against." A benchmark is just an environment, a starting state, and a verifier—conceptually identical to RL environments, except one measures and the other improves.

![](slides/2025-11-21-16-42-gemini-edited.jpg)

Pash took this insight seriously, building what he calls an "RL environments factory" at Cline. The goal: get subagents to qualify tasks and create good training environments. His tea kettle example perfectly illustrates the principle. A good verifier asks: "Is it whistling?" A bad verifier asks: "Is the burner set to high? Has five minutes elapsed? Is the kettle on the front left?" The difference is outcome-driven verification versus procedural checking. Good benchmarks test for outcomes; bad benchmarks encode assumptions about methods.

![](slides/2025-11-21-16-36-gemini-edited.jpg)

This has massive implications. "Models only get better when labs train on something hard," Pash argued. If the industry's bottleneck is model quality, and model quality depends on training data, then the critical resource isn't engineering talent—it's quality training data from real engineering work. Pash called for a "truth nuke" (or "truke"): agents should publish their datasets openly. "Keeping them closed slows down research." His answer: **Cline-bench**, an open-source, real-world agent coding benchmark built from opt-in user data.

The meta-question haunting all this: how meta can we get? If the real work is collecting good tests that improve models, and we're building agents to collect that data, are we building infrastructure to accelerate model improvement or just elaborate data pipelines? Pash's answer seems to be: both, and that's the point. The bottleneck should shift "from engineering to collecting quality tests."

This isn't nihilism about engineering. It's clarity about where engineering effort should go. Building better base models matters infinitely more than building better scaffolding around mediocre models. The age of clever tricks is ending. The age of capability is here. As Pash put it with characteristic directness: "The model strength is the main thing." Everything else is commentary.
