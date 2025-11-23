---
name: "Lei Zhang"
company: "Bloomberg LP (https://www.bloomberg.com)"
role: "Senior Director of Generative AI & Head of Developer Experience"
session: "What We Learned Deploying AI within Bloomberg's Engineering Organization (2025-11-20/11-20-14-25-lei-zhang-bloomberg.md)"
---

## Social & Professional Links
- LinkedIn: https://www.linkedin.com/in/lei-zhang-51b2686/
- Twitter/X: Not found
- GitHub: Not found
- Personal site: Not found
- Other: [Bloomberg Developer Experience Interview](https://www.bloomberg.com/company/stories/conversation-developer-experience-lei-zhang/)

## About Bloomberg LP
Bloomberg is a major financial data, media, and technology company headquartered in New York. The company provides financial software tools, news, and analytics to professionals worldwide and employs over 9,000 engineers globally. Bloomberg is known for maintaining one of the largest private networks, a massive JavaScript framework with tens of millions of lines of code, and extensive internal libraries that power financial markets infrastructure.

## Speaker Background
Lei Zhang is the Senior Director of Generative AI and Head of the Developer Experience group within Bloomberg's Software Infrastructure Engineering team, a position he has held since November 2017. With over 10 years at Bloomberg, he has progressed from software engineer in the BVAL team through various roles in the Derivatives group, including leading the Derivatives Data team from 2015-2017. His expertise spans AI infrastructure, AI-assisted development tools, agent systems, organizational change management, and developer experience at enterprise scale. Lei brings practical insights from deploying AI across 9,000+ engineers in a mission-critical financial services environment.

## Referenced Materials
- Bloomberg Developer Experience Interview: https://www.bloomberg.com/company/stories/conversation-developer-experience-lei-zhang/ - Comprehensive discussion of developer experience philosophy and infrastructure
- Meet the Team: AI Engineering at Bloomberg: https://www.bloomberg.com/company/stories/meet-the-team-artificial-intelligence-ai-engineering/ - Overview of Bloomberg's AI engineering team structure
- Durable DevOps Podcast Ep. 18: https://podcasts.apple.com/us/podcast/durable-devops-podcast-ep-18-lei-zhang-from-bloomberg/id1472181812?i=1000485708996 - Earlier discussion on DevOps and developer experience

## Related Content
- [Meet the Team: Storage Engineering at Bloomberg](https://www.bloomberg.com/company/stories/meet-the-team-storage-engineering/)
- [Meet the Team: Data Services Engineering at Bloomberg](https://www.bloomberg.com/company/stories/meet-the-team-data-service-engineering/)
- [Bloomberg Engineering & CTO Organization](https://www.bloomberg.com/company/what-we-do/engineering-cto/)

## Bloomberg's AI Infrastructure Strategy

### Organizational Scale & Context

Bloomberg operates at exceptional scale with unique challenges:

**Engineering Organization:**
- 9,000+ engineers requiring consistent tooling and practices
- 2,000+ data specialists managing financial data pipelines
- 400+ dedicated ML/AI professionals
- Large internal technical ecosystem with extensive proprietary frameworks

**Technical Stack:**
- Largest private network infrastructure globally
- Enormous monolithic codebase: tens of millions of lines of JavaScript in internal frameworks
- Extensive library ecosystem of internal tools and abstractions
- Complex brownfield systems intertwined with greenfield development

### Key Technical Insights

#### What is AI For: The Greenfield vs. Brownfield Problem

Lei identified a critical constraint that many organizations overlook:

**The Observation:** "Usage dropped really quickly once we moved back greenfield"

This reveals a fundamental truth about AI-assisted coding in large enterprises:
- **High value on greenfield projects**: AI excels at building new systems from scratch with clear patterns
- **Lower ROI on brownfield systems**: When dealing with legacy code, complex dependencies, and established patterns, AI assistance becomes less effective
- **The vibe coding problem**: "Where 2 engineers can create the tech debt of 50 engineers"

**Implication for Enterprise AI:** Organizations must be strategic about *where* they deploy AI coding assistance. Unchecked AI-assisted development in brownfield systems can accelerate technical debt accumulation.

#### Developer Motivation: Shifting the Work Equation

Lei's team approached AI deployment with a fundamental question: **What work do our developers not want to do?**

This insight shifts AI implementation from "maximize AI usage" to "optimize developer experience and outcome." By focusing on eliminating tedious, undesired work, Bloomberg created higher adoption and better outcomes than traditional top-down AI mandates.

### AI Applications: Learning from Real Deployments

Bloomberg developed several specialized agent systems for specific engineering problems:

#### Application 1: Uplift Agents

**Problem:** Managing and applying patches across large codebases; ensuring consistency of technical improvements

**Solution:** Automated agents that:
- **Generate the patch**: Create code modifications addressing a specific pattern or improvement
- **Provide rationale**: Explain why the change is beneficial (performance, security, modernization)
- **Assess impact**: Understand why the organization would want this change
- **Verify applicability**: Determine which systems can and should receive this change

**Impact:** Enables large-scale technical improvements across the codebase without manual engineering effort per system

**Key Insight:** These agents work best on well-defined refactoring and improvement tasks where the change rationale is clear and verifiable.

#### Application 2: Incident Response Agents

**Problem:** Alert fatigue and context fragmentation in large systems
- Overwhelming number of alerts from monitoring systems
- Difficulty finding relevant context information
- Understanding what factors contributed to incidents
- Reducing mean time to resolution (MTTR)

**Solution:** Intelligent agents that:
- Aggregate and contextualize alerts
- Surface relevant context information automatically
- Identify contributing factors across distributed systems
- Guide engineers toward root cause analysis

**Impact:** Reduces alert noise, accelerates incident diagnosis, improves reliability organization-wide

**Key Insight:** In complex distributed systems, the bottleneck in incident response isn't understanding the problem—it's assembling the context. Agents excel at this task.

## Organizational Change & Adoption Strategy

### The Change Management Angle

Deploying new developer tools across 9,000+ engineers requires more than technical excellence:

**Formal Training Program:**
- Established 20+ structured training programs
- Recognized AI adoption as an organizational change management problem
- Treated AI tool deployment like traditional enterprise software rollout

**Change Agents:**
- Designated change agents to evangelize and support adoption
- Created peer-to-peer learning networks
- Tied training to specific, relevant use cases

**Demonstration & Proof Points:**
- Showed practical examples using Bloomberg's actual technical ecosystem
- Used Bloomberg-specific problems, patterns, and frameworks
- Made training immediately relevant to engineers' daily work

### Adoption Patterns: The Inverse Leadership Effect

A counterintuitive finding: **Individual contributors adopt AI tools at higher rates than leadership**

**Why This Matters:**
- Individual engineers benefit directly and immediately from coding assistance
- Managers and architects often focus on broader systems and architectural concerns
- Top-down mandates don't drive adoption as effectively as bottom-up value demonstration
- This inverts traditional organizational adoption models

**Implications:**
- Marketing AI tools upward through IC success stories beats executive mandates
- Support IC-first adoption; leadership will follow once tools prove value
- Bottom-up adoption creates more sustainable, enthusiastic adoption curves

## Financial & Business Impact

### Changing the Cost Function of Engineering

Lei emphasized a fundamental insight: **AI changes how we calculate engineering value and cost**

**Traditional Model:**
- Cost per engineer is relatively fixed (salary + overhead)
- Productivity measured by throughput of features/fixes
- Velocity constrained by headcount and time

**AI-Augmented Model:**
- Same number of engineers produce more output
- Quality/correctness becomes more variable (new reliability concerns)
- Cost equation shifts from "engineer headcount" to "engineer+AI system" economics
- New optimization targets: tool quality, context accuracy, verification processes

**Enterprise Implication:** Organizations must recalculate ROI and cost metrics. Traditional velocity metrics don't capture the full value or risk profile of AI-augmented development.

## Key Themes & Philosophy

1. **Match Tool to Problem Type**: AI coding assistance works best on greenfield systems and specific, well-defined tasks; brownfield systems require more careful application

2. **Eliminate Undesired Work**: Ask what developers hate doing, then automate that; this drives adoption better than maximizing AI usage

3. **Agent-First for Context Assembly**: In large, distributed systems, intelligent agents excel at gathering context and providing a complete picture for human decision-making

4. **Organizational Change Matters**: Technical excellence alone doesn't drive adoption; training, change agents, and demonstrating value are critical at scale

5. **Bottom-Up Adoption Works**: Individual contributors adopt tools faster when they see direct value; leadership follows proof points

6. **Verify & Rationale Are Critical**: Agents must explain not just *what* they're doing but *why* and *how to verify* it, especially in risk-aware environments like financial services

7. **Scale Requires Governance**: With 9,000+ engineers and mission-critical systems, AI deployment requires careful governance, verification, and change management

## Speaking Topics & Expertise

- **"What We Learned Deploying AI within Bloomberg's Engineering Organization"** - Practical lessons from deploying AI tools across 9,000+ engineers
- Enterprise AI Infrastructure & Deployment
- AI Agents for Incident Response & System Management
- Developer Tool Adoption at Scale
- Organizational Change Management for AI Tools
- Cost Economics of AI-Augmented Development
- Brownfield vs. Greenfield AI Strategies
- Training & Enablement for Enterprise AI

## Key Takeaways for Enterprise AI Adoption

1. **Strategic Deployment**: Ask where AI creates real value in your codebase, don't deploy everywhere uniformly

2. **Focus on Elimination**: Identify tedious, undesired work and automate that first—higher engagement and adoption

3. **Agents for Context**: Use AI agents to assemble context and provide decision support, not just code generation

4. **Change Management Is Technical Debt**: Underestimating training and organizational change is a recipe for wasted investment

5. **Measure Beyond Velocity**: Traditional engineering metrics don't capture AI's impact; develop new measurement approaches

6. **Start Bottom-Up**: Enable individual engineers first; leadership adoption follows success stories

7. **Verify & Explain**: In regulated and risk-sensitive environments, verification and explainability are as important as functionality

8. **Scale Governance**: Large organizations deploying AI need structured governance, not just technical enablement

## Bloomberg's Unique Position

Bloomberg's AI deployment provides valuable lessons precisely because it operates under constraints many enterprises face:

- **Mission-critical systems**: Financial services requires high reliability and auditability
- **Large, established codebase**: Existing patterns, libraries, and technical debt complicate greenfield thinking
- **Distributed engineering**: Managing AI across thousands of engineers requires organizational sophistication
- **Regulated environment**: Financial services governance applies additional constraints to AI deployment
- **Data sensitivity**: Access controls and data governance are paramount

These constraints make Bloomberg's practical, measured approach to AI deployment particularly relevant for other enterprises in financial services, insurance, healthcare, and other regulated sectors.

## Summit Session Context

**Event:** AI Engineering Code Summit 2025
**Date:** November 20, 2025
**Time:** 2:25 PM
**Session:** "What We Learned Deploying AI within Bloomberg's Engineering Organization"
**Focus:** Practical lessons from deploying AI tools and agents within a large, sophisticated engineering organization; organizational change management; financial services enterprise AI

---

*Last Updated: November 22, 2025*
