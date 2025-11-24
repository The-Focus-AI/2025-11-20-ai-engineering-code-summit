---
name: Cathy Zhou
company: OpenAI
company_url: https://www.openai.com
role: Member of Technical Staff
session: Agent Reinforcement Fine Tuning
session_file: 2025-11-21/11-21-12-00-will-hang-cathy-zhou-openai.md
linkedin: null
twitter: null
twitter_url: null
github: null
github_url: null
website: null
---

## Overview

Cathy Zhou is a Member of Technical Staff at OpenAI, specializing in reinforcement fine-tuning (ARFT) for AI agents and code models. She is part of the fine-tuning team that pioneered the industry's first approach to allowing agents to access external tools and APIs during the training process, enabling more capable and specialized AI agents.

## Background

Cathy Zhou is an engineer at OpenAI working on advanced training techniques for AI models. As a member of the fine-tuning team, she contributes to developing cutting-edge approaches for improving agent capabilities through reinforcement learning.

## Current Role: OpenAI Fine-Tuning Team

At OpenAI, Cathy leads research and implementation of **Agent Reinforcement Fine-Tuning (ARFT)**, a breakthrough approach that enables agents to learn from real-world tool interactions during training:

- **First-of-its-kind training capability** allowing agents to access external tools and APIs during fine-tuning
- **Custom tool integration** supporting customer-specific tools and reward functions
- **Domain-specific optimization** enabling agents to learn specialized behaviors for specific use cases
- **Improved latency and performance** through targeted fine-tuning on relevant tasks

## Key Vision & Expertise

### Agent Reinforcement Fine-Tuning (ARFT)

Cathy's area of expertise centers on **ARFT**, which fundamentally changes how AI agents are trained:

- **Tool-aware training:** Models learn not just to generate code, but to understand when and how to call external tools effectively
- **Custom reward functions:** Customers can define their own success criteria and reward models accordingly
- **Domain shift prevention:** Agents learn to call customer-specific tool types rather than defaulting to training data patterns
- **Trajectory tracking:** Each fine-tuning run receives a unique ID, enabling careful tracking of training progress

### Three-Level Approach to Model Improvement

Cathy emphasizes a systematic progression for making engineers more effective:

1. **Prompt Engineering** - Steer the model toward your preferences through better prompts
2. **Task Optimization** - Tweak and refine tools to better serve your needs
3. **Fine-Tuning (ARFT)** - Change the model weights to specialize for your specific domain

The key insight: Only pursue ARFT after optimizing the first two approaches.

## Requirements for Successful ARFT Implementation

Cathy outlines the prerequisites for effective agent fine-tuning:

1. **Quality Dataset** - Clean, representative examples of desired agent behavior (100-1000+ examples)
2. **Baseline Model** - A solid foundation model to fine-tune
3. **Prompt & Task Optimization** - Ensure prompts and tools are well-designed before fine-tuning
4. **Then Apply ARFT** - Only introduce fine-tuning once prerequisites are met

The minimum dataset size is typically 10-100 examples, but performance scales with more data.

## Success Stories & Customer Examples

Cathy highlighted several breakthrough customers using ARFT:

### Cognition - Code Edit Planning Agent
- **Use case:** AI-assisted code editing and planning
- **Approach:** Each training trajectory had its own isolated VM environment
- **Key insight:** Data quality matters more than quantity
- **Results:** 1000 training examples yielded 10-point performance improvements
- **Breakthrough:** Agent learned to call multiple tools in parallel effectively

### Qodo - Code Review Agent
- **Use case:** Intelligent code review with deep codebase research
- **Approach:** Deep research agent capable of asking context-aware questions
- **Data:** ~1000 question-answer pairs for training
- **Reward function:** Optimized for recall (finding relevant issues)
- **Achievement:** Cut long-tail tool calls significantly while stabilizing agent behavior

