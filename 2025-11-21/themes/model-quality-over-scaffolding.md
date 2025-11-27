---
title: "Model Quality Over Scaffolding: The Death of Clever Engineering"
order: 4
header_image: /headers/model-quality-over-scaffolding.png
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
edited: true
---
"Agents aren't bottlenecked by clever tricks anymore," said Nik Pash, creator of Cline. After years of elaborate tool architectures and sophisticated scaffolding, the realization: the models are so smart now we should just get out of their way.

[Terminus](https://www.tbench.ai/terminus) works with just a bash tool, and that's enough. (Phrases like bash-pilled were thrown around on the conference floor.) "Capability beats scaffolding," Pash emphasized. The agents that win aren't the ones with sophisticated architectures—they're the ones running on the best base models.

"I'm tired of all the little hacks," Pash confessed. The endless tweaking, prompt engineering tricks, architectural workarounds—all compensating for model limitations. As models improve, these hacks become unnecessary. Worse, they become technical debt.

Lee Robinson from Cursor described Composer—a faster frontier model built with reinforcement learning—operating at "similar intelligence" but with better speed. The key insight: use smart models to make the plan, then let Composer "rip through the code." Deploy the right capability at the right time.

Amp Code, led by Beyang Liu, runs a dual-model system: a "smart" agent for careful reasoning and review, a "rush" agent for speed. But even this architecture exists to manage context, not compensate for model weakness. Liu noted that "tool calls themselves eat up context." The subagents are clean interfaces—the moment a better base model makes them unnecessary, they should disappear.

Joel Becker from [METR](https://metr.org/) connected this to how models improve. Benchmarks determine what frontier models do best: "Everything traces back to the environments they've been training against." A benchmark is an environment, a starting state, and a verifier—conceptually identical to RL environments, except one measures and the other improves.

![](slides/2025-11-21-16-42-gemini-edited.jpg)

Pash is building an "RL environments factory" at Cline—subagents that qualify tasks and create training environments. His tea kettle example: A good verifier asks "Is it whistling?" A bad verifier asks "Is the burner set to high? Has five minutes elapsed? Is the kettle on the front left?" Outcome-driven verification versus procedural checking. Good benchmarks test outcomes; bad benchmarks encode assumptions about methods.

![](slides/2025-11-21-16-36-gemini-edited.jpg)

"Models only get better when labs train on something hard," Pash argued. The bottleneck is model quality. Model quality depends on training data. So the critical resource isn't engineering talent—it's quality data from real engineering work. Pash's answer: [Cline-bench](https://github.com/cline/cline-bench), an open-source benchmark built from opt-in user data. "Keeping datasets closed slows down research."

We're building agents to collect data that trains better models that make our scaffolding unnecessary. The bottleneck shifts from engineering to collecting quality tests. Building better base models matters more than clever tricks around mediocre ones. "The model strength is the main thing," Pash said. Everything else is commentary.
