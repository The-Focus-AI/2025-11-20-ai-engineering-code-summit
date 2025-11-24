---
name: Mahesh Murag
company: Anthropic
company_url: "https://www.anthropic.com"
role: Member of Technical Staff, Applied AI
session: "Don't Build Agents, Build Skills Instead"
session_file: 2025-11-21/11-21-09-11-barry-zhang-mahesh-murag-anthropic.md
linkedin: maheshmurag
twitter: MaheshMurag
twitter_url: "https://x.com/maheshmurag"
github: maheshmurag
github_url: "https://github.com/maheshmurag"
image: "/photos/mahesh-murag.jpg"
---

Member of Technical Staff in Applied AI at Anthropic, creator of the [Model Context Protocol (MCP)](https://www.anthropic.com/news/model-context-protocol), and key contributor to [Claude Skills](https://www.anthropic.com/news/skills) and the Claude Agent SDK. Previously at Tecton, Scale AI, and Berkeley AI Research. UC Berkeley CS + Design.

## Creator of Model Context Protocol

Mahesh is the lead author of MCP, Anthropic's open standard for connecting AI assistants to external data sources and tools. Released in November 2024, MCP solves the MxN integration problem by standardizing how AI applications interact with external systems, replacing fragmented integrations with a universal protocol.

His viral [2-hour MCP workshop at AI Engineer Summit](https://www.classcentral.com/course/youtube-building-agents-with-model-context-protocol-full-workshop-with-mahesh-murag-of-anthropic-457629) accelerated industry adoption, with early integrations from Block, Apollo, Zed, Replit, Codeium, and Sourcegraph. See his [workshop-mcp-agent-example](https://github.com/maheshmurag/workshop-mcp-agent-example) repository for hands-on implementation patterns.

## Skills Framework & Agent Architecture

Key contributor to Anthropic's Skills framework, which packages procedural knowledge that agents dynamically load on-demand. Skills enable:

- **Progressive disclosure** - Start with minimal info, expand to full files and scripts as needed
- **Institutional knowledge sharing** - Organizations package domain expertise as reusable skills
- **Production reliability** - Tested procedures over unpredictable agent behavior
- **Democratization** - Non-developers building high-value organizational skills

Thousands of skills created in first 5 weeks. Enterprise deployments across Fortune 100 companies and FinTech organizations.

## Philosophy: "Code is All You Need"

Mahesh's work emphasizes architectural simplicity: one general-purpose agent with modular skills beats complex multi-agent systems. The Skills framework represents what Anthropic believes is the "converged architecture" for production-grade AI agents.

Key insight: "We think we've converged on the architecture to build agents" - combining file systems, MCP servers, and skill libraries into a complete agent picture. This enables domain-specific agents like Claude for Financial Services and Claude for Life Sciences.

## Recent Work & Resources

- **[Introducing the Model Context Protocol](https://www.anthropic.com/news/model-context-protocol)** - Official Anthropic announcement
- **[Code Execution with MCP](https://www.anthropic.com/engineering/code-execution-with-mcp)** - Engineering deep-dive on building efficient agents
- **[Introducing Agent Skills](https://www.anthropic.com/news/skills)** - Claude Skills announcement and architecture
- **GitHub**: [workshop-mcp-agent-example](https://github.com/maheshmurag/workshop-mcp-agent-example) - MCP agent workshop materials

## Summit Session

**Event:** AI Engineering Code Summit 2025
**Date:** November 21, 2025, 9:11 AM - 9:30 AM
**Session:** Don't Build Agents, Build Skills Instead (co-presented with Barry Zhang)

Shared the case for skills-based architecture over monolithic agents, demonstrating how skills solve production reliability challenges through progressive capability loading and institutional knowledge packaging. Emphasized that skills make memory tangible and enable continuous knowledge evolution through testing and real-world deployment.
