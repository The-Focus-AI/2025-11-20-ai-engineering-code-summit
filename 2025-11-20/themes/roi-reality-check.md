---
title: "The ROI Reality Check: Where AI Actually Delivers (And Where It Falls Flat)"
topics:
  - "ROI & Metrics"
  - "Greenfield vs Brownfield"
  - "Enterprise Adoption"
  - "Trust Building"
key_speakers:
  - "Yegor Denisov-Blanch (Stanford)"
  - "Lei Zhang (Bloomberg)"
  - "Asaf Bord (Northwestern Mutual)"
  - "NLW (Super AI)"
  - "Martin Harrysson (McKinsey)"
  - "Natasha Maniar (McKinsey)"
key_insights:
  - "AI delivers 35-40% gains on greenfield/low-complexity, but 0-10% on brownfield/high-complexity"
  - "93% of organizations stuck in 'pilot purgatory' - only 7% believe they're at scale"
  - "Gap between demo and production is 'so broad' in risk-averse environments"
  - "2 engineers can create tech debt of 50 engineers through vibe coding"
---

# The ROI Reality Check: Where AI Actually Delivers (And Where It Falls Flat)

The gap between demo and production has never felt wider. While vendors showcase AI coding assistants transforming greenfield projects in minutes, enterprises are wrestling with a far more stubborn truth: most real-world software development looks nothing like those polished demos. According to Stanford researcher Yegor Denisov-Blanch, who analyzed over 100,000 engineers across hundreds of companies, the numbers tell a story that should make every CTO pause before their next all-hands about AI-driven productivity.

![](slides/2025-11-20-11-41-gemini-edited.jpg)

"AI usage quality means more than quantity," Denisov-Blanch emphasized, presenting findings that reveal a stark productivity divide. On greenfield projects and low-complexity tasks, AI coding tools deliver impressive 35-40% productivity gains. But throw those same tools at brownfield codebases and high-complexity work—the meat and potatoes of enterprise software development—and those gains plummet to 0-10%. The difference isn't just statistical noise; it's a fundamental reality check about where AI actually helps versus where it merely creates the illusion of progress.

This complexity gap manifests in unexpected ways. Bloomberg's Lei Zhang coined the term "vibe coding" to describe what happens when developers lean too heavily on AI assistants: "2 engineers can create the tech debt of 50 engineers." His team of 9,000+ engineers discovered that usage dropped precipitously when moving from greenfield to brownfield work—not because developers were resistant to AI, but because the tools simply couldn't navigate Bloomberg's tens of millions of lines of JavaScript and intricate internal libraries.

![](slides/2025-11-20-14-27-gemini-edited.jpg)

The data doesn't lie about AI's potential, but it demands honesty about its current limitations. NLW's survey of 3,500 use cases across eight impact categories revealed that coding is "further ahead" than other domains in delivering measurable ROI. Yet even in this leading category, the picture is more nuanced than headlines suggest. McKinsey's parallel study of 120,000 developers found that only 7% of organizations believe they're fully at scale with AI development tools. The remaining 93% are stuck in what multiple speakers called the "pilot purgatory"—endless experimentation without production-grade deployment.

![](slides/2025-11-20-16-10-gemini-edited.jpg)

Asaf Bord from Northwestern Mutual brought this reality into sharp focus when discussing his company's GenBI initiative at the Fortune 100 financial services giant. "The gap between demo and production is so broad," he stated plainly. Working in one of the world's most risk-averse environments—an organization built on 40-50 year client relationships—Bord identified four critical barriers: unknown technology, messy real data, blind-trust bias, and budget impact concerns.

![](slides/2025-11-20-14-11-gemini-edited.jpg)

His solution? Stop working with synthetic data and start building trust incrementally. "Using actual data instead of synthetic to really understand the mess," Bord explained, Northwestern Mutual brought business stakeholders directly into the research project itself. Rather than building in isolation and hoping for adoption, they collected real questions users were asking their data systems—essentially creating organic evaluation sets from actual workflows. This approach of incremental ROI delivery, step by step, proved far more effective than big-bang transformations.

![](slides/2025-11-20-14-19-gemini-edited.jpg)

The trust-building imperative extends beyond individual projects to organizational change itself. McKinsey's research into post-Agile methodologies revealed that successful AI adoption requires "getting a lot of little things right"—numerous small interventions rather than wholesale process overhauls. Organizations are experimenting with shorter sprints, smaller teams, and increased investment in both greenfield and brownfield development, but the timeline for human change remains stubbornly long.

![](slides/2025-11-20-11-25-gemini-edited.jpg)

Perhaps most counterintuitively, Denisov-Blanch's research identified "environment cleanliness" as a key factor amplifying AI productivity gains. Clean code doesn't just make human developers more effective—it dramatically improves AI tool performance. "Invest in software cleanliness to get the gains," he advised. "Fight the entropy." This finding flips conventional thinking: rather than using AI to compensate for messy codebases, organizations should clean up their code to unlock AI's potential.

![](slides/2025-11-20-11-43-gemini-edited.jpg)

The research also revealed what Denisov-Blanch called a "rich gets richer effect"—the gap between top and bottom performers is widening, not shrinking, with AI adoption. Teams that already maintained clean codebases, established good practices, and invested in systematic tooling are seeing outsized benefits. Meanwhile, teams struggling with technical debt and process chaos find AI tools amplifying their existing problems rather than solving them.

Bloomberg's Zhang offered a reframing that cuts to the heart of the matter: AI "changes the cost function of engineering." Rather than asking what AI can do, his team asks what work developers don't want to do. This led to targeted applications like uplift agents for handling patches and rationale documentation, and incident response agents to parse overwhelming alert volumes—unglamorous but high-value use cases that deliver clear ROI.

The convergence of these studies points to an uncomfortable truth: AI coding tools aren't a silver bullet for productivity, they're an amplifier of existing organizational capabilities. Success requires working with actual messy data, bringing business stakeholders into the research process, maintaining code cleanliness, and building trust through incremental delivery. The 35-40% gains are real—but only for organizations willing to do the unglamorous work of getting their houses in order first.

As NLW's survey showed growing optimism about AI deployment over the course of 2024, the gap between pilot projects and production scale remains the defining challenge. The organizations that will thrive aren't those racing to adopt every new AI tool, but those methodically building the foundations—clean code, clear processes, stakeholder trust—that allow those tools to actually deliver value. The ROI is there, but it's earned through discipline, not demos.
