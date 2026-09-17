# now

**Deepen/verify run for assignment-2, 87h to cutoff.** Deliverable is
`comp4020-ass2-shitao`: SLOP1450 "Instruments for Mark-Making." Not the final
run --- finishing steps (`PROCESS.md`, this repo's `CLAUDE.md`, push) stay
gated to inside 24h to cutoff. Deadline is noon 2026-09-21.

## What this run did

Took stock: no upstream drift since the last run beyond the harness's own
tick-snapshot commits; working tree clean; `pnpm check` green
(typecheck/build/a11y/links/tests all pass, 31 pages). Re-fetched the
assignment-2 brief; unchanged.

One check this run, delegated to a subagent: a **literal marker-simulation
walkthrough**, distinct from the six prior cold-read framings (which were all
generic full-content reads). This one reproduced the brief's own described
marking process verbatim --- home page at both viewports, three non-adjacent
sessions (01/05/09) at desktop plus session 12 at phone viewport, one full
assessment (Exhibition Piece), the week-01 deck, and the policies page, judged
against the brief's actual scoring language ("one idea explored throughout a
semester," no repetition/filler, no reskinned-starter tells, no AI-slop
prose). Verdict: clean. Specific throughlines held up (week 1's stroke/no-plan
opening closes with week 12's "method of no method," echoing Shitao's own
treatise quoted in both the deck and session 01); the previously-fixed
real-ANU-link stayed fixed; no new leaked references; prose in the policies
page and deck stayed in the course's own voice. One non-issue noted: a scroll-
boundary glyph-clipping artifact on session 12's phone screenshot, confirmed
not a rendering bug (reproduces consistently on scroll, not a one-off).

Seven cold-read/verification passes now, six framings plus this one: fact
cross-reference (×2, found `595efe3` and `40fb8f8`), template-leftover-prose
hunting (found `49e3521`), prospective-student reading (found `b7c5f48`),
reskinned-starter hunting (found nothing), and now literal marker-simulation
(found nothing). Three of the last four framings have come back clean.

## Still open

`PROCESS.md` and this repo's `CLAUDE.md` are still template placeholders,
deliberately deferred to a run closer to cutoff (confirmed still placeholder
this run). Anecdotes banked for it: the deck/session cross-reference bug
(`595efe3`), the leftover-template-prose find (`49e3521`), week-03's closed
callback (`c7d67c2`), the real-course-URL leak (`40fb8f8`), and the
assessment-blurb mismatch (`b7c5f48`) --- five real fixes across five
different cold-read framings, now with two further framings (reskinned-
starter hunting, literal marker-simulation) confirmed clean.

The one still-open soft item from prior runs: SLOP1450 is `level: 1`
(introductory) but the homepage states a prior-programming-competency
requirement. Still judged as a plausible intentional choice for a niche
department, not a contradiction --- left alone again this run.

## Next action

Runway remains (87h, still outside the 24h finishing-steps gate). Given seven
passes now and three of the last four clean, the content-review well is
likely running dry --- **recommend the next run start drafting
`PROCESS.md` and this repo's `CLAUDE.md` early** rather than reaching for an
eighth fresh framing. There's no rule against drafting before the 24h gate,
only against treating it as done/pushing before then, so a draft pass now
gives more room to revise before the real deadline. `PROCESS.md` needs
400--600 words, first-person, citing `595efe3`, `49e3521`, `c7d67c2`,
`40fb8f8`, and `b7c5f48` (and this run's clean marker-simulation pass as
verification evidence, if useful), explaining which "good course" judgments
became a `CLAUDE.md` rule or a `spec/` check versus were deliberately
omitted --- per the brief, that reasoning (not just commit-claim
corroboration) is what separates an HD-band `PROCESS.md` from the floor of
the band. If a further content pass still feels worthwhile, an
accessibility-of-prose read or a full internal-cross-reference-sense-check
are the two framings not yet tried.
