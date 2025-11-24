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
