---
title: "Trust, Role Changes, and What's Good for Humans is Good for AI"
order: 1
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
---

# Trust, Role Changes, and What's Good for Humans is Good for AI

When Max Kanat-Alexander, Capital One's Executive Distinguished Engineer for Developer Experience, told a room full of enterprise engineers that "what's good for humans is good for AI," the applause was immediate. It wasn't just a catchy line—it was the crystallization of a fundamental shift happening across organizations grappling with AI adoption. The promise isn't about replacing developers with smarter machines. It's about recognizing that the same infrastructure investments that make human developers productive—better tooling, clearer documentation, robust testing—are exactly what AI agents need to thrive.

This insight arrived at a crucial moment. As Gene Kim observed during his morning conversation with Steve Yegge, "trust is to what degree can I predict how another part will act." And right now, enterprises are discovering that AI trust increases not through hype cycles or vendor promises, but through measurable experience with systems that behave predictably. The Capital One engineer's message resonated because it reframed the entire AI conversation: stop building special accommodations for agents, and start fixing the foundational problems that have plagued human developers for decades.

![](slides/2025-11-20-15-16-gemini-edited.jpg)

The evidence for this approach is already appearing in organizational transformation stories that would have seemed impossible just months ago. Lisa Orr from Zapier dropped what might be the conference's most striking datapoint: support team members using AI coding tools have achieved such proficiency that "support team members who are part of this experiment are moving into the engineering team." These aren't computer science graduates finally getting their shot—these are customer support specialists who understand user pain intimately, now empowered to ship fixes directly. Their secret weapon, Scout (built on Cursor and MCP protocols), helps them diagnose issues, generate fixes, and validate solutions with roughly 70% accuracy. The result? Zapier's support team doubled their velocity, pushing 3-4 fixes per week with Scout's assistance.

This role fluidity extends far beyond support teams. Dan Shipper's Every—a 15-person company running six business units and four software products with seven-figure revenue—operates on a principle that would terrify traditional engineering managers: "Managers can commit code." Not just review it, not just approve it—actually commit it. Each of Every's applications is built by a single developer working with AI agents in parallel, treating code as cheap enough to experiment with multiple approaches simultaneously. New hires become productive on their first day. Developers casually contribute to products outside their primary ownership. The entire operation runs on what Shipper calls "compounding engineering," where each feature makes the next easier rather than adding to technical debt.

Yet this democratization of code-writing capabilities is exposing uncomfortable truths about organizational psychology. Gene Kim shared war stories from his enterprise tech leadership summit: when Capital One and later Fidelity pushed senior developers to adopt DevOps practices, "senior devs didn't want to do it." Now Cisco requires every senior developer to "vibe code an application to production"—and the resistance patterns are repeating. Meanwhile, Kim noted, completely new practitioners are thriving. The dividing line isn't skill level; it's adaptability and willingness to work differently.

![](slides/2025-11-20-10-05-gemini-edited.jpg)

Justin Reock from DX framed this challenge through the lens of Google's Project Aristotle research, which found that "the overwhelming predictor [of team success] was psychological safety." His guidance for leadership: "Treat software development as a systems problem, not a people's problem." This reframing is crucial. When organizations approach AI adoption as a trust-building exercise in predictable systems rather than a competency test for individual developers, resistance drops and experimentation increases. DX's AI Measurement Framework tracks utilization, impact, and cost—but the real breakthrough comes from establishing feedback loops that help teams understand *why* certain AI approaches work and others fail.

Max Kanat-Alexander's prescription for this systems-level thinking is deceptively simple: invest in the fundamentals. "Standardize environments. Improve deterministic validation. Refactor for testability and ability to reason about code base. Write down external context and intentions." He pointed out that agents "did not attend your verbal meeting that has no transcript"—a pointed reminder that tribal knowledge, the bane of human onboarding, is equally toxic to AI integration. Better documentation doesn't just help agents; it helps every developer who comes after you.

The testing insight particularly resonated. "We spend more time reading code than writing it, and even more so now," Kanat-Alexander observed. "Every software developer becomes a code reviewer." In an AI-assisted world, code review velocity becomes the bottleneck—which means organizations need faster, more deterministic validation processes. Tests that were "nice to have" for human developers become essential infrastructure for maintaining trust in agent-generated code.

![](slides/2025-11-20-13-58-gemini-edited.jpg)

Kath Korevec from Google Labs extended this trust framework into the future with her vision for proactive agents. Current tools are "fundamentally reactive," she argued, requiring developers to context-switch constantly to supervise AI work. The next generation—exemplified by Google's Jules autonomous coding agent—will build trust through "observation, timely action, personalization, and seamless integration." Trust comes from agents that know when to step in and what's missing, behaving like a skilled collaborator rather than an eager but unpredictable assistant.

What emerges across these enterprise perspectives is a coherent theory of AI adoption: trust grows from predictable behavior, which requires solid infrastructure, which benefits humans and agents equally. The organizations succeeding aren't the ones deploying the fanciest models or building elaborate AI-specific workflows. They're the ones finally fixing their broken build processes, writing down their undocumented assumptions, and creating deterministic testing that works for everyone.

As Gene Kim's observation about trust suggests, this isn't fundamentally about AI capabilities at all. It's about creating systems where behavior can be predicted—and when prediction fails, understanding why. Support teams ship code not because they suddenly learned computer science, but because the system became predictable enough for motivated non-specialists to contribute safely. Managers commit code not because they're reclaiming hands-on work, but because the scaffolding around development became robust enough to support occasional contributors.

Max Kanat-Alexander's applause line deserves to be more than a memorable quote. "What's good for humans is good for AI" is a north star for enterprise AI strategy: stop building for the agents, and start building systems that work for everyone.
