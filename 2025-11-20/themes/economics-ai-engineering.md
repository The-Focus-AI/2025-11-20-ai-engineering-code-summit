---
title: "The Economics of AI Engineering: New Cost Structures & Compensation Models"
order: 6
header_image: /headers/economics-ai-engineering.png
topics:
  - "Economics & Pricing"
  - "Compensation Models"
  - "Cost Structures"
  - "Business Models"
key_speakers:
  - "Arman Hezarkhani (Tenex)"
  - "Lei Zhang (Bloomberg)"
  - "Asaf Bord (Northwestern Mutual)"
key_insights:
  - "AI changes the cost function of engineering - previous cost-per-feature calculations obsolete"
  - "Tenex pays engineers like salespeople: output-based, uncapped, multiple on track for $1M+"
  - "Usage-based pricing vs seat-based: one complex query might consume more resources than a thousand simple ones"
  - "Five industry trends: LLM-ready data fabric, specialist models, invisible copilots, secure models, usage-based pricing"
edited: true
---

Am I selling myself short on tokens? I regularly hit usage limits despite Claude Max ($100/month + overage), Cursor Pro+ ($60/month + overage), Kiro Pro+ ($40/month) on the consumer side, plus API usage running $300+/month on Gemini, $200+/month on OpenAI, $60+/month on OpenRouter. A good chunk is client work, but I walked away thinking I'm undervaluing the benefits.

Lei Zhang, Head of Technology Infrastructure at [Bloomberg](https://www.bloomberg.com/), offered the key reframe: AI "changes the cost function of engineering." The old cost-per-feature calculations—in time or mental anguish—are meaningless now. What was too expensive to build last quarter might be trivial today. Previous calculations don't hold. Recalculate everything.

![](slides/2025-11-20-14-27-gemini-edited.jpg)

The practical question: "What work do our developers not want to do?" Zhang asked. Migrations. Incident response. Understanding contributing factors across overwhelming alerts. Bloomberg built agents for exactly these tasks—uplift agents that handle patches with rationale, incident agents that surface context. AI for the grind, not the glory.

Zhang sees five industry trends emerging: LLM-ready data fabrics with agent-readable schemas and lineage. Specialist-first model grids where tiny expert models route to large generalists on demand. Invisible copilots—one-click LLM actions inside Slack, CRM, and BI tools. Security built into models from within, not outer wrappers. And usage-based pricing: fewer workers means fewer seats means licensing focused on usage.

![](slides/2025-11-20-14-25-gemini-edited.jpg)

Asaf Bord, GenAI Products Leader at [Northwestern Mutual](https://www.northwesternmutual.com/), poses the business question: "How do we price software in this new era? Usage price vs seats price." Seat-based models assume fixed value per user. But AI's variable costs—token consumption, compute, API calls—blow up that assumption. One complex query might consume more resources than a thousand simple ones.

![](slides/2025-11-20-16-30-gemini-edited.jpg)

Arman Hezarkhani at [Tenex](https://www.tenex.dev/) takes this logic to compensation, paying engineers like salespeople. "We pay engineers based upon the story points they complete. Paid on output. Uncapped upside. Incentivized to work smarter, faster, harder." Multiple engineers are on track to earn over $1M annually—compensation levels usually reserved for top salespeople or executives.

![](slides/2025-11-20-16-34-gemini-edited.jpg)

Output-based pay only works with rigorous verification. Not coincidental: AI engineering only works with rigorous verification. Tenex's approach: strategy defines scope (no point inflation), three rounds of QA (internal and external), and hiring for sustainable performers.

The economics have shifted. Pricing models need to follow. Compensation models need to follow. Companies that align incentives with the new reality—output-based pay, usage-based pricing, rigorous verification—won't just survive the transition. They'll define it.
