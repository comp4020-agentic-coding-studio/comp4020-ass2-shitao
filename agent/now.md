# now

**Deepen run for assignment-2, 100h to cutoff.** Deliverable is
`comp4020-ass2-shitao`: SLOP1450 "Instruments for Mark-Making." Not the final
run --- finishing steps (`PROCESS.md`, this repo's `CLAUDE.md`, push) stay
gated to inside 24h to cutoff. Deadline is noon 2026-09-21.

## What this run did

Took stock: no upstream drift since last run beyond the harness's own
tick-snapshot commits; working tree was clean; `pnpm check` green. Re-fetched
the assignment-2 brief; unchanged.

Followed the prior hand-off's suggestion: delegated a cold read with a new
framing rather than repeating the fact-cross-reference angle again. This time
a general-purpose subagent read the whole site as an actual prospective
student deciding whether to enrol (does the 12-week arc genuinely build, does
tone stay consistent, would a student understand what's asked of them, any
generic AI-slop sentences, any internal-logic contradiction a careful human
reader --- not a grep --- would catch). It confirmed all four previously-fixed
bugs now read correctly and the 12-week arc, timezone handling, and
assessment-weight arithmetic all hold up. It found one real issue and one
soft/low-confidence one:

1. **Real, fixed**: `src/pages/assessments/index.mdx`'s landing blurb described
   Critique Practice as "a critique of someone else's [work]" --- but the
   actual assessment (`src/content/assessments/critique-practice.md`) is
   centred on a before/after portfolio proving feedback changed *your own*
   build across the semester, with critiquing others as a minor secondary
   spec line (2 instances vs. 3 required before/after pairs on your own
   work). A student's first exposure to what's marked, on the page whose job
   is exactly that, oversold the minor component and undersold the actual
   ask. Fixed in
   [`b7c5f48`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/b7c5f48).
2. **Soft, left alone**: SLOP1450 is coded `level: 1` (introductory,
   1000-level by the ANU convention this repo's own `course-config.ts`
   documents), but the homepage states a prior-programming-competency
   requirement ("this course does not teach programming from nothing").
   Judged this as a plausible intentional choice for a fictional niche
   department rather than a contradiction --- nothing else on the site claims
   "beginner-friendly," and real low-numbered courses can carry prerequisites
   too. Didn't touch it; flagging here in case a future pass wants to
   reconsider.

`pnpm check` green before and after the fix.

## Still open

`PROCESS.md` and this repo's `CLAUDE.md` are still template placeholders,
deliberately deferred to a run closer to cutoff. Anecdotes now banked for it:
the deck/session cross-reference bug (`595efe3`), the leftover-template-prose
find (`49e3521`), week-03's closed callback (`c7d67c2`), the real-course-URL
leak (`40fb8f8`), and now this run's assessment-blurb mismatch (`b7c5f48`) ---
five examples of the same underlying process story, each caught by varying
the cold-read's framing (fact cross-reference, template-leftover hunting,
prospective-student read) rather than re-running the same check. See the
"deck slide's own heading can drift" entry in MEMORY.md for the generalised
pattern and all five confirmations.

## Next action

Runway remains (100h, still outside the 24h finishing-steps gate). A future
run should either try one more fresh framing for a cold read (e.g. read it as
a marker specifically hunting for "reskinned starter" tells, or as someone
checking the site works for a screen-reader/keyboard-only user) or start
holding for the finishing steps once runway drops under ~30h: write real
`PROCESS.md` (citing `595efe3`, `49e3521`, `c7d67c2`, `40fb8f8`, `b7c5f48`)
and this repo's own `CLAUDE.md`, then commit, push, and verify the live URL.
