# Content Semantic Overlap Analysis (Final)

Analysis of duplicate content and overlap across the 12 markdown articles in `web/src/content/articles/`.

**Last updated:** After full deduplication with cross-references

---

## Status: All Major Duplicates Resolved ✓

All duplicate quotes have been assigned to canonical "owner" articles. Other articles now cross-reference instead of repeating.

---

## Quote Ownership (Final)

| Quote | Owner Article | Previously In | Status |
|-------|---------------|---------------|--------|
| "Environments are the webapps of research" | environments-universal-abstraction | data-collection, reinforcement-learning | ✓ FIXED |
| "A benchmark = environment + starting state + verifier" | environments-universal-abstraction | data-collection | ✓ FIXED |
| Tea kettle verification example | environments-universal-abstraction | data-collection | ✓ FIXED |
| 35-40% vs 0-10% + gap widening (Stanford) | roi-reality-check | sdlc-evolution | ✓ FIXED |
| "76% developers don't trust AI code" | context-memory-harness | sdlc-evolution | ✓ FIXED |
| 1000 examples/72% Mako stats | reinforcement-learning | data-collection | ✓ FIXED |
| Beyang Liu/Amp subagents detail | model-quality-over-scaffolding | context-engineering | ✓ FIXED |

---

## Cross-References Added

### data-collection-quality-bottleneck.md
- → reinforcement-learning-specialized-models (for ARFT stats)
- → environments-universal-abstraction (for verification framework)

### reinforcement-learning-specialized-models.md
- → environments-universal-abstraction (for environments framework)

### sdlc-evolution-amplified-practices.md
- → roi-reality-check (for Stanford data)
- → context-memory-harness (for trust data)

### context-engineering-human-ai-collaboration.md
- → model-quality-over-scaffolding (for Amp architecture)

---

## Remaining Shared Content (Acceptable)

### Shared Slides (Different Contexts)

| Image | Articles | Assessment |
|-------|----------|------------|
| `2025-11-21-11-44-gemini-edited.jpg` | data-collection, environments | Acceptable - Will Brown slide, related topics |
| `2025-11-21-11-42-gemini-edited.jpg` | data-collection, model-quality | Acceptable - different angles |

---

## Speaker Distribution (Final)

| Speaker | Articles | Assessment |
|---------|----------|------------|
| **Nik Pash** | data-collection, environments | ✓ Consolidated |
| **Will Brown** | data-collection, environments, reinforcement-learning | ✓ Quote in environments only |
| **Yegor Denisov-Blanch** | roi-reality-check | ✓ Consolidated (sdlc cross-refs) |
| **Itamar Friedman** | context-memory-harness | ✓ Consolidated (sdlc cross-refs) |
| **Beyang Liu** | model-quality-over-scaffolding | ✓ Detail here only (context-engineering cross-refs) |

---

## Summary

### All Issues Resolved ✓

1. ✅ **"Environments are the webapps of research"** - Now only in environments-universal-abstraction
2. ✅ **Benchmark definition** - Now only in environments-universal-abstraction
3. ✅ **Tea kettle example** - Now only in environments-universal-abstraction
4. ✅ **Stanford ROI statistics** - Now only in roi-reality-check
5. ✅ **"76% don't trust" stat** - Now only in context-memory-harness
6. ✅ **ARFT training stats** - Now only in reinforcement-learning-specialized-models
7. ✅ **Amp subagents detail** - Now only in model-quality-over-scaffolding

### Approach Used
- Each quote/stat assigned to one canonical article
- Other articles use cross-references: `(See [Article Name](article-slug) for details)`
- Articles remain self-contained but connected

### Files Modified
1. `2025-11-21/themes/data-collection-quality-bottleneck.md`
2. `2025-11-21/themes/reinforcement-learning-specialized-models.md`
3. `2025-11-20/themes/sdlc-evolution-amplified-practices.md`
4. `2025-11-21/themes/context-engineering-human-ai-collaboration.md`

Note: All `web/src/content/articles/*.md` files are symlinks to the theme files, so changes automatically propagate.
