---
title: "Developer Experience in the Age of AI Coding Agents"
speaker: "Max Kanat-Alexander"
company: "Capital One"
track: "Leadership"
topics:
  - "UX & Interaction"
  - "Trust & Safety"
  - "SDLC & Process"
---

**Time:** 3:05 PM

**Speaker Bio:** Executive Distinguished Engineer for Developer Experience at Capital One. Author of "Code Simplicity." Previously Technical Lead for Code Health at Google, on DevEx at LinkedIn.

**Speaker Profile:** [Full Speaker Profile](../speakers/max-kanat-alexander.md)

**Company:** Capital One uses OPA (Open Policy Agent) to bake compliance into deployment pipelines. Real-world enterprise DevEx challenges.

**Focus:** How to create DX that supports agents while maintaining compliance, security, and developer autonomy. 20+ years in the field.

## Notes

* Since we are adopting the new shiny really fast now, different than we used to do, the future is really hard to predict
* Use tools in the same way that the outside world does development so that you can use agent tools
* Even more important to have
* Better tooling, better testing, better messages
	* All that is old is new again, good software practices matter
* Designing coding with testing in mind -- much more effective
* A lot of talk about documentation, the value of it is debated, but not the agents need written words
	* If the code structure is good, maybe we don't need docs on that
* It did not attend your verbal meeting that has no transcript
	* There are orgs right now that use that tribal knowledge
	* Telling the agent the context around it
	* This sort of documentation is even more important
* We spend more time reading code than writing it, and even more so now
	* Every software developer becomes a code reviewer
	* We need to speed up code review velocity
	* Make each individual response fast
* Figuring out how to assign work, whose turn it is to take action (similar to the McKinsey thing)
* Software quality: "not perfection, good enough, and better than it was before"
	* The people the best at code reviews aren't doing code reviews
* Standardize environment
	* Dev environments
	* CLIs and API needed at dev time
	* Improve deterministic validation
	* Refactor for testability and ability to reason about code base
	* Write down external context and intentions
	* **What's good for humans is good for AI *applause***
	* When we invest in this we will help the humans no matter what

## Slides

### Slide: 2025-11-20-15-16
![Slide](../slides/2025-11-20-15-16-gemini-edited.jpg)

**Key Point:** The slide emphasizes the importance of maintaining high standards in code review processes, including encouraging quality reviews, maintaining high bars, and using reviews as a teaching tool for junior engineers.

**Literal Content:**
- Title: "Code Review Quality"
- Three bullet points:
  - "You have to encourage great reviews"
  - "That hold a high bar and reject code that doesn't meet it"
  - "Where junior engineers learn about coding and reviewing by getting reviews from seniors."

### Slide: 2025-11-20-15-17
![Slide](../slides/2025-11-20-15-17-gemini-edited.jpg)

**Key Point:** The slide warns about a negative feedback loop where AI agents trained on bad code produce low-quality reviews, which further degrade the codebase, creating a vicious cycle of declining code quality.

**Literal Content:**
- Dark background
- Title: "The Vicious Cycle"
- Flow diagram showing:
  - "Bad Codebase" (code file icon) → "AI Agent" (robot icon) → "Many Low-Quality Reviews" (stamp icons) → "Worse Codebase" (code file icon)
  - Arrow loops back from "Worse Codebase" to "AI Agent"

### Slide: 2025-11-20-15-18
![Slide](../slides/2025-11-20-15-18-gemini-edited.jpg)

**Key Point:** The slide presents the positive alternative where good codebases and great tools enable AI agents to provide strong reviews, which leads to increased development velocity—a virtuous cycle.

**Literal Content:**
- Dark background
- Flow diagram showing:
  - "Good Codebase" (code file icon) and "Great Tools" (wrench icon) → "AI Agent" (robot icon) → "Strong Reviews" (magnifying glass icon) → "Velocity" (fast-forward and lightning bolt icons)
