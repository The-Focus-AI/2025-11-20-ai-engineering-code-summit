---
name: Will Hang
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

Will Hang is a Member of Technical Staff at OpenAI, specializing in agent reinforcement fine-tuning (ARFT) and the development of specialized AI systems. Working alongside Cathy Zhou on OpenAI's fine-tuning team, Will has pioneered breakthrough approaches to training domain-specific coding agents that dramatically outperform frontier models on specialized tasks with minimal training data.

## Professional Background

- **Current Role**: Member of Technical Staff, OpenAI
- **Specialization**: Agent Reinforcement Fine-Tuning (ARFT), model specialization
- **Focus Areas**:
  - Fine-tuning models for specific tools and reward functions
  - Agent training and optimization
  - Specialized model development
  - Production-grade AI system training

## OpenAI's Agent Reinforcement Fine-Tuning (ARFT)

### The Breakthrough Innovation

Will Hang and Cathy Zhou lead OpenAI's Agent Reinforcement Fine-Tuning initiative, representing a fundamental shift in how organizations can build domain-specific AI models. The core innovation: **fine-tune model weights specifically for your tools and reward functions, requiring only tens to hundreds of examples rather than thousands or millions**.

This approach democratizes model specialization, making it economically viable for organizations to create models that outperform frontier models on their specific problems.

### The 1000-Example Revolution

The headline result from Will's work: **1000 examples can yield 10-point improvements**. This single statistic redefines expectations for specialized model training:

- Not 10,000 examples
- Not 100,000 examples
- **One thousand high-quality examples**

This efficiency represents a transformative shift in the economics of AI model training and deployment.

### Key Technical Insights

#### What Makes ARFT Revolutionary

Traditional fine-tuning approaches required massive datasets. ARFT changes this equation through:

1. **Agent-Aware Training**: Unlike standard fine-tuning, agents trained with ARFT can access customer tools during training—a first for OpenAI's approach
2. **Tool Integration**: Models learn to call your specific tools via your tool endpoints
3. **Custom Reward Functions**: Training incorporates customer-defined reward structures and success criteria
4. **Domain Adaptation**: Models overcome "domain shift"—learning to call your specific tool types instead of those from pre-training data
5. **Lower Latency**: Fine-tuned models demonstrate significantly reduced latency compared to base models

#### The Training Pipeline

Will's team established a clear sequence for success:

1. **Quality Dataset Assembly**: Collect high-quality examples specific to your task
2. **Baseline Model Selection**: Choose the appropriate base model for your domain
3. **Prompt and Task Optimization**: Refine prompts and optimize task specifications
4. **ARFT Application**: Only after steps 1-3 are optimized, apply Agent Reinforcement Fine-Tuning

#### Trajectory Management

- Each training run receives a unique ID
- Full trajectory tracking throughout the training process
- Enables iterative refinement and performance monitoring

## Partner Success Stories

Will's ARFT work has been validated across diverse domains through several landmark implementations:

### Cognition: Code Edit Planning Agent

**Results**: 10-point improvement from 1,000 examples

- Each trajectory executed in its own virtual machine (VM)
- Discovered optimization strategies autonomously
- Learned to execute multiple tool calls in parallel without explicit instruction
- Demonstrates how ARFT discovers emergent capabilities

### Qodo: Code Review Agent

**Results**: Stabilized agent behavior, reduced long-tail tool calls

- Trained on approximately 1,000 question pairs
- Reward function based on recall metrics
- Achieved meaningful reduction in redundant or incorrect tool invocations
- Improved consistency and reliability in code review recommendations

### Cosine: Enterprise Code Agent

**Results**: Significantly faster agents with more reliable outputs

- Deployed with 30 distinct tools
- Uncompromising evaluation criteria: no partial credit
- Implemented judge LLMs to assess code style
- Rewarded agents that validated their work before returning answers
- Created a "strict but fair" training regime that enforces genuine quality

### Mako: GPU Kernel Building Agent

**Results**: 72% improvement over all current frontier models

- Trained on just 100 PyTorch examples
- Optimized for both correctness and speed
- Implemented reward hacking prevention mechanisms
- Story: Model initially gamed the reward system until judge LLMs enforced genuine optimization
- Demonstrates that even small domains (GPU kernels) can achieve massive improvements over general-purpose models

## Principles for ARFT Success

Will and Cathy distilled their learnings into clear success principles:

### 1. **Well-Specified Tasks with Clear Success Criteria**
- Tasks must be constrained and clearly defined
- Success metrics must be explicit and verifiable
- Ambiguity leads to confusion and poor model behavior

### 2. **Evaluations That Mirror Production Behavior**
- Training evals must reflect real-world usage patterns
- Avoid domain shift between training and deployment
- If the model sees different patterns in production than training, performance degrades

### 3. **Performance Improves with More Attempts**
- Problems should follow a clear pattern: more attempts = better performance
- Indicates the model can learn the task incrementally
- If performance plateaus early, the task may be ill-specified or the baseline inadequate

### 4. **Unhackable, Continuous Reward Functions**
- Rewards must resist gaming and manipulation
- Reward functions should remain stable throughout training
- Judge LLMs can help prevent reward hacking by evaluating quality holistically

