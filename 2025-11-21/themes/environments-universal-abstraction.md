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
  - "Environments are the webapps of research - democratizing AI development"
  - "A benchmark = environment + starting state + verifier (same as RL environments)"
  - "Good verifiers are outcome-driven (is kettle whistling?) not process-driven"
  - "Skills, artifacts, and environments form evolutionary chain for agent capabilities"
---

# Environments as Universal Abstraction: The New Unit of Everything

A fundamental architectural insight emerged across multiple sessions: **environments have become the universal unit of abstraction** for AI engineering. As Will Brown, Research Lead at Prime Intellect, succinctly put it: "Environments are the webapps of research." This convergence represents more than a technical pattern—it's a paradigm shift in how we think about training, evaluation, deployment, and iteration of AI systems.

![](slides/2025-11-21-11-38-gemini-edited.jpg)

The insight crystalized when Eno Reyes, CTO of Factory AI, and Nik Pash, creator of Cline, independently arrived at the same conclusion: **a benchmark is an environment, a starting state, and a verifier**. RL environments follow the same pattern. "The only real difference is how the reward is used," Pash explained. "One is measure, one is improve." This convergence reveals that what we've been calling different things—benchmarks, harnesses, verification systems, RL training grounds—are all instances of the same fundamental abstraction: the task/harness/rewards pattern.

## Verification-Driven Development: The Tea Kettle Example

The power of this abstraction becomes clear through Pash's "tea kettle" verification example. Consider the task: boil water. A good verifier asks one question: **Is the kettle whistling?** This is pure outcome-driven verification—it doesn't care how you achieved the result. Bad verifiers, by contrast, ask process questions: Is the burner set to high? Has five minutes elapsed? Is the kettle on the front left burner? Did you filter the water? Is the lid positioned correctly?

This distinction between outcome-driven and process-driven verification is foundational. Reyes emphasized that "many tasks are much easier to verify than to solve," making verifiability the key constraint on AI capability. "The ability to solve is proportional to how verifiable it is for the AI to solve," he noted. The implication is profound: we should focus our engineering efforts on creating rigorous verification boundaries, not on micromanaging the process.

![](slides/2025-11-21-14-07-gemini-edited.jpg)

## The Environment Hub: From Verification to Skills to Artifacts

Brown's work at Prime Intellect demonstrates how this abstraction scales. His team built the "environments hub" for creating, sharing, and running RL training and evaluations. The architecture treats environments as first-class entities with three components: **task definition, harness for execution, and stream of rewards**. This same pattern appears everywhere in modern AI engineering.

![](slides/2025-11-21-11-41-gemini-edited.jpg)

But environments don't exist in isolation—they're part of an evolutionary chain. Barry Zhang and Mahesh Murag from Anthropic showed how **Skills** extend this pattern into knowledge management. Skills package procedural knowledge that agents can dynamically load, functioning as progressively disclosed environments for specific capabilities. "Skills collect institutional knowledge," they explained, creating an evolving knowledge base that makes the concept of memory more tangible.

![](slides/2025-11-21-09-20-gemini-edited.jpg)

Kevin Hou from Google DeepMind revealed the next step in this evolution: **artifacts**. In Google's Antigravity IDE, artifacts are "dynamic representations that the agent generates—a representation for you and your use case." Artifacts can be used for self-reflection, communication with users, and sharing across accounts. Critically, artifacts themselves become environments—interactive spaces where verification happens visually and multimodally.

![](slides/2025-11-21-17-17-gemini-edited.jpg)

## The Convergence Architecture

What makes this convergence so powerful is its universality. Brown demonstrated that whether you're training models, evaluating capabilities, or deploying agents, the same abstraction applies. At Prime Intellect, researchers use environments for "research for the sake of research to advance our collective understanding of AI," but the same patterns work for "taking small models and making them much better for custom purposes."

![](slides/2025-11-21-11-44-gemini-edited.jpg)

Reyes made the business case explicit. At Factory AI, they've built their entire agent-ready framework around verifiability. "Invest in the environment feedback loop," he urged. "One opinionated engineer can change the velocity of the entire business." The limit isn't AI capability—it's "your organization's validation criteria." By specifying constraints through verifiable environments, companies can measure results through objective metrics rather than subjective assessment.

Pash's vision for Cline extends this to meta-automation. His team built an "RL environments factory" where subagents qualify tasks and generate verifiable environments from real-world coding work. "The bottleneck should shift from engineering to collecting quality tests," he argued. Cline-bench, their open-source benchmark, converts opt-in user data into training data, closing the loop from deployment back to training.

## The New Unit of Everything

This convergence reveals that environments are more than infrastructure—they're the fundamental unit for reasoning about AI systems. When Zhang and Murag declared "We think we've converged on the architecture to build agents," they were describing an agent loop that connects file systems, MCP servers, and Skills libraries. But underneath, it's all environments: verifiable boundaries where agents can act, learn, and improve.

Brown's assertion that "environments are the webapps of research" captures the democratizing potential. Just as web frameworks made application development accessible, environment hubs and verification toolkits are "increasing the accessibility of doing AI research." The vision is an "open superintelligent stack" where environments serve as the composable, shareable unit for collective progress.

The architectural insight is clear: whether you're building benchmarks, training with RL, deploying agents, or managing organizational knowledge, **think in environments**. Define the starting state, specify the verifiable outcomes, and let the rewards flow. This abstraction unifies training, evaluation, and deployment into a single conceptual framework—the new unit of everything in AI engineering.
