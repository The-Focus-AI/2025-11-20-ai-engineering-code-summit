---
title: "Environments as Universal Abstraction: The New Unit of Everything"
order: 2
header_image: /headers/environments-universal-abstraction.png
topics:
  - "Environments"
  - "Verification"
  - "Agent Architecture"
  - "Skills & Artifacts"
key_speakers:
  - "Will Brown (Prime Intellect)"
  - "Eno Reyes (Factory AI)"
  - "Nik Pash (Cline)"
  - "Barry Zhang (Anthropic)"
  - "Mahesh Murag (Anthropic)"
  - "Kevin Hou (Google DeepMind)"
key_insights:
  - "A benchmark = environment + starting state + verifier (same as RL environments)"
  - "Environments are the webapps of research - democratizing AI development"
  - "Good verifiers are outcome-driven (is kettle whistling?) not process-driven"
  - "Skills, artifacts, and environments form evolutionary chain for agent capabilities"
edited: true
---

A fundamental architectural insight emerged across multiple sessions: environments have become the universal unit of abstraction for AI engineering. As Will Brown, Research Lead at [Prime Intellect](https://www.primeintellect.ai/), put it: "Environments are the webapps of research." This is a clarifying shift in how we think about training, evaluation, deployment, and iteration of AI systems.

![](slides/2025-11-21-11-44-gemini-edited.jpg)

Eno Reyes, CTO of [Factory AI](https://www.factory.ai/), and Nik Pash, creator of [Cline](https://cline.bot/), independently arrived at the same conclusion: **a benchmark is an environment, a starting state, and a verifier**. RL environments follow the same pattern. "The only real difference is how the reward is used," Pash explained. "One is measure, one is improve." Benchmarks, harnesses, verification systems, RL training grounds—all instances of the task/harness/rewards pattern.

## Verification-Driven Development: The Tea Kettle Example

We have environments and we need verification. Pash's "tea kettle" example: Task is boil water. A good verifier asks one question: Is the kettle whistling? Ignore all the other surface level properties. Bad verifiers ask process questions: Is the burner set to high? Has five minutes elapsed? Is the kettle on the front left burner? Did you filter the water? Outcome-driven—doesn't care how you got there, though those traces can be useful to RL the agentic system itself.

Reyes: "Many tasks are much easier to verify than to solve." Verifiability is the key constraint on AI capability. "The ability to solve is proportional to how verifiable it is for the AI to solve." Focus engineering efforts on creating rigorous verification boundaries, not micromanaging the process.

![](slides/2025-11-21-14-07-gemini-edited.jpg)

## The Environment Hub: From Verification to Skills to Artifacts

Brown's work at Prime Intellect demonstrates how this abstraction scales. His team built the "environments hub" for creating, sharing, and running RL training and evaluations. The architecture treats environments as first-class entities with three components: **task definition, harness for execution, and stream of rewards**. This same pattern appears everywhere in modern AI engineering.

Environments don't exist in isolation—they're part of an evolutionary chain. Barry Zhang and Mahesh Murag from [Anthropic](https://www.anthropic.com/) showed how **Skills** extend this pattern into knowledge management. Skills package procedural knowledge that agents can dynamically load, functioning as progressively disclosed environments for specific capabilities. "Skills collect institutional knowledge," they explained.

![](slides/2025-11-21-09-20-gemini-edited.jpg)

Kevin Hou from [Google DeepMind](https://deepmind.google/) revealed the next step: **artifacts**. In Google's Antigravity IDE, artifacts are "dynamic representations that the agent generates—a representation for you and your use case." Used for self-reflection, communication with users, sharing across accounts. Artifacts themselves become environments—interactive spaces where verification happens visually and multimodally.

![](slides/2025-11-21-17-17-gemini-edited.jpg)

## The Convergence Architecture

Whether you're training models, evaluating capabilities, or deploying agents, the same abstraction applies. Brown: environments work for "research for the sake of research to advance our collective understanding of AI," and for "taking small models and making them much better for custom purposes."

Reyes made the business case explicit. At Factory AI, they've built their entire agent-ready framework around verifiability. "Invest in the environment feedback loop," he urged. "One opinionated engineer can change the velocity of the entire business." The rate limiting step is "your organization's validation criteria."

![](slides/2025-11-21-14-12-gemini-edited.jpg)

Pash's vision for Cline extends this to meta-automation. His team built an "RL environments factory" where subagents qualify tasks and generate verifiable environments from real-world coding work. "The bottleneck should shift from engineering to collecting quality tests," he argued. He announced [Cline-bench](https://github.com/cline/cline-bench), their open-source benchmark, converts opt-in user data into training data, closing the loop from deployment back to training.

## The New Unit of Everything

Environments are the fundamental unit for reasoning about AI systems. Zhang and Murag: "We think we've converged on the architecture to build agents"—an agent loop connecting file systems, MCP servers, and Skills libraries. Underneath, it's all environments: verifiable boundaries where agents act, learn, and improve.

"Environments are the webapps of research," Brown said. Web frameworks made app development accessible; now environment hubs and verification toolkits are "increasing the accessibility of doing AI research." The vision: an "open superintelligent stack"—composable, shareable environments for collective progress.

Whether you're building benchmarks, training with RL, deploying agents, or managing organizational knowledge: **think in environments**. Define the starting state, specify the verifiable outcomes, let the rewards flow. Training, evaluation, and deployment unified into a single framework.
