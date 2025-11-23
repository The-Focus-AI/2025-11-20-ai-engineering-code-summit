---
title: "Autonomy Is All You Need"
speaker: "Michele Catasta"
company: "Replit"
track: "Leadership"
topics:
  - "Agents & Autonomy"
  - "Testing & Verification"
---

# Michele Catasta (Replit) - Autonomy Is All You Need

**Time:** 9:25 AM

**Speaker Bio:** VP of AI at Replit. Previously Head of Applied Research at Google Labs and Google X. Ph.D. in Computer Science, former Stanford instructor.

**Speaker Profile:** [Full Speaker Profile](../speakers/michele-catasta.md)

**Company:** Replit is a web-based development platform with 22M+ creators. Replit Agent lets users create and deploy fully functional applications in minutes.

**Focus:** The paradigm shift from AI copilots to autonomous agents. Catasta has been emphasizing how AI must move beyond support roles to truly autonomous task completion.

## Slides

![](slides/2025-11-20-09-29-gemini-edited.jpg)
![](slides/2025-11-20-09-31-gemini-edited.jpg)
![](slides/2025-11-20-09-33-gemini-edited.jpg)

## Notes

- Building semi-async valley of death
- How do we build agents for non technical users
	- Supervised vs autonomous agents
- It's not about how long they run
- The autonomy given to Agents can be given a very specific scope
	- Agents make all technical decisions
	- Only if the scope you are giving the task is very broken
- The user maintains control over aspects of the project that they care about
- Tasks have a natural complexity
	- Plan -> implement -> test -> loop
	- Goal: maximize the irreducible runtime of the agent
- Building a lot of "painted doors" -- funny way to describe wireframe
	- More than 30% of features are broken
	- Users don't want to spend time doing testing
- Autonomous testing!
	- Break the feedback bottleneck
	- Prevent the accumulations of small errors
	- Overcomes of laziness of frontiers ("accumulations of whatevers")
* Context management
	* Persist on the file system
	* Use the code base
	* Dump the memory in the filesystem
* Subagent invoked by the core loop with a task and fresh context
	* Protects the main agents working memory
	* Avoiding "context pollution"
* Parallel agents presented as a way to stay in the zone, the long run times is not a satisfying user experience for productive people
	* Replit users would have no idea what a merge conflict is
* Core loop as the orchestrator of the subagents
	* Parallelism is decided on the fly

## Phrases:
* Painted doors
* Accumulations of whatevers
* "Time worked 282 minutes"