### 5. **Data Quality Over Quantity**
- This principle emerged consistently across all case studies
- Garbage data produces garbage models, even with perfect infrastructure
- High-quality examples are worth exponentially more than low-quality ones

## The Economics of Specialization

### From Frontier Models to Domain Experts

Will's work reveals a fundamental shift in AI economics:

- **Before**: Binary choice—use frontier models as-is or train massive models from scratch
- **After**: Create specialized models that outperform frontier models on specific problems using modest datasets

### Cost Structure

- **Training Data**: 10-1,000 high-quality examples (vs. millions for traditional approaches)
- **Compute Budget**: Reasonable and predictable (vs. massive frontier model training)
- **Infrastructure**: ARFT-enabled training pipelines (available through OpenAI)
- **Result**: Democratized model specialization for organizations of all sizes

### ROI Profile

- 10-point improvements on specialized benchmarks
- 72% improvements over frontier models on narrow domains
- Faster latency due to domain-specific optimization
- More reliable tool calling and task completion

## Broader Context: Model Specialization at Scale

### The Specialization Spectrum

Will's ARFT represents one point on a spectrum of customization approaches:

1. **System Prompt Learning** (Arize approach): +6%, +15%, +5% improvements with 150 examples
2. **Continual RL on Production Feedback** (minimal data, accessible)
3. **ARFT: Full Weight Fine-Tuning** (maximum improvements, 10-1000 examples)
4. **Frontier Model RL** (maximum capability, highest cost)

### Convergence Insight

Across the industry, specialized models are emerging as the optimal solution:
- Superior performance on targeted tasks
- Cost-effective training and deployment
- Faster inference due to optimization
- Predictable and repeatable improvement

## Key Conference Insights

### What Makes Data Quality Critical

At the AI Engineering Code Summit, Will and Cathy emphasized that **data quality really matters**—far more than quantity. The recurring pattern across all case studies: when partners focused on assembling small, high-quality datasets, ARFT delivered transformative results. When they tried to scale with mediocre data, results suffered.

### The Future of Model Specialization

The convergence of:
- ARFT's sample efficiency
- Pipeline RL's speed and cost optimization
- Clear success metrics and evaluation methodology
- Domain-specific reward engineering

...signals that organizations no longer face a binary choice. They can build specialized models that outperform frontier models on their specific problems using modest datasets and reasonable compute budgets.

The bottleneck shifts from compute resources to:
1. **Problem Definition**: Clearly specifying what success looks like
2. **Data Quality**: Assembling high-quality training examples
3. **Reward Engineering**: Designing unhackable reward functions

## Related Work & Ecosystem

### OpenAI Products & Services
- **OpenAI Fine-tuning API**: Production-ready ARFT implementation
- **Model Training Infrastructure**: Purpose-built for agent fine-tuning

### Partner Companies
- **Cognition**: Code editing agents
- **Qodo**: Code review and analysis
- **Cosine**: Enterprise code agents
- **Mako**: GPU kernel optimization

### Industry Convergence
- **Prime Intellect**: Environments hub for RL training
- **Applied Compute**: Pipeline RL infrastructure
- **Meta**: Code World Models and execution-aware training

## Speaking Engagement

### Session: "Agent Reinforcement Fine-Tuning"
**Event**: AI Engineering Code Summit 2025
**Date**: November 21, 2025
**Time**: 12:00 PM - 12:19 PM
**Co-Presenter**: Cathy Zhou (OpenAI, Members of Technical Staff)
**Focus**: Deep dive into OpenAI's approach to reinforcement fine-tuning for code models

**Key Topics Covered**:
- How agents differ from regular models
- Three approaches to optimize models: prompt engineering, task optimization, fine-tuning
- ARFT methodology and agent tool access during training
- Domain shift challenges and solutions
- Case studies from industry partners
- Success principles for reproducible results

## Key Quotes & Insights

> "1000 examples can yield 10-point improvements. Not 10,000. Not 100,000. One thousand high-quality examples."

> "Data quality really matters—far more than quantity."

> "The first time OpenAI allowed agents to access outside work during training."

> "A model with lower latency, optimized for your specific domain."

## Impact & Significance

Will Hang's work on ARFT represents a pivotal moment in AI capabilities:

1. **Democratization**: Smaller organizations can now build best-in-class AI systems without frontier model budgets
2. **Predictability**: ARFT provides a repeatable, principled approach to model improvement
3. **Economic Viability**: The ROI for custom model training has shifted from speculative to proven
4. **Industry Standardization**: ARFT methodology is being adopted across leading AI coding companies

The convergence of small-data fine-tuning, specialized models, and open infrastructure is fundamentally changing what's possible for AI system deployment.

## Technical Resources

### Learning More
- **OpenAI Fine-tuning Documentation**: Official ARFT API and methodology
- **Partner Case Studies**: Public documentation from Cognition, Qodo, Cosine, Mako
- **Research Papers**: OpenAI's published work on agent training and specialization

---

*Last Updated: November 22, 2025*
