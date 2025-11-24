---
title: "Code World Model: Building World Models for Computation"
speaker: "Jacob Kahn"
company: "Meta"
track: "Engineering"
topics:
  - "Agents & Autonomy"
  - "Data & Quality"
---

## 11:00am - 11:19am | Code World Model: Building World Models for Computation

**Speaker:** Jacob Kahn, Research Scientist, Meta

**Speaker Profile:** [Full Speaker Profile](../speakers/jacob-kahn.md)

**Bio:** Research Scientist, Meta

**Topic:** World-model approach to learning from code that incorporates data from program execution to implicitly predict behavior while generating code

![](slides/2025-11-21-11-04-gemini-edited.jpg)
![](slides/2025-11-21-11-06-gemini-edited.jpg)
![](slides/2025-11-21-11-12-gemini-edited.jpg)
![](slides/2025-11-21-11-16-gemini-edited.jpg)

### Links

https://ai.meta.com/research/publications/cwm-an-open-weights-llm-for-research-on-code-generation-with-world-models/

### Notes

* execute tracking in action
* putting memory traces in the model
* dont need to stop at functions
* world model -> we can imagine the situation
* using github finding ci builds and using those executions to train it
* CWM -- 32B
	* can play with it now
	* CWM is a bash oriented model
* SWE-RL to figure it out
* lets us use the suite of tools
* take a bunch of agentic reasoning model that failed and take that in to train
* fewer tools and larger emphasis of bash
* scale post-training quite a bit
* who do we post train
* punches above its weight
* traces code really well
	* neural debugger?
	* the halting problem ? &lt;- can it solve it?
		* "in some sense this is difficult to decide" which is a funny way of challenging turing
