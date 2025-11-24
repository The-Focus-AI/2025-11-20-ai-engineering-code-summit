---
title: "Efficient Reinforcement Learning"
speaker: "Rhythm Garg & Linden Li"
company: "Applied Compute"
track: "Engineering"
topics:
  - "Infrastructure & Compute"
  - "Agents & Autonomy"
---

## 11:20am - 11:39am | Efficient Reinforcement Learning

**Speakers:** Rhythm Garg & Linden Li (both Co-founders, Applied Compute)

**Speaker Profiles:** [Rhythm Garg](../speakers/rhythm-garg.md) | [Linden Li](../speakers/linden-li.md)

**Bio:** Co-founders, Applied Compute

**Topic:** RL mechanisms for building superhuman agents and discussing proprietary RL stack for efficient model training

![](slides/2025-11-21-11-16-gemini-edited.jpg)
![](slides/2025-11-21-11-22-gemini-edited.jpg)
![](slides/2025-11-21-11-24-gemini-edited.jpg)
![](slides/2025-11-21-11-34-gemini-edited.jpg)
![](slides/2025-11-21-11-38-gemini-edited.jpg)

### Notes

* how do we push AI past productivity into real stuff
	* deploy with a data fly wheel
	* RL is the tool that they use
* how does high computer RL help LLM learn to reason
	* get a model, and try it 100s of times
	* grade the answers
	* when it's correct, reinforce the thinking path for each one
* applied computer is different from the labs
	* need the runs to be fast
	* cheap
	* predictable (generally low variance)
	* can we build
* naive sync rl
	* no
	* async rl -- pipeline RL is their preferred one
	* inflight weight update
	* some tokens are from previous weights, sometimes multiple gens back
	* variance increases as you increase staleness
	* want staleness for fast runs, but staleness makes training unstable and requires advancements
* assuming we know that, what is the high throughput way to do RL
	* surprising far with some first principal modeling problem
		* n_gpus is cast member #1
			* harder to calculate with async because they can split
		* training_batch_size
			* sample n problems in parallel
		* sampling through
			* KV Cache memory
			* we should be estimated the base kv cache
			* forward pass latency per GPU
		* training_throughput_per_gpu
	* really focused on maximizing GPU usage for training run
	* async
		* too many training but not enough sampling
			* no good
		* too many samples
			* no good either
	* delicate balanced and they seemed to know
