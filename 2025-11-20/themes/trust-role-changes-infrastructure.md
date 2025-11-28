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
key_insights:
  - "What's good for humans is good for AI - same infrastructure investments benefit both"
  - "Trust grows from predictable behavior, which requires solid infrastructure"
  - "Psychological safety is the overwhelming predictor of team success"
  - "AI will reshape organizations 100x larger than agile, cloud, CI/CD combined"
edited: true
---

Gene Kim opened with a striking claim: "AI will reshape technology organizations—100x larger than the impact of agile, cloud, CI/CD, mobile, etc." The entire economy re-organizes itself around new modes of production. We're starting to see the case studies.

![](slides/2025-11-20-10-10-gemini-edited.jpg)

Kim's framework for embracing this shift: FAAFO. Faster—obvious. Ambitious—"impossible becomes passive, annoying things become free." Alone—build more autonomously, smaller teams. Fun—enjoy the work again. Options—more swings at bat. His calculation: $100 per day in AI tokens generates output comparable to a developer's annual productivity. When costs collapse that dramatically, every shelved project deserves a second look.

Kim also offered a definition: "Trust is to what degree I can predict how another party will act." AI trust grows the same way human trust does—through predictable behavior. Stop building special accommodations for agents. Start fixing the foundational problems that have plagued human developers for decades.

Justin Reock from [DX](https://getdx.com/) cited Google's [Project Aristotle](https://rework.withgoogle.com/intl/en/guides/understanding-team-effectiveness) research: "the overwhelming predictor [of team success] was psychological safety." His guidance: "Treat software development as a systems problem, not a people's problem." When organizations frame AI adoption as trust-building rather than competency testing, resistance drops.

![](slides/2025-11-20-17-08-gemini-edited.jpg)

Reock's predictions for full AI adoption: 10x productivity difference. A single engineer building and maintaining complex production products. Compounding engineering where each feature makes the next easier. "Many people in SF don't know this yet."

Max Kanat-Alexander, Capital One's Executive Distinguished Engineer for Developer Experience, put it simply: "What's good for humans is good for AI." The same infrastructure investments that make human developers productive—better tooling, clearer documentation, robust testing—are exactly what AI agents need.

Kanat-Alexander's prescription: standardize environments, improve deterministic validation, refactor for testability, write down external context and intentions. Agents "did not attend your verbal meeting that has no transcript." Tribal knowledge kills onboarding—for humans and AI alike.

![](slides/2025-11-20-15-17-gemini-edited.jpg)

The vicious cycle: bad codebases feed AI agents garbage, producing low-quality reviews that make the codebase worse. The feedback loop accelerates decline.

![](slides/2025-11-20-15-18-gemini-edited.jpg)

The virtuous cycle: good codebases and great tools enable AI agents to provide strong reviews, which leads to velocity. Same investment, opposite outcomes.

Lisa Orr from [Zapier](https://zapier.com/): "Support team members who are part of this experiment are moving into the engineering team." Not CS graduates finally getting their shot—customer support specialists who understand user pain intimately, now shipping fixes directly. Their tool Scout helps diagnose issues, generate fixes, and validate solutions with roughly 70% accuracy. Zapier's support team doubled their velocity, pushing 3-4 fixes per week.

![](slides/2025-11-20-09-55-gemini-edited.jpg)

Dan Shipper's [Every](https://every.to/)—15 people, six business units, four software products, seven-figure revenue—runs on a radical principle: "Managers can commit code." Each app is built by one developer working with AI agents in parallel. New hires ship on day one. Shipper calls it "compounding engineering"—each feature makes the next easier rather than adding debt. "AI permits engineers to work with fractured attention."

The resistance patterns keep repeating. Steve Yegge compared it to the Quartz Crisis that disrupted Swiss watchmaking: "Building software is like building mechanical watches: an old, elegant, handcrafted discipline." Linus Torvalds says vibe coding isn't good for "real" work—same argument from draftsmen, watchmakers, photographers. "Building software the old way will be automated away—and it won't take 10-20 years this time. It will take 1-2 years."

![](slides/2025-11-20-10-04-gemini-edited.jpg)

Kim shared war stories: when Capital One and Fidelity pushed senior developers to adopt DevOps, "senior devs didn't want to do it." Booking.com elevated developer productivity org-wide. Travelopitia replaced legacy apps in 4-6 weeks with half the team. Now Cisco requires every senior dev to "vibe code an application to production"—same pushback. The dividing line isn't skill. It's adaptability.

Trust grows from predictable behavior. The organizations succeeding aren't deploying fancy models—they're fixing broken builds, documenting assumptions, creating deterministic tests. Support teams ship code because the system became predictable enough for non-specialists to contribute safely. Managers commit code because the scaffolding supports occasional contributors. Same investments, everyone benefits.
