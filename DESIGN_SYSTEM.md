# AI Engineering Summit — Design System

> **For AI Tools**: This document defines the visual language for this project. Use these tokens, patterns, and guidelines to generate consistent, on-brand code.

---

## Brand Brief

### Parent Brand Relationship

This is a **Focus.AI Labs** project. Labs is a distinct sub-brand under [The Focus.AI](https://thefocus.ai).

| | Focus.AI (Parent) | Focus.AI Labs |
|---|---|---|
| **What it is** | Technology studio, client services | Content, reports, analysis, experiments |
| **Audience** | Organizations needing AI transformation | AI practitioners + credibility for parent |
| **Palette** | Paper, Ink, Petrol, Graphite | Paper, Void, Rand-Blue, Alert-Red |
| **Shared DNA** | "Distill the signal from the noise" | Demonstrates distillation in practice |

### What Focus.AI Labs Is

Labs projects are **things we're exploring and sharing publicly** — not client deliverables, not polished products. They're experiments, analyses, and reports that we find interesting and think others might too.

The "Future Systems Report" aesthetic (Bell Labs / RAND Corporation) is the **shared visual language for all Labs projects**. This conference analysis is one instance; future Labs projects will share this aesthetic.

### Vision

Open doors, don't close them. A Labs project succeeds when the reader thinks: **"That was really cool, and now I have so many more ideas of things to explore."**

### Audience

- **Primary**: Peer AI practitioners — engineers, builders, people in the arena
- **Secondary**: Potential Focus.AI clients — establishing credibility through demonstrated expertise

We write *with* the audience, not *at* them. They're peers, not students.

---

## Brand Pillars

| Pillar | Focus.AI Labs | How It Shows Up |
|--------|---------------|-----------------|
| **Purpose** | Share what we find interesting; open doors for exploration | Generous with insights, transparent about process |
| **Positioning** | Experiments in public — distillation demonstrated, not described | "Here's what we did" not "here's what you should do" |
| **Personality** | Curious, Wry, Generous | Questions over answers; dry observations; no gatekeeping |
| **Perception** | Interesting people doing interesting things | Not thought leaders, not gurus — just folks who dig in |
| **Promotion** | The work speaks; aesthetic is distinctive | Bell Labs visual identity; GitHub-first distribution |

---

## Voice & Tone

### Core Voice Traits

**Curious** — "We found this interesting and dug in"
- Lead with questions and observations
- Show the rabbit holes, not just the conclusions
- It's okay to not have all the answers

**Wry** — Dry observations, not taking ourselves too seriously
- Humor through understatement, not jokes
- Notice the absurd without belaboring it
- Self-aware about the experiment

**Generous** — Sharing what we learned, not gatekeeping
- Give the reader everything they need
- Credit sources and speakers fully
- Make it useful, not just impressive

### What We Sound Like

- A curious colleague sharing notes over coffee
- Someone who went down the rabbit hole and came back with stories
- Bell Labs memo from 1972, if those researchers had Twitter

### What We Don't Sound Like

- A consultant pitching services
- A thought leader building a personal brand
- An academic paper (rigorous but lifeless)
- A conference recap blog ("and then the next speaker said...")

### Anti-Patterns (Never Do This)

| Pattern | Example | Why It's Wrong |
|---------|---------|----------------|
| **Corporate/salesy** | "Leverage these insights to unlock value" | We're sharing, not selling |
| **Breathless hype** | "Revolutionary! Game-changing! The future is here!" | Exhausting and empty |
| **"Well actually"** | "While the speaker said X, technically..." | Pedantic, shows off knowledge |
| **Condescending** | "For those unfamiliar with transformers..." | Audience knows; don't explain basics |
| **Hot takes** | "Here's why everyone is wrong about agents" | Opinions without substance |
| **Self-promotional** | "As leaders in AI transformation, we noticed..." | The work should speak |

### Example Transformations

| Don't Write | Write Instead |
|-------------|---------------|
| "This groundbreaking talk revolutionized our understanding of AI agents!" | "Zhang's framing of 'computer use' — treating the model as a user, not a programmer — reframes the whole agent question." |
| "For those unfamiliar with RAG pipelines, here's a quick primer..." | "The RAG discussion assumed chunking is solved. It isn't." |
| "We were thrilled to attend this prestigious event..." | "Two days. 25 sessions. Here's what stuck." |
| "In conclusion, these insights will transform how enterprises approach AI." | "Recurring pattern: scaffolding is tech debt. Invest in model capability instead." |
| "The speaker made an interesting point, although technically speaking the architecture they described isn't quite accurate because..." | "Interesting claim about context windows. Worth testing." |

---

## Brand Concept

**"Future Systems Report"** — A retro-tech aesthetic inspired by Bell Labs research documents, RAND Corporation reports, and 1960s-70s technical publications. Professional authority meets vintage computing warmth.

### Why This Aesthetic?

The Bell Labs / RAND aesthetic was chosen because:

- **Authority without corporate sterility** — These institutions shipped real breakthroughs
- **Visual distinctiveness** — Stands out from generic tech blogs and AI slop
- **Warmth and tactility** — Paper tones and monospace type feel human
- **Nostalgic futurism** — "The future as imagined by the past" — appropriate for documenting a moment when the future is being actively negotiated
- **Signals experimentation** — Research reports, not marketing collateral

This aesthetic is shared across all Focus.AI Labs projects.

---

## Design Tokens

### Colors

| Token | Hex | CSS Variable | Tailwind Class | Usage |
|-------|-----|--------------|----------------|-------|
| **paper** | `#f3f2ea` | `--color-paper` | `bg-paper` | Primary background, content areas |
| **void** | `#1a1a1a` | `--color-void` | `text-void`, `border-void` | Primary text, borders, structural elements |
| **rand-blue** | `#0055aa` | `--color-rand-blue` | `text-rand-blue`, `bg-rand-blue` | Links, accents, CTAs, brand color |
| **alert-red** | `#d93025` | `--color-alert-red` | `text-alert-red`, `border-alert-red` | Numbers, callouts, emphasis (not errors) |
| **surface** | `#e6e4dc` | `--color-surface` | `bg-surface` | Secondary backgrounds, cards |
| **terminal-green** | `#00ff41` | `--color-terminal-green` | `text-terminal-green` | CRT effects only — use sparingly |

#### Semantic Usage
```
Page background:     bg-[#e8e6df] (slightly darker than paper)
Content containers:  bg-paper
Cards/sections:      bg-white
Hover states:        bg-[#f8f8f6] or hover:bg-gray-50
Inactive tabs:       bg-[#d6d4ce]
```

### Typography

| Token | Font Stack | CSS Variable | Tailwind Class | Usage |
|-------|------------|--------------|----------------|-------|
| **sans** | Inter, Helvetica, Arial, sans-serif | `--font-sans` | `font-sans` | Headings, body text, UI elements |
| **mono** | Courier Prime, monospace | `--font-mono` | `font-mono` | Metadata, labels, code, technical info |

#### Type Scale
```
Hero:        text-6xl md:text-8xl font-black leading-[0.85]
H1:          text-4xl md:text-5xl font-black
H2:          text-3xl font-black uppercase
H3:          text-xl font-bold
Body:        text-base font-normal (16px)
Small:       text-sm (14px)
Metadata:    text-xs font-mono (12px)
Micro:       text-[10px] font-mono
```

#### Font Weights
- `font-black` (900): Hero headlines, section titles
- `font-bold` (700): Subheadings, emphasis
- `font-semibold` (600): Navigation, labels
- `font-medium` (500): Lead paragraphs
- `font-normal` (400): Body text

### Spacing

Base unit: **4px**. Use Tailwind's default scale.

| Token | Value | Tailwind | Common Usage |
|-------|-------|----------|--------------|
| 1 | 4px | `p-1`, `m-1` | Tight inline spacing |
| 2 | 8px | `p-2`, `m-2` | Button padding, list gaps |
| 4 | 16px | `p-4`, `m-4` | Card padding, section gaps |
| 6 | 24px | `p-6`, `m-6` | Content section padding |
| 8 | 32px | `p-8`, `m-8` | Major section padding |
| 12 | 48px | `p-12`, `m-12` | Hero/major layout spacing |
| 16 | 64px | `p-16`, `m-16` | Page-level spacing |

---

## Component Patterns

### Navigation Tabs

Active tab sits "on top" of content with matching background:
```html
<!-- Active tab -->
<a class="px-4 md:px-6 py-2 border-t border-x border-void bg-paper text-void top-[2px] border-b-paper z-10 font-mono text-[10px] md:text-xs font-bold uppercase tracking-wider">
  Active
</a>

<!-- Inactive tab -->
<a class="px-4 md:px-6 py-2 border-t border-x border-void bg-[#d6d4ce] text-gray-600 hover:bg-white font-mono text-[10px] md:text-xs font-bold uppercase tracking-wider">
  Inactive
</a>
```

### Cards

Standard card with subtle hover:
```html
<div class="bg-white p-8 hover:bg-[#f8f8f6] transition-colors border border-void">
  <!-- Content -->
</div>
```

Grid of cards with void gutters:
```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-void border border-void">
  <div class="bg-white p-8">Card 1</div>
  <div class="bg-white p-8">Card 2</div>
</div>
```

### Buttons & Links

Primary action (blue background):
```html
<a class="bg-rand-blue text-white px-4 py-2 hover:bg-opacity-90 transition-colors font-mono text-xs font-bold uppercase tracking-wider">
  Action
</a>
```

Text link with arrow:
```html
<a class="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-rand-blue hover:underline decoration-2 underline-offset-4">
  Link Text <ArrowRight class="w-4 h-4" />
</a>
```

### Metadata Labels

Document-style metadata:
```html
<div class="font-mono text-xs space-y-1">
  <p class="font-bold">PROJECT: Conference Name</p>
  <p>DOC. NO: RM-2025-HZ</p>
</div>
```

Numbered list items:
```html
<span class="text-alert-red font-mono text-[10px]">01</span>
```

### Hero Titles

```html
<h1 class="text-6xl md:text-8xl font-sans font-black text-void leading-[0.85] tracking-tight">
  HEADLINE<br/>
  <span class="text-rand-blue">ACCENT</span>
</h1>
```

### Lead Paragraphs

With left border accent:
```html
<p class="font-sans font-medium text-lg max-w-2xl leading-snug border-l-4 border-alert-red pl-6 py-2">
  Lead paragraph text here.
</p>
```

### Section Dividers

```html
<div class="border-b-2 border-void pb-6 mb-12"></div>
```

Dashed subtle divider:
```html
<div class="border-b border-dashed border-gray-400 pb-2 mb-8"></div>
```

---

## Special Effects

### Bell Labs Photo Filter
Grayscale with slight sepia, reveals color on hover:
```html
<img class="bell-labs-photo" src="..." alt="..." />
```

CSS:
```css
.bell-labs-photo {
  filter: grayscale(100%) contrast(110%) brightness(0.95) sepia(10%);
  transition: filter 0.3s ease;
}
.bell-labs-photo:hover {
  filter: grayscale(0%) contrast(100%) brightness(1) sepia(0%);
}
```

### Halftone Overlay
Subtle dot pattern for images:
```html
<div class="halftone relative">
  <img src="..." alt="..." />
</div>
```

### CRT/Terminal Effects
Use only for terminal-themed sections:
```html
<div class="scanlines bg-void text-terminal-green font-mono p-4">
  <span class="crt-text-shadow">Terminal text</span>
</div>
```

---

## Layout Patterns

### Page Container
```html
<div class="max-w-7xl mx-auto bg-paper border border-void shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)]">
  <!-- Content -->
</div>
```

### Binding Strip (Left Accent)
```html
<div class="w-full md:w-20 bg-rand-blue flex md:flex-col justify-between items-center py-4 md:py-8 shrink-0 border-r border-void">
  <div class="text-white font-mono text-xs rotate-0 md:-rotate-90 whitespace-nowrap tracking-[0.3em]">
    SECTION LABEL
  </div>
</div>
```

### Article Prose
Use Tailwind Typography plugin:
```html
<article class="prose prose-lg max-w-none">
  <!-- Markdown content -->
</article>
```

---

## Do's and Don'ts

### DO
- Use `font-mono` for metadata, labels, and technical information
- Use `font-sans font-black` for impactful headlines
- Use `border-void` for structural divisions
- Use `text-rand-blue` for interactive elements
- Use `text-alert-red` for numbering and callouts
- Keep backgrounds warm (`paper`, `surface`, `#e8e6df`)
- Add subtle shadows: `shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)]`

### DON'T
- Use pure white (`#ffffff`) for page backgrounds — always use warm tones
- Use `terminal-green` outside of explicit terminal/CRT contexts
- Mix `font-mono` and `font-sans` within the same text block
- Use `alert-red` for actual error states — it's decorative here
- Apply `bell-labs-photo` to non-portrait images
- Overuse CRT effects — they're accents, not defaults

---

## W3C Design Tokens (JSON)

For tool interoperability, here are the tokens in W3C DTCG format:

```json
{
  "$description": "AI Engineering Summit design tokens",
  "color": {
    "$type": "color",
    "paper": {
      "$value": "#f3f2ea",
      "$description": "Primary background - warm off-white"
    },
    "void": {
      "$value": "#1a1a1a",
      "$description": "Primary text and structural borders"
    },
    "rand-blue": {
      "$value": "#0055aa",
      "$description": "Brand accent - links, CTAs, highlights"
    },
    "alert-red": {
      "$value": "#d93025",
      "$description": "Decorative emphasis - numbers, callouts"
    },
    "surface": {
      "$value": "#e6e4dc",
      "$description": "Secondary background surfaces"
    },
    "terminal-green": {
      "$value": "#00ff41",
      "$description": "CRT/terminal effect accent - use sparingly"
    },
    "page-bg": {
      "$value": "#e8e6df",
      "$description": "Overall page background"
    },
    "inactive-tab": {
      "$value": "#d6d4ce",
      "$description": "Inactive navigation tabs"
    }
  },
  "fontFamily": {
    "$type": "fontFamily",
    "sans": {
      "$value": ["Inter", "Helvetica", "Arial", "sans-serif"],
      "$description": "Primary UI and heading font"
    },
    "mono": {
      "$value": ["Courier Prime", "monospace"],
      "$description": "Metadata, labels, and code"
    }
  },
  "fontWeight": {
    "$type": "fontWeight",
    "black": { "$value": 900 },
    "bold": { "$value": 700 },
    "semibold": { "$value": 600 },
    "medium": { "$value": 500 },
    "normal": { "$value": 400 }
  },
  "fontSize": {
    "$type": "dimension",
    "micro": { "$value": { "value": 10, "unit": "px" }, "$description": "Smallest labels" },
    "xs": { "$value": { "value": 12, "unit": "px" }, "$description": "Metadata, small labels" },
    "sm": { "$value": { "value": 14, "unit": "px" }, "$description": "Secondary text" },
    "base": { "$value": { "value": 16, "unit": "px" }, "$description": "Body text" },
    "lg": { "$value": { "value": 18, "unit": "px" }, "$description": "Lead paragraphs" },
    "xl": { "$value": { "value": 20, "unit": "px" }, "$description": "H3" },
    "2xl": { "$value": { "value": 24, "unit": "px" } },
    "3xl": { "$value": { "value": 30, "unit": "px" }, "$description": "H2" },
    "4xl": { "$value": { "value": 36, "unit": "px" }, "$description": "H1" },
    "5xl": { "$value": { "value": 48, "unit": "px" } },
    "6xl": { "$value": { "value": 60, "unit": "px" }, "$description": "Hero mobile" },
    "8xl": { "$value": { "value": 96, "unit": "px" }, "$description": "Hero desktop" }
  },
  "spacing": {
    "$type": "dimension",
    "1": { "$value": { "value": 4, "unit": "px" } },
    "2": { "$value": { "value": 8, "unit": "px" } },
    "3": { "$value": { "value": 12, "unit": "px" } },
    "4": { "$value": { "value": 16, "unit": "px" } },
    "6": { "$value": { "value": 24, "unit": "px" } },
    "8": { "$value": { "value": 32, "unit": "px" } },
    "12": { "$value": { "value": 48, "unit": "px" } },
    "16": { "$value": { "value": 64, "unit": "px" } },
    "20": { "$value": { "value": 80, "unit": "px" } }
  },
  "shadow": {
    "$type": "shadow",
    "card": {
      "$value": {
        "offsetX": { "value": 10, "unit": "px" },
        "offsetY": { "value": 10, "unit": "px" },
        "blur": { "value": 0, "unit": "px" },
        "spread": { "value": 0, "unit": "px" },
        "color": "rgba(0,0,0,0.1)"
      },
      "$description": "Offset shadow for cards and containers"
    }
  }
}
```

---

## Quick Reference for AI Prompts

When generating code or content for this project:

### Technical Stack
- **Framework**: Astro + React + Tailwind CSS v4
- **Colors**: paper (bg), void (text/borders), rand-blue (accents), alert-red (decorative numbers)
- **Fonts**: Inter for UI, Courier Prime for metadata
- **Key patterns**: `font-mono text-xs` for labels, `font-sans font-black` for headlines, `border-void` for structure, warm backgrounds (never pure white)

### Brand Context
- **Parent**: Focus.AI Labs (sub-brand of The Focus.AI)
- **Aesthetic**: "Future Systems Report" — Bell Labs / RAND Corporation retro-tech
- **Voice**: Curious, Wry, Generous
- **Audience**: Peer AI practitioners (primary), potential clients (secondary)

### Content Guidelines
- Write *with* the reader, not *at* them — they're peers
- Lead with observations and questions, not conclusions
- Show rabbit holes, not just takeaways
- Credit speakers and sources fully
- **Never**: corporate speak, breathless hype, "well actually", condescending explanations

### Success Metric
Reader thinks: "That was really cool, and now I have so many more ideas to explore."
