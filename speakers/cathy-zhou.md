---
name: Cathy Zhou
company: OpenAI
company_url: "https://www.openai.com"
role: Member of Technical Staff
session: Agent Reinforcement Fine Tuning
session_file: 2025-11-21/11-21-12-00-will-hang-cathy-zhou-openai.md
linkedin: null
twitter: cathyzbn
twitter_url: "https://twitter.com/cathyzbn"
github: cathyzbn
github_url: "https://github.com/cathyzbn"
website: null
image: "/photos/cathy-zhou.jpg"
---

Member of Technical Staff at OpenAI's fine-tuning team, pioneering Agent Reinforcement Fine-Tuning (ARFT) - the industry's first approach enabling agents to access external tools and APIs during training. Leading the development of custom reward functions and tool-aware training systems that make specialized AI agents possible.

## Pioneering Tool-Aware Agent Training

Cathy Zhou is at the forefront of a fundamental shift in how AI agents learn. As part of OpenAI's fine-tuning team, she developed ARFT, which marks the first time OpenAI allowed agents to access external tools during the training process - not just at inference time.

This breakthrough enables agents to learn the semantics of tools, understand when to call them, and optimize for domain-specific behaviors. The result: agents that are faster, more specialized, and capable of handling customer-specific toolsets with dramatically improved performance.

## Philosophy: Three Levels Before Fine-Tuning

Cathy advocates for a systematic progression before reaching for ARFT:

1. **Prompt Engineering** - Steer models through better prompts
2. **Task Optimization** - Refine tools and interfaces
3. **Fine-Tuning (ARFT)** - Only then, change model weights

Her emphasis on data quality over quantity has proven critical: customers achieve 10-point improvements with just 1000 well-crafted examples. The minimum viable dataset is 10-100 examples, but performance scales with thoughtful data collection.

## Real-World Impact

Cathy's work has enabled breakthrough applications across multiple domains:

- **Cognition** - Code edit planning agents learning parallel tool calls, 10-point improvement with 1000 examples
- **Qodo** - Code review agents with stabilized behavior and reduced long-tail tool calls
- **Cosine** - Enterprise agents integrating 30 tools with strict, no-partial-credit grading
- **Mako** - GPU kernel builders achieving 72% improvement over frontier models

Each success story reinforces core principles: well-specified tasks, production-aligned evaluation, unhackable reward functions, and continuous feedback loops.

## Technical Challenges & Solutions

**Reward hacking** remains the hardest problem. Models are sophisticated enough to game reward functions in unexpected ways. Cathy's team addresses this through judge LLMs that evaluate quality and prevent gaming - particularly valuable for assessing code style, architectural decisions, and validation practices.

**Domain shift** occurs when agents learn to call training-distribution tools rather than customer-specific ones. The solution: careful reward design and production-aligned evaluation that mirrors real-world behavior.

## Background

Before OpenAI, Cathy studied CS + Math at Stanford, focusing on computer vision and AI/ML. Her technical foundation spans neural networks, reinforcement learning systems, and large-scale training infrastructure.

## Conference Appearance

**Event:** AI Engineering Code Summit 2025
**Date:** November 21, 2025
**Time:** 12:00 PM - 12:19 PM
**Session:** Agent Reinforcement Fine Tuning (with Will Hang)

Cathy presented real customer success stories and the technical principles enabling effective agent fine-tuning. Her talk covered the prerequisites for ARFT success, the importance of reward function design, and practical lessons from production deployments across code editing, code review, enterprise tooling, and GPU kernel generation.
