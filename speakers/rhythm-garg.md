---
name: Rhythm Garg
company: Applied Compute
company_url: https://appliedcompute.ai
role: Co-founder
session: Efficient Reinforcement Learning
session_file: 2025-11-21/11-21-11-20-rhythm-garg-linden-li-applied-compute.md
linkedin: null
twitter: null
twitter_url: null
github: null
github_url: null
website: null
---

## Overview

Rhythm Garg is a Co-founder at Applied Compute, a company focused on making reinforcement learning practical and efficient for production AI systems. At the AI Engineering Code Summit 2025, he presented alongside co-founder Linden Li on "Efficient Reinforcement Learning," detailing the proprietary RL stack and infrastructure that enables fast, cheap, and predictable training of superhuman AI agents.

## Background

Rhythm Garg is the Co-founder of Applied Compute, an AI infrastructure company specializing in making reinforcement learning practical for production environments. His expertise spans:

- **Production RL infrastructure** - Building systems that scale RL to production use cases
- **Distributed computing** - Architecting efficient training pipelines across multiple GPUs
- **Training optimization** - Maximizing GPU utilization while managing variance and staleness tradeoffs
- **Agent capabilities** - Using RL to push AI past productivity into real-world reasoning and decision-making

## Current Role: Applied Compute

At Applied Compute, Rhythm leads technical initiatives around making RL practical and economical:

### Core Mission: Fast, Cheap, Predictable RL

Applied Compute's approach to RL differs fundamentally from research labs:

- **Fast**: Minimize training time through optimized pipelines
- **Cheap**: Reduce computational costs relative to performance gains
- **Predictable**: Maintain low variance and stable training dynamics

This practical orientation means building systems that ship products rather than advancing research alone.

## Key Expertise: Pipeline RL with In-Flight Weight Updates

Rhythm's core contribution is the sophisticated async training approach called **Pipeline RL with In-Flight Weight Updates**—a technique that dramatically accelerates training cycles while managing the variance-staleness tradeoff.

### The Core Challenge: Staleness vs. Variance

In traditional synchronous RL:
- All gradients update weights simultaneously
- Prevents staleness but limits throughput
- GPUs sit idle waiting for other devices to finish

In naive async RL:
- Weights update immediately without waiting
- Maximizes throughput but increases staleness
- Some tokens generated from outdated weights (sometimes multiple generations back)
- High staleness causes training instability and increased variance

### The Pipeline RL Solution

Applied Compute's breakthrough: **in-flight weight updates** that manage the delicate balance between throughput and stability.

**Key insight:** Staleness is necessary for fast training, but staleness-induced variance increases substantially. The challenge is knowing exactly where that balance lies—preventing scenarios where:
- Too much training but insufficient sampling → bottlenecked by generation
- Too much sampling but insufficient training → bottlenecked by training

### First-Principles Modeling of the Training Pipeline

Rhythm emphasizes that maximizing GPU utilization requires understanding the entire system from first principles:

**Critical Parameters:**
1. **n_gpus** - Number of GPUs in the training cluster (harder to calculate with async because they can split)
2. **training_batch_size** - Sample N problems in parallel
3. **KV Cache memory** - Estimate base KV cache requirements per GPU
4. **forward_pass_latency_per_gpu** - Latency of a single forward pass
5. **training_throughput_per_gpu** - Maximum training throughput per GPU

**The Goal:** Maximize GPU utilization by balancing generation and training workloads, knowing exactly when you have optimal staleness for fast, stable training runs.

### Real-World Performance Considerations

The infrastructure must handle:
- **Heterogeneous token staleness** - Some tokens from current weights, others from previous generations
- **Variance management** - Staleness increases variance; must know the tolerance
- **Throughput optimization** - Every GPU must be utilized without introducing instability
- **Scalability** - System must work across different cluster sizes and configurations

## Key Vision & Philosophy

### Pushing AI Past Productivity

Rhythm's core question: "How do we push AI past productivity into real stuff?"

The answer: **Deploy with a data flywheel.** This means:
1. Build agents that try actions hundreds of times
2. Grade the results systematically
3. Use RL to reinforce successful thinking paths
4. Iterate continuously to improve agent capabilities

This creates a virtuous cycle where deployed agents generate training data that improves future agents.

### Using RL to Enable Reasoning

How does high-compute RL help LLMs learn to reason?

