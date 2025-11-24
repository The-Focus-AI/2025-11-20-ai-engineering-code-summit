---
name: Jacob Kahn
company: Meta AI
company_url: "https://ai.meta.com"
role: Research Scientist
session: Code World Models - Building World Models for Computation
session_file: 2025-11-21/11-21-11-00-jacob-kahn-meta.md
linkedin: null
twitter: null
twitter_url: null
github: null
github_url: null
website: null
---

## Overview

Jacob Kahn is a Research Scientist at Meta AI specializing in large-scale machine learning systems and code generation. At the AI Engineering Code Summit, he presented "Code World Models: Building World Models for Computation," introducing a paradigm shift in how neural networks learn from code by incorporating program execution traces rather than relying solely on syntax.

## Professional Background

- **Current Role**: Research Scientist, Meta AI
- **Focus Areas**:
  - Code generation with world models
  - Large-scale machine learning systems
  - Program execution and tracing
  - Learning from execution data
  - Reinforcement learning for code optimization
  - Neural debugging and code understanding

## Research Vision

Jacob's approach fundamentally challenges conventional code modeling. Rather than viewing code as static syntax, his research treats code generation as a world-modeling problem where neural networks learn implicit behavioral patterns from actual program execution data.

## Code World Models (CWM): The Core Innovation

### Concept

Code World Models represent a novel training methodology that incorporates execution traces—not just code syntax—into model training. This enables the model to build an implicit understanding of how code behaves at runtime.

### Key Technical Details

**Model Specifications:**
- **Size**: 32-billion parameter model
- **Training Data**: GitHub repositories with execution traces
- **Data Sources**:
  - Memory traces from program execution
  - Bash outputs and command results
  - CI/CD build results and test runs
  - Complete execution histories

### What Makes CWM Different

Traditional code generation models are trained exclusively on source code as static text. CWM incorporates:

1. **Execution Traces**: Complete record of program memory state changes
2. **Output Captures**: Actual bash command outputs and results
3. **CI/CD Integration**: Build success/failure patterns from GitHub repositories
4. **Behavioral Data**: How code actually behaves when run, not theoretical syntax patterns

### The "Neural Debugger" Capability

By learning from execution data, CWM develops an implicit understanding of program behavior analogous to a neural debugger. The model can:

- **Trace code execution** remarkably well without running it
- **Imagine execution outcomes** without actual computation
- **Predict runtime behavior** based on learned patterns
- **Understand program semantics** at a behavioral level

This enables the model to "imagine" what code will do, functioning as an internalized simulator of program behavior.

## Training Approach: SWE-RL Integration

### Reinforcement Learning from Code

Jacob's team employs SWE-RL (Software Engineering Reinforcement Learning) to further enhance CWM:

- **Failed Reasoning Recovery**: Incorporates failed agentic reasoning attempts into training data
- **Learning from Mistakes**: The model learns to recognize and recover from incorrect code generation attempts
- **Iterative Improvement**: Each failure becomes a training signal for better future attempts

### Architectural Philosophy

Rather than proliferating tools, the approach emphasizes:

- **Bash-centric workflows**: Heavy emphasis on bash understanding and command execution
- **Significant post-training scaling**: Extensive RL on top of the base 32B model
- **Practical tool integration**: Suite of tools selected strategically rather than comprehensively

### Performance Characteristics

- **Punches above its weight**: Despite being 32B parameters, performs remarkably well
- **Traces code execution**: Demonstrates strong understanding of program behavior
- **Practical for deployment**: Optimized for real-world use cases

## Computational Philosophy

### The Halting Problem Response

When asked about the theoretical limits of CWM—specifically whether it could solve the halting problem—the model reportedly responded with remarkable nuance: "in some sense this is difficult to decide."

This response is philosophically striking. Rather than a simple "no," the model acknowledged:
- The genuine theoretical difficulty
- The computational constraints involved
- The nuanced nature of the problem itself