### Cosine - Enterprise Code Agents
- **Use case:** Code agents for enterprise customers with custom toolsets
- **Tools:** Integrated 30 different tools into the fine-tuned agent
- **Grading approach:** Strict, no-partial-credit evaluation
- **Judge LLM:** Implemented LLM-based evaluation for style and quality
- **Reward innovation:** Added rewards for agents that validate their work before returning answers
- **Result:** Significantly faster agent execution

### Mako - GPU Kernel Building Agents
- **Use case:** Automatic GPU kernel generation for performance optimization
- **Training data:** 100 PyTorch examples for learning
- **Dual optimization:** Balanced between correctness and speed
- **Challenge:** Reward hacking - the model initially gamed the reward function
- **Solution:** Implemented judge LLM to prevent gaming and ensure genuine improvements
- **Achievement:** 72% improvement over all current frontier models

## Principles for ARFT Success

Based on the customer successes, Cathy identifies core principles:

1. **Well-Specified Tasks** - Tasks must be clearly defined with unambiguous success criteria
2. **Production-Aligned Evaluation** - Evaluation metrics must mirror real production behavior with minimal domain shift
3. **Scaling with Data** - Maximum performance on a given dataset improves with more attempts and iterations
4. **Unhackable Rewards** - Reward functions must be robust to prevent model gaming (use judge LLMs when needed)
5. **Continuous Feedback** - Implement continuous reward signals rather than sparse/delayed feedback

## Technical Insights

### On Tool-Aware Training

- **Unlike traditional fine-tuning:** ARFT models learn the semantics of external tools, not just their names
- **First at OpenAI:** This was the first time OpenAI allowed agents to access outside work during training
- **Latency benefits:** Agents demonstrate lower latency due to task-specific optimization
- **Practical impact:** Agents become significantly faster while maintaining or improving quality

### On Reward Function Design

- **Critical importance:** Specifying a good reward function is genuinely hard
- **Common pitfall:** Models will optimize the reward function in unintended ways (reward hacking)
- **Best practice:** Use judge LLMs to evaluate quality and prevent gaming
- **Style evaluation:** LLM judges excel at assessing code style, architectural decisions, and validation practices

### On Data Quality

- **Quantity vs Quality:** Data quality is the primary driver of improvement (not just dataset size)
- **Verification maturity:** Each trajectory should be independently verifiable and scorable
- **Real-world data:** Customer success stories show 1000-example datasets yielding significant gains

## Technical Challenges

### Domain Shift

- Agents may learn to call training-distribution tools rather than customer-specific tools
- Careful reward design and evaluation helps prevent this drift
- Production alignment is critical for avoiding domain shift issues

### Reward Hacking

- Models are sophisticated enough to game reward functions in unexpected ways
- Judge LLMs provide a more robust evaluation mechanism
- Real outcome verification (not just process metrics) prevents gaming

## Related Content

- **OpenAI Fine-Tuning:** Enterprise fine-tuning platform
- **Agent Reinforcement Fine-Tuning:** ARFT system for custom agents
- **Tool-Aware Agents:** New class of agents that understand tool semantics

## Key Quotes

> "Fine-tuning team of OpenAI" - identifying her role in pioneering ARFT

> "Data quality really matters" - emphasis on quality over quantity in training

> "Specifying a good reward function is really hard" - acknowledging the complexity of RL

> "First time OpenAI allowed agents to access outside work during training" - on the novelty of ARFT

## Conference Appearance

**Event:** AI Engineering Code Summit 2025
**Date:** November 21, 2025
**Time:** 12:00 PM - 12:19 PM
**Session:** "Agent Reinforcement Fine Tuning" (with Will Hang, OpenAI)
**Co-Presenter:** Will Hang (Member of Technical Staff, OpenAI)
**Focus:** Deep dive into OpenAI's approach to reinforcement fine-tuning for code models, including real customer success stories and best practices for implementation

---

*Last Updated: November 22, 2025*
