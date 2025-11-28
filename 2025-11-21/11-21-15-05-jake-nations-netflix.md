---
title: "The Infinite Software Crisis"
speaker: "Jake Nations"
company: "Netflix"
track: "Engineering"
topics:
  - "SDLC & Process"
  - "Context & Memory"
---

## 3:05pm - 3:24pm | The Infinite Software Crisis

**Speaker:** Jake Nations, Engineering, Netflix

**Speaker Profile:** [Full Speaker Profile](../speakers/jake-nations.md)

**Bio:** Engineering, Netflix

**Topic:** Software crisis patterns, AI's role in accelerating them, and methodology for management

![](slides/2025-11-21-15-03-gemini-edited.jpg)
![](slides/2025-11-21-15-05-gemini-edited.jpg)
![](slides/2025-11-21-15-06-gemini-edited.jpg)
![](slides/2025-11-21-15-12-gemini-edited.jpg)

### Notes

- shipped code that i didn't understand
	- and i bet you have to
- history
	- always happens that it gets to complex to understand it
	- 1972 Dijkstra software crisis
		- weak computers are ok, giant computers it because intractable (there's an exact quote)
	- now we have AI
	- No silver bullet
		- the hard part was never the mechanics of coding.  it was about understand the actual problem and designing the solution
	- the code challenge of understand what to build remains just as hard
- easy != simple
	- Rich Hickey 2011 -- simple made easy talk
	- simple
		- one fold
		- can understand
	- easy
		- reachable
		- can move quickly
	- can't make something simple by wishing it so
	- easy yes
	- things are moving so fast that we can't really refactor anymore to keep things simple
	- no resistant to bad architectural system -- "each interaction chooses easy over simple"
	- takes easy to the logical extreme
	- technical debt doesn't register as debt is just registers as code
	- when things are complex everything touches everything else
	- accidental vs essential complexity
	- example: AI couldn't understand where the business local ends and the auth logic began.  when complexity is intertwined it can't find the path between
- dont outsource thinking
- driving AI adoption at Netflix
	- later production system fails in unproductive ways
- code base 5 millions big
	- no context has access to can hold it
	- select what to include, design docs, arch diagrams, interfaces
	- i was writing a spec
	- became simple markdown
	- compression compression
		- research
			- feed everything upfront
			- arch diagrams
			- document
			- slack thread
			- run books
			- design docs
			- then map it out
			- output is a single research document
			- human checkpoint is critical
		- planning
			- function signals, type definitions
			- exact flow
			- which files to modify
			- what functions to create
			- how components interact
		- implementation
			- this phase should be pretty simple
			- clear spec
			- no complexity spiral
			- backend agent
			- fast review
- ai accelerated the thinking
	- faster clear
	- but remains with the human
	- the real challenge is the knowledge
	- pattern recognition comes from experience
	- ai doesn't encode lessons from past failures
- "software is a human endeavor" the hard part way never typing the code, it was know what to type
- "the question is where we'll still understand our own systems when ai is writing most of our code"

## Slides

### Slide: 15-03
![Slide](../slides/2025-11-21-15-03-gemini-edited.jpg)

**Key Point:** Illustrates how iterative AI-assisted development can spiral from clean solutions into chaotic complexity when developers keep asking for additions without proper refactoring or architectural planning.

**Literal Content:**
- Title: "The Conversation Spiral"
- Subtitle: "AI makes problem-solving easy by engaging in a continuous dialogue."
- Diagram showing progression through messages:
  - Message 1: "Add authentication" → "Clean auth.js" (green/success)
  - Message 5: "Also add OAuth" → "! auth.js + oauth.js" (orange/warning)
  - Message 12: "Sessions broken, add SSO" → "! 4 files, conflicts" (orange/warning)
  - Message 20: "Just make it work" → "X Complete chaos" (red/failure)

### Slide: 15-05
![Slide](../slides/2025-11-21-15-05-gemini-edited.jpg)

**Key Point:** Distinguishes between essential complexity (core business requirements) and accidental complexity (implementation cruft accumulated over time), arguing that AI struggles to differentiate between what's architecturally necessary versus what's technical debt.

**Literal Content:**
- Title: "Why AI Can't Tell What Matters"
- Two sections with red geometric icon:
  - **Accidental Complexity**: All the implementation details we've accumulated; Permission checks woven through business logic; Role assumptions baked into data models
  - **Essential Complexity**: The actual business problem you're solving; Users need to pay; Orders need fulfillment

### Slide: 15-06
![Slide](../slides/2025-11-21-15-06-gemini-edited.jpg)

**Key Point:** Provides concrete evidence that AI tools struggle with large-scale refactoring tasks involving legacy code because they cannot understand the difference between essential business logic and accumulated technical complexity.

**Literal Content:**
- Title: "A Real Example"
- Subtitle: "We asked AI to refactor old, tightly coupled authorization code to use our new centralized system."
- Three sections with stylized images:
  1. **The Legacy Labyrinth**: Old authorization code was deeply embedded. Permission checks were woven through business logic, role assumptions baked into data models, and authentication calls scattered across hundreds of files.
  2. **AI's Frustration**: The AI struggled immensely into this task, often recreating old patterns and failing to grasp the underlying system. It couldn't just "remove" the abstraction layer.
  3. **Untangleable Dependencies**: AI repeatedly hit untangleable issues, highlighting the depth of accidental complexity in the legacy system.

### Slide: 15-12
![Slide](../slides/2025-11-21-15-12-gemini-edited.jpg)

**Key Point:** Describes a hybrid human-AI approach where humans first manually complete a migration to establish patterns, then use AI to scale that approach to remaining services, demonstrating that AI works best when given high-quality examples and clear constraints.

**Literal Content:**
- Title: "The Authorization Refactor Revisited"
- Red geometric diagram showing "BEFORE" and "AFTER" transformation
- Four numbered steps:
  1. **Manual Migration**: First migration completely by hand without AI revealed hidden constraints and invariants
  2. **Seed the Research**: Fed handcrafted PR into research phase. AI could use example of successful migration.
  3. **Generate Questions**: Research phase produced ten specific questions requiring human judgment.
  4. **Plan & Execute**: Generated plan for remaining services. Still validating, still discovering edge cases.
