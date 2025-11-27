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
  - "Gene Kim"
  - "Lei Zhang (Bloomberg)"
  - "Asaf Bord (Northwestern Mutual)"
  - "Steve Yegge"
key_insights:
  - "AI can generate developer's annual salary in tokens for $100/day"
  - "Tenex pays engineers like salespeople: output-based, uncapped, multiple on track for $1M+"
  - "AI changes the cost function of engineering - previous cost-per-feature calculations obsolete"
  - "When costs drop 100x, 'annoying things become free'"
edited: true
---

Am I selling myself short on tokens?  I'll regularly hit usage limits, which is insane considering I have Claude Max ($100/month + overage), Cursor Pro+ ($60/month + overage), Kiro Pro+ ($40/month) on the consumer side (plus OpenAI, Github, xAI, Google, Genspark, Midjourney), and then my API usage over Gemini is $300+/month, OpenAI $200+/month, OpenRouter $60+/month.  A good chunk of this is client work, but I'm walking away thinking I'm under valuing the benefits.

Gene Kim shared a striking calculation at the AI Engineering Code Summit: $100 per day in AI tokens generates output comparable to a developer's annual productivity. When costs collapse that dramatically, everything changes—pricing, compensation, cost structures.  Once we hit a certain level of productivity things change.

"Claude Code ain't it," says Steve Yegge, followed by proud confession of a 14 hour a day obsession. The tools aren't perfect but they are obviously productive. IDE users versus Agent users? "10x productive by any measure," he argues. We are no longer hand-assembling code. Craftsmen doing beautiful handwork while factories produce a thousand times more.

Kim's framework for embracing this shift: FAAFO. Faster—obvious. Ambitious—"impossible becomes passive, annoying things become free." Alone—build more autonomously, smaller teams. Fun—enjoy the work again. Options—more swings at bat. When costs drop 100x, the calculation changes on every project you've ever shelved.

Booking.com: productivity elevated org-wide. Travelopitia: legacy apps replaced in 4-6 weeks, half the team. Cisco: every senior manager must vibe-code something to production. Everyone needs hands-on experience with this because everything is changing.

"Vibe coding," Lei Zhang wryly notes, "is where 2 engineers can create the tech debt of 50 engineers." He's Head of Technology Infrastructure at Bloomberg. AI tool usage dropped fast once teams moved from greenfield projects back to their massive brownfield codebase, which granted is tens of millions of lines of JavaScript, not exactly a challenge in anyone's comfort zone. Usage of AI coding tools "dropped really quickly once we moved back from greenfield," so there's lots of opportunity.

![](slides/2025-11-20-14-27-gemini-edited.jpg)

The fix? "What work do our developers not want to do?" Zhang asked. Migrations. Incident response. Understanding contributing factors across overwhelming alerts. Bloomberg built agents for exactly these tasks—uplift agents that handle patches with rationale, incident agents that surface context. AI for the grind, not the glory.

The deeper shift: AI "changes the cost function of engineering," Zhang notes. The old cost-per-feature calculations, be it in time or mental anguish, are meaningless in the new shifting world. What was too expensive to build last quarter might be trivial now. Previous calculations don't hold. Recalculate everything.

![](slides/2025-11-20-14-11-gemini-edited.jpg)

Asaf Bord, GenAI Products Leader at Northwestern Mutual, poses the business question: "How do we price software in this new era? Usage price vs seats price." Seat-based models assume fixed value per user. But AI's variable costs—token consumption, compute, API calls—blow up that assumption. One complex query might consume more resources than a thousand simple ones.

![](slides/2025-11-20-16-30-gemini-edited.jpg)

Arman Hezarkhani at Tenex takes this logic to compensation, and pays engineers like salespeople. "We pay engineers based upon the story points they complete," he explains. "Paid on output. Uncapped upside. Incentivized to work smarter, faster, harder." Multiple engineers are on track to earn over $1M annually—compensation levels usually reserved for top salespeople or executives.

![](slides/2025-11-20-16-34-gemini-edited.jpg)

Output-based pay only works with rigorous verification. Not coincidental: AI Engineering only works with rigorous verification. Tenex's approach: strategy defines scope (no point inflation), three rounds of QA (internal and external), and hiring for sustainable performers.

$100 a day. $3,000 a month. It's a rounding error compared to developer salaries. The economics have shifted. Pricing models need to follow. Compensation models need to follow. Companies that align incentives with the new reality—output-based pay, usage-based pricing, rigorous verification—won't just survive the transition. They'll define it.
