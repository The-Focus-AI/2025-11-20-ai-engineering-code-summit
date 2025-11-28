---
title: "Using AI-Generated Kernels to Instantly Speed Up PyTorch"
speaker: "Natalie Serrino"
company: "Gimlet Labs"
track: "Engineering"
topics:
  - "Infrastructure & Compute"
  - "ROI & Economics"
---

## 2:45pm - 3:04pm | Using AI-Generated Kernels to Instantly Speed Up PyTorch

**Speaker:** Natalie Serrino, Founder, Gimlet Labs

**Speaker Profile:** [Full Speaker Profile](../speakers/natalie-serrino.md)

**Bio:** Founder, Gimlet Labs

**Topic:** AI-generated kernels for speeding up custom PyTorch code without human effort

![](slides/2025-11-21-14-45-gemini-edited.jpg)
![](slides/2025-11-21-15-00-gemini-edited.jpg)
![](slides/2025-11-21-15-01-gemini-edited.jpg)

### Notes

- what is a kernel: a transformer architecture for generating the inference system

## Slides

### Slide: 14-45
![Slide](../slides/2025-11-21-14-45-gemini-edited.jpg)

**Key Point:** Demonstrates performance optimization results for AI agents on Apple M4 hardware, showing that medium complexity (L2) problems achieve the best speedup while highly complex problems see diminishing returns.

**Literal Content:**
- Title: "Preliminary results of standalone agent on KernelBench v0.1"
- Left side bullet points:
  - Optimization for Apple M4 devices using Metal kernels
  - Results across ~250 problems
  - Use geometric mean
  - Fall back to baseline if generated kernels are slower or incorrect
  - Compare to whichever is the faster baseline: torch.compile or eager mode
- Right side: Bar chart showing "Geometric mean speedup on M4 Metal - KernelBench v0.1"
- Four bars (L1, L2, L3, AI problems), with L2 showing highest speedup marked as "Sweet spot for optimization"
- L3 showing "Higher complexity drop off"

### Slide: 15-00
![Slide](../slides/2025-11-21-15-00-gemini-edited.jpg)

**Key Point:** Shows the historical pattern where each technological innovation in software development enabled solving progressively larger and more complex problems, setting up context for how AI represents the next evolution.

**Literal Content:**
- Title: "Each Solution Enabled Bigger Problems"
- Timeline progression:
  1. 1970s - C Language: "We built larger systems"
  2. 1980s - Personal Computers: "Everyone could create software"
  3. 1990s - Object-Oriented Programming: "Inheritance hierarchies from hell"
  4. 2000s - Agile: "Sprints and scrum masters"
  5. 2010s - Cloud & Mobile: "Software ate the world"

### Slide: 15-01
![Slide](../slides/2025-11-21-15-01-gemini-edited.jpg)

**Key Point:** Distinguishes between "simple" (architecturally clean, untangled) and "easy" (convenient, quick to implement), arguing that confusing these concepts leads to complexity debt in software systems.

**Literal Content:**
- Title: "Simple vs Easy"
- Two columns comparing:
  - **Simple**: One fold, one braid; Single responsibility; Lack of entanglement; Requires design, thought, untangling
  - **Easy**: Adjacent, reachable; Copy, paste, ship; Install a package; Just put it closer
- Bottom citation: "Rich Hickey, 2011 - Simple Made Easy: We use these words interchangeably, but they're not the same at all. Confusing them is why we're drowning in complexity."
