---
name: Natalie Serrino
company: Gimlet Labs
company_url: "https://gimletlabs.ai"
role: Co-Founder
session: AI-Generated Kernels for PyTorch Optimization
session_file: 2025-11-21/11-21-14-45-natalie-serrino-gimlet-labs.md
linkedin: natalieserrino
twitter: nserrino
twitter_url: "https://twitter.com/nserrino"
github: nserrino
github_url: "https://github.com/nserrino"
website: "https://gimletlabs.ai"
image: "/photos/natalie-serrino.jpg"
---

Co-Founder of Gimlet Labs, building AI infrastructure that makes agentic workloads 10X more efficient. Previously Founding Engineer at Pixie Labs (acquired by New Relic) and Observe Inc. Brown University Computer Engineering graduate.

## Making AI Workloads 10X More Efficient

Natalie co-founded Gimlet Labs to solve the infrastructure crisis created by agentic AI systems. While traditional chat models are resource-intensive, agentic systems generate 5-15X more tokens and require heterogeneous compute orchestration across GPUs, memory-bound accelerators, and network-optimized nodes.

Gimlet's platform automatically decomposes AI workloads into stages and maps each to the optimal hardware—decoupling agentic systems from specific accelerators. The company offers both a hosted platform and kforge, a standalone toolkit for developers.

## Research: AI-Generated Kernels

Natalie co-authored groundbreaking research on [AI-generated Metal kernels for PyTorch](https://gimletlabs.ai/blog/ai-generated-metal-kernels), demonstrating that frontier models can automatically optimize GPU code for Apple devices. Key findings:

- 1.87x speedup across 215 PyTorch modules using AI-generated kernels
- Agentic swarm approach (Best of N) outperforms single-model generation
- Context enhancement (CUDA references, Metal profiling) nearly triples performance gains
- Some workloads achieved 4.65x speedups through kernel fusion
- Requires zero kernel engineering expertise—works automatically on existing PyTorch code

This work validates Gimlet's core thesis: AI can automate performance optimization that previously required specialized GPU programming skills.

## Background

**Pixie Labs** (2019-2023) - Founding Engineer on Kubernetes observability platform acquired by New Relic. Built scalable monitoring infrastructure for cloud-native environments.

**Observe Inc.** (2018-2019) - Founding Engineer on observability and data pipeline platform. Early expertise in large-scale data systems.

**Benchmark Capital** (2017-2018) - Entrepreneur in Residence, exploring startup opportunities in infrastructure and AI.

**Trifacta** (2013-2017) - Senior Software Engineer on data transformation platform (acquired by Alteryx).

## Philosophy: Automated Performance Engineering

Natalie's work embodies a shift from manual GPU optimization to AI-driven automation. Rather than requiring deep CUDA/Metal expertise, her approach:

- Uses frontier models as kernel generation agents
- Employs ensemble techniques for reliability
- Validates correctness and performance automatically
- Operates on existing codebases without framework changes

This mirrors her broader vision at Gimlet Labs: abstract away infrastructure complexity, letting AI handle hardware optimization while developers focus on building agentic applications.

## Key Publications

- [AI-Generated Metal Kernels for PyTorch](https://gimletlabs.ai/blog/ai-generated-metal-kernels) - Demonstrates frontier models can write optimized GPU kernels, achieving 1.87x speedups across KernelBench
- [Introducing Gimlet Labs](https://gimletlabs.ai/blog/introducing-gimlet-labs) - Company launch announcement explaining heterogeneous compute orchestration for agentic AI

## Conference Appearance

**Event:** AI Engineering Code Summit 2025
**Date:** November 21, 2025
**Time:** 2:45 PM - 3:04 PM
**Session:** Using AI-Generated Kernels to Instantly Speed Up PyTorch

Demonstrated how AI can automatically generate and optimize compute kernels for custom PyTorch operations without manual engineering effort. Covered kernel generation using transformer architectures, validation approaches, and real-world performance improvements.

---

*Last Updated: November 24, 2025*
