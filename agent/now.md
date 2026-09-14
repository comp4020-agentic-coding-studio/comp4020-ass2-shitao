# now

**Plan/build run for assignment-2, 165h to cutoff.** Deliverable is
`comp4020-ass2-shitao`: a solo course website for an invented course
("Slop University"), fixed platform (astro-theme-university/slop, four
content collections, generated API), everything else customisable. Not the
final run — did not push, per the standing gate ("finishing steps... are
gated to inside 24h to cutoff").

## What's built

Invented course: **SLOP1450, "Instruments for Mark-Making"** — a studio
course in building small interactive instruments for gesture and ink,
grounded in Shitao's own 画语录 (一画, the single stroke, closing on 无法而法，
乃为至法). Kept the assigned code digits (450).

- 12 weeks of session/studio content (`src/content/sessions/`), full
  Before/In/Afterwards structure, `spec` criteria, `related` links
- 6 lectures (`src/content/lectures/`, weeks 1/3/5/7/9/11), one with a real
  built slide deck (`src/decks/week-01.deck.mdx`, astromotion) — quote slide,
  impact slide, the treatise excerpt
- 3 assessments summing to 100% (First Instrument 35, Critique Practice 15,
  Exhibition Piece 50), one weighted-marking, two holistic
- People (Marisol Quaye, Idris Fenn), policies page, homepage — all rewritten
  with course-specific prose
- Image-free by design: all four starter images deleted (card.png,
  hero-home.avif, both people photos) — framed as a deliberate curricular
  choice ("instrument, not artwork"), not a shortcut. Confirmed
  `heroImage`/`socialImage` are optional theme props before doing this.
- `spec/course-brief.test.ts` (new): the content schema only checks that one
  assessment's own marking criteria sum to 100 — nothing checked the
  collection-wide weight total, or that a lecture's linked deck actually
  built. Added both, plus the course-code-digits check, reading
  `dist/api/index.json` like the shipped `data-integrity.test.ts` does.

`pnpm check` clean (typecheck 0/0, build 31 pages, 4 vitest tests, no a11y/
broken-link violations). `pnpm check:evidence` fails only on PROCESS.md
(still template boilerplate + placeholder commit citations) — expected and
fine for a non-final run.

## A genuine finding: markdown vs. `.astro`-inline prose em-dash handling

Content passed through the markdown/MDX pipeline converts a literal `---` to
a real em-dash glyph automatically (confirmed: session/lecture/assessment
*and* their frontmatter `description:`/`spec:` string values all convert).
Raw prose hardcoded inside a `.astro` file's JSX-like template body does
**not** go through that pipeline and renders `---` completely literally — no
error, just wrong-looking text, caught only by reading rendered `innerText`
in a real browser, not by any check. Fixed the two occurrences in
`src/pages/index.astro` by typing a literal "—" character directly. Worth
remembering for any future `.astro` file with hardcoded prose: type real
em-dashes there, the house "use three dashes" convention only applies inside
markdown/MDX content.

## Verification done this run

Real-browser pass (`agent-browser --session ass2-shitao`) at both 1920×1080
and 390×844: homepage, sessions/lectures/assessments/people/policies
indexes, the final-crit session page, a lecture-with-deck page, and the
deck itself. No console errors, no overflow, no broken layout. Confirmed
port 4322 (not the requested 4321) via the preview server's own log line
before trusting it — shut the server down afterward and verified via
`lsof`/`curl` that the port was actually free.

## Next action

Not this repo's final run. Next run should: keep deepening/polishing if
time allows (nothing broken, nothing urgent), but the real remaining work
is **PROCESS.md** (currently template placeholder — needs a real account
citing the actual commit SHAs above, commit-then-cite) and this repo's own
`CLAUDE.md` (currently empty-on-purpose starter). Both are finishing-step
items, so leave them until the run inside 24h to cutoff unless there's
spare time earlier to draft them against real commits already on `main`.
