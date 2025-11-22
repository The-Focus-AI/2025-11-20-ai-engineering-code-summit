# Beyang Liu

**Company:** Amp Code / Sourcegraph ([https://ampcode.com](https://ampcode.com) | [https://sourcegraph.com](https://sourcegraph.com))
**Role:** Co-founder & CTO, Amp Code
**Session:** Amp Code: Next-Generation AI Coding ([../../2025-11-21/11-21-14-25-beyang-liu-amp-code.md](../../2025-11-21/11-21-14-25-beyang-liu-amp-code.md))

## Social & Professional Links
- Twitter/X: [@beyang](https://twitter.com/beyang)
- GitHub: [beyang](https://github.com/beyang)
- LinkedIn: [Beyang Liu](https://www.linkedin.com/in/beyang-liu/)

## About Amp Code & Sourcegraph

**Sourcegraph** is the enterprise platform for code intelligence, enabling organizations to understand, navigate, and improve their massive codebases. Founded on the principle that code search and understanding is foundational to developer productivity.

**Amp Code** is Sourcegraph's next-generation AI coding platform—a specialized agent system designed to bring AI-powered development workflows into production with enterprise reliability. Rather than a single monolithic AI model, Amp implements a sophisticated multi-agent architecture optimized for different reasoning and execution needs.

## Speaker Background

Beyang Liu is the Co-founder and CTO of Amp Code, bringing deep expertise in code intelligence, developer tools, and AI systems architecture. As a core architect of Sourcegraph's code search technology, Liu has spent years understanding how developers interact with code at scale. His work at Amp Code focuses on translating that deep knowledge into practical AI coding systems that work reliably in production environments.

Liu's philosophy centers on a crucial insight: **the bottleneck isn't model capability—it's system architecture**. While frontier models are sufficiently intelligent for coding tasks, the real challenge is designing agent systems that manage context effectively, reason appropriately for the task at hand, and maintain code quality standards.

## Key Focus Areas

- **Code Intelligence & Search** - Understanding codebases as structured systems for AI reasoning
- **Multi-Agent Architecture** - Designing specialized agents for different coding tasks
- **Context Management** - Optimizing token usage and information flow in agent systems
- **Code Quality & Verification** - Ensuring AI-generated code meets production standards
- **Developer Experience** - Building tools that enhance rather than replace developer judgment
- **Enterprise Reliability** - Creating AI systems suitable for mission-critical production use

## Key Concepts from Talk: "Amp Code: Next-Generation AI Coding"

### The Dual-Model System: Smart vs. Rush

Amp Code implements a sophisticated dual-model approach optimized for different task requirements:

**Smart Agent (Deep Reasoning)**
- Powered by three specialized subagents working in concert
- **Oracle**: Careful reasoning and code review—the thoughtful analysis engine
- **Librarian**: Library and dependency understanding—navigates ecosystem knowledge
- **Finder**: Codebase search and context retrieval—powered by Sourcegraph's code search
- Used for critical decisions, architectural changes, and complex reasoning tasks
- Accepts latency cost for decision quality

**Rush Agent (Fast Execution)**
- Quick-path execution model—trades some intelligence for speed
- Handles straightforward implementations and mechanical code generation
- Cost-optimized without sacrificing reliability
- Complements the smart agent for rapid iteration

This isn't a compromise—it's recognition that **different tasks have fundamentally different requirements**. Some work needs deep reasoning; some needs fast execution. Amp's dual-system architecture lets developers choose based on actual needs rather than forcing a one-size-fits-all approach.

### The Four Subagents Architecture

Rather than throwing everything into one massive context window, Amp uses specialized subagents to solve context management:

1. **Finder** - Codebase search and context discovery
   - Leverages Sourcegraph's code search capabilities
   - Retrieves relevant code patterns, examples, and dependencies
   - Solves: "Where is the relevant code?"

2. **Oracle** - Reasoning and code review
   - Performs careful analysis and verification
   - Acts as the "thoughtful reviewer"
   - Solves: "Is this the right approach?"

3. **Librarian** - Library and dependency management
   - Understands available libraries and APIs
   - Prevents reinventing wheels; encourages ecosystem reuse
   - Solves: "What tools exist for this?"

4. **Kraken** - Refactoring and code transformation
   - Handles systematic code improvements
   - Manages large-scale refactoring operations
   - Solves: "How do we improve this?"

Each subagent has focused context and specialized capabilities. This architecture solves a critical insight: **tool calls themselves consume context**. By isolating concerns into separate agents, Amp prevents the context confusion that leads to incomprehensible output and decision paralysis.

### Context as the Bottleneck

Amp's architecture is built on a key observation from production experience: **context management is the primary constraint**, not model capability.

- **Problem**: When tool calls proliferate, context window gets consumed by tool specifications, function signatures, and coordination overhead
- **Solution**: Subagents compartmentalize concerns and limit context scope
- **Result**: Cleaner reasoning, better decisions, predictable behavior

This echoes insights from other summit speakers (notably Dex Horthy): context windows aren't oxygen tanks for diving—they're precious, limited resources that require intentional management.

### Why Not Just Use an IDE Plugin?

Amp deliberately built its own editor interface rather than forking VS Code:

**Terminal User Interface (TUI) & GUI**
- Custom-built TUI for deep integration with AI workflow
- Developing both TUI and GUI interfaces
- More sophisticated than traditional IDE plugins

**Editor as "Readitor"**
- Modern editors should be readers first, writers second
- Emphasis on understanding code before modification
- Sophisticated diff visualization for exploring changes
- Focus on code review and understanding workflows

**Tool Integration Philosophy**
- Chose internal tool calls over MCP/customer tools
- Avoids context confusion from too many external tool definitions
- Concentrates attention on Amp's core reasoning and execution
- Tool overhead is real and measurable in context consumption

### Code Quality & Craft

A philosophical question Amp grapples with: **Is coding still a craft when AI writes it?**

This isn't rhetorical—it goes to the heart of how developers should relate to AI-written code:

- **Code review becomes primary task**: Most of Amp's actual work is smarter linting and careful review
- **Human judgment remains central**: AI generates options; humans validate correctness and design
- **Relearning collaborative craft**: The ability to share threads and collaborate on AI-assisted work (building on patterns like Midjourney's collaborative interface)
- **Cost vs. intelligence tradeoff**: Rush models aren't free but approach commodity pricing, changing the economics of development

### Architecture: Editing Code vs. Understanding Code

Amp's interface design philosophy reflects a shift in what developers actually do:

- **Too much of modern development is mechanical** - Boilerplate, routine refactoring, systematic improvements
- **AI handles the mechanical work** - Leaves developers for architecture, design, and judgment
- **Rich diff environments** - Exploring what AI generated is as important as generating it
- **Shared collaborative spaces** - Teams need to review and iterate on AI-generated code together

## Vision & Philosophy

Beyang Liu represents a **pragmatic vision of AI in production**: not "Can we use frontier models?" but "How do we build reliable systems that work in actual enterprises?"

Key themes:

1. **Specialization Over Generality** - Different tasks benefit from different models and architectures
2. **Context is Currency** - Token efficiency and context management drive actual capability limits
3. **Architecture Matters More Than Models** - The limiting factor is usually how systems are designed, not model capability
4. **Code Search as Foundation** - Understanding codebases at scale is essential for reliable AI coding
5. **Human-AI Collaboration** - AI as amplifier of human expertise, not replacement for developer judgment

### On Amp's Positioning

Amp Code sits in a unique position in the emerging AI coding landscape:

- **Not a code editor plugin** - Custom-built system optimized for AI workflows
- **Not a simple frontend to frontier models** - Multi-agent architecture with specialized reasoning
- **Not fully autonomous** - Emphasizes human review and decision-making
- **Enterprise-grade** - Built for production reliability at scale

## Related Technical Insights

### The Finder-Oracle-Librarian-Kraken Stack

This is more than an architectural choice—it's a response to real production constraints:

- **Finder** solves the first AI coding bottleneck: "What code is relevant?"
- **Oracle** solves the second: "What's the right approach?" (enables careful reasoning)
- **Librarian** solves the third: "What already exists?" (ecosystem integration)
- **Kraken** solves the fourth: "How do we systematically improve?" (maintenance and evolution)

### Context Compression Techniques

From summit insights echoed in Amp's design:

- Pre-research everything needed for a task
- Compress information into focused markdown
- Use codebase search (Finder) to retrieve exactly what's needed
- Plan in phases to limit context scope
- Verify outcomes rather than process to reduce specification overhead

## Referenced Materials

- **Amp Code:** [https://ampcode.com](https://ampcode.com) - Next-generation AI coding platform
- **Sourcegraph:** [https://sourcegraph.com](https://sourcegraph.com) - Enterprise code intelligence platform
- **Amp Code GitHub:** [https://github.com/sourcegraph/amp](https://github.com/sourcegraph/amp)
- **Steve Yegge (Sourcegraph):** Co-presenter on "2026: The Year the IDE Died"

## Related Insights from Summit

### Multi-Agent Architectures Across the Summit

Beyang's subagent approach aligns with a broader summit theme:

- **Dex Horthy (Netflix)** on subagents for context control and intentional compaction
- **Lee Robinson (Cursor)** on specialized models for different phases (smart planning + fast execution)
- **Aparna Dhinakaran (Arize)** on continual learning to improve agent performance
- **Steve Yegge** on agent swarms vs. monolithic superintelligence

### The Spectrum of Specialization

The emerging pattern from the summit:

1. Use frontier models for planning and architecture decisions
2. Deploy specialized or cost-optimized models for execution
3. Implement multi-agent systems to manage context and isolate concerns
4. Focus on code review and verification rather than pure generation

## Conference Appearance

**Event:** AI Engineering Code Summit 2025
**Date:** November 21, 2025
**Time:** 2:25 PM - 2:44 PM
**Session:** "Amp Code: Next-Generation AI Coding"
**Focus:** Multi-agent architecture, code intelligence integration, context management in AI systems, and production-grade AI-assisted development workflows

## Key Quotes

> "Tool calls themselves eat up context. We built subagents to clean up the context messiness."

> "We need smart agents for reasoning and rush agents for execution."

> "Most of the time we're doing code review—smarter linting."

> "We need to relearn the craft of how to code together."

> "An editor is more of a 'readitor'—understanding comes before writing."

---

*Last Updated: November 22, 2025*
