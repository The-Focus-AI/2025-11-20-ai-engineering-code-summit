---
title: "Trust, Role Changes, and What's Good for Humans is Good for AI"
order: 1
header_image: /headers/trust-role-changes-infrastructure.png
topics:
  - "Trust & Infrastructure"
  - "Role Transformation"
  - "Developer Experience"
  - "Organizational Change"
key_speakers:
  - "Max Kanat-Alexander (Capital One)"
  - "Lisa Orr (Zapier)"
  - "Dan Shipper (Every)"
  - "Gene Kim"
  - "Justin Reock (DX)"
  - "Kath Korevec (Google Labs)"
key_insights:
  - "What's good for humans is good for AI - same infrastructure investments benefit both"
  - "Zapier support team members moved into engineering roles with 70% accuracy using AI tools"
  - "Trust grows from predictable behavior, which requires solid infrastructure"
  - "Psychological safety is the overwhelming predictor of team success"
edited: true
---

Justin Reock from DX cited Google's [Project Aristotle](https://rework.withgoogle.com/intl/en/guides/understanding-team-effectiveness) research: "the overwhelming predictor [of team success] was psychological safety." His guidance: "Treat software development as a systems problem, not a people's problem." When organizations frame AI adoption as trust-building rather than a competency test, resistance drops. DX's AI Measurement Framework tracks utilization, impact, and cost—but the real value is feedback loops that help teams understand *why* certain AI approaches work and others fail.

Gene Kim, in conversation with Steve Yegge, offered this definition: "trust is to what degree I can predict how another party will act." There are a lot of systems at play right now—technological, organizational, economical. We need to learn how these systems behave, so that we can predict them better. AI trust grows the same way, so stop building special accommodations for agents, and start fixing the foundational problems that have plagued human developers for decades.

Max Kanat-Alexander, Capital One's Executive Distinguished Engineer for Developer Experience, put it simply: "what's good for humans is good for AI." (cue the applause.) The same infrastructure investments that make human developers productive—better tooling, clearer documentation, robust testing—are exactly what AI agents need to thrive.

Kanat-Alexander's prescription: invest in the fundamentals. "Standardize environments. Improve deterministic validation. Refactor for testability and ability to reason about code base. Write down external context and intentions." Agents "did not attend your verbal meeting that has no transcript." Tribal knowledge kills onboarding—for humans and AI alike.

"We spend more time reading code than writing it, and even more so now," Kanat-Alexander observed. "Every software developer becomes a code reviewer." Code review is now the bottleneck. Tests that were "nice to have" become essential—you can't trust agent-generated code without them.

![](slides/2025-11-20-15-16-gemini-edited.jpg)

Lisa Orr from Zapier: "support team members who are part of this experiment are moving into the engineering team." These aren't CS graduates finally getting their shot—they're customer support specialists who understand user pain intimately, now shipping fixes directly. Their tool, Scout (built on Cursor and MCP protocols), helps them diagnose issues, generate fixes, and validate solutions with roughly 70% accuracy. Zapier's support team doubled their velocity, pushing 3-4 fixes per week.

Role fluidity extends beyond support teams. Dan Shipper's Every—15 people, six business units, four software products, seven-figure revenue—runs on a radical principle: "Managers can commit code." Each app is built by one developer working with AI agents in parallel. New hires ship on day one. Shipper calls it "compounding engineering"—each feature makes the next easier rather than adding debt.

![](slides/2025-11-20-10-05-gemini-edited.jpg)

The resistance patterns keep repeating. Gene Kim shared war stories: when Capital One and Fidelity pushed senior developers to adopt DevOps, "senior devs didn't want to do it." Now Cisco requires every senior dev to "vibe code an application to production"—same pushback. Meanwhile, new practitioners thrive. The dividing line isn't skill. It's adaptability.

![](slides/2025-11-20-13-58-gemini-edited.jpg)

Current AI tools are "fundamentally reactive," Kath Korevec from Google Labs argued—developers context-switch constantly to supervise. The next generation builds trust differently. Google's Jules autonomous coding agent aims for "observation, timely action, personalization, and seamless integration." A skilled collaborator, not an eager but unpredictable assistant.

Trust grows from predictable behavior. The organizations succeeding aren't deploying fancy models—they're fixing broken builds, documenting assumptions, creating deterministic tests. Support teams ship code because the system became predictable enough for non-specialists to contribute safely. Managers commit code because the scaffolding supports occasional contributors. Same investments, everyone benefits.

Max Kanat-Alexander's applause line deserves to be more than a memorable quote. "What's good for humans is good for AI" is a north star for enterprise AI strategy: stop building for the agents, and start building systems that work for everyone.
