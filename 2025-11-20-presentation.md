# AI Engineering Code Summit 2025-11-20

---

## The Verdict

AI productivity gains are real—but determined by **foundation quality**, not AI quality.

Stanford's 120,000-developer study:
- Clean codebases: **35-40% productivity gains**
- Messy codebases: **0-10% gains**

**AI amplifies what you already have.**

---

## Three Forces Reshaping Development

1. **Who can code is expanding**
   - Support teams → Engineering roles
   - Managers committing code
   - Day-one hire productivity

2. **Competitive advantage shifted**
   - From model selection → environment design
   - From prompt engineering → context management

3. **Skill premium moved**
   - From being clever → being communicative
   - From tribal knowledge → codified prompts

---

## Foundation Quality = AI Success

### The Rich Get Richer Effect

**Yegor Denisov-Blanch, Stanford**
- 100,000+ engineers analyzed
- Environment cleanliness predicts productivity
- Token usage per model: "not great predictive"

**The bifurcation:** Teams with clean code capture AI gains. Teams with technical debt amplify their problems.

---

## What's Good for Humans is Good for AI

**Max Kanat-Alexander, Capital One**

*[Earned applause]*

The same infrastructure that makes human developers productive is exactly what AI agents need:
- Better tooling
- Comprehensive testing
- Clear documentation
- Standardized environments

**"It did not attend your verbal meeting that has no transcript."**

---

## The Real Bottleneck: Code Review at Volume

**Itamar Friedman, Qodo**

- 82% of developers use AI assistants
- 76% don't fully trust AI-generated code

**The crisis:** Not more bugs *per PR*, but *more PRs* requiring review.

AI generates code fast. Messy codebases make review impossible.

**Solution:** Autonomous testing + deterministic validation = trust at velocity

---

## Who Can Code is Expanding

### Zapier: Support → Engineering

**Lisa Orr, Zapier**

Support team members using Scout (Cursor + MCP):
- **70% accuracy** on fixes
- **Moving into engineering roles**
- Doubled velocity: **3-4 fixes/week**

*This would have been impossible 6 months ago.*

---

## Managers Can Commit Code

**Dan Shipper, Every**

15 people. 6 business units. 4 software products. **7-figure revenue.**

- Managers commit code (not just review)
- Each app: 1 developer + AI agents in parallel
- New hires productive **day one**
- Developers contribute outside primary ownership

**The secret:** Tacit knowledge codified into prompts

---

## Million-Dollar Engineers

**Arman Hezarkhani, Tenex**

**Paid on output. Uncapped upside.**

"We pay engineers based upon the story points they complete."

Multiple engineers on track for **$1M+ annually**.

When AI can 10x productivity, traditional salary models create perverse incentives—no economic reason to adopt AI.

---

## The Resistance Pattern

**Gene Kim**

Senior developers resisted DevOps. Now resisting AI.

**Cisco:** Every senior developer must "vibe code an application to production"

**The dividing line:** Not skill level—adaptability.

**Justin Reock, DX:** "Treat software development as a systems problem, not a people's problem."

---

## The Harness is Everything

### OpenAI's Wake-Up Call

**Bill Chen & Brian Fioca**

"Hard to track the models and we aren't making the problem easier for anybody."

Betting on specific models = obsolete.

**The harness** = competitive advantage:
- Prompts
- Agent loops
- Tools
- Context management

**"For some, the harness might be the special sauce of the product."**

---

## Context Management = First-Class Discipline

**Codex processes dozens of trillions of tokens/week**

**The formula:** Steerability = intelligence + habit

**The challenge:**
- Custom tools can be out of distribution
- Prompts have poor portability
- Latency forces careful context decisions

**The answer:** Build tools that handle context automatically. Design harnesses that steer better than prompt microtuning.

---

## Fresh Context Prevents Pollution

**Michele Catasta, Replit**

22 million creators. 30%+ of features broken.

**The architecture:**
"Subagent invoked by the core loop with a task and fresh context."

Prevents "context pollution"—gradual performance degradation as irrelevant information accumulates.

Prevents "accumulation of whatevers" from frontier models.

---

## Memory + Context Editing

**Katelyn Lesse, Anthropic**

"Memory + Context Editing is the way to go."

- **Memory tool:** Retrieves relevant context when needed
- **Context Editing:** Manually clear unnecessary content

**"Effective agentic systems require both expanding capabilities and managing constraints."**

---

## The Trust Problem is a Context Problem

**Qodo research:** Developers don't trust AI code because "they don't trust the context that the LLM has."

Not about model capabilities—about whether the harness maintains relevant context while filtering noise.

**Qodo's Context Engine:** Pulls from logs, history, PR comments

**Browser Company:** Prompt editors in dev tools = **10x iteration speed**

---

## From Clever to Communicative

### The Skill Shift

**Steve Yegge:** "If you are still using an IDE by Jan 1st you are a bad engineer."

From "diver window" (one agent, deep) → "ant swarms" (parallel agents)

Current tools = power tools requiring constant supervision

**The new skill premium:**
- Writing things down
- Deterministic validation
- Explicit documentation
- Behavior design

---

## Proactive vs Reactive

**Kath Korevec, Google Labs**

