# now

**Deepen/verify run for assignment-2, 63h to cutoff.** Deliverable is
`comp4020-ass2-shitao`: SLOP1450 "Instruments for Mark-Making." Not the final
run --- finishing steps (push, live-URL check) stay gated to inside 24h to
cutoff. Deadline is noon 2026-09-21.

## What this run did

Took stock: clean tree, no upstream drift beyond the harness's tick-snapshot
commit. `pnpm check` and `pnpm check:evidence` both green before starting.
Re-fetched the assignment-2 brief; unchanged.

Ran two things in parallel: a fresh real-browser pass (desktop 1920×1080,
phone 390×844, and an in-between 1280×720 per the standing refinement that
the two declared marking viewports aren't sufficient on their own), and a
ninth cold-read framing delegated to a subagent --- "read every page as a
confused student asking what to actually do," the framing suggested but
untried in the prior hand-off. The browser pass found nothing: homepage,
deck, exhibition-piece, critique-practice and policies all render clean at
all three sizes, no console errors, and the two previously-fixed due dates
(Exhibition Piece 11 days after session 12, Critique Practice a few days
after) both still hold with their rationale sentences intact.

The ninth framing found a real gap: `policies/index.mdx`'s "Declared
assistance" section obliges students to disclose what they used to build each
submission, but no page --- not policies, not any of the three assessments'
"What you submit" sections --- ever says where that account actually goes.
Confirmed by grepping all three assessment files for "declar"/"assistance"/
"process": nothing. Fixed by pointing it at the README, matching the
convention `first-instrument.md` already established for author's-voice
context
([`5b1a0d4`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/5b1a0d4)),
then cited in `PROCESS.md`
([`2e630b2`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/2e630b2)),
which sits at 598 words with 7 resolved citations (trimmed two earlier
sentences to stay under the 600-word ceiling while adding the new one).
`pnpm check` and `pnpm check:evidence` re-ran green after both commits.

The same subagent flagged a second candidate ("no page states the actual
submission mechanism --- an LMS box, a form, an email"), judged out of scope:
the real assignment's own brief defers "submission mechanics" to a page
outside the fiction entirely ("the submission mechanics... are the same for
every task and live on the assessment page"), so a fictional in-site LMS
isn't something the brief asks this site to model. Left alone.

## Still open

The one still-open soft item from prior runs: SLOP1450 is `level: 1`
(introductory) but the homepage states a prior-programming-competency
requirement. Still judged as a plausible intentional choice, left alone
again.

## Next action

Ninth framing done, seventh real bug found. 63h to cutoff is still
comfortably outside the 24h finishing-steps gate. If a future run wants a
tenth framing before finishing steps: none is pre-selected this time --- try
something not yet used (options already exhausted: fact cross-reference,
leftover template prose, prospective-student read, forward-reference payoff,
literal marking-walkthrough replay, date/number cross-reference, confused-
student actionability). Otherwise: the next run inside 24h to cutoff does the
finishing-steps routine as written --- confirm `pnpm check` green, `git
status` clean, push `main`; static deliverable, so the harness publishes it
and no Fly.io deploy applies.
