---
name: Jacob Kahn
company: Meta AI
company_url: "https://ai.meta.com"
role: Research Manager
session: Code World Models - Building World Models for Computation
session_file: 2025-11-21/11-21-11-00-jacob-kahn-meta.md
linkedin: jacobdavidkahn
twitter: jacob_d_kahn
twitter_url: "https://twitter.com/jacob_d_kahn"
github: jacobkahn
github_url: "https://github.com/jacobkahn"
website: "https://jacobkahn.me"
image: "/photos/jacob-kahn.jpg"
---

Research Manager at Meta AI leading FAIR's code generation research in North America, also serving as CS Faculty at the University of Pennsylvania. Creator of CWM (Code World Models), pioneering the use of execution traces and behavioral data in neural code generation.

## Pioneering Code Generation with World Models

Jacob Kahn challenges conventional approaches to code generation by treating it as a world-modeling problem rather than pure syntax prediction. His work fundamentally rethinks how neural networks learn from code by incorporating program execution traces, bash outputs, and CI/CD results alongside source code.

## Current Work & Research

Jacob leads FAIR's code generation research, focusing on the co-design of deep neural models and systems. His [CWM project](https://ai.meta.com/research/publications/cwm-an-open-weights-llm-for-research-on-code-generation-with-world-models/) introduces a 32B parameter model trained on execution data from GitHub repositories, achieving 65.8% on SWE-bench Verified, 68.6% on LiveCodeBench, and 96.6% on Math-500.

The CWM approach incorporates:
- Memory traces from program execution
- Bash outputs and command results
- CI/CD build success/failure patterns
- Complete execution histories alongside code syntax

This enables the model to develop what Jacob calls a "neural debugger" capability - implicit understanding of program behavior without actually running code.

## Key Technical Innovations

**Training methodology:** Rather than learning syntax patterns alone, CWM learns from how code actually behaves at runtime, creating an internalized simulator of program execution.

**SWE-RL integration:** The model improves through reinforcement learning on failed agentic reasoning attempts, treating mistakes as valuable training signals rather than noise.

**Bash-centric design:** Emphasizes practical shell understanding over tool proliferation, with significant post-training scaling on real-world workflows.

> "in some sense this is difficult to decide" - CWM's response when asked about the halting problem, demonstrating nuanced understanding of computational complexity beyond pattern matching.

## Notable Publications

- [CWM: An Open-Weights LLM for Research on Code Generation with World Models](https://ai.meta.com/research/publications/cwm-an-open-weights-llm-for-research-on-code-generation-with-world-models/) (2025)
- [Code World Model Preparedness Report](https://ai.meta.com/research/publications/code-world-model-preparedness-report/) (2025)
- [Transfusion: Predict the Next Token and Diffuse Images with One Multi-Modal Model](https://ai.meta.com/research/publications/transfusion-predict-the-next-token-and-diffuse-images-with-one-multi-modal-model/) (2024)
- [Flashlight: Enabling Innovation in Tools for Machine Learning](https://ai.meta.com/research/publications/flashlight-enabling-innovation-in-tools-for-machine-learning/) (2022)

Creator of [flashlight](https://github.com/flashlight/flashlight) (5.4k stars), a C++ standalone library for machine learning, and [wav2letter](https://github.com/flashlight/wav2letter) (6.4k stars), an automatic speech recognition toolkit.

## Background

Holds M.S. and B.S. degrees in Computer Science from University of Pennsylvania's Management & Technology program, plus B.S. in Economics from Wharton School with focus on statistics and operations research. Previously led PennApps hackathon organization.

## Conference Appearance

**Event:** AI Engineering Code Summit 2025
**Date:** November 21, 2025
**Time:** 11:00 AM - 11:19 AM
**Session:** Code World Models: Building World Models for Computation

Jacob introduced the paradigm shift from syntax-based to behavior-based code generation, demonstrating how execution traces create fundamentally better code models. His presentation emphasized learning from failure patterns, the importance of bash understanding, and how 32B specialized models can achieve frontier-level performance through focused training on execution data.
