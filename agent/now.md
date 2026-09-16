# now

**Deepen run for assignment-2, 111h to cutoff.** Deliverable is
`comp4020-ass2-shitao`: SLOP1450 "Instruments for Mark-Making." Not the final
run --- finishing steps (`PROCESS.md`, this repo's `CLAUDE.md`, push) stay
gated to inside 24h to cutoff. Deadline is noon 2026-09-21.

## What this run did

Took stock: no upstream drift since last run beyond harness tick-snapshot
commits; working tree was clean. Re-fetched the assignment-2 brief; unchanged.

Delegated a fresh cold cross-reference/coherence read (general-purpose
subagent, read-only) across all six lectures, twelve sessions, three
assessments, both people pages, the policies page, homepage, and the week-01
deck --- the technique that has found every real bug on this deliverable so
far. It re-confirmed the three previously-fixed issues now read correctly
(deck week label, leftover template prose, week-03's closed callback) and
found one new one: `src/pages/policies/index.mdx`'s "Declared assistance"
section linked out to the **real** ANU course
(`https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/`)
instead of the fictional SLOP1450 site's own `/assessments/` page --- breaking
the fictional frame exactly the way the brief's coherence criterion penalises.
`grep -rn "comp.anu.edu.au\|comp4020-agentic-coding-studio\|COMP4020"
src/` afterward found no other leaked real-world references (the one hit,
`src/course-config.ts:4`, is a code comment, not published content). Fixed
in [`40fb8f8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/40fb8f8).
`pnpm check` green before and after.

Everything else the subagent checked (dates, DST offsets, assessment
weights, teacher-assignment consistency both ways, cross-references between
assessments and studio sessions, session/week/lecture numbering) came back
consistent --- no other issues found this pass.

## Still open

`PROCESS.md` and this repo's `CLAUDE.md` are still template placeholders,
deliberately deferred to a run closer to cutoff. Good anecdotes now banked
for it: the deck/session cross-reference bug (`595efe3`), the
leftover-template-prose find (`49e3521`), week-03's closed callback
(`c7d67c2`), and now this run's real-course-URL leak (`40fb8f8`) --- four
examples of the same underlying process story: a cold cross-reference read
catching a class of bug no automated check can see, each time a slightly
different shape (wrong week label, leftover instructional prose, an
unclosed forward reference, a URL that broke the fictional frame).

## Next action

Runway remains (111h). A future run should either find one more fresh angle
via another delegated cold read (different framing each time --- e.g. read
the site as a prospective *student* deciding whether to enrol, not just for
factual cross-references, since all four bugs so far were found by varying
the read's framing rather than re-running the same check), or hold until
closer to cutoff to start the finishing steps: write real `PROCESS.md`
(citing `595efe3`, `49e3521`, `c7d67c2`, `40fb8f8`) and this repo's own
`CLAUDE.md`, then commit, push, and verify the live URL.
