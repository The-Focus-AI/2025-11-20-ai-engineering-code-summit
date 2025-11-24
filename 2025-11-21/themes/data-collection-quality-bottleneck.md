---
title: "Data Collection & Quality as the New Bottleneck"
order: 5
header_image: /headers/data-collection-quality-bottleneck.png
topics:
  - "Training Data"
  - "Open Science"
  - "Benchmarks"
  - "Data Quality"
key_speakers:
  - "Nik Pash (Cline)"
  - "Will Hang (OpenAI)"
  - "Cathy Zhou (OpenAI)"
  - "Will Brown (Prime Intellect)"
  - "Joel Becker (METR)"
key_insights:
  - "Agents are collecting good data but not sharing it - keeping datasets closed slows research"
  - "1000 examples can yield 10-point improvements - data quality >> data quantity"
  - "Cline-bench: open-source real-world agent coding benchmark from opt-in user data"
  - "Environments hub democratizes AI research like webapps democratized software"
---

# Data Collection & Quality as the New Bottleneck

Nik Pash didn't come to the AI Engineering Code Summit to make friends. The creator of Cline, one of the most widely-adopted AI coding agents, delivered what he called a "truth nuke"—and the shockwave is still reverberating through the research community. His message was simple, direct, and impossible to ignore: **the agents that are out there are collecting good data but not sharing it. Keeping datasets closed slows down research.**

This wasn't just provocative rhetoric. It was a call to arms backed by hard-won lessons from the trenches of building production AI coding agents. And it marked a fundamental shift in where the real bottleneck lies in advancing AI capabilities.

## The Great Bottleneck Migration

For years, the AI engineering community has been locked in an arms race of clever tricks—sophisticated scaffolding, complex tool-calling architectures, elaborate prompting strategies. But Pash's experience building Cline revealed an uncomfortable truth: **agents aren't bottlenecked by clever tricks anymore. Model strength is the main thing.**

The data doesn't lie. Terminus still beats everything with a minimalist tool design—no clever tool calling, just basic tools like terminal, grep, and filesystem operations. Capability beats scaffolding. Minimalism wins. As Pash put it, he's "tired of all the little hacks." The engineering optimization game has reached diminishing returns.

The bottleneck has migrated. The new constraint isn't how cleverly you can orchestrate model calls—it's **collecting quality training data at scale**. And this is where OpenAI's Agent Reinforcement Fine-Tuning (ARFT) results become revelatory.

## The 1000-Example Revolution

Will Hang and Cathy Zhou from OpenAI's fine-tuning team dropped a stat that should make every AI engineer sit up straight: **1000 examples can yield 10-point improvements**. Not 10,000 examples. Not 100,000. One thousand high-quality examples.

![](slides/2025-11-21-11-40-gemini-edited.jpg)

The ARFT case studies proved the principle across domains. Cognition's code editing agent saw dramatic gains from just 1000 trajectories, each in its own VM. Qodo's code review agent transformed with around 1000 question pairs. The pattern was consistent: **data quality really matters**—far more than quantity.

But here's the kicker: OpenAI's partners are collecting this data. Cline's millions of users are generating these trajectories. Every AI coding agent in production is sitting on a goldmine of real-world interaction data. And almost none of it is being shared.

This is Pash's "truth nuke" moment. The data exists. It's being collected right now, in production, at scale. But it's locked behind closed doors, siloed in proprietary systems, hoarded as competitive moats. And it's choking off the research community's ability to make collective progress.

## Cline-Bench: Open Science as Competitive Advantage

Pash's response is Cline-bench—a real-world agent coding benchmark built on the principles of open source and open science. The vision is audacious in its simplicity: convert real engineering work into open training data.

![](slides/2025-11-21-16-37-gemini-edited.jpg)

Cline-bench can run openly from opt-in users, capturing authentic coding trajectories as they happen. The goal is to create a feedback loop where production usage directly feeds research advancement, which in turn improves the agents that users rely on. It's a call for contribution: use it on your open source software, share the resulting data, lift all boats together.

The technical foundation is solid. As Pash explained, benchmarks and RL environments are fundamentally the same thing—a starting state, an environment, and a verifier. The only real difference is how rewards are used: one measures, one improves. Cline has built an "RL environments factory" with sub-agents that can qualify tasks and generate outcome-driven verifiers.

The tea kettle example crystallized good verifier design. Goal: boil water. Test: is it whistling? Pure outcome-driven verification that doesn't care about the path—not whether the burner is set to high, not whether five minutes elapsed, just whether the outcome was achieved. This is the key to reliable scoring and effective training.

## The Democratization Stack

Pash's vision dovetails perfectly with Will Brown's work at Prime Intellect on the "environments hub"—a platform for creating, sharing, and running RL training environments. Brown framed it perfectly: **"environments are the webapps of research."** Just as the web democratized software distribution, the environments hub aims to democratize AI research itself.

![](slides/2025-11-21-11-42-gemini-edited.jpg)

Prime Intellect's thesis is that scaling AI isn't just about compute—it's about scaling talent. Increase the pool. Increase accessibility. Give people the tools to train models and contribute to collective understanding. Their Verifiers toolkit (https://github.com/PrimeIntellect-ai/verifiers) provides the scaffolding for anyone to build RL environments, no PhD required.

The stack is coming together: Cline-bench generates real-world coding trajectories. Prime Intellect's environments hub provides the infrastructure to turn those trajectories into training environments. OpenAI's ARFT methodology proves that small, high-quality datasets can yield massive improvements. The pieces are all there.

What's missing is the culture shift.

## A Movement, Not a Feature

This isn't about a new benchmark or a clever technical trick. It's about recognizing that in 2025, **data is the constraint, and openness is the unlock**. Joel Becker's METR research on the gap between benchmarks and economic value highlighted a crucial point: we need better measurement of real-world capabilities, not just synthetic test performance.


Real-world agent trajectories are the ground truth. They capture the messy, complex, multi-step reasoning that actually moves the needle on economic value. And they're being generated, right now, at unprecedented scale—but locked away.

Pash's truth nuke is a challenge to the entire AI engineering community: **are we serious about advancing agent capabilities, or are we content to let competitive dynamics slow down collective progress?** Will we choose the open science path that accelerated deep learning research, or the proprietary data moats that defined the pre-transformer era?

The answer will determine how quickly we get to truly capable AI coding agents. Cline-bench is Pash's bet on openness. The question is whether the rest of the community will follow. Because as he made clear: models only get better when labs train on something hard. And right now, the hardest, most valuable training data is sitting unused in production agent logs.

The bottleneck has shifted. The solution is clear. The call to action is issued. What remains is execution—and courage.
