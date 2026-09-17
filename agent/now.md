# now

**Deepen/verify run for assignment-2, 93h to cutoff.** Deliverable is
`comp4020-ass2-shitao`: SLOP1450 "Instruments for Mark-Making." Not the final
run --- finishing steps (`PROCESS.md`, this repo's `CLAUDE.md`, push) stay
gated to inside 24h to cutoff. Deadline is noon 2026-09-21.

## What this run did

Took stock: no upstream drift since the last run beyond the harness's own
tick-snapshot commits; working tree was clean; `pnpm check` green
(typecheck/build/a11y/links/tests all pass, 31 pages). Re-fetched the
assignment-2 brief; unchanged.

Two independent checks this run, both came back clean:

1. **Live-browser pass**, following the standing "content-complete isn't
   sufficient evidence" rule and its refinement (check an in-between size and
   a resize sequence, not just the two declared viewports in isolation).
   Checked the home page at 1920x1080, 390x844, and 1280x720 (screenshots),
   then ran a 5-step resize sequence (1920→390→1280→768→1920) in one
   `agent-browser` session and confirmed the final screenshot was pixel-
   identical to the first --- no divergent layout feedback loop. Also tabbed
   through the homepage 8 times keyboard-only: skip-to-main link first, then
   logo → nav links in visual order → search button, every stop with a
   visible `outline`. Spot-checked session 07 at phone viewport too. No
   console errors anywhere. This is a content site (no canvas/interactive
   widget like the crit prototypes), so the canvas-aspect-ratio feedback-loop
   bug class from other repos doesn't apply here, but worth having actually
   checked rather than assumed.
2. **Cold-read subagent, new framing**: hunted specifically for "reskinned
   starter" tells per the brief's own warning ("a site that reads as the
   starter with the nouns swapped"). Read all 12 sessions, 3 assessments, 6
   lecture blurbs, the deck, both policy sections, both bios, home page and
   site-config. Verdict: genuinely clean under this framing --- found real
   longitudinal throughlines (the pressure/velocity thread from session 3 →
   lecture week-07 → the exhibition assessment's marking language), 12
   distinct per-week mechanisms rather than a filled-in template shape, and
   custom components/policies/bios all argued from the course's own premise
   rather than generic filler. One trivial, not-actionable observation: the
   home page's three `CardGrid` nav-tile captions (`src/pages/index.astro`)
   are generic one-liners, but they sit under genuinely specific prose above
   them, so read as boilerplate UI chrome, not evidence of an unfinished
   course.

Six cold-read passes now: fact cross-reference (×2, found `595efe3` and
`40fb8f8`), template-leftover-prose hunting (found `49e3521`),
prospective-student reading (found `b7c5f48`), and now reskinned-starter
hunting (found nothing). Consistent with MEMORY's standing note: don't assume
a framing exhausts the bug class, but also don't manufacture a finding when a
fresh framing genuinely comes back clean --- this is what "satisfied brief"
actually looks like, not a signal to keep hunting harder with the same tools.

## Still open

`PROCESS.md` and this repo's `CLAUDE.md` are still template placeholders,
deliberately deferred to a run closer to cutoff (confirmed still placeholder
this run). Anecdotes now banked for it: the deck/session cross-reference bug
(`595efe3`), the leftover-template-prose find (`49e3521`), week-03's closed
callback (`c7d67c2`), the real-course-URL leak (`40fb8f8`), and the
assessment-blurb mismatch (`b7c5f48`) --- five real fixes across five
different cold-read framings, now with a sixth framing (reskinned-starter
hunting) confirmed clean as a genuine negative result, not an unexplored gap.

The one still-open soft item from the prior run: SLOP1450 is `level: 1`
(introductory) but the homepage states a prior-programming-competency
requirement. Still judged as a plausible intentional choice for a niche
department, not a contradiction --- left alone again this run.

## Next action

Runway remains (93h, still outside the 24h finishing-steps gate). A future
run should either try one more fresh cold-read framing (e.g. accessibility-
of-prose read, or "does every internal cross-reference/link between pages
actually make sense," distinct from the six framings already run) or start
holding for the finishing steps once runway drops under ~30h: write real
`PROCESS.md` (citing `595efe3`, `49e3521`, `c7d67c2`, `40fb8f8`, `b7c5f48`)
and this repo's own `CLAUDE.md`, then commit, push, and verify the live URL.
Given six framings have now been run and the last two came back clean or
near-clean, the content-review well may be running dry --- the next run
should weigh one more fresh framing against just starting the finishing-steps
draft early (there's no rule against drafting `PROCESS.md` before the 24h
gate, only against treating it as done/pushing before then).
