---
name: Linden Li
company: Applied Compute
company_url: "https://appliedcompute.ai"
role: Co-Founder & Chief Architect
session: Efficient Reinforcement Learning
session_file: 2025-11-21/11-21-11-20-rhythm-garg-linden-li-applied-compute.md
linkedin: linden-li
twitter: lindensli
twitter_url: "https://twitter.com/lindensli"
github: linden-li
github_url: "https://github.com/linden-li"
website: null
image: "/photos/linden-li.jpg"
---

Co-Founder and Chief Architect at Applied Compute, building production-grade reinforcement learning infrastructure for training AI agents at scale. Previously worked at OpenAI on reasoning models, coding AI, and deep research tools including the o1 model. Stanford graduate (2021-2023) specializing in ML systems and infrastructure.

## From OpenAI to Applied Compute

After working on infrastructure and ML systems for reinforcement learning training at OpenAI, Linden Li co-founded Applied Compute in 2025 alongside Rhythm Garg and Yash Patil. The company has raised $80M+ in funding (backed by Benchmark, Sequoia, Lux, Hanabi, Neo) and is valued at close to $700M.

Applied Compute's mission: building "Specific Intelligence" to create the first generation of agent workforces through efficient, production-ready RL infrastructure.

## Technical Philosophy

Linden's approach challenges academic RL by prioritizing practical constraints:

**Pipeline RL Architecture** - Async RL with in-flight weight updates enables faster training. The key innovation: managing staleness (where tokens are sampled from previous weight versions) through training stability advances.

**First-Principles Modeling** - High-throughput RL requires balancing GPU count, training batch size, KV cache management, sampling throughput, and training throughput. Too many training operations without enough sampling (or vice versa) creates inefficiency.

**Production Constraints** - Fast, cheap, and predictable training enables organizations to build domain-specific agents that outperform frontier models on specialized problems with reasonable resources.

## Summit Session

**Conference:** AI Engineering Code Summit 2025
**Date:** November 21, 2025
**Time:** 11:20 AM - 11:39 AM
**Topic:** Efficient Reinforcement Learning (co-presented with Rhythm Garg)

The session explored how to push AI past productivity into measurable value through RL mechanisms. Key insights included:

- High-compute RL helps LLMs learn to reason by running models hundreds of times, grading answers, and reinforcing correct thinking paths
- Pipeline RL makes this approach viable at production scale through async training and staleness management
- The "data flywheel" enables continuous improvement of agents through deployment and learning

## Background

- **Education:** Stanford University (2021-2023), Computer Science
- **Previous Role:** OpenAI - Infrastructure and ML systems for RL training, worked on reasoning models (o1), coding AI, and ChatGPT deep research tools
- **Recognition:** World Schools Debating Champion (2018), Frederick Emmons Terman Engineering Scholastic Award (2023)
- **Location:** San Francisco Bay Area

## Industry Impact

Applied Compute's infrastructure represents a paradigm shift from "research labs only" to production-grade RL. Organizations no longer face a binary choice between using frontier models as-is or training from scratch—they can create specialized agents with reasonable computational resources.

---

*Last Updated: 2025-11-24*
