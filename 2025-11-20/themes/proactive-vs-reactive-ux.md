---
title: "Proactive vs Reactive: The UX Evolution"
topics:
  - "Agents & Autonomy"
  - "UX Design"
  - "Cognitive Load"
  - "Developer Experience"
key_speakers:
  - "Kath Korevec (Google Labs)"
  - "Steve Yegge"
  - "Michele Catasta (Replit)"
  - "Dan Shipper (Every)"
  - "Samir Mody (Browser Company)"
key_insights:
  - "Current tools are 'fundamentally reactive' - forcing constant context-switching"
  - "Proactive agents: observation, timely action, personalization, seamless integration"
  - "Goal is reducing mental load, not just adding speed"
  - "AI permits engineers to work with fractured attention productively"
---

# Proactive vs Reactive: The UX Evolution

"Humans are unitaskers," declares Kath Korevec, Director of Product at Google Labs, cutting to the heart of why our current AI tools are failing us. We're building agents that wait to be asked, that sit idle in chat windows, that force us to context-switch and craft perfect prompts. But as Korevec frames it, we're stuck "reminding the husband to do the dishes"—managing our AI assistants rather than being supported by them. The fundamental question driving her work on Jules, Google's autonomous coding agent, isn't about making AI faster or smarter. It's about reducing the mental load entirely.

![](slides/2025-11-20-13-15-gemini-edited.jpg)

The shift from reactive to proactive agents represents more than an interface upgrade. It's a philosophical reimagining of what collaboration with AI should feel like. Korevec outlines four pillars of truly proactive systems: observation (understanding what you're working on), timely action (knowing when to step in), personalization (learning how you work and what you tend to ignore), and seamless integration. "Imagine when compute isn't a limiting agent at all," she challenges. The vision is agents that function like Nest thermostats learning your patterns, or like the best human collaborators who know when you need help before you ask.

This isn't theoretical. Jules demonstrates proactive intelligence by surfacing suggested tasks with recommended tags and—critically—coming up with the prompts itself. "It gives context of the code and also rationale on what to do," Korevec explains. When she built a six-foot animatronic head for Halloween (complete with firmware and stepper motors controlling sensors), the workflow became "prompt, ten minutes, repeat—a tedious process." Jules shifted that dynamic, letting her focus on creative decisions while the agent handled implementation details. The agent didn't wait to be told what to do; it observed the project and suggested next steps.

Steve Yegge's provocative declaration that "if you are still using an IDE by Jan 1st you are a bad engineer" amplifies Korevec's vision from a different angle. Speaking at the same conference, Yegge argued for abandoning the "diver window" metaphor—where we give one agent a bigger context window (oxygen tank) and send it deep—in favor of ant-like swarms of agents working in parallel. His critique of current tools like Claude Code ("I use it 14 hours a day" but "ain't it") highlights the same problem Korevec identified: cognitive overhead. These are power tools that require constant supervision. "What damage can we do with untrained people? You can cut your foot off."

![](slides/2025-11-20-10-05-gemini-edited.jpg)

The answer, both speakers suggest, is moving supervision from the micro level (watching every action) to the macro level (setting goals and trusting systems). Michele Catasta from Replit frames this as maximizing "the irreducible runtime of the agent"—giving agents specific scope where they make all technical decisions while users maintain control over aspects they care about. The autonomy isn't about how long agents run, but about the completeness of the tasks they handle. Catasta's team discovered that more than 30% of features shipped by Replit Agent were broken because "users don't want to spend time doing testing." The solution? Autonomous testing that breaks the feedback bottleneck and prevents the "accumulation of whatevers" that frontier models tend to produce.

This evolution becomes tangible in Dan Shipper's operation at Every, where 15 people manage four software products generating seven-figure revenue. "AI permits engineers to work with fractured attention," Shipper observes—a statement that would horrify traditional engineering managers but captures the new reality. Engineers commit code to products they don't own. Managers commit code. New hires are productive on their first day because tacit knowledge has been codified into prompts. The agents aren't waiting for perfectly formed instructions; they're integrated into workflows that allow parallel development of multiple features and bugs simultaneously.

![](slides/2025-11-20-13-58-gemini-edited.jpg)

Korevec's warning resonates across all these implementations: "The patterns of how we use an IDE right now might not exist at all next year." She's not suggesting we abandon control, but rather that we "don't be afraid to question the new ways of building software." The proactive agent future isn't about AI doing everything—it's about AI removing the mental overhead of coordination, context management, and task sequencing that currently fragments developer attention.

The Browser Company's Samir Mody demonstrates what this looks like in practice with their prompt editor integrated directly into dev builds, achieving "10x the speed of ideating and iterating." But even as tools accelerate, Mody emphasizes that we're "in the early days of model behavior" as a craft. The shift from functional to agentic behavior requires new disciplines around behavior design, measurement, and model steering—treating how AI acts as seriously as how it performs.

What emerges from these converging perspectives is less a death of traditional development than an evolution of partnership. Korevec's Jules doesn't replace the developer building the Halloween animatronic head—it amplifies creative agency by handling the tedious cycles. Yegge's ant swarms don't eliminate engineering judgment—they distribute execution. Shipper's fractured attention isn't chaos—it's enabled focus on what matters. The reactive chat interface represented AI waiting for us to figure out what to ask. Proactive agents represent AI figuring out what we need and suggesting it with rationale, learning from what we ignore, and reducing the overhead of staying in flow. As Korevec frames it, we're moving from tools that respond to tools that collaborate—and that shift changes everything about how software gets built.
