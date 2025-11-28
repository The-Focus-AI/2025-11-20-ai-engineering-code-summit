---
title: "What We Learned Deploying AI within Bloomberg's Engineering Organization"
speaker: "Lei Zhang"
company: "Bloomberg"
track: "Leadership"
topics:
  - "SDLC & Process"
  - "Infrastructure & Compute"
  - "Trust & Safety"
---

**Time:** 2:25 PM

**Speaker Bio:** Head of Technology Infrastructure at Bloomberg Engineering.

**Speaker Profile:** [Full Speaker Profile](../speakers/lei-zhang.md)

**Company:** Bloomberg is a major financial data and media company deploying AI at enterprise scale.

**Focus:** Lessons from deploying AI tools across a large engineering org. Practical insights from a mature tech company.

**Reference:** [LinkedIn Profile](https://www.linkedin.com/in/lei-zhang-51b2686)

## Slides

### Slide: 14-25
![Slide](../slides/2025-11-20-14-25-gemini-edited.jpg)

**Key Point:** The slide predicts five major industry trends toward more specialized, integrated, and usage-based AI implementations with better governance and security built into the models themselves.

**Literal Content:**
- Title: "Where is the Industry Going?"
- Five trends listed:
  1. LLM-Ready Data Fabric - Agent-readable schemas, lineage, usage hints
  2. Specialist-First Model Grid - Tiny expert models → routed to large generalists on demand
  3. Invisible Copilots - One-click LLM actions inside Slack / CRM / BI
  4. Secure Models from Within - Safety scores from weights & logprobs, not outer wrappers
  5. Usage Based Pricing Models - Fewer workers → Fewer Seats → Licensing focused in usage

### Slide: 14-27
![Slide](../slides/2025-11-20-14-27-gemini-edited.jpg)

**Key Point:** This slide showcases Bloomberg's massive scale of operations, emphasizing their workforce, engineering capabilities, and enormous data processing capacity that positions them as a major player in AI/ML applications.

**Literal Content:**
- Title: "Bloomberg by the numbers"
- Left column (people):
  - Globe icon: 26,000+ employees, worldwide
  - Building icon: 9,000+ engineers
  - News icon: 2,900+ journalists and analysts
  - Database icon: 2,000+ data specialists
  - Robot icon: 400+ employees working on AI and ML applications
- Right column (data):
  - Chart icon: 600+ billion ticks per day, from every asset class & market
  - Building/people icon: 96,000 companies. 2M+ entities. 3.3M bios of executives, leaders & govt officials
  - News icon: 1.5 million news articles ingested per day, from 175,000+ vetted sources
  - Location icon: 100+ Alternative Data sources across multiple sectors
- Footer: "TechAtBloomberg.com" and Bloomberg Engineering logo

## Notes

* Lead of AI infrastructure
* 9,000+ engineers, 2000 data specialists, 400 ML/AI people
* Internal stack
	* Largest private network
	* Huge JavaScript framework (tens of millions LoC)
	* Lots of internal libraries being used
* What is AI for coding
	* Usage dropped really quickly once we moved back greenfield
	* "Vibe coding, where 2 engineers can create the tech debt of 50 engineers"
	* What work do our developers not want to do
* Example 1: Uplift agents
	* The patch
	* The rationale
	* Why we'd do it
	* Determine verifiability
* Example 2: Incident response agents
	* Overwhelming number of alerts
	* Hard to find context info
	* Understand contributing factors
* Changing people
	* 20+ training program -- well-established training problem
	* Change agent
	* Show how to use it with Bloomberg's technical
* Individual contributors use it more than leadership
* **Changes the cost function of engineering**