"Humans are unitaskers."

Current tools force us to **manage AI assistants** rather than being **supported** by them.

**Jules (Google's autonomous coding agent):**
- Observes projects
- Suggests next steps with context and rationale
- Built a 6-foot animatronic Halloween head

**From:** Waiting for perfect prompts
**To:** Suggesting tasks with rationale

---

## Model Behavior as Craft

**Samir Mody, Browser Company**

"We're in the early days of model behavior as a craft."

Shift from functional → agentic behavior requires:
- Behavior design
- Measurement
- Model steering

Treating **how AI acts** as seriously as **how it performs**

---

## The ROI Reality Check

### Demo-to-Production Gap

**Asaf Bord, Northwestern Mutual (Fortune 100)**

"The gap between demo and production is so broad."

**Four barriers:**
1. Unknown technology
2. Messy real data
3. Blind-trust bias
4. Budget impact concerns

---

## Pilot Purgatory

**McKinsey research:**

Only **7%** of organizations believe they're fully at scale with AI development tools.

**93%** stuck in "pilot purgatory"—endless experimentation without production deployment.

---

## The Complexity Gap

**Stanford research:**

- Greenfield + low complexity: **35-40% gains**
- Brownfield + high complexity: **0-10% gains**

Brownfield = the meat and potatoes of enterprise development

---

## Vibe Coding Risk

**Lei Zhang, Bloomberg (9,000+ engineers)**

"2 engineers can create the tech debt of 50 engineers."

Usage dropped precipitously moving greenfield → brownfield.

Not resistance—tools couldn't navigate tens of millions of lines of JavaScript and intricate internal libraries.

---

## The Trust-Building Playbook

**Northwestern Mutual's solution:**

1. **Stop using synthetic data** → Use actual messy data
2. **Bring stakeholders into research** → Not isolation
3. **Create organic evaluation sets** → From real workflows

**Build trust incrementally through predictable behavior**

---

## Getting a Lot of Little Things Right

**McKinsey:**

Not wholesale process overhauls.

Numerous small interventions:
- Shorter sprints
- Smaller teams
- Increased investment (greenfield + brownfield)

---

## Focus on Work Developers Hate

**Lei Zhang, Bloomberg**

AI "changes the cost function of engineering."

Don't ask what AI can do. Ask what work developers **don't want to do.**

**High-ROI targets:**
- Uplift agents (handling patches)
- Incident response agents (parsing alert volumes)

Unglamorous but measurable value.

---

## The Economic Realignment

**Gene Kim:**

AI token costs: **$100/day** for output equivalent to developer's annual salary

When costs drop **100x**, previously impossible projects become "annoying things that become free."

---

## Pricing in the New Era

**Asaf Bord, Northwestern Mutual:**

"How do we price software in this new era? **Usage price vs seats price.**"

When one complex query consumes exponentially more resources than a thousand simple ones, flat-rate pricing becomes economically untenable.

---

## Critical Takeaways: Engineering Leaders

1. **Invest in cleanliness first**
   - Standardize environments
   - Improve deterministic validation
   - Refactor for testability
   - Document context and intentions

2. **Build the harness, not model dependence**
   - Context management
   - Memory editing
   - Subagent architecture
   - Behavior steering

---

## Critical Takeaways: Engineering Leaders

3. **Automate quality gates**
   - Testing = essential infrastructure
   - More PRs without autonomous testing = drowning in review backlog

4. **Start with work developers hate**
   - Migrations, incident response, alerts
   - Unglamorous, high-ROI use cases
   - Build trust through measurable value

---

## Critical Takeaways: Organizations

1. **Build trust incrementally**
   - Actual messy data (not synthetic)
   - Stakeholders in research
   - Organic evaluation sets

2. **Treat as systems problem, not people problem**
   - Psychological safety > individual competency
   - Resistance = adaptability, not skill
   - Make experimentation safe

---

## Critical Takeaways: Organizations

3. **Rethink incentives**
   - Traditional salary models create no economic reason to adopt AI
   - Consider output-based compensation
   - Align incentives with AI-amplified productivity

4. **Codify tribal knowledge**
   - Tacit knowledge → explicit prompts
   - What blocked newcomers blocks agents
   - Write it down

---

## The Bottom Line

The organizations succeeding aren't racing to adopt every new model.

They're methodically building foundations:
- Clean code
- Clear processes
- Stakeholder trust

**35-40% productivity gains are real—but only for those who create environments where AI agents can thrive.**

---

## AI Amplifies Fundamentals

**AI isn't replacing software engineering fundamentals.**

**It's amplifying them.**

The future belongs to organizations that understand this and act systematically.

---

## What's Good for Humans is Good for AI

**Max Kanat-Alexander, Capital One**

The path to AI-augmented development runs directly through the fundamentals we've sometimes neglected:

- Clean code
- Comprehensive testing
- Clear documentation
- Predictable systems
- Psychological safety

**These aren't obstacles to AI adoption. They're prerequisites.**

---

## Questions?

Contact: [Your contact info]

Conference: AI Engineering Code Summit 2025-11-20

Attendees: Anthropic, OpenAI, Google Labs, Replit, Bloomberg, Capital One, Stanford, McKinsey, and dozens more
