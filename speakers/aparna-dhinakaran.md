---
name: Aparna Dhinakaran
company: Arize AI
company_url: https://arize.com
role: Co-founder & Chief Product Officer (CPO)
session: Continual System-Prompt Learning for Code Agents
session_file: 2025-11-21/11-21-16-00-aparna-dhinakaran-arize.md
linkedin: https://www.linkedin.com/in/aparnadhinakaran/
twitter: @aparnadhinak
twitter_url: https://x.com/aparnadhinak
github: null
github_url: null
website: null
---

## Social & Professional Links
- Twitter/X: [@aparnadhinak](https://x.com/aparnadhinak)
- LinkedIn: https://www.linkedin.com/in/aparnadhinakaran/
- Arize AI: https://arize.com

## About Arize AI

Arize AI is the leading ML observability and model monitoring platform that enables machine learning teams to build, deploy, and monitor AI and ML models in production. The platform helps organizations gain visibility into model performance, detect data drift and model degradation, root cause issues, and improve model reliability. Arize's customers include leading enterprises and AI-first companies that depend on continuous model performance monitoring and optimization.

Key focus areas:
- ML Observability: Real-time visibility into model performance and behavior
- Model Monitoring: Detecting data drift, prediction drift, and performance degradation
- Production AI Systems: Supporting deployment and monitoring of LLMs and AI agents
- Model Evaluation: LLM-based evaluation and scoring capabilities
- Continuous Improvement: Feedback loops for iterative model enhancement

## Speaker Background

Aparna Dhinakaran is the Co-founder and Chief Product Officer of Arize AI, where she leads product strategy and vision for the ML observability platform. She brings deep expertise in machine learning systems, model evaluation, and the operational challenges of running ML in production. Her work at Arize has established the company as a critical infrastructure provider for organizations building and deploying AI systems at scale.

Prior to founding Arize, Dhinakaran worked in roles focused on ML infrastructure and model deployment, giving her first-hand experience with the complexities of monitoring and improving production AI systems. Her understanding of real-world model challenges informs Arize's product direction and research initiatives.

At the AI Engineering Code Summit, Dhinakaran presented cutting-edge research on using reinforcement learning techniques to continuously improve AI agent system prompts—bridging the worlds of operational observability and model optimization.

## Session: Continual System-Prompt Learning for Code Agents

### Core Thesis

Traditional approaches to tuning AI agent behavior rely on either expensive full reinforcement learning or manual prompt engineering. Dhinakaran presented a novel approach that uses LLM-based evaluation combined with reinforcement learning to continuously learn and improve system prompts from real feedback signals—particularly PR feedback and code evaluation results.

The key insight: you don't need full RL to get significant improvements. By understanding WHY agents fail through structured LLM evaluations, you can encode that learning into meta-prompts that guide future behavior.

### Methodology: RL for System-Prompt Learning

Rather than training model weights (which requires massive compute), the approach optimizes the system prompt itself using reinforcement learning principles:

**1. Baseline Establishment**
- Start with a control system prompt
- Run agent on code generation tasks
- Collect baseline performance metrics

**2. Execution & Evaluation**
- Agent writes code and runs unit tests
- LLM judges evaluate the code quality
- Both scalar rewards and explanations generated
- Judge provides feedback on: why was it right/wrong, where did the agent struggle, what needs improvement

**3. Meta-Prompt Learning**
- Collect evaluation feedback and explanations
- Use an LLM to synthesize insights into a meta-prompt
- This meta-prompt guides refinement of the original system prompt
- Create improved system prompts incorporating the learned patterns

**4. Iteration & Measurement**
- Re-run agent with improved system prompt
- Measure performance gains
- Repeat cycle

### Key Results

The approach was tested on code generation and agent tasks using approximately 150 examples:

- **+6% improvement** on one benchmark
- **+15% improvement** on another benchmark
- **+5% improvement** on a third benchmark

These gains were achieved purely through system prompt optimization, without modifying model weights, fine-tuning, or using full-scale RL training.

### Critical Innovation: LLM Judges & Evaluations

The breakthrough was understanding that **evaluation engineering is as important as model training itself**. Key components:

**Judge LLM Evaluation**: Use an LLM as an evaluator that assesses not just pass/fail, but provides structured feedback:
- Why the response was right or wrong
- Which specific areas the agent struggled with
- Where the agent needs to "study" or improve
- Specific patterns or requirements that weren't met

**Explanations as Signal**: Requiring the judge LLM to provide explanations transforms opaque scores into actionable feedback. A simple number (0 or 1) doesn't help. But an explanation breaks down exactly what went wrong and what the agent should do differently.

**Meta-Prompt Synthesis**: The explanations feed into a meta-prompt that distills learning into principles the agent can follow.

### Comparison to Other Approaches

Dhinakaran positioned this method relative to other optimization frameworks:

**vs. DSPy**: DSPy focuses on compositional prompt optimization. Her approach uses similar English-language prompt engineering but with stronger learning signals from LLM evaluation.

**vs. GPTA/Full RL**: Full RL is more powerful but far more expensive and requires careful reward engineering to avoid gaming. Her approach requires "many loops and rollouts" compared to pure RL, but is far more accessible and interpretable.

**vs. Prompt Tuning**: Manual prompt engineering is cheap but doesn't scale. This approach automates the discovery of improvements through systematic evaluation.

### Implementation Details

The work was tested across multiple AI coding systems:

- Tested with Claude via `--append-system-prompt` flag
- Tested with Cline (VSCode agent) via configuration
- Baseline version: original system prompt
- Improved versions: meta-prompt-guided system prompts

Process: `code → unit tests → LLM evals & judge → feedback → meta-prompt → improved system prompt`

### Why Eval Engineering Matters Most

The summit presentation emphasized that **evals determine what's possible**. This directly mirrors Joel Becker's METR research: "Everything traces back to the environments they've been training against." By building better evaluation frameworks, you unlock better agent behavior.

The key requirement: ask for explanations from judge LLMs. This transforms evaluation from a simple scoring mechanism into a feedback generator that can actually guide improvement.

## Research Notes

Aparna Dhinakaran's presentation on continual system-prompt learning represents a crucial middle ground in the spectrum of agent optimization techniques that emerged as a central theme of Day 2:

1. **Accessibility Through RL**: Most organizations lack the resources for full-scale reinforcement learning fine-tuning, but all can implement evaluation-based prompt learning. This democratizes access to systematic agent improvement.

2. **Convergence on Evaluation**: Her work reinforces the broader summit insight that **evaluation engineering is foundational**. Dex Horthy emphasized context management, Eno Reyes emphasized verification, and Dhinakaran emphasizes evals—all three are facets of the same principle: clarity about what success looks like enables improvement.

3. **Spectrum of Specialization**: Dhinakaran's approach sits at one end of the specialization spectrum (accessible, prompt-level optimization) while OpenAI's ARFT sits at another (more powerful, weight-level optimization). Both work. The choice depends on your resources and optimization depth.

4. **LLM as Judge Pattern**: The use of LLMs as evaluators and judges represents a fundamental shift in how AI systems can improve. Rather than hand-crafted metrics, use models to understand nuance, explain failures, and synthesize improvements.

5. **Production Alignment**: The approach uses signals from actual code evaluation (unit tests, code quality judges) and PR feedback—real-world signals that directly map to production success criteria. This differs from synthetic benchmarks and grounds optimization in practical value.

6. **The Missing Piece**: The summit revealed that model quality is the bottleneck, not clever engineering. But improving model quality for specific domains requires quality training data and evaluation signals. Dhinakaran's work shows how to generate both from agent execution logs.

Her presentation received enthusiastic audience response, particularly for showing concrete percentage improvements from a practical, implementable approach. In an environment where many optimizations require massive datasets or significant compute, her results (150 examples, significant gains, prompt-level changes) offer a direct path forward for organizations looking to improve their agents today.

## Key Takeaways for Practitioners

- **Start with Evaluation**: Build clear evaluation criteria before optimizing. What does good agent behavior look like in your domain?
- **Judge LLMs Are Powerful**: Use LLMs as judges to assess quality with nuance. Require explanations—opaque scores don't help.
- **Meta-Prompts Scale Learning**: Synthesize evaluation feedback into meta-prompts that guide future behavior.
- **150 Examples Suffices**: You don't need massive datasets. Quality examples with structured feedback enable meaningful improvement.
- **System Prompts Matter**: The system prompt is a powerful lever. Improvements here are immediately deployable.
- **Eval Engineering ROI**: Investment in evaluation infrastructure pays dividends. Better evals → better improvements.

## Connection to Summit Themes

Dhinakaran's work directly supports the core summit insight on Day 2: **"Augmented thinking requires mastering three interconnected techniques"** (per the Day 2 Executive Summary):

1. **Context Management**: Her approach keeps context efficient by focusing feedback into concise meta-prompts
2. **Prompt Tuning**: The core technique—continuous improvement of prompts through evaluation
3. **Verification**: The foundation—clear evaluation criteria and judge-based verification

Her work also exemplifies the "spectrum of specialization" that emerged: organizations can create domain-specific improvements using modest resources, taking specialized models (or just specialized prompts) that outperform frontier models on their specific problems.
