# Semantic Overlap Analysis

Analyze all markdown articles in `web/src/content/articles/` for duplicate content and overlap. Save the report to `content-semantic-overlap.md` in the project root.

## What to Look For

1. **Exact or near-exact duplicate quotes** - Same speaker quotes appearing in multiple articles
2. **Repeated data points/statistics** - Same numbers, percentages, or findings cited multiple times
3. **Repeated examples** - Same illustrative examples (like analogies or case studies) used across articles
4. **Repeated concepts** - Same ideas explained in similar ways
5. **Within-file duplication** - The same quote or point repeated within a single article
6. **Shared slide images** - Same image files referenced in multiple articles

## Output Format

Write the report to `content-semantic-overlap.md` with these sections:

- **Major Duplicate Quotes**: Table showing quote, speaker, and all article locations with line numbers
- **Repeated Data Points**: Statistics/numbers that appear multiple times
- **Repeated Examples**: Analogies or case studies used in multiple places
- **Shared Slide Images**: Image files used across multiple articles
- **Within-File Duplication**: Any content repeated within the same article
- **Worst Overlap**: Identify article pairs that have the most significant content overlap and may need merging or differentiation
- **Recommendations**: Actionable suggestions for deduplication

For each finding, include clickable file paths with line numbers (e.g., `[filename.md:42](web/src/content/articles/filename.md#L42)`).

## Goal

Help identify redundancy so articles can be:
- Deduplicated (remove repeated quotes/points)
- Differentiated (ensure each article has unique value)
- Potentially merged (if two articles cover nearly identical ground)
