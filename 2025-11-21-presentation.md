# AI Engineering Code Summit - Day 2
## November 21, 2025

---

## The Core Insight

**AI makes coding dangerously easy, but easy isn't simple**

Success requires augmenting human thinking—not replacing it—through:
- Deliberate context management
- Prompt tuning to encode expertise
- Verification-first design

The organizations that master these will build quality. The rest will build slop at scale.

---

## The War on Slop

Swyx opened Day 2 declaring war on AI-generated mediocrity.

But 25 sessions later, the real insight emerged:

**The line between quality and slop isn't about AI capability—it's about whether we augment or outsource human thinking.**

---

## The Easy vs Simple Trap

Jake Nations (Netflix): "I shipped code I didn't understand"

Dex Horthy surveyed 100,000 developers:
- Stuck in endless rework cycles
- "Fixing the slop from last week"
- Outsourcing thinking instead of augmenting it

**Rich Hickey's warning applies**: Easy ≠ Simple

AI makes generating code trivially easy. But when systems become complex, everything touches everything.

Technical debt doesn't register as debt to AI—it just registers as code.

---

## What Actually Matters

**The hard part was never typing the code.**

**It was knowing what to type.**

That hasn't changed.

Nations watched an AI agent struggle with a codebase where business logic and authentication were so intertwined "it couldn't find the path between them."

We're not building faster. We're building incomprehensibility at scale.

---

## Augmented Thinking: Three Core Techniques

### 1. Context Management
### 2. Prompt Tuning
### 3. Verification-First Design

These aren't optional extras. They're the foundation of building with AI.

---

## Technique 1: Context Management

**Beyond 40% context utilization, AI output quality collapses.**

Dex Horthy's solution: **Intentional compaction**
- Pre-research everything (architecture diagrams, design docs, Slack threads, runbooks)
- Compress into focused markdown
- Plan in phases with human checkpoints

**Netflix's 5M-line codebase approach:**
Research → Compress into single document → Plan with exact specs → Implement

**Subagents exist for one purpose:** Context isolation, not capability compensation

---

## Technique 2: Prompt Tuning

**Aparna Dhinakaran (Arize): Continual system-prompt learning**

Results with just 150 examples:
- +6%, +15%, +5% improvements across benchmarks
- Uses LLM evals to understand WHY agents fail
- Encodes that learning into meta-prompts

**The breakthrough:** Require explanations from judge LLMs
- Transforms opaque scores into actionable feedback
- Bridges accessible prompt engineering with powerful RL

This is how you encode your expertise into agent behavior.

---

## Technique 3: Verification-First Design

**The tea kettle principle:**

**Good verifier:** Is it whistling? (outcome)

**Bad verifier:** Is burner on high? Has 5 minutes elapsed? Is it on the front left burner? (process)

Dex Horthy: "Hardness engineering"—deliberately make AI's job harder by forcing human thinking upfront.

Design the outcome verifier FIRST. Then build the task.

---

## Environments: The Universal Abstraction

**Starting state + Harness + Verifier**

This pattern unifies everything:
- Benchmarks (measure)
- RL training (improve)
- Skills (progressive knowledge)
- Artifacts (interactive verification)

Eno Reyes (Factory AI) and Nik Pash (Cline) independently converged on this.

Will Brown (Prime Intellect): **"Environments are the webapps of research"**

They're democratizing AI engineering.

---

## The Spectrum of Specialization

Organizations have multiple paths to specialized agents:

**Continual prompt learning:** 150 examples → measurable improvements (accessible)

**ARFT:** 1,000 examples → 10-point improvements (OpenAI)

**Pipeline RL:** Fast, cheap, predictable training (Applied Compute)

**Code World Models:** Learning from execution traces (Meta)

**The pattern:** Smart models for planning → Fast specialized models for execution

---

## Real Results

**Mako's GPU kernel agent:**
72% gains over frontier models with 100 PyTorch examples

**Cognition's code edit agent:**
10-point improvement with 1,000 examples

**Arize prompt tuning:**
+15% improvement with 150 examples

**The economics have shifted.** Organizations can create domain-specific agents that outperform frontier models with reasonable resources.

---

## The New Bottleneck: Data

Nik Pash's "truth nuke":

**Production agents are collecting goldmine data but keeping it locked.**

Millions of users generating quality trajectories daily—but it's behind closed doors.

This chokes research progress.

**Models improve when trained on hard problems.**

The constraint isn't compute or clever engineering—it's collecting quality training data and having the courage to share it.

---

## Cline-bench: Open Data as Infrastructure

Nik Pash's response: Open-source, real-world agent coding benchmark

Built from opt-in user data. Converts production work into training data.

**The culture shift:** Treating data sharing as infrastructure, not competitive loss

**The question:** Will we choose the open science path that accelerated deep learning, or proprietary moats that slow everyone down?

---

## What To Do: Context Management

- Pre-research comprehensively before engaging AI
- Gather: architecture diagrams, Slack discussions, design docs, runbooks
- Compress findings into focused markdown
- Deploy subagents to isolate context domains (search, reasoning, refactoring)
- Monitor context utilization—compress when approaching 40%

**Design phase-based workflows:** Research → Plan → Implement
**Human checkpoints at phase boundaries**

---

## What To Do: Prompt Tuning

- Collect feedback from PRs, code reviews, production failures
- Use LLM evals to understand WHY agents fail on YOUR problems
- Encode learning into system prompts and meta-prompts
- Require explanations from judge LLMs for actionable feedback
- Start with 100-150 examples for measurable gains

**This is how you capture organizational expertise.**

---

## What To Do: Verification & Specialization

**Verification:**
- Start every task by defining outcome verifier FIRST
- Make verifiers test results, not methods
- Invest in eval engineering as heavily as model selection

**Specialization:**
- Map your top 3-5 high-value tasks to the right technique
- Experiment with dual-model architectures (smart planning / fast execution)
- Start accessible (prompt tuning) → explore deeper (ARFT, RL)

---

## What To Do: Open Data

If running production agents:
- Implement opt-in trajectory collection (user consent)
- Contribute anonymized data to open benchmarks
- Recognize: collective progress benefits everyone more than proprietary moats slow everyone

**The bottleneck has migrated.**

From clever engineering → to data quality and openness

---

## The Bottom Line

**Never outsource the thinking.**

AI is a tool for amplifying human expertise—not replacing it.

Use AI for:
- Research
- Implementation
- Execution speed

Keep humans in charge of:
- Architectural decisions
- Problem understanding
- Design choices

**Red flag:** AI agreeing with everything = context is lost

---

## Building Quality in the Age of AI

1. **Context management** - Pre-research, compress, isolate domains
2. **Prompt tuning** - Encode expertise from failures into meta-prompts
3. **Verification-first** - Design outcome tests before building
4. **Environments everywhere** - Think in starting states + verifiers
5. **Open data** - Share trajectories to accelerate collective progress

The war on slop is won through discipline, not just better models.

---

## Questions?

The technology is here.
The principles are clear.
What remains is execution.

And that, as Nik Pash reminded us, requires courage.
