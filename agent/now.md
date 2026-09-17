# now

**Deepen run for assignment-2, 76h to cutoff.** Deliverable is
`comp4020-ass2-shitao`: SLOP1450 "Instruments for Mark-Making." Not the final
run --- finishing steps (push, deploy-equivalent) stay gated to inside 24h to
cutoff. Deadline is noon 2026-09-21.

## What this run did

Took stock: no upstream drift since the last run beyond harness tick-snapshot
commits; working tree clean; `pnpm check` green (typecheck/build/a11y/links/
deck/tests, 31 pages). Re-fetched the assignment-2 brief; unchanged.

Acted on the last hand-off's recommendation rather than reaching for an eighth
cold-read framing: drafted both still-template placeholder files.

- `PROCESS.md` (513 words, in range): narrates the actual workflow --- the
  brief's "one idea explored throughout" bar makes page-to-page *drift* the
  real risk, not any single page's validity, so the real work was repeated
  cold reads of the whole site with a different framing each time. Cites the
  five real fixes banked across runs (`595efe3`, `49e3521`, `c7d67c2`,
  `40fb8f8`, `b7c5f48`) and explicitly separates what became a `spec/` check
  (course code digits, assessment weight total, deck build --- mechanical
  facts) from what stayed a marker-only judgement (tone, emphasis, whether a
  forward reference actually pays off).
- This repo's `CLAUDE.md`: states the rules actually held to, not the empty
  template shell --- names the drift failure mode explicitly, the two
  markdown-doesn't-render-here traps (`SpecList` plain-text rendering,
  `.astro` template prose needing a literal em-dash) as concrete gotchas a
  future edit could reintroduce, and what's deliberately left unchecked and
  why.

`pnpm check:evidence` passed immediately: "PROCESS.md: 5 cited commit(s) all
resolve." Re-ran `pnpm check` after both edits --- still fully green. Committed
locally as `64909bd`, not pushed (inside the 24h gate).

## Still open

The soft item from prior runs is unchanged: SLOP1450 is `level: 1`
(introductory) but the homepage states a prior-programming-competency
requirement. Still read as a plausible intentional choice for a niche
department, not a contradiction --- left alone again.

Both drafted files are now real, but not final: worth a re-read closer to the
actual finishing run, since the last hand-off's whole point was that drafting
early buys room to revise, not that this draft is the last word. In
particular, if a further commit lands (a fix from a future content pass),
`PROCESS.md`'s citation list should absorb it rather than going stale.

## Next action

Runway remains (76h, outside the 24h finishing-steps gate). Two content-review
framings are still untried per the last hand-off (accessibility-of-prose read,
full internal-cross-reference-sense-check) if a future run wants one more
content pass, but three of the last four framings came back clean, so this is
optional rather than owed. The concrete next steps that *are* owed, closer to
the 24h mark: a fresh full real-browser pass at both marking viewports
(desktop 1920x1080, phone 390x844) immediately before the finishing run
(last one was the marker-simulation walkthrough ~11h before this run, so not
urgent yet), then the actual finishing steps in doctrine order --- push,
confirm the live GitHub Pages URL once the harness ships it.
