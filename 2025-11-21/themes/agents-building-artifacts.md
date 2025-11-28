---
title: "Skills and Artifacts: The New Building Blocks for Agents"
order: 3
header_image: /headers/agents-building-artifacts.png
topics:
  - "Skills"
  - "Artifacts"
  - "Agent Architecture"
  - "Democratization"
key_speakers:
  - "Barry Zhang (Anthropic)"
  - "Mahesh Murag (Anthropic)"
  - "Kevin Hou (Google DeepMind)"
  - "Kat Kampf (Google)"
  - "Ammaar Reshi (Google)"
key_insights:
  - "Skills are just folders - procedural knowledge packaged for agents to load dynamically"
  - "Artifacts are dynamic representations the agent generates for itself, users, or other agents"
  - "The model decides if, what, why, and who needs an artifact"
  - "We're the first generation building tools for a world where anyone can build software"
edited: true
---

A convergence of ideas from Anthropic and Google DeepMind points to a fundamental shift in how we think about agent capabilities. Rather than building monolithic agents with hardcoded behaviors, the future is about composable building blocks: **Skills** that package procedural knowledge and **Artifacts** that serve as dynamic representations agents create for communication and self-reflection.

## Skills: Procedural Knowledge as Folders

Barry Zhang and Mahesh Murag from [Anthropic](https://www.anthropic.com/) revealed how they've moved past the "build agents" paradigm. "Code is all you need," Zhang argued. "We don't need to have multiple agents." The insight: "The agent underneath is more universal than we thought."

![](slides/2025-11-21-09-20-gemini-edited.jpg)

Their solution is Skills—folders containing markdown documentation and Python scripts that agents can dynamically load. A skill might look like:

```
anthropic_brand/
├─ SKILL.md
├─ docs.md
├─ slide-decks.md
└─ apply_template.py
```

Skills are **progressively disclosed**. The agent sees just the top-level description first, then loads the full file when needed, and can extend into scripts as required. "Skills collect institutional knowledge," Zhang explained. In just five weeks, they've seen thousands of skills created—from document generation to scientific research to browser automation.

![](slides/2025-11-21-09-27-gemini-edited.jpg)

The complete picture: an agent loop connected to the file system, MCP servers, and a library of Skills. "We think we've converged on the architecture to build agents," Zhang concluded. The vision extends to agents creating new skills themselves—making memory tangible and organizational knowledge cumulative.

## Artifacts: Dynamic Representations for Everyone

Kevin Hou from [Google DeepMind](https://deepmind.google/) introduced the complementary concept at the other end of the spectrum. Where Skills are about **input** (knowledge agents load), Artifacts are about **output** (representations agents generate).

In Google's Antigravity IDE—which Hou described as "unapologetically agent-first"—artifacts are central. "An artifact is a dynamic representation that the agent generates," he explained. "A representation for you and your use case. It can be used for self-reflection or to communicate to the user—and can be shared across accounts."

![](slides/2025-11-21-17-17-gemini-edited.jpg)

The model makes autonomous decisions about artifacts:
- **If** it should generate one
- **What** that artifact should contain
- **Why** it is needed
- **Who** needs to see it (subagent, other agents, notify user)

This replaces the traditional "follow what's going on" debugging with structured communication. Artifacts flow through stages: Plan & Research, Feedback, Execution, Walkthrough, and Memory. Users can comment on artifacts, highlight to select across modalities. "The age of artifacts," Hou called it—"the editor can be the space."

## The Democratization Stack

The implications extend beyond developers. Kat Kampf and Ammaar Reshi from Google demonstrated the [AI Studio Build](https://aistudio.google.com/build) experience—free tools for creating applications from natural language prompts.

![](slides/2025-11-21-13-53-gemini-edited.jpg)

They live-coded a comic book, then a multiplayer video game, all as front-end React apps with "full backend support and runtime support—we don't want you to think about those details." The design sensibilities have matured too: "no more purple gradients," "no cyberpunk," "no more groking their way around Figma."

![](slides/2025-11-21-14-02-gemini-edited.jpg)

Reshi captured the moment: "We're the first generation of engineers building tools for a world where anyone can build software."

![](slides/2025-11-21-14-03-gemini-edited.jpg)

## The Unified Architecture

Skills and Artifacts form two halves of a coherent architecture. Skills solve the **knowledge input** problem—how agents access domain expertise, institutional patterns, and procedural know-how. Artifacts solve the **communication output** problem—how agents externalize their reasoning, share progress, and create tangible deliverables.

Together with environments (task + harness + verifier), they complete the picture. Zhang and Murag: "Building the skills and sharing them will help make your own agents more capable." Hou: "Antigravity will be the most advanced product on the market because we are building it for ourselves."

The shift is clear: from agents as black boxes to agents as composable systems built from shareable Skills, communicating through inspectable Artifacts, operating within verifiable Environments. The building blocks are falling into place.
