---
title: "Data Collection & Quality as the New Bottleneck"
order: 5
header_image: /headers/data-collection-quality-bottleneck.png
topics:
  - "Training Data"
  - "Open Science"
  - "Benchmarks"
  - "Data Quality"
key_speakers:
  - "Nik Pash (Cline)"
  - "Will Hang (OpenAI)"
  - "Cathy Zhou (OpenAI)"
  - "Will Brown (Prime Intellect)"
  - "Joel Becker (METR)"
key_insights:
  - "Agents are collecting good data but not sharing it - keeping datasets closed slows research"
  - "1000 examples can yield 10-point improvements - data quality >> data quantity"
  - "Cline-bench: open-source real-world agent coding benchmark from opt-in user data"
  - "Environments hub democratizes AI research like webapps democratized software"
edited: true
---

"1000 examples can yield 10-point improvements" — OpenAI. 1,000 trajectories of code edit planning yielded a 10-point improvement — Cognition. 100 PyTorch examples got up to a 72% improvement over frontier models — Mako. 150 system-prompt iterations yielded up to a 15% improvement on benchmarks — Arize. Across the board, quality training data for post-training tuning is yielding outsized gains.

OpenAI's [ARFT approach](https://platform.openai.com/docs/guides/reinforcement-fine-tuning) requires four things: well-specified tasks, evals that mirror production, performance that scales with tries, and unhackable rewards. That last one is tricky—Mako's model initially gamed the system until they added judge LLMs. But when the reward function is right, the payoff is transformative.

So small datasets work. The question is: where do you get quality training data?

## Model Strength Over Clever Tricks

[Nik Pash](https://pashpashpash.substack.com), creator of [Cline](https://github.com/cline/cline), put it bluntly: "Agents aren't bottlenecked by clever tricks anymore. Model strength is the main thing." The evidence? Terminus beats everything with minimal tool design—just terminal, grep, filesystem. No clever tool calling. "I'm tired of all the little hacks," Pash said. (In the Claude Agent SDK workshop on Saturday, the refrain was that the team was "bash-pilled"—just give the model a shell and step away.)

![](slides/2025-11-21-11-42-gemini-edited.jpg)

Years of elaborate scaffolding were symptoms of compensating for model limitations. As models improve, those hacks become unnecessary. The bottleneck shifts upstream—to training data.

## Verification is the Unlock

Pash: "A benchmark is an environment, a starting state, and a verifier." Same as an RL environment. The only difference? One measures, one improves. Build good verifiers and you get both evaluation and training.

The tea kettle example nails it. Goal: boil water. The kettle whistles when it's boiling. Good verifier: is it whistling? Bad verifiers: Is the burner on high? Has five minutes elapsed? Is the lid positioned correctly? Outcome-driven verification doesn't care how you got there—just whether you did.

## Real-world Trajectories are the Gold

Real-world agent trajectories are the ground truth. [Joel Becker](https://joel-becker.com) of [METR](https://www.metr.org) has studied the gap between benchmarks and economic impact. Synthetic tests don't predict real-world value. Production trajectories do—they capture the messy multi-step reasoning that actually matters.

This data is being generated right now, at scale. Cline alone has millions of users. Every AI coding agent in production sits on real-world interaction data. Almost none of it is shared.

## Cline-bench

![](slides/2025-11-21-16-37-gemini-edited.jpg)

Pash's answer: [Cline-bench](https://github.com/cline/cline-bench). Open source, open science. It captures coding trajectories from opt-in users and converts them to training data. "Use it on your open source software," he said. "Lift all boats together."

## The Environments Hub

This dovetails with [Will Brown](https://willcb.com)'s work at [Prime Intellect](https://www.primeintellect.ai/). "Environments are the webapps of research," he said. His environments hub provides infrastructure to turn trajectories into training environments anyone can use. Their environments hub lets anyone create, share, and run RL training environments.

![](slides/2025-11-21-11-40-gemini-edited.jpg)

Prime Intellect's thesis: scaling AI means scaling talent, not just compute. Increase the pool. Increase accessibility. Their [Verifiers toolkit](https://github.com/PrimeIntellect-ai/verifiers) provides scaffolding for anyone to build RL environments.

## The Open Science Call

The pieces are in place. Small datasets yield big gains. Verification is understood. Infrastructure exists. But Pash delivered a "truth nuke": agents are collecting good data and not sharing it. Keeping datasets closed slows down research.

Models only get better when trained on something hard. The hardest data—real-world production trajectories—is sitting unused. Pash's bet is on openness. The question is whether the rest of the community will follow.
