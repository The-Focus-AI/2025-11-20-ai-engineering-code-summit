# AI Engineering Code Summit - Day 2
## November 21, 2025 - Executive Presentation

---

## Slide 1: The War on Slop

**The path to "kino" (quality and craft) isn't through clever engineering**

It requires:
- Human thinking at the center
- Environments as universal abstraction
- Model capability over scaffolding
- Open data to accelerate progress

*Swyx declared war on "slop." 25 sessions later, the architecture of quality emerged.*

---

## Slide 2: DO NOT OUTSOURCE THE THINKING

> "AI can only amplify the thinking you've done" — Dex Horthy, HumanLayer

**The trap:** AI makes coding dangerously easy, but easy ≠ simple

**The reality:** 100,000 developers caught in rework cycles, "fixing the slop from last week"

**Jake Nations (Netflix):** "I shipped code I didn't understand"

When systems become complex, "everything touches everything else." Technical debt "doesn't register as debt—it just registers as code."

---

## Slide 3: The 40% Context Threshold

**Beyond 40% context window utilization, AI output quality collapses**

**Horthy's solution: "Intentional compaction"**
- Pre-research comprehensively (architecture diagrams, design docs, Slack threads)
- Compress into focused markdown
- Phase-based workflows with human checkpoints

**Netflix's 5M-line codebase approach:**
Research → Compress to single doc → Plan with exact specs → Implement

**Red flag:** When AI responds "you're absolutely right," context is lost

---

## Slide 4: Environments as Universal Abstraction

> "Environments are the webapps of research" — Will Brown, Prime Intellect

**The convergence:** Benchmarks, RL training, Skills, artifacts = same pattern
- Environment + starting state + verifier
- Only difference: how rewards are used (measure vs. improve)

**Eno Reyes & Nik Pash independently discovered this**

**Tea kettle verification:**
- Good: Is it whistling? (outcome-driven)
- Bad: Is burner on high? 5 minutes elapsed? (process-driven)

---

## Slide 5: The Evolutionary Chain

**Environments → Skills → Artifacts**

**Anthropic's Skills:** Package institutional knowledge as progressively disclosed environments

**Google DeepMind's Artifacts:** "Dynamic representations" that become interactive verification spaces

**Prime Intellect's Hub:** First-class entities for training and evaluation

This abstraction unifies training, evaluation, and deployment into single framework

---

## Slide 6: RL Democratizes Specialization

**OpenAI's ARFT: 1,000 examples → 10-point improvements**

Success stories:
- Cognition: 10-point gain with 1,000 examples
- Mako: 72% improvement over frontier models with 100 PyTorch examples
- Qodo: Stabilized agent behavior with ~1,000 question pairs

**Applied Compute:** Pipeline RL makes training fast, cheap, predictable

**Meta's Code World Models:** Learn from execution traces (memory, bash, CI builds)

---

## Slide 7: The Specialization Spectrum

**From prompts to weights:**

- **Prompt tuning:** +6%, +15%, +5% with 150 examples (Arize)
- **ARFT:** 10-point gains with 1,000 examples (OpenAI)
- **Pipeline RL:** Production-scale training (Applied Compute)
- **Execution-aware:** Code World Models (Meta)

**Practical pattern:** Smart models for planning → fast specialized models for execution

Cursor's Composer, Amp's smart/rush dual system

---

## Slide 8: Capability Beats Scaffolding

> "Agents aren't bottlenecked by clever tricks anymore. Model strength is the main thing." — Nik Pash

**The evidence:** Terminus beats everything with minimal tool design
- No clever tool calling
- Just terminal, grep, filesystem
- Minimalism wins

**"I'm tired of all the little hacks"**

Years of elaborate architectures, complex pipelines, sophisticated prompting = symptoms of compensating for model limitations

---

## Slide 9: The Death of Clever Engineering

**Even sophisticated architectures exist for context management, not capability compensation**

Amp Code's subagents (Oracle, Finder, Librarian, Kraken):
- Clean interfaces to specific capabilities
- Avoid "context confusion" from too many tools
- Should disappear when better models arrive

**Joel Becker (METR):** "Everything traces back to environments they've been training against"

Good benchmarks test outcomes. Bad benchmarks encode process assumptions.

---

## Slide 10: Data is the New Bottleneck

**Pash's "truth nuke":**
> "Agents are collecting good data but not sharing it. Keeping them closed slows down research."

**The reality:**
- Every production AI agent sits on goldmine data
- Millions of users generating quality trajectories daily
- Almost none of it shared
- Choking research progress

**OpenAI ARFT proves:** 1,000 high-quality examples transform models

But the data exists behind closed doors

---

## Slide 11: Cline-Bench & Open Science

**Pash's response:** Open-source, real-world agent coding benchmark

**Vision:** Opt-in user data → training data → collective progress

**Will Brown's environments hub:** Infrastructure to turn trajectories into training environments

**The stack is ready. What's missing is courage.**

Will we choose:
- Open science path that accelerated deep learning?
- Proprietary moats that slow collective progress?

---

## Slide 12: What To Do - Human Control

**1. Never outsource thinking**
- Keep humans in charge of architectural decisions
- Phase-based workflows: research → plan → implement
- When AI "agrees with everything," context is lost

**2. Master the 40% context threshold**
- Pre-research comprehensively
- Compress into focused markdown
- Deploy subagents for context isolation
- Monitor and compress aggressively above 40%

---

## Slide 13: What To Do - Verification & Specialization

**3. Design verification-first**
- Define outcome verifiers before writing code
- Test results, not methods
- Invest in eval engineering heavily

**4. Explore the specialization spectrum**
- Prompt tuning: 150 examples for quick wins
- ARFT: 1,000 examples for deeper specialization
- Pipeline RL: Production-scale training
- Smart-for-planning, fast-for-execution architectures

---

## Slide 14: What To Do - Capability & Open Data

**5. Invest in capability, not scaffolding**
- Focus on improving base models
- Better training data and evals
- Not elaborate workarounds for limitations

**6. Contribute to open data ecosystems**
- Implement opt-in trajectory collection
- Contribute anonymized data to benchmarks
- Collective progress > proprietary moats

**Models only get better when labs train on something hard**

---

## Slide 15: The Architecture of Kino

**Five interconnected principles:**

1. Human thinking at the center (context engineering, 40% threshold)
2. Environments as universal abstraction (benchmarks = RL = Skills)
3. Specialized models through RL (1,000 examples → 10 points)
4. Capability over scaffolding (minimalism wins)
5. Open data as infrastructure (courage to share)

**The question:** Will we still understand our systems when AI writes most of our code?

**The answer:** Yes, if we build the right infrastructure and make the right choices.

---

*Conference: AI Engineering Code Summit - Day 2, November 21, 2025*
*Organizations: Anthropic, OpenAI, Google DeepMind, Meta, Netflix, and more*
