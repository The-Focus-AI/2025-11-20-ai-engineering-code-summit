---
name: Barry Zhang
company: Anthropic
company_url: https://www.anthropic.com
role: Member of Technical Staff
session: "Don't Build Agents, Build Skills Instead"
session_file: 2025-11-21/11-21-09-11-barry-zhang-mahesh-murag-anthropic.md
linkedin: null
twitter: null
twitter_url: null
github: null
github_url: null
website: null
---

## Overview

Barry Zhang is a Member of Technical Staff at Anthropic, where he contributes to Claude's development and architecture. Working alongside Mahesh Murag, Barry presented on a fundamental shift in how organizations should approach agent development: rather than building complex, multi-agent architectures, the focus should be on building **Skills**—a composable, shareable system for packaging procedural knowledge that agents can dynamically load and execute.

## Professional Background

- **Current Role**: Member of Technical Staff, Anthropic
- **Focus Areas**:
  - Claude Agent Architecture & Development
  - Skills System Design
  - Knowledge Management & Institutional Learning
  - Production-Grade Agent Systems
  - Agent Framework Development

## Company Context: Anthropic

Anthropic is a leading AI safety company that develops Claude, one of the most capable AI models for code generation and complex reasoning. The company's work on agent systems represents a fundamental rethinking of how AI should be deployed in production environments.

## Key Innovation: "Don't Build Agents, Build Skills Instead"

Barry and Mahesh presented a paradigm shift in agent development at the AI Engineering Code Summit:

### The Core Philosophy

Rather than building multiple specialized agents, the Anthropic team advocates for a unified agent architecture powered by a library of Skills. This approach:

- **Simplifies Architecture**: One universal agent is more effective than many specialized ones
- **Manages Complexity**: Skills provide structured, reusable knowledge packages
- **Reduces Cognitive Load**: Skills are progressively disclosed—only revealing what's needed when it's needed
- **Enables Sharing**: Skills become shareable, organizational knowledge artifacts

### The Skills Concept

Skills are files that package procedural knowledge in a format agents can dynamically load and execute. Key characteristics:

**Progressive Disclosure**:
- Skills reveal only surface-level information initially
- As agents need more capability, the full skill content is provided
- This includes scripts, tools, and procedural knowledge
- Prevents context window explosion while maintaining capability

**Institutional Knowledge Repository**:
- Skills collect institutional knowledge in executable form
- They function as a knowledge base that agents can access and execute
- "Skills collect institutional knowledge," as Barry and Mahesh explained
- This makes the concept of agent memory more tangible and practical

**Rapid Scaling**:
- Thousands of skills have been built and deployed in the last 5 weeks (as of November 2025)
- Skills ecosystem expanding rapidly across different domains

## Skills Ecosystem: Real-World Applications

### Foundation Skills Categories

Barry and Mahesh highlighted the breadth of skills already in production:

**Document Skills (Anthropic)**:
- Building knowledge from documents and documentation
- Enabling agents to understand and navigate complex information

**Scientific Skills (K-Dense AI)**:
- Scientific research and analysis capabilities
- Domain-specific knowledge for research automation

**Browser Automation (Browserbase)**:
- Browser-based automation and web interaction
- Agents can interact with web applications programmatically

**Productivity Tools (Notion)**:
- Integration with Notion for document editing and organization
- Enabling agents to manage knowledge and data

**Enterprise Skills**:
- Fortune 100 organization-wide skills
- Enterprise FinTech skills serving thousands of software engineers
- Organization-specific procedural knowledge and workflows

### Emerging Trends

The team observed several critical trends in skills development:

- **Complexity & Production-Grade Quality**: Skills are becoming more sophisticated and production-ready
- **MCP Complementarity**: Skills complement Model Context Protocol (MCP) tools rather than replacing them
- **Non-Developer Contributors**: Professional skills are being built by non-developers, expanding who can contribute knowledge
- **Institutional Scaling**: Fortune 100 companies building org-wide skill libraries for thousands of engineers

## The Complete Agent Architecture

Barry and Mahesh presented a unified vision for production agent systems:

```
Agent Loop
├── File System (for code and artifacts)
├── MCP Servers (for tool capabilities)
└── Skills Library (for procedural knowledge)

Specialized Agent Instances:
├── Claude for Financial Services
├── Claude for Life Sciences
└── [Domain-specific specializations]
```

The insight: **A single, well-architected agent beats many specialized agents** when backed by a comprehensive skills library and proper tool integration.

