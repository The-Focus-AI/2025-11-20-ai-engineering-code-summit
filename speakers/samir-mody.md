---
name: Samir Mody
company: The Browser Company
company_url: "https://thebrowser.company"
role: Head of Engineering, AI
session: From Arc to Dia - Lessons Learned in Building AI Browser
session_file: 2025-11-20/11-20-14-45-samir-mody-browser-company.md
linkedin: null
twitter: null
twitter_url: null
github: null
github_url: null
website: null
---

## Overview

Samir Mody is the Head of Engineering for AI at The Browser Company, where he leads the integration of artificial intelligence into the next generation of browsers. With a background as a senior engineer at Instagram/Facebook (6 years), Mody brings deep expertise in building products at scale and translating complex systems into user-friendly experiences. At the AI Engineering Code Summit, he presented "From Arc to Dia: Lessons Learned in Building AI Browser," sharing how his team approached rebuilding Arc—a beloved product—with AI capabilities while learning critical lessons about AI-driven product development.

## Professional Background

- **Current Role**: Head of Engineering, AI at The Browser Company
- **Previous Experience**: Senior Engineer at Instagram/Facebook (6 years)
- **Focus Areas**:
  - AI integration in user interfaces
  - Browser architecture and design
  - AI-powered user experiences
  - Tools and infrastructure for AI feature development
  - Model behavior design and steering
  - Prompt engineering and optimization at scale

## The Browser Company

### Company Overview
The Browser Company is pioneering the next generation of web browsers with AI at the core. The company was acquired by Atlassian for $610M, providing significant resources to accelerate development and deployment of AI-powered browsing experiences.

### Products
- **Arc**: A beloved browser built from first principles with a focus on user experience and productivity. Now being enhanced with AI capabilities.
- **Dia**: A new browser being developed with speed, security, and personalization in mind. Designed to understand users and adapt to their needs.

## Speaking Topic: "From Arc to Dia: Lessons Learned in Building AI Browser"

### Session Focus
Mody's presentation centered on the practical engineering and UX lessons learned when integrating AI into a beloved existing product and building a new AI-native browser. The session explored:

- How to iterate rapidly on AI features without compromising quality
- Building tools and infrastructure that support AI feature development
- Treating AI model behavior as a craft requiring discipline
- Security and safety considerations when deploying AI in consumer-facing products

## Key Lessons & Insights

### 1. Optimizing Tools and Processes for Fast AI Iteration

The Browser Company recognized early that traditional development processes needed significant modification to support rapid AI feature iteration. Their solution involved building specialized tooling:

**Prompt Editor in Dev Builds**
- Integrated a custom prompt editor directly into development builds
- Moved all prompts into the development tools themselves
- Result: **10x increase in iteration speed** for ideating and testing AI features
- Engineers could iterate with full context immediately available

**GEPA (Gradient-Enhanced Prompt Adaptation)**
- Implemented a systematic approach to prompt refinement
- Process: Seed prompts → Execute and score → Choose top performers → Reflect and generate new prompts
- Treats prompt engineering as a disciplined process rather than ad-hoc experimentation
- Enables "hill climbing" optimization for prompt quality

### 2. Treating Model Behavior as a Craft

Mody emphasized a paradigm shift in how teams should approach AI feature development. Rather than treating model outputs as immutable results, successful teams must understand and design model behavior:

**Behavior Design Disciplines**
- Behavior design (intentional choices about how AI responds)
- Measurement (quantifying what "good behavior" means)
- Model steering (techniques to guide models toward desired behaviors)
- Continuous refinement (iterative improvement of behavioral outputs)

**Evolution from Functional to Agentic**
- Moving beyond treating AI as a functional tool that responds to queries
- Shifting toward agents that proactively suggest actions with rationale
- Agents that learn from user behavior and what users ignore
- The "early days of model behavior" require treating this as seriously as traditional software craftsmanship

### 3. Data Collection and Training Infrastructure

To enable the rapid iteration cycle that 10x'd their speed, the Browser Company invested in infrastructure for:

- **Eval collection**: Systematic gathering of evaluation examples
- **Data collection**: Capturing real user interactions and outcomes
- **Automation for hill climbing**: Automated processes for testing and selecting better prompts

This infrastructure removed manual bottlenecks that typically slow down AI feature development.

### 4. Security and Prompt Injection Mitigations

