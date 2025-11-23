---
title: "Continual System-Prompt Learning for Code Agents"
speaker: "Aparna Dhinakaran"
company: "Arize"
track: "Engineering"
topics:
  - "Agents & Autonomy"
  - "Testing & Verification"
---

## 4:00pm - 4:30pm | Continual System-Prompt Learning for Code Agents

**Speaker:** Aparna Dhinakaran, Co-founder & CPO, Arize

**Speaker Profile:** [Full Speaker Profile](../speakers/aparna-dhinakaran.md)

**Bio:** Co-founder & CPO, Arize

**Topic:** RL techniques for system-prompt learning that continuously tune agents from PR feedback and evaluations

![](slides/2025-11-21-16-17-gemini-edited.jpg)
![](slides/2025-11-21-16-18-gemini-edited.jpg)
![](slides/2025-11-21-16-19-gemini-edited.jpg)
![](slides/2025-11-21-16-20-gemini-edited.jpg)
![](slides/2025-11-21-16-21-gemini-edited.jpg)
![](slides/2025-11-21-16-22-gemini-edited.jpg)
![](slides/2025-11-21-16-23-gemini-edited.jpg)
![](slides/2025-11-21-16-24-gemini-edited.jpg)
![](slides/2025-11-21-16-25-gemini-edited.jpg)
![](slides/2025-11-21-16-26-gemini-edited.jpg)
![](slides/2025-11-21-16-27-gemini-edited.jpg)
![](slides/2025-11-21-16-28-gemini-edited.jpg)

### Notes

- a lot of excitement when she came on the screen
- system-prompt is continual iterated on
- memento movie as a model for prompts
	- system prompt learning?
- rl works
	- scalar reward
	- figure out, blindly how to improve that score
	- effective but expensive
	- sample inefficient
	- over kill for teams who want to build agents
- prompt learning
	- score -> llm evals
		- why right wrong
		- why did the student ask that way
		- where the student needs to study
- ran on both claude and cline
	- --append-system-prompt to claude
	- something else for cline
	- got a baseline
	- purely system prompt
	- wrote code -> ran unit tests -> llm evals and a judge, gave feedback
	- use the evals to add back to a meta prompt
- llm judge as an eval was the most important
	- this is the llm as a judge eval
	- eval engineering is a whole concept that they spent a lot of time on
	- this is how you improve your agents
	- one key part is to ask for an explanation
	-  passed in meta prompt (photo)
	- the old world has the original system prompt
- ran again
	- +6%, +15%, +5%
	- on 150 examples
- how is it different from Gepa
	- how is it different than DSPy
	- Requirement many loops and roll outs compared to gepa
- the underlying approach to the using english language the same
- evals make all the difference
- @aparnadhinak