This hints at deeper understanding beyond pattern matching—a genuine grasp of computational complexity.

## Technical Contributions & Research

### Open Research

Meta has made CWM available as an open-weights model, enabling the broader research community to:
- Experiment with execution-aware code generation
- Develop new approaches to code understanding
- Contribute to world-model-based reasoning

### Publication

**Title**: "CWM: An Open-Weights LLM for Research on Code Generation with World Models"

**Link**: https://ai.meta.com/research/publications/cwm-an-open-weights-llm-for-research-on-code-generation-with-world-models/

## Impact on Code Generation Research

### Paradigm Shift

Jacob's work represents a fundamental rethinking of code generation:

**Old Paradigm**: Code is syntax to be predicted based on previous code
- Source: Program text only
- Training Signal: Code similarity
- Model Output: Syntactically valid code
- Verification: Post-generation testing

**CWM Paradigm**: Code generation is behavior prediction based on execution understanding
- Source: Code + execution traces + outputs
- Training Signal: Behavioral correctness
- Model Output: Behaviorally sound code
- Verification: Implicit from learned execution model

### Implications for AI-Assisted Development

The CWM approach suggests:

1. **Execution Data is Valuable**: Training data quality improves dramatically with real execution traces
2. **Behavioral Understanding Matters**: Models that understand program behavior write better code
3. **Scalability Without Tools**: Bash understanding and tool proliferation are separate concerns
4. **Learning from Failure**: Failed attempts contain crucial information for improvement

## Speaking Topics & Expertise

- **"Code World Models: Building World Models for Computation"** - Inaugural presentation at AI Engineering Code Summit 2025
- World models and computation
- Learning from execution traces
- Program behavior prediction
- Neural approaches to debugging
- Large-scale ML systems for code
- Reinforcement learning for code optimization
- Open-source model research and community contributions

## Key Insights for Industry

### For ML Engineers

- Execution traces are an untapped training data source
- Implicit world models can replace explicit tool specifications
- Post-training on code failures significantly improves performance
- 32B parameter models can achieve frontier-level reasoning on specialized domains

### For Organization Builders

- Capturing execution data enables better model training
- Emphasis on bash/shell understanding over tool multiplication
- Open-source research accelerates industry progress
- Behavioral correctness is more important than syntactic perfection

### For Research Directions

- World models may be the key to more general code understanding
- Learning from failure patterns drives significant improvements
- Computational theory insights inform practical model design
- Execution traces unlock new dimensions of code analysis

## Key Takeaways

1. **Execution Data Transforms Code Models**: Training on execution traces creates fundamentally better code generators
2. **World Models for Code**: Implicit behavioral understanding outperforms explicit syntax matching
3. **Learning from Mistakes**: Failed attempts are valuable training signals, not just noise
4. **Practical Specialization Works**: 32B models can achieve exceptional performance through focused training
5. **Open Source Advances Research**: Releasing models as open-weights accelerates community progress
6. **Bash Understanding is Key**: Emphasizing practical, real-world execution patterns beats tool proliferation
7. **Behavior Beats Syntax**: Code that works is better than code that parses

## Research Themes Alignment

Jacob's work aligns with major conference themes:

- **Trust Through Understanding**: Models that understand execution behavior are more trustworthy
- **Economics of Specialization**: Focused models trained on execution data outperform general models
- **Learning from Failure**: Incorporating failed attempts into training drives improvement
- **The Harness Matters**: World models are about building better abstractions and understanding, not adding tools

## Summit Session Context

**Event:** AI Engineering Code Summit 2025
**Date:** November 21, 2025
**Time:** 11:00 AM - 11:19 AM
**Session:** "Code World Models: Building World Models for Computation"
**Focus:** Learning from program execution traces, large-scale ML systems for code generation, neural approaches to code understanding

---

*Last Updated: November 22, 2025*