As browsers integrate more AI capabilities, security became a critical consideration. Mody highlighted the "lethal trifecta" of security concerns and practical defenses:

**Prompt Injection Risks**
- Untrusted data being injected into prompts
- Potential for data exfiltration
- Risk of manipulating AI agent behavior

**Practical Mitigations**
- Wrapping untrusted context in protective tags
- Implementing human confirmation steps for sensitive tool calls
- Designing products with security as an emergent property
- **Human confirmation for tool calls**: Users read and confirm data before it's shared with tools
- Acknowledging that no single technique guarantees safety ("while this can help, there are no guarantees")

### 5. Reframing Technology Shifts

Mody shared a critical insight about organizational response to major technology transitions:

> "When you recognize that it tech shifts, you have to embrace it with conviction."

The progression: Technology Shift → Product Company → Evolution Company

This framework suggests that organizations recognizing AI as a fundamental shift must embrace it completely across their product strategy rather than treating it as an incremental feature.

## Key Takeaways from the Session

1. **Tools Matter**: Purpose-built tooling for AI feature development (like integrated prompt editors) can multiply iteration speed by 10x
2. **Behavior Design as Craft**: Treating how AI acts as seriously as traditional software engineering—with discipline around design, measurement, and steering
3. **AI Security as Product Property**: Security against prompt injection and data exfiltration should be designed into products from the start, with human confirmation loops as a safety mechanism

## Technical Concepts Discussed

- **Prompt Engineering at Scale**: Moving from manual prompt tweaking to systematic, automated refinement
- **GEPA Algorithm**: Hill-climbing approach to prompt optimization
- **Agentic Behavior**: Moving beyond functional tool responses to proactive agents
- **Context Management**: Maintaining full context for AI decision-making while protecting against injection attacks
- **Browser-AI Integration**: Specific challenges and opportunities of embedding AI in the browser environment

## Insights on AI Integration in User Products

- AI in consumer products requires rethinking development cycles and tooling
- Speed of iteration on AI features is correlated with success
- Behavior design discipline prevents "model hallucination" in production
- Security considerations must be designed into products, not bolted on
- Full context availability during development enables better AI feature design

## The Arc to Dia Evolution

The transition from Arc to Dia represents lessons learned from integrating AI into an existing beloved product and applying those insights to build an AI-native browser. Both browsers aim to achieve:

- **Speed**: Fast performance and quick AI responses
- **Security**: Protected against prompt injection and data misuse
- **Personalization**: Understanding user behavior and adapting to individual needs
- **Intelligence**: Proactive agent behavior that reduces cognitive overhead

## Social & Online Presence

- **LinkedIn**: linkedin.com/in/samir-mody
- **The Browser Company**: www.thebrowser.com
- **Company Acquisition**: Atlassian (2025)

## Impact & Relevance

Samir Mody's insights are particularly relevant to organizations:

1. **Building AI-native products**: His approach to tooling, iteration, and behavior design applies broadly to consumer and enterprise applications
2. **Deploying AI at scale**: The lessons about prompt engineering infrastructure, evaluation, and security translate to any large-scale AI deployment
3. **Organizational transition**: His perspective on embracing technology shifts with conviction applies to companies navigating AI adoption
4. **Engineering culture**: The emphasis on treating AI behavior as a craft suggests how engineering disciplines must evolve

## Notable Quotes

- "10x the speed of ideating and iterating" (on integrated prompt editors)
- "In the early days of model behavior" (on the nascent state of AI behavior design)
- "When you recognize that it tech shifts, you have to embrace it with conviction"
- "Treating model behavior as craft" (on the disciplined approach to AI feature development)

## Summit Context

At the AI Engineering Code Summit, Samir Mody's presentation contributed to the broader conversation about:

- **The Harness Architecture**: How the infrastructure and tools around models matter more than the models themselves
- **Trust in AI Systems**: Security and verification as critical components of production AI deployments
- **Iterative Excellence**: How rapid iteration with proper tooling enables teams to build better AI products
- **Behavior Design**: A new discipline that treats how AI acts with the same rigor as traditional software engineering

His work at The Browser Company exemplifies the shift from AI as a feature addition to AI as a core architectural principle, and his lessons about tooling and iteration speed are increasingly relevant as organizations scale AI deployments.

---

*Last Updated: 2025-11-22*
