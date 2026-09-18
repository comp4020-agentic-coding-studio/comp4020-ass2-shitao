# now

**Deepen/verify run for assignment-2, 52h to cutoff.** Deliverable is
`comp4020-ass2-shitao`: SLOP1450 "Instruments for Mark-Making." Not the final
run --- finishing steps (push, live-URL check) stay gated to inside 24h to
cutoff. Deadline is noon 2026-09-21.

## What this run did

Took stock: clean tree, no upstream drift beyond the harness's tick-snapshot
commit. `pnpm check` and `pnpm check:evidence` both green before starting.
Re-fetched the assignment-2 brief; unchanged.

Ran a real-browser pass (desktop 1920×1080, phone 390×844, and the
in-between 1280×720) across homepage, a mid-week lecture, an assessment, the
deck, and policies --- all clean, no console errors. In parallel, delegated a
tenth cold-read framing (two lenses, since the prior hand-off's exhausted
list left nothing single obviously untried): "is this actually a reskin" and
"does PROCESS.md itself meet the brief's own 45%-weighted process bar" (does
it explain why a call beat the obvious alternative and how it was verified,
for course-design decisions, not just workflow/bugfix ones).

Both lenses found real gaps, a first for this repo:

1. `policies/index.mdx`'s "Declared assistance" section was a generic
   agentic-coding disclosure rule, unchanged since the starter, in a course
   whose own content (`grep`'d across all sessions/lectures) never mentions
   agents/AI/autocomplete anywhere else --- the one paragraph that imported
   COMP4020's own preoccupation wholesale instead of arguing from SLOP1450's
   stated thesis (hand-testing an instrument, not a picture of one). Fixed by
   rewriting it to argue from that thesis
   ([`db9f14a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/db9f14a)).
2. PROCESS.md's "image-free by design" claim was a circular citation:
   PROCESS.md said "argued in `src/site-config.ts`," and the comment there
   said "see PROCESS.md for the reasoning" --- neither actually carried the
   argument, for the site's most visible course-design decision. Fixed by
   writing the real defence into both places: the rejected alternative
   (keeping the starter's hero banner/portraits would undercut the course's
   own thesis) and how it was verified (`check-evidence.ts`'s starter-asset
   hash check treats real deletion as legitimate, confirmed all four gone)
   ([`9e0c67e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/9e0c67e),
   [`bdb7b1d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/bdb7b1d)).

PROCESS.md's bug catalogue was compressed (each of the eight prior fixes now
gets a clause, not a sentence) to make room for the new defence paragraph and
the tenth-framing citation, landing at 559/600 words. `pnpm check` and
`pnpm check:evidence` re-ran green after; evidence check now resolves 8 cited
commits. Re-verified the policies page renders correctly in a real browser
after the content edit (em-dashes render as real glyphs, no console errors).

## Still open

The one still-open soft item from prior runs: SLOP1450 is `level: 1`
(introductory) but the homepage states a prior-programming-competency
requirement. Still judged as a plausible intentional choice, left alone
again across eleven runs now.

## Next action

Tenth framing done, both lenses found something --- this breaks the streak
of "content/reskin-focused reads eventually go clean" that the ninth run's
hand-off implied; reading PROCESS.md itself against the marking rubric, not
just the site content, is a distinct and apparently still-fruitful angle.
52h to cutoff is comfortably outside the 24h finishing-steps gate. If a
future run wants an eleventh framing before finishing steps: try re-reading
PROCESS.md's *other* claims the same way this run checked "image-free" ---
does every course-design decision it mentions (or should mention) actually
have a defended alternative, not just the one this run happened to catch.
Otherwise: the next run inside 24h to cutoff does the finishing-steps
routine as written --- confirm `pnpm check` green, `git status` clean, push
`main`; static deliverable, so the harness publishes it and no Fly.io
deploy applies.
