---
title: "DO NOT OUTSOURCE THE THINKING: Context Engineering & Human-AI Collaboration"
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
---

# "DO NOT OUTSOURCE THE THINKING": Context Engineering & Human-AI Collaboration

When Jake Nations, an engineer at Netflix, shipped code he didn't understand, he recognized a familiar pattern from computing history. "I bet you have to," he admitted to the audience, acknowledging what many developers won't say out loud: AI has made it dangerously easy to build systems we can't comprehend. This is the paradox at the heart of AI-assisted development—coding has never been easier, yet our software has never been more complex. The question, as Nations framed it, isn't whether AI will write most of our code. It's "whether we'll still understand our own systems when AI is writing most of our code."

![](slides/2025-11-21-15-05-gemini-edited.jpg)

Dex Horthy, CEO of HumanLayer, opened his talk with a stark observation: he surveyed 100,000 developers across all company sizes and found they were doing "a lot of rework, working more just fixing the slop from last week." The promise of AI amplification had devolved into an endless cycle of generating and debugging incomprehensible code. His message was unequivocal: "DO NOT OUTSOURCE THE THINKING. It can only amplify the thinking that you've done."

![](slides/2025-11-21-09-30-gemini-edited.jpg)

The root of the problem, both speakers argued, lies in a fundamental misunderstanding about what makes software development hard. Nations invoked Fred Brooks's 1986 essay "No Silver Bullet," which predicted that no single technology would solve software's essential complexity. "The hard part was never the mechanics of coding," Nations explained. "It was about understanding the actual problem and designing the solution." AI hasn't changed this equation—it's just obscured it. As Nations put it, drawing on Rich Hickey's classic "Simple Made Easy" talk: "Easy doesn't equal simple."

AI makes coding easy—dangerously so. You can generate thousands of lines of working code without understanding the architectural decisions embedded in it. But easy isn't simple. "When things are complex, everything touches everything else," Nations observed. He described watching an AI agent struggle with a codebase where business logic and authentication had become so intertwined that "it couldn't find the path between them." Technical debt, he noted, "doesn't register as debt—it just registers as code."

![](slides/2025-11-21-15-07-gemini-edited.jpg)

The solution, according to both speakers, is context engineering—the deliberate practice of managing what information flows to the AI and keeping humans firmly in control of the thinking process. Horthy introduced what he called "the dumb zone," citing research showing that "around 40% you are going to see diminishing returns." This isn't a vague guideline—it's a hard constraint. When your context window utilization climbs above 40%, the quality of AI output begins to degrade precipitously.

![](slides/2025-11-21-09-37-gemini-edited.jpg)

Horthy's prescription was specific: "Build your entire plan around context workflow. Keep the context under 40%." He introduced the concept of "intentional compaction"—compressing context down to focused markdown files that contain exactly what the AI needs to know, nothing more. When you see the AI responding "you're absolutely right," that's your red flag. "It's time to start over," Horthy warned. The model is agreeing because it has lost the thread, not because you're correct.

Both speakers emphasized that context engineering requires breaking work into phases where humans checkpoint the thinking. Nations described Netflix's approach with their 5-million-line codebase: "No context window has access that can hold it." His team developed a three-phase process: research (feeding everything upfront—architecture diagrams, design docs, Slack threads, runbooks—then compressing it into a single research document), planning (specifying exact function signatures, type definitions, which files to modify), and only then implementation. "This phase should be pretty simple," Nations noted, "because you have a clear spec."

![](slides/2025-11-21-15-09-gemini-edited.jpg)

The technical mechanism for maintaining context control, according to Horthy, is subagents. "They are for controlling context," he emphasized. "Go find how this works." Beyang Liu from Amp Code echoed this approach, describing how his team built four specialized subagents (Finder for codebase search, Oracle for reasoning, Librarian for library use, Kraken for refactoring) specifically because "tool calls themselves eat up context." By isolating different concerns in separate agents, you prevent the context confusion that leads to incomprehensible output.

Horthy framed the entire practice as "hardness engineering"—deliberately making the AI's job harder by forcing human thinking upfront. "The code is like assembling now," he observed. "Just focus on the markdown." Planning equals leverage. Code review is about mental alignment, not syntax checking. "Spec-driven development is broken," he declared, because specifications drift semantically as they pass through AI transformations—what he called "semantic diffusion."

Nations put it most poignantly: "Software is a human endeavor. The hard part was never typing the code—it was knowing what to type." AI can accelerate the research, make the planning clearer, speed up implementation. But the thinking—understanding the problem domain, recognizing patterns from past failures, making architectural decisions that keep systems comprehensible—that must remain with humans. Because if we outsource the thinking, we're not building software faster. We're just building incomprehensibility at scale.
