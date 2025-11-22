---
# Olive Song (Jiayuan Song)

**Company:** MiniMax (https://www.minimax.io/)
**Role:** LLM Algorithm Engineer
**Session:** MiniMax M2 - Efficient Frontier Models ([11-20-12-20-olive-song-minimax.md](../2025-11-20/11-20-12-20-olive-song-minimax.md))

## Social & Professional Links
- LinkedIn: [Jiayuan(Olive) Song](https://www.linkedin.com/in/olivesong/)
- Twitter/X: Not found
- GitHub: Not found
- Personal site: Not found
- Other: [Google Scholar Profile](https://scholar.google.com/citations?user=Pp8g0M4AAAAJ&hl=en)

## About MiniMax

MiniMax is an artificial intelligence company based in Shanghai, China, founded in December 2021 by computer vision veterans from SenseTime. With over 150 million users globally, MiniMax has raised $1.15 billion in funding and achieved a $2.5 billion valuation in 2024, becoming one of China's "AI Tiger" companies. The company develops efficient multimodal AI models and emphasizes tight collaboration between research and engineering teams to rapidly translate innovations into production systems.

**Key Products & Achievements:**
- **MiniMax M2** - Open-source MoE model with 230B total parameters and 10B active parameters, achieving 2x faster inference than Claude Sonnet at 8% of the cost
- **MiniMax-01** - Foundation model with lightning attention mechanism enabling 1M token context windows
- **Multimodal ecosystem** - Voice, text, music, and video generation capabilities
- **Agentic leadership** - Top scores on τ²-Bench (77.2), BrowseComp (44.0), and FinSearchComp-global (65.5) evaluations

## Speaker Background

Jiayuan Song (known as Olive Song) is an LLM Algorithm Engineer at MiniMax specializing in large language model development and optimization. Her research background centers on self-supervised learning and applied representation learning, with expertise gained from studies at New York University in deep learning, reinforcement learning, natural language processing, and computer vision. She has contributed to major MiniMax research initiatives including the MiniMax-01 foundation model and the M2 efficient agentic model, playing a key role in developing the post-training strategies that enable M2's exceptional performance on coding and agent tasks. Her work exemplifies MiniMax's organizational approach of tight collaboration between researchers and engineers to ensure training innovations translate into practical improvements in production systems.

## Referenced Materials
- **MiniMax-M2 GitHub Repository:** https://github.com/MiniMax-AI/MiniMax-M2 - Open-source model with 230B total parameters and 10B active parameters, built for efficient coding and agentic workflows
- **MiniMax-01: Scaling Foundation Models with Lightning Attention:** https://arxiv.org/abs/2501.08313 - Research paper on scaling foundation models with lightning attention mechanism, co-authored
- **MiniMax M2 Official Demo:** https://www.minimaxm2.com/ - Interactive demo of the M2 model
- **MiniMax M2 API Documentation:** https://platform.minimax.io/docs/guides/text-m2-function-call - Technical guides for tool use and interleaved thinking capabilities
- **Interleaved Thinking for M2:** https://www.minimax.io/news/why-is-interleaved-thinking-important-for-m2 - Deep dive into M2's agentic capabilities
- **Full Attention Architecture:** https://www.minimax.io/news/why-did-m2-end-up-as-a-full-attention-model - Technical explanation of M2's architectural choices

## Key Concepts from Talk

### Voice-Activated Agents Architecture

MiniMax's approach to voice agents centers on real-time audio processing and low-latency response:

1. **Real-Time Audio Streaming** - Direct audio input processing for natural voice interactions
2. **Multimodal Understanding** - Integrating voice, text, and potentially other modalities in agent decision-making
3. **Efficient Inference** - Optimized models that reduce latency and operational costs
4. **Production Readiness** - Systems designed for scale with 150M+ users as validation

### MiniMax M2 Training Innovation

The M2 model represents a breakthrough in efficient, agentic AI through several key training strategies:

#### Coding Excellence for Agents
- **Scaled Expert Development** - Using multiple specialized experts across different code domains
- **GitHub/Internet Data** - Training on diverse, real-world code repositories and engineering resources
- **Feedback-Driven Training** - Continuous improvement through agent performance evaluation
- **Scaled Expert Feedback** - Leveraging performance signals to refine coding capabilities

#### Interleaving Thinking & Execution
- **Real-World Dynamics** - Models trained to handle noisy, dynamic environments that change during agent execution
- **Tool-Environment Coupling** - Multiple rounds of tool calls with reactive adaptation to results
- **Reasoning Over Linear Steps** - Building flexibility into agent decision-making for perturbations

#### Agent Generalization
- **Tool Scaffold Adaptation** - Training systems that don't degrade when tool definitions or capabilities change
- **Perturbation Resilience** - Testing and training across entire operational space to identify brittleness
- **Perturbation Pipelines** - Systematic evaluation of how models handle variations in inputs, tool responses, and environmental conditions

#### Multi-Agent Scalability
- **Cost Effectiveness** - Designing models that remain efficient even in multi-agent scenarios
- **Distributed Coordination** - Supporting complex scenarios with multiple agents working simultaneously
- **Resource Optimization** - Maintaining performance while reducing computational overhead

### Research-Product Integration

A key differentiator is MiniMax's organizational structure:

- **Research & Developer Co-Location** - Researchers and engineers working side-by-side enables rapid iteration
- **Post-Training Specialization** - Heavy emphasis on post-training to shape model behavior for specific use cases
- **Practical Validation** - 150M users provide real-world feedback loop for model improvements
- **Continuous Innovation** - Regular updates to push frontier of what's possible in efficiency and capability

## Performance Characteristics

**MiniMax M2 Efficiency Profile:**
- **Speed:** 2x faster than Claude Sonnet on comparable tasks
- **Cost:** 8% of Claude Sonnet pricing
- **Agentic Performance:** Top scores on agent evaluation benchmarks
- **Multimodal:** Support for voice, text, and other modalities
- **Voice Latency:** Optimized for real-time voice agent interactions

## Use Cases for Voice Agents

Based on the session focus, MiniMax positions voice agents for:

1. **Voice-First Applications** - Mobile, smart home, automotive, and other voice-primary interfaces
2. **Real-Time Communication** - Live customer service, support automation, and real-time assistance
3. **Multimodal Understanding** - Agents that seamlessly switch between voice, text, and visual inputs
4. **Cost-Sensitive Deployments** - Applications where inference cost is a primary constraint
5. **Low-Latency Requirements** - Systems demanding immediate response times for user experience

## Related Content
- Session Notes: [2025-11-20 AI Engineering Summit - Olive Song/MiniMax Session](../../2025-11-20/11-20-12-20-olive-song-minimax.md)
- Session Slides: [Building Voice-Activated Agents Presentation](../../2025-11-20/slides/2025-11-20-12-30-gemini-edited.jpg)

## Research Notes

**Key Takeaways:**

- **Global Competition:** MiniMax represents a significant non-Western AI player pushing innovation in efficient models
- **Agent Focus:** The company is explicitly optimizing for agent workloads rather than general LLM capability
- **Voice as Platform:** Voice interaction is positioned as a primary interface for next-generation agents, with MiniMax providing multimodal foundations
- **Training Innovation:** Deep investment in post-training specifically for agent behavior and multi-turn interactions
- **Practical Engineering:** Emphasis on real-world deployment at scale (150M users) rather than theoretical benchmarks

**Training Insights:**

- Agent generalization is harder than it appears - changing tool definitions or environmental conditions can cause major performance drops
- Interleaving reasoning with tool execution is critical for real-world agent performance
- Multi-agent scenarios introduce new challenges for efficiency and coordination
- The research-product integration model seems to be a competitive advantage for rapid iteration

**Voice Agent Opportunities:**

- Real-time voice processing is becoming table-stakes for agent systems
- Efficiency (speed + cost) becomes critical in voice scenarios where latency impacts user experience
- Multimodal agents (voice + text + other inputs) represent the natural evolution of agent architecture

## Conference Appearance

**Event:** AI Engineering Code Summit 2025
**Date:** November 20, 2025
**Time:** 12:20 PM
**Session:** "Building Voice-Activated Agents" with focus on MiniMax M2 capabilities and voice AI technology
**Focus:** Real-time audio processing, multimodal agents, agent generalization, and production-grade voice systems

---

*Last Updated: November 22, 2025*
