---
title: "SDLC Evolution: Good Software Engineering Practices, Amplified"
order: 3
header_image: /headers/sdlc-evolution-amplified-practices.png
topics:
  - "Code Quality"
  - "Testing & Validation"
  - "SDLC"
  - "Technical Debt"
key_speakers:
  - "Yegor Denisov-Blanch (Stanford)"
  - "Itamar Friedman (Qodo)"
  - "Michele Catasta (Replit)"
  - "Max Kanat-Alexander (Capital One)"
  - "Martin Harrysson (McKinsey)"
  - "Natasha Maniar (McKinsey)"
key_insights:
  - "AI doesn't eliminate need for good process - it makes good process more valuable"
  - "Clean code amplifies AI gains dramatically - environment cleanliness predicts productivity"
  - "Code review is the new bottleneck - more PRs, not buggier PRs"
  - "Every software developer becomes a code reviewer"

edited: true
---

New technologies have always driven new development methodologies. Mainframes gave us waterfall. Web and client-server brought agile. Cloud and APIs enabled product and platform development. Now AI coding assistants are driving "AI-native dev"—the next evolution.

![](slides/2025-11-20-11-21-gemini-edited.jpg)

Stanford's research quantified the "rich gets richer effect"—teams with clean codebases see dramatically higher AI productivity gains than messy ones. The gap is widening rapidly, threatening to bifurcate the software industry. (See [The ROI Reality Check](./roi-reality-check) for the specific findings from Yegor Denisov-Blanch's study of 120,000 engineers.)

What actually predicts productivity gains is the environment cleanliness index—how well-structured, documented, and maintainable a codebase is. Token usage? Not predictive. Your technical debt backlog just became a competitive liability.

Stanford modeled five levels of AI engineering: no AI use, opportunistic prompting, systematic prompting, agent-backed development, and orchestrated agentic workflows. Progression isn't automatic. It requires code quality, testing infrastructure, documentation, and deterministic validation—things the industry has treated as optional. They're not.

## The New Bottleneck: Code Review

Developers increasingly use AI assistants but don't fully trust the output. The real problem isn't buggy code—it's volume. "More bugs because there are more PRs, not because the PRs are buggier." Code review is now the bottleneck. (See [Context, Memory, and The Harness](./context-memory-harness) for the trust data from Qodo's Itamar Friedman.)

Friedman's solution: autonomous testing and intelligent code review backed by context. Qodo's Context Engine pulls from logs, history, and PR comments to give AI reviewers situational awareness. "Don't accept this PR unless there is a minimum of testing." With rigorous standards, AI-assisted review can deliver 2x productivity gains.

Max Kanat-Alexander from Capital One reinforces this: "You have to encourage great reviews that hold a high bar and reject code that doesn't meet it." Junior engineers learn about coding and reviewing by getting reviews from seniors. The same process that trains humans trains the organizational muscle for AI review.

![](slides/2025-11-20-15-16-gemini-edited.jpg)

## Autonomous Testing in Practice

[Replit](https://replit.com/)'s Michele Catasta (VP of AI, ex-Google Labs) showed these principles in practice. Replit's agents build apps for 22 million creators, many non-technical. The key insight: autonomous testing breaks the feedback bottleneck and prevents "accumulations of whatevers"—the slow drift toward broken features.

![](slides/2025-11-20-09-31-gemini-edited.jpg)

Catasta presents a spectrum of code verification—from fast/cheap code-level testing (LSP, unit tests) to slow/expensive user-interface testing (browser use, computer use). The tradeoff between supervision level and resource requirements shapes how you architect autonomous agents.

McKinsey (Martin Harrysson, Natasha Maniar) corroborates from organizational research: successful AI adoption requires "getting a lot of small things right"—shorter sprints, smaller teams. AI doesn't eliminate the need for good process; it makes good process more valuable.

"We spend more time reading code than writing it, and even more so now. Every software developer becomes a code reviewer." Clear structure, comprehensive tests, explicit documentation—these enable humans to review code and AI to generate it. AI amplifies disciplined engineering. Without discipline, it offers little advantage.
