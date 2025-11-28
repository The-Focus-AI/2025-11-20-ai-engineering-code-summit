---
title: "Hard-Won Lessons from Building Effective AI Coding Agents"
speaker: "Nik Pash"
company: "Cline"
track: "Engineering"
topics:
  - "Agents & Autonomy"
  - "Testing & Verification"
---

## 4:30pm - 4:40pm | Hard-Won Lessons from Building Effective AI Coding Agents

**Speaker:** Nik Pash, Creator, Cline

**Speaker Profile:** [Full Speaker Profile](../speakers/nik-pash.md)

**Bio:** Creator, Cline

**Topic:** Hard-won lessons from building large-scale coding agents at Cline—what failed, what survived, and future directions

![](slides/2025-11-21-16-27-gemini-edited.jpg)
![](slides/2025-11-21-16-36-gemini-edited.jpg)
![](slides/2025-11-21-16-37-gemini-edited.jpg)
![](slides/2025-11-21-16-38-gemini-edited.jpg)

### Notes

- agents aren't bottleneck by clever tricks anymore
- the model strength is the main thing
- terminus still beats everything with one tool design
	- no clever tool calling
	- capability beats scaffolding
- minimalism wins
	- basic tools
	- terminal
	- grep
	- filesystem
	- native tool calling shaping
- Tired of all the little hack
- models only get better when labs train on something hard
- benchmarks determine what frontier models do best
	- everything trace back to the environments they've training against
- a benchmark is an environment, starting state, and a verifiers
	- rl environments are sort of the same
	- the only real difference is how the reward is used
	- one is measure one is improve
- Cline has an RL environments factory
	- get subagents and get them to qualify tasks
	- what makes a good RL environment good
- good verifier example tea kettle
	- goal boil water
	- test: is it whistling
	- pure outcome driven verifier
	- doesn't care how you achieved it
	- test for the outcome and don't let other things sneak in there so you can reliably score and verify it
	- bad tests
		- is the burner set to high
		- has 5 minutes elapse
		- is the kettle on the front left
		- did you filter water
		- is the lid position correct
- can we full automate the process to convert real work training data
	- bottleneck should shift from engineering to collecting quality tests
- got meta can we be?
- "truth nuke" - truke
	- the agents that are out there is collecting good data but not sharing it
	- agents should be publishing the data set for real engineering work to improve the dataset
	- keeping them closed slows down research
- **"cline-bench" our real-world agent coding benchmark**
	- open source, open science
	- can openly run from opt in users
	- make them training data
	- call for contribution
	- use it on your open source software

## Slides

### Slide: 16-36
![Slide](../slides/2025-11-21-16-36-gemini-edited.jpg)

**Key Point:** Illustrates common testing anti-patterns by showing how tests can be overly prescriptive, focusing on implementation details rather than the actual functional outcome, which leads to brittle tests that miss the real requirements.

**Literal Content:**
- Title: "Bad tests (over-prescriptive, miss the point)"
- Seven examples of problematic test scenarios using a kettle/water boiling analogy:
  - "Is the burner set to high?" - Tests implementation not outcome
  - "Has 5 minutes elapsed?" - Prescriptive timing vs actual state
  - "Is the kettle on the front-left burner?" - Structural constraint that doesn't matter
  - "Did you use filtered water?" - Style choice, not functional requirement
  - "Is the lid positioned exactly perpendicular?" - Over-specified mechanics
  - "Is the kettle made of stainless steel not copper?" - Prescribing HOW vs WHAT
  - "Did you fill it to exactly 2 cups?" - Testing method, not result

### Slide: 16-37
![Slide](../slides/2025-11-21-16-37-gemini-edited.jpg)

**Key Point:** Chronicles the journey of automating the creation of reinforcement learning environments for Cline, showing dramatic time reductions (from 16 hours to 3 hours) through progressive automation, with about 80% now automated.

**Literal Content:**
- Title: "Path to automation: Cline's RL Env Factory"
- Left side shows progression:
  - "Work on cline-bench started out manual"
  - "Time to first RL environment ~ 16 hours of my time"
  - "Second RL environment - 4 hours"
  - "Environments 3 through 8 - 3 hours"
  - "There is still some manual human involvement that can be automated away"
  - "As things get more automated, the bottleneck becomes collecting more high quality engineering tasks through the Cline Provider"
- Right side lists points about visibility, system completion, and building automation
- Bottom states: "STATUS: VERY PROMISING"

### Slide: 16-38
![Slide](../slides/2025-11-21-16-38-gemini-edited.jpg)

**Key Point:** Criticizes the lack of transparency in the AI agent industry, pointing out that while companies collect extensive failure data to improve their systems, they don't share these real-world failure cases publicly, creating an information asymmetry.

**Literal Content:**
- Three italicized statements with company names redacted (shown as black boxes):
- "When [REDACTED]'s agent fails on a task, they capture it. When [REDACTED]'s agent hits a wall, they log it."
- "When [REDACTED] needs to tune their system prompt, they have millions of real failure cases."
- "And none of them will show you a single one."
