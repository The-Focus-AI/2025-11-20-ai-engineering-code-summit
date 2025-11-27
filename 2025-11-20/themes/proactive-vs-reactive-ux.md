---
title: "Proactive vs Reactive: The UX Evolution"
order: 5
header_image: /headers/proactive-vs-reactive-ux.png
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
  - "Goal is reducing mental load, not just adding speed"
  - "Current tools are 'fundamentally reactive' - forcing constant context-switching"
  - "Proactive agents: observation, timely action, personalization, seamless integration"
  - "AI permits engineers to work with fractured attention productively"
edited: true
---

"Humans are unitaskers," declares Kath Korevec, Director of Product at Google Labs. We're building agents that wait to be asked, that sit idle in chat windows, that force us to context-switch and craft perfect prompts. We're still doing the emotional labor of reminding it what to do. Her work on Jules, Google's autonomous coding agent, is about reducing mental load.

![](slides/2025-11-20-13-15-gemini-edited.jpg)

Korevec outlines four pillars of proactive systems: observation (understanding what you're working on), timely action (knowing when to step in), personalization (learning how you work and what you ignore), and seamless integration. "Imagine when compute isn't a limiting agent at all," she said. Agents that function like Nest thermostats learning your patterns—or like collaborators who know when you need help before you ask.

Jules surfaces suggested tasks and comes up with the prompts itself. "It gives context of the code and also rationale on what to do." When Korevec built a six-foot animatronic head for Halloween, the workflow was "prompt, ten minutes, repeat—tedious." Jules changed that. She focused on creative decisions; it handled implementation and suggested next steps.

Steve Yegge: "if you are still using an IDE by Jan 1st you are a bad engineer." He argued for abandoning the "diver window" metaphor—giving one agent a bigger context window and sending it deep—in favor of ant-like swarms working in parallel. His critique of Claude Code ("I use it 14 hours a day" but "ain't it") highlights the same problem: cognitive overhead. Power tools that require constant supervision. "What damage can we do with untrained people? You can cut your foot off."

![](slides/2025-11-20-10-05-gemini-edited.jpg)

Michele Catasta from Replit frames this as maximizing "the irreducible runtime of the agent"—giving agents specific scope where they make all technical decisions while users control what they care about. We should be thinking about the "completeness" of the task that they handle, not individual aspects. Catasta's team found that 30% of features shipped by Replit Agent were broken because "users don't want to spend time doing testing." The solution: autonomous testing that breaks the feedback bottleneck and prevents the "accumulation of whatevers" that frontier models produce.

Sometimes it works. Dan Shipper's Every: 15 people, seven-figure revenue. "AI permits engineers to work with fractured attention." Engineers commit code to products they don't own. Managers commit code. New hires ship on day one—tacit knowledge codified into prompts. Parallel development of features and bugs at once.

![](slides/2025-11-20-13-58-gemini-edited.jpg)

Korevec: "The patterns of how we use an IDE right now might not exist at all next year." (Yegge went further). She's not suggesting we abandon control—"don't be afraid to question the new ways of building software." The proactive agent future is about AI removing the mental overhead of coordination, context management, and task sequencing that fragments developer attention.

The Browser Company's Samir Mody integrated a prompt editor directly into dev builds, achieving "10x the speed of ideating and iterating." But we're "in the early days of model behavior" as a craft. The shift from functional to agentic behavior requires new disciplines: behavior design, measurement, model steering. Treating how AI acts as seriously as how it performs.

Korevec's Jules doesn't replace the developer—it amplifies creative agency by handling tedious cycles. Yegge's ant swarms don't eliminate engineering judgment—they distribute execution. Shipper's fractured attention isn't chaos—it's focus on what matters. Reactive chat: AI waiting for us to figure out what to ask. Proactive agents: AI figuring out what we need, suggesting it with rationale, learning from what we ignore.
