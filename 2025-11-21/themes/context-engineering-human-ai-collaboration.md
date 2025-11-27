---
title: "DO NOT OUTSOURCE THE THINKING: Context Engineering & Human-AI Collaboration"
order: 1
header_image: /headers/context-engineering-human-ai-collaboration.png
topics:
  - "Context Engineering"
  - "Human-AI Collaboration"
  - "System Comprehension"
  - "Technical Debt"
key_speakers:
  - "Jake Nations (Netflix)"
  - "Dex Horthy (HumanLayer)"
  - "Beyang Liu (Amp Code)"
key_insights:
  - "DO NOT OUTSOURCE THE THINKING - AI can only amplify the thinking you've done"
  - "Around 40% context window utilization you see diminishing returns - 'the dumb zone'"
  - "Easy doesn't equal simple - AI makes coding easy but systems complex"
  - "Subagents are for controlling context, not adding features"
edited: true
---

Dex Horthy of [12 factor agents](https://github.com/humanlayer/12-factor-agents) fame and CEO of HumanLayer, came in hot with his "No Vibes Allowed" arguing that we needed to use subagents for research and planning and building, keeping the context window under 40% beyond which you'll end up in the "dumb zone".  He had enough material for a talk twice as long, but some fun things:

- "dumb zone" -- around a 40% full context window you'll start to see diminishing returns
- When the model says "you're absolutely right" its time to start over.
- Use subagents to manage context.
- Because of semantic diffusion spec driven development means whatever you want it to.
- There's "a lot of rework, working more just fixing the slop from last week." 
- LLMs are stateless functions -- put better tokens in to get the right tokens out
- Also, use subagents

The 12 factor agents idea, which I had to catch up on later, is an inversion of how we normally think of coding, having the model replace the DAG of if/then and switch/cases -- most of the code deployed is actually deterministic, but the human and llm controlls what is called when.

"I shipped code I didn't fully understand," says Jake Nations of Netflix, "and I bet you have too".  He came at the historical context from a different angle than Horthy, starting with an always cheery Dijkstra quote:

> when we had a few weak computers, programming became a mild problem, and now we have gigantic computers, programming had become an equally gigantic problem. -- [Edsger W. Dijkstra, 1972 Turing Award Lecture](https://www.cs.utexas.edu/~EWD/transcriptions/EWD03xx/EWD340.html)

Riffing through some of the past efforts to manage the complexity:

![](slides/2025-11-21-15-00-gemini-edited.jpg)

He speed ran through some complexity greatest hits -- riffing off No Silver Bullet -- he started fully channeling Rich Hicky's glorious 2011 ["Simple made Easy"](https://www.infoq.com/presentations/Simple-Made-Easy/) concepts for the AI age.

![](slides/2025-11-21-15-05-gemini-edited.jpg)

What systems could we put in place to apply resistance to bad architectural systems? We're losing the distinction between refactoring and mere rework. "When things are complex, everything touches everything else," Nations observed. He described watching an AI agent struggle with a codebase where business logic and authentication had become so intertwined that "it couldn't find the path between them." Technical debt, he noted, "doesn't register as debt—it just registers as code."

You need to think about how to pull things apart in the planning stages, and the humans always are the ones deciding what to build. 

The root of the problem lies in a fundamental misunderstanding about what makes software development hard.  Dex was honing in on succesful techniques on multiple levels of software architecture.  "Subagents for controlling features" not also much for grand unified Silver Bullets.  Nations was highlighting successful ways of dealing with archictectual complexity.

The solution, according to both speakers, is context engineering—the deliberate practice of managing what information flows to the AI and keeping humans firmly in control of the thinking process. 

![](slides/2025-11-21-09-37-gemini-edited.jpg)

Horthy's prescription was specific: "Build your entire plan around context workflow. Keep the context under 40%." He introduced the concept of "intentional compaction"—compressing context down to focused markdown files that contain exactly what the AI needs to know, nothing more. When you see the AI responding "you're absolutely right," that's your red flag. "It's time to start over," Horthy warned. The model is agreeing because it has lost the thread, not because you're correct.

Nations described Netflix's approach with their 5-million-line codebase: "No context window has access that can hold it." His team developed a three-phase process: research (feeding everything upfront—architecture diagrams, design docs, Slack threads, runbooks—then compressing it into a single research document), planning (specifying exact function signatures, type definitions, which files to modify), and only then implementation. "This phase should be pretty simple," Nations noted, "because you have a clear spec."

The technical mechanism for maintaining context control, according to Horthy, is subagents. "They are for controlling context," he emphasized. "Go find how this works." Beyang Liu from Amp Code echoed this approach, describing how his team built four specialized subagents (Finder for codebase search, Oracle for reasoning, Librarian for library use, Kraken for refactoring) specifically because "tool calls themselves eat up context." By isolating different concerns in separate agents, you prevent the context confusion that leads to incomprehensible output.

Horthy framed the entire practice as "hardness engineering"—deliberately making the AI's job harder by forcing human thinking upfront. "The code is like assembling now, just focus on the markdown." 

Nations put it most poignantly: "Software is a human endeavor. The hard part was never typing the code—it was knowing what to type."