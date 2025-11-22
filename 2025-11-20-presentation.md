# AI Engineering Code Summit 2025-11-20
## Executive Presentation

---

## Slide 1: The New Trust Challenge

**Trust is the new bottleneck**

As economics shift, support teams, managers, and non-engineers all push code—transforming engineers into code reviewers who need deterministic validation at scale.

*Trust grows from observable behavior, not capabilities*

---

## Slide 2: The Economics Are Changing Who Writes Code

**$100/day = One developer's annual salary in AI tokens**

- Zapier support teams → 70% accuracy → moving into engineering roles
- Every: 15 people, 4 products, 7-figure revenue → "Managers can commit code"
- Tenex: Output-based compensation → $1M+ engineers
- Travelopia: Legacy apps replaced in 4-6 weeks with half the team

**Result:** Non-engineers become productive contributors

**Challenge:** Code review velocity is now the critical constraint

---

## Slide 3: Code Review is the New Bottleneck

> "We spend more time reading code than writing it, and even more so now. Every software developer becomes a code reviewer."
> — Max Kanat-Alexander, Capital One

**The Crisis:**
- 82% use AI assistants
- 76% don't trust AI-generated code
- Problem isn't buggier PRs—it's *volume* of PRs requiring review

**The Gap:**
- 93% of organizations stuck in "pilot purgatory" (McKinsey)
- Gap isn't AI capability—it's review capacity and trust infrastructure

**The Foundation:**
- Psychological safety = overwhelming predictor of team success (Google Project Aristotle)
- Treat as systems problem, not people problem

---

## Slide 4: From Reactive to Proactive Agents

**Current reality:** "Reminding the husband to do the dishes"
- Wait to be asked
- Force constant context-switching
- Require supervision

**The shift:** Google's Jules & Replit's autonomous agents
- Observation: understand what you're working on
- Timely action: know when to step in
- Personalization: learn what you ignore
- Seamless integration: reduce cognitive overhead

**Impact:** 30%+ of Replit user features were broken because "users don't want to spend time doing testing"
- Autonomous testing breaks feedback bottleneck
- Prevents "accumulation of whatevers"

---

## Slide 5: What's Good for Humans is Good for AI

> "Agents did not attend your verbal meeting that has no transcript."
> — Max Kanat-Alexander, Capital One

**Stop building for agents. Start fixing foundational problems:**
- Standardize environments
- Improve deterministic validation
- Refactor for testability
- Write down external context and intentions

**Why this matters:**
- Tribal knowledge blocks human onboarding AND AI integration
- Better tooling, clear documentation, robust testing benefit everyone
- When organizations approach AI as trust-building (not competency testing), resistance drops

---

## Slide 6: Clean Code Amplifies AI Gains 4x

**Stanford's 120,000-developer study:**

| Codebase Quality | AI Productivity Gains |
|-----------------|----------------------|
| Clean codebases | 35-40% |
| Messy codebases | 0-10% |

**"Rich gets richer effect"**
- Technical debt doesn't just slow humans—it blocks AI entirely
- Environment cleanliness = competitive advantage
- Quality of AI usage > quantity of AI usage

---

## Slide 7: The Harness is Where You Win

> "Hard to track the models and we aren't making the problem easier for anybody."
> — OpenAI's Bill Chen & Brian Fioca

**The harness = competitive advantage:**
- Critical abstraction layer between models and production
- Encompasses prompts, agent loops, tools, context management

**Key principle: "Steerability = intelligence + habit"**
- Replit: Subagents with fresh context prevent "context pollution"
- Anthropic: Memory + Context Editing for manual pruning
- Browser Company: Prompt editors in dev tools → 10x iteration speed

**Models will improve. Your architecture determines differentiation.**

---

## Slide 8: The Greenfield vs Brownfield Gap

**Where AI delivers:**
- Greenfield projects: 35-40% gains
- Low-complexity tasks: 35-40% gains

**Where AI struggles:**
- Brownfield codebases: 0-10% gains
- High-complexity work: 0-10% gains

**Bloomberg's warning:**
> "2 engineers can create the tech debt of 50 engineers" — Lei Zhang

**The insight:** AI "changes the cost function of engineering"
- Don't ask what AI can do
- Ask what work developers don't want to do

---

## Slide 9: The ROI Reality Check

**93% stuck in "pilot purgatory"** (McKinsey)

**Northwestern Mutual's 4 barriers:**
1. Unknown technology
2. Messy real data
3. Blind-trust bias
4. Budget impact concerns

**The solution:**
- Stop working with synthetic data
- Use actual messy data to understand the mess
- Bring stakeholders into research
- Create organic evaluation sets from actual workflows
- Deliver incremental ROI, step by step

---

## Slide 10: Unglamorous, High-ROI Use Cases

**Bloomberg's approach:**
- Uplift agents for handling tedious migrations
- Incident response agents for parsing alert volumes
- Focus: where developers don't want to work

**The pattern:**
- Not glamorous demos
- Clear, measurable ROI
- Builds trust through production results
- Addresses actual pain points

**Question to ask:** What's now economically feasible that wasn't before?

---

## Slide 11: What To Do

**1. Build trust infrastructure through psychological safety**
- Systems problem, not people problem
- Establish feedback loops explaining *why* approaches work/fail
- Create deterministic validation processes

**2. Invest in code review velocity**
- Autonomous testing isn't optional
- Quality gates: "Don't accept PR without minimum testing"
- Review capacity determines if you can capitalize on diverse contributors

**3. Rethink what's economically viable and who can build it**
- 100x cost reduction = previously impossible projects now feasible
- Support teams can ship code
- Escape pilot purgatory through production deployment

---

## Slide 12: What To Do (continued)

**4. Invest in code cleanliness NOW**
- Document context (agents didn't attend your meetings)
- Standardize environments
- Refactor for testability
- Unlocks 4x productivity gains for everyone
- Fight the entropy

**5. Build the harness, not model dependencies**
- Context management (memory + editing)
- Tool orchestration
- Abstraction layers that survive model churn
- Your special sauce = architecture, not model choice

**6. Start with unglamorous, high-ROI use cases**
- Tasks developers actively dislike
- Clear ROI paths
- Build trust through results

---

## Slide 13: The Bottom Line

**AI isn't replacing software engineering fundamentals—it's exposing which organizations actually have them.**

**The "rich gets richer" divide:**
- Clean codebases: 35-40% gains
- Messy codebases: 0-10% gains

**Success requires:**
- Clean code, clear processes, stakeholder trust
- Deterministic validation at scale
- Trust through observable, predictable behavior

**The organizations winning aren't racing to adopt every new model. They're methodically building foundations that allow AI tools to deliver measurable value.**

---

## Slide 14: Key Takeaway

> "What's good for humans is good for AI"
> — Max Kanat-Alexander, Capital One

Stop building for the agents.

Start building systems that work for everyone.

---

## Slide 15: Questions?

**Contact & Resources**

Conference: AI Engineering Code Summit 2025-11-20

Organizations represented: Anthropic, OpenAI, Google Labs, Replit, Bloomberg, Capital One, Stanford, McKinsey, and dozens more
