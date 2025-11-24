---
name: Katelyn Lesse
company: Anthropic
company_url: https://www.anthropic.com
role: Head of API Engineering / Head of Engineering, Claude Developer Platform
session: Evolving Claude APIs for Agents
session_file: 2025-11-20/11-20-08-49-katelyn-lesse-anthropic.md
linkedin: https://www.linkedin.com/in/katelynlesse/
twitter: @katelyn_lesse
twitter_url: https://x.com/katelyn_lesse
github: @klesse413
github_url: https://github.com/klesse413
website: null
---

## Social & Professional Links
- LinkedIn: https://www.linkedin.com/in/katelynlesse/
- Twitter/X: [@katelyn_lesse](https://x.com/katelyn_lesse)
- GitHub: [@klesse413](https://github.com/klesse413)
- Personal site: Not found
- Other: [Medium](https://medium.com/@klesse413) - Engineering writing and insights

## About Anthropic
Anthropic is an AI safety and research company focused on building reliable, interpretable, and steerable AI systems. The company has a mission of ensuring the world safely makes the transition through transformative AI through frontier AI research across multiple modalities and novel safety research areas from interpretability to reinforcement learning from human feedback to policy and societal impacts analysis. As a public benefit corporation, Anthropic is legally empowered to balance investor returns with a mission to ensure that transformative AI helps people and society flourish.

## Speaker Background
Katelyn Lesse is the Head of API Engineering at Anthropic, leading the Claude Developer Platform which encompasses APIs, SDKs, extensive documentation, and console experiences. She has significant leadership experience in engineering, having previously served as Senior Director of Engineering at Betterment (where she led cash management and business engineering teams) and held multiple leadership roles at Stripe including Head of Engineering for Core Connect and Engineering Manager of Managers for Stripe Capital. Her expertise spans platform development, team leadership, and building developer-facing products at scale.

## Referenced Materials
- Model Context Protocol (MCP): https://www.anthropic.com/news/model-context-protocol - Anthropic's standard for connecting AI applications to external systems including content repositories, business tools, and development environments
- MCP Documentation: https://docs.anthropic.com/en/docs/mcp - Official technical documentation for Model Context Protocol with reference implementations
- Claude Code MCP Integration: https://docs.anthropic.com/en/docs/claude-code/mcp - Guide to connecting Claude Code to hundreds of external tools and data sources through MCP
- Memory Tool Documentation: https://docs.claude.com/en/docs/claude-code/memory - Claude Code's memory system for managing context across conversations
- Claude Sonnet 4.5: https://www.anthropic.com/news/claude-sonnet-4-5 - Latest model release with code execution, context management, and memory capabilities
- Context Management Features: https://www.anthropic.com/news/context-management - New capabilities for managing token usage and context windows
- Code Execution with MCP: https://www.anthropic.com/engineering/code-execution-with-mcp - Engineering post on building efficient AI agents
- Anthropic SDK Tool Loop: https://github.com/anthropics/anthropic-sdk-python - Minimal scaffold for tool calling in agent systems
- Writing Tools for Agents: https://www.anthropic.com/engineering/writing-tools-for-agents - Anthropic's guide to effective tool design for AI agents
- Agent Capabilities API: https://www.anthropic.com/news/agent-capabilities-api - New agent capabilities including files API and prompt caching

## Key Concepts from Talk

### Core Agentic System Stack
Katelyn outlined a comprehensive approach to building powerful autonomous agents with Claude:

1. **Tool Integration & Skills Framework** - Claude executing tools directly, with Skills providing a structured framework for specialized capabilities
2. **Model Context Protocol (MCP)** - Standard mechanism to connect Claude to external systems and data sources in a composable manner
3. **Memory System** - Intelligent context retrieval that pulls relevant information back into the window when needed (initially file system-based)
4. **Context Editing** - Manual context window management to remove unnecessary content, especially old tool results that consume tokens
5. **Code Execution** - Native tool capabilities for running code directly

### Best Practices
- **Memory + Context Editing Combined:** The optimal approach to context management is using memory tools alongside context editing to keep the window focused and efficient
- **Giving Claude a Computer:** The foundational metaphor - equip Claude with computer access, external system connections, and code execution capabilities to enable truly autonomous work
- **Long-running Agents:** These techniques enable Claude to work effectively for hours on complex tasks without hitting context limitations

## Related Content
- Enabling Claude Code to Work More Autonomously: https://www.anthropic.com/news/enabling-claude-code-to-work-more-autonomously - Overview of autonomous agent features
- Unhobbling Claude: Anthropic's Vision for Autonomous AI Agents: https://www.startuphub.ai/ai-news/ai-video/2025/unhobbling-claude-anthropics-vision-for-autonomous-ai-agents/ - Video coverage of Lesse's speaking on autonomous agent capabilities
- AI Engineer Code Summit 2025: https://www.meetup.com/sv-ai-engineers/events/312076392/ - Conference where this session was presented
- Anthropic Research: https://www.anthropic.com/research - Frontier AI research publications and papers

## Research Notes
Katelyn Lesse has been actively promoting Anthropic's latest agent capabilities throughout 2025. Key insights from her work include:

**Agent Architecture:** The core framework for building powerful agentic systems involves giving Claude computer access through multiple integrated tools: MCP for connecting to external systems, memory tools for context management, code execution capabilities, and context editing to manage token usage efficiently.

**Recent Model Releases:** Claude Sonnet 4.5 was launched with significant improvements for agent development, including native code execution, context management capabilities, and memory tools that enable agents to work for hours on complex tasks. The model introduces parallel tool execution and can maintain focus for over 30 hours on multi-step tasks.

**Developer Platform Evolution:** Anthropic rebranded and reorganized its offerings under the "Claude Developer Platform" umbrella, with Lesse overseeing the complete suite of APIs, SDKs, documentation, and console experiences. The platform has evolved from basic API access to a comprehensive agentic harness through the Claude Agent SDK.

**Key Technical Innovations:**
- Tool loop in Anthropic SDK: A minimal scaffold for tool calling that simplifies agent development
- MCP (Model Context Protocol): An open-source standard comparable to a "USB-C port for AI," enabling standardized connections to external systems
- Memory tool: Filesystem-based initially, allows agents to store and retrieve context across long-running sessions
- Context editing: Enables manual clearing of unnecessary content (particularly old tool results) from the context window
- Code execution tool: Native capability without external dependencies

**Strategic Vision:** Building capable agents requires balancing two aspects: expanding capabilities (through tools, MCP integrations, code execution) and managing constraints (through memory systems and context editing). This dual approach enables agents to scale to long-running, autonomous operations.

**Engineering Background:** Lesse's background at Stripe and Betterment has positioned her well for platform leadership at Anthropic. At Stripe, she led core infrastructure and capital team engineering. At Betterment, she built engineering teams for fintech operations. This experience in building robust, scalable systems for complex use cases directly informs her work on the Claude developer platform.

Lesse actively engages with the developer community through social media and conferences, promoting best practices for agent development and encouraging feedback on Anthropic's tools through GitHub and X (Twitter).