The mechanism:
- Get a model
- Try it hundreds of times on the same problem
- Grade each attempt
- When correct, reinforce the thinking path for that trajectory
- Repeat until convergence

This enables models to develop sophisticated reasoning capabilities through structured feedback and reinforcement.

### Applied Compute vs. Research Labs

Applied Compute's practical focus differs from academic labs:

**Labs prioritize:**
- Novel algorithms
- Theoretical understanding
- Publication-worthy results

**Applied Compute prioritizes:**
- Fast execution
- Cheap operation
- Predictable, low-variance training
- Production reliability

This means pragmatic trade-offs: don't optimize for state-of-the-art performance if it sacrifices speed, cost, or stability.

## Key Talks & Contributions

### "Efficient Reinforcement Learning: RL Mechanisms for Building Superhuman Agents"

**Event:** AI Engineering Code Summit 2025
**Date:** November 21, 2025
**Time:** 11:20 AM - 11:39 AM
**Format:** Co-presented with Linden Li (Co-founder, Applied Compute)
**Focus:** RL mechanisms, proprietary RL stack for efficient model training, distributed computing infrastructure

**Key Topics Covered:**
- How to push AI past productivity using RL data flywheels
- High-compute RL mechanisms for teaching models to reason
- The engineering reality of making RL practical (fast, cheap, predictable)
- Pipeline RL with in-flight weight updates
- Managing the staleness-variance tradeoff
- First-principles modeling of training pipelines
- GPU utilization optimization across distributed systems
- Real-world case studies and performance metrics

**Presentation Materials:**
- Session slides: 17 detailed technical slides covering architecture and insights
- Live demonstrations of training pipeline concepts

## Technical Insights

### On Distributed Computing

- **Staleness is a feature, not a bug** — When managed correctly, staleness enables faster training by keeping GPUs saturated
- **GPU utilization drives everything** — The real optimization problem is balancing generation and training workloads
- **Async is complex** — Simple async approaches fail; sophisticated async with in-flight updates unlocks production RL
- **Variance matters** — Staleness increases variance; successful RL requires understanding and managing this tradeoff

### On RL for Agents

- **Models are the starting point** — RL amplifies whatever capabilities the base model has
- **Data quality drives results** — Carefully graded, structured feedback creates better agents than brute-force attempts
- **Reasoning emerges from iteration** — Sophisticated reasoning develops through repeated attempts and reinforcement
- **The flywheel matters** — Deployed agents generating training data closes the loop for continuous improvement

### On Production Challenges

- **Speed and cost matter** — Theoretical optimality means nothing if training takes too long or costs too much
- **Predictability is critical** — Training pipelines must have known variance and convergence properties
- **Trade-offs are real** — Sometimes staleness helps more than it hurts; must measure empirically
- **System thinking is essential** — Optimizing one component without understanding the whole system leads to bottlenecks

## Related Content

- **Applied Compute:** Company focused on production RL infrastructure for AI agents
- **Pipeline RL:** Sophisticated async training with in-flight weight updates
- **RL for Code:** Using reinforcement learning to improve code agents and reasoning
- **Training Infrastructure:** Distributed computing patterns for efficient model training
- **AI Engineering Code Summit 2025:** Conference presentations on practical RL deployment

## Key Quotes

> "How do we push AI past productivity into real stuff?"

> "The answer is deploy with a data flywheel."

> "In applied computing, we need the runs to be fast, cheap, and predictable (generally low variance)."

> "Pipeline RL with in-flight weight updates dramatically accelerates training cycles."

> "Staleness increases as you increase staleness, but staleness is necessary for fast runs. The challenge is balancing this for stable training."

> "GPU utilization is the core optimization problem. We need to know exactly when we have optimal staleness."

> "Models are smart enough. The limiting factor is building the right infrastructure to train them effectively."

## Conference Appearance

**Event:** AI Engineering Code Summit 2025
**Date:** November 21, 2025
**Time:** 11:20 AM - 11:39 AM
**Session:** "Efficient Reinforcement Learning: RL Mechanisms for Building Superhuman Agents"
**Co-presenter:** Linden Li (Co-founder, Applied Compute)
**Company:** Applied Compute
**Focus:** Production RL infrastructure, pipeline RL with in-flight weight updates, distributed computing optimization, and the practical engineering of making RL fast, cheap, and predictable

---

*Last Updated: November 22, 2025*
*Research Status: Core session information from AI Engineering Code Summit 2025; Applied Compute background research recommended for additional details*
