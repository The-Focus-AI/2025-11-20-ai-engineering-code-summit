---
title: "Agent Reinforcement Fine Tuning"
speaker: "Will Hang & Cathy Zhou"
company: "OpenAI"
track: "Engineering"
topics:
  - "Agents & Autonomy"
  - "Data & Quality"
---

## 12:00pm - 12:19pm | Agent Reinforcement Fine Tuning

**Speakers:** Will Hang & Cathy Zhou (both Members of Technical Staff, OpenAI)

**Speaker Profiles:** [Will Hang](../speakers/will-hang.md) | [Cathy Zhou](../speakers/cathy-zhou.md)

**Bio:** Members of Technical Staff, OpenAI

**Topic:** Deep dive into OpenAI's approach to reinforcement fine-tuning for code models

### Notes

- fine tuning team of openai
- agent is different from a regular model to access task to the outside work
	- not just called tools but reasoning at the same time
- how do we make our engineers better
	- 1. prompt engineer to steer the model to your preferences
	- 2. task optimizations -- tweak tools
	- 3. fine-tune - change the weights of the model
- ARFT - change the weight of the model according to what you specific
	- model can now call your tools via you tool point
	- customer tools and customer reward points
		- first time openai allowed agents to access outside work during training
	- requires 10 = 100s
	- results in a model with lower latency
- domain shift -- learning how to call your types of tunes instead of the training one
- each roll out gets a id
	- keep tracks of a trajectory
- reqs
	  1. quality dataset
	  2. get the base line model
	  3. optimize prompts and tasks optimizations
	  4. and THEN use agent RFT
* Partners / Success Stories
	* cognition
		* code edit planning agent
		* each trajectory had its own VM
		* data quality really matters
		* 1000 examples -> 10 point improvements
		* it learned to call many tool calls in parallel
	* qodo
		* code review agent
		* deep research agent to ask questions on the codebase
		* around 1000 question pair
		* reward on recall
		* managed to cut the amount of long tail rule calls
		* stabilized the agent behavior
	* cosine
		* code agents for enterprises
		* 30 tools
		* very strict grader
			* no partial credit
			* judge llm to assess style
			* rewards for agents that validate their work before returning answers
		* much faster agent
	* mako
		* gpu kernel building agents
		* training gpu kernels 100 pytorch examples
		* correctness and speed, with rewards hacking preventions
		* specifying a good reward function is really hard
		* the model was reward hacking
			* implemented a judge llm to stop it
		* 72% improvement over all current frontier models
* principals for success
	* task is well specified and constrained, clear definition of success
	* evals mirrors production behavior, no domain shift
	* max performance on a given data set improves with more tries
	* unhackable, continuous rewards
