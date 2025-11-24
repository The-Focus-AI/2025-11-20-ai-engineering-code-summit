---
name: Rhythm Garg
company: Applied Compute
company_url: "https://appliedcompute.ai"
role: Co-founder & CTO
session: Efficient Reinforcement Learning
session_file: 2025-11-21/11-21-11-20-rhythm-garg-linden-li-applied-compute.md
linkedin: rhythm-garg
twitter: rhythmrg
twitter_url: "https://twitter.com/rhythmrg"
github: coderrg
github_url: "https://github.com/coderrg"
website: "https://rhythmgarg.com"
image: "/photos/rhythm-garg.jpg"
---

Co-founder and CTO at Applied Compute, building production-ready reinforcement learning infrastructure. Former OpenAI researcher who developed reasoning models including o1, with expertise in distributed RL training and competitive programming systems.

## Building Fast, Cheap, Predictable RL for Production

Rhythm Garg advocates for a pragmatic approach to reinforcement learning that differs fundamentally from academic research labs. His focus: making RL deployable at scale through infrastructure that prioritizes speed, cost-efficiency, and predictable training dynamics over theoretical optimality.

## Current Work

As CTO of Applied Compute, Rhythm leads technical development of enterprise-focused RL infrastructure. The company, valued at $700M after raising $80M, builds specialized AI agents trained on company-specific data. Key customers include DoorDash, Cognition, and Mercor.

Applied Compute's technical approach:
- **Pipeline RL with in-flight weight updates** - Sophisticated async training that manages the staleness-variance tradeoff for maximum GPU utilization
- **First-principles system modeling** - Mathematical frameworks for optimizing distributed training pipelines across heterogeneous GPU clusters
- **Data flywheel deployment** - Agents that try actions hundreds of times, grade results systematically, and use RL to reinforce successful reasoning paths
- **Specific Intelligence** - Customized agents with domain expertise, trained on proprietary data, optimized for enterprise workflows

## Background

Prior to founding Applied Compute, Rhythm was a researcher at OpenAI working on the first reasoning models trained with reinforcement learning. His contributions include:
- Development of the o1 reasoning model series
- Infrastructure for training models on competitive programming tasks
- Research on scaling RL approaches for complex reasoning domains

Education from Stanford University with achievements including Intel ISEF 2nd Prize Grand Award, Putnam Mathematical Competition Top 500, and multiple competitive programming honors.

## Philosophy on Reinforcement Learning

Rhythm's technical approach challenges conventional wisdom:

**Staleness as a feature** - Properly managed staleness enables faster training by keeping GPUs saturated. The key is understanding exactly where the staleness-variance balance lies.

**System-level optimization** - GPU utilization drives everything. Success requires modeling the entire training pipeline from first principles: n_gpus, training_batch_size, KV cache memory, forward pass latency, and training throughput.

**Deploy with a flywheel** - Real-world agent deployment generates the training data needed for continuous improvement. Try hundreds of times, grade systematically, reinforce successful paths.

**Practical over theoretical** - Speed and cost matter as much as accuracy. Training pipelines must have known variance and convergence properties to be production-ready.

## Research & Publications

Co-author on major OpenAI research:
- [Competitive Programming with Large Reasoning Models](https://arxiv.org/abs/2502.06807) (2025) - Demonstrates that o3 achieves gold medal at 2024 IOI and Codeforces rating on par with elite human competitors
- [OpenAI o1 System Card](https://arxiv.org/abs/2412.16720) (2024) - Technical documentation for the o1 reasoning model series
- Additional work on logic puzzles and LLM reasoning capabilities

## Conference Appearance

**Event:** AI Engineering Code Summit 2025
**Date:** November 21, 2025
**Time:** 11:20 AM - 11:39 AM
**Session:** Efficient Reinforcement Learning (co-presented with Linden Li)

Rhythm presented Applied Compute's proprietary RL stack for training superhuman agents. The talk covered pipeline RL with in-flight weight updates, managing staleness-variance tradeoffs, first-principles modeling of distributed training systems, and practical approaches for pushing AI past productivity into real-world reasoning tasks. Technical deep-dive included GPU utilization optimization, async training architectures, and the engineering reality of making RL fast, cheap, and predictable for production environments.