## Key Technical Insights

### Architecture Convergence

"We think we've converged on the architecture to build agents," Barry and Mahesh declared—a significant statement from the team at the center of Claude development.

This convergence represents:
- Movement away from multi-agent complexity
- Toward unified agents with rich skill libraries
- Integration of file systems, MCP servers, and skills
- A simpler, more maintainable architecture

### Skills as Universal Abstraction

The team demonstrated how skills fit into a broader architectural pattern where **environments are becoming the universal abstraction**:

- **Benchmarks** = environments with verifiers
- **RL Training** = environments with rewards
- **Skills** = dynamic environments for procedural knowledge
- **Artifacts** = interactive environments for agent output

This convergence reveals that different domains (evaluation, training, deployment, knowledge management) are instances of the same fundamental pattern.

### Knowledge Tangibility & Scalability

"Skills make the concept of memory more tangible," Barry and Mahesh explained. This is crucial for production systems where:
- Agents need reliable access to organizational knowledge
- Knowledge must be version-controlled and evolving
- Skills can be tested, updated, and deployed like code
- Memory becomes an asset that can be shared and improved

## The Evolution of Skills

### Current State (November 2025)

- Thousands of skills in production
- Multiple foundation categories deployed
- Non-developers contributing high-value skills
- Production-grade complexity and reliability

### Future Vision

The team outlined how skills will evolve:

**Testing & Evaluation**:
- Skills will have rigorous testing frameworks
- Verification of skill correctness and safety

**Iterative Improvement**:
- Skills become machine-readable procedural knowledge
- Claude can help build and refine skills
- Feedback loops improve skills over time

**Emergent Knowledge Base**:
- As Claude creates new skills, the knowledge base becomes self-improving
- An evolving repository of organizational and domain knowledge
- Skills as the primary unit of knowledge management

## Vision for the Future

Barry and Mahesh articulated a vision where:

1. **Agents Don't Multiply, Skills Do**: Rather than building new agents for new tasks, organizations build new skills
2. **Shared Knowledge Infrastructure**: Skills become shared organizational assets, like libraries in software engineering
3. **Production-Grade Reliability**: Skills provide the structure needed for production AI systems
4. **Institutional Learning**: Skills are how organizations encode and share procedural knowledge at scale
5. **Unified Agent Architecture**: One well-designed agent with comprehensive skills beats N specialized agents

## Key Quotes

> "We don't need to have multiple agents"

> "The agent underneath is more universal than we thought"

> "Code is all you need" (in the skills framework)

> "Skills collect institutional knowledge"

> "Skills make the concept of memory more tangible"

> "We think we've converged on the architecture to build agents"

## Speaking Topics & Expertise

- **"Don't Build Agents, Build Skills Instead"** - Fundamental rearchitecture of agent development
- Agent Architecture & Design Patterns
- Skills System Design & Implementation
- Knowledge Management for AI Systems
- Production-Grade Agent Deployment
- Institutional Knowledge Encoding
- Claude Development & Capabilities

## Key Takeaways for AI Teams

1. **Rethink Agent Architecture**: Multiple specialized agents introduce unnecessary complexity
2. **Invest in Skills Infrastructure**: A comprehensive skills library beats architectural complexity
3. **Make Knowledge Explicit**: Skills are how to encode and share procedural knowledge
4. **Plan for Evolution**: Skills systems should support iterative improvement and version management
5. **Unify Design**: One well-architected agent with rich capabilities beats specialized agents
6. **Enable Sharing**: Skills become organizational knowledge assets when designed for sharing

## Summit Session Context

**Event:** AI Engineering Code Summit 2025
**Date:** November 21, 2025
**Time:** 9:11 AM - 9:30 AM
**Session Title:** "Don't Build Agents, Build Skills Instead"
**Co-Presenter:** Mahesh Murag (Member of Technical Staff, Anthropic)
**Focus:** Rethinking agent architecture through the lens of skills as the primary unit of knowledge management and agent capability

## Related Concepts & Architecture

The skills framework connects to broader architectural trends observed at the summit:

- **Environments as Universal Abstraction**: Skills are progressively-disclosed environments
- **Universal Agent Pattern**: One agent + skills > many specialized agents
- **Knowledge Management Evolution**: From context windows to explicit skill libraries
- **Production-Grade Reliability**: Skills provide structure needed for enterprise deployment

---

*Last Updated: November 22, 2025*
