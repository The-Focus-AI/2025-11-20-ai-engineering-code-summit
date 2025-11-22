## 4:30pm - 4:40pm | Hard-Won Lessons from Building Effective AI Coding Agents

**Speaker:** Nik Pash, Creator, Cline

**Speaker Profile:** [Full Speaker Profile](../speakers/nik-pash.md)

**Bio:** Creator, Cline

**Topic:** Hard-won lessons from building large-scale coding agents at Cline—what failed, what survived, and future directions

![](slides/2025-11-21-16-29-gemini-edited.jpg)
![](slides/2025-11-21-16-30-gemini-edited.jpg)
![](slides/2025-11-21-16-31-gemini-edited.jpg)
![](slides/2025-11-21-16-32-gemini-edited.jpg)
![](slides/2025-11-21-16-33-gemini-edited.jpg)
![](slides/2025-11-21-16-34-gemini-edited.jpg)
![](slides/2025-11-21-16-35-gemini-edited.jpg)
![](slides/2025-11-21-16-36-gemini-edited.jpg)
![](slides/2025-11-21-16-37-gemini-edited.jpg)
![](slides/2025-11-21-16-38-gemini-edited.jpg)
![](slides/2025-11-21-16-39-gemini-edited.jpg)

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
