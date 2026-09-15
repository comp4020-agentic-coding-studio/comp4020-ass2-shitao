# now

**Deepen run for assignment-2, 141h to cutoff.** Deliverable is
`comp4020-ass2-shitao`: SLOP1450 "Instruments for Mark-Making." Not the final
run — per the standing gate, finishing steps (`PROCESS.md`, this repo's
`CLAUDE.md`, push) stay gated to inside 24h to cutoff.

## What this run did

Took stock: previous run (146.5h) had done deck/mobile-nav interaction
testing and found nothing to fix; `pnpm check` was green with no upstream
changes since. This run's fresh angle (per the prior hand-off's own
suggestion): the assessment pages' own marking-criteria tables and specs,
which hadn't been specifically exercised yet.

Verified structurally first (no browser needed): all three assessments'
weighted/holistic marking modes match the `MarkingModel` component's two
branches correctly; the one weighted table (First Instrument, 50/50) sums to
100; due dates for all three assessments fall inside the fictional course's
own `2027-02-22`–`2027-05-28` semester in `course-config.ts` and land on the
right side of the weeks they're framed against (First Instrument due week 6,
Critique Practice and Exhibition Piece both week 12, exhibition due after
critique "on purpose").

Then a real browser pass (`agent-browser --session ass2-deepen2`, both
1920×1080 and 390×844) on assessments/index, first-instrument (table at both
viewports — renders cleanly, no overflow either size) and exhibition-piece,
plus a spot-check studio week (08) for prose quality/console cleanliness.

**Found and fixed a real bug**: exhibition-piece.md's last spec line used
markdown emphasis (`` what it's *for* ``) but `SpecList` (a course-owned,
not-mine-to-edit component) renders spec array entries as raw text, not
through markdown — the literal asterisks were showing on the live page.
`pnpm check` was green throughout; only the browser pass caught it, same
shape as prior screenshot-catches-what-checks-can't bugs. Fixed by rewording
to plain prose (no other spec/similar array in the repo has this problem —
grepped all of `src/content/` for stray `*`/`_` in list items, none found).
Committed as `2db016d`, not pushed (per the >24h-to-cutoff gate — the
harness's own tick-snapshot commits will carry it to origin regardless).
Recorded the underlying gotcha in `MEMORY.md` since it generalises to any
plain-text-rendering frontmatter array field on a future deliverable.

Shut the preview server down afterward (its pid didn't respond to `pkill -f
"astro preview"` this time — had to `kill <pid>` directly; confirmed via
`lsof -ti:4321` returning empty).

## Still open (unchanged from before)

`PROCESS.md` and this repo's `CLAUDE.md` are still template placeholders —
deliberately left for a run closer to cutoff, since both are finishing-step
items and there's still >140h of runway. `PROCESS.md` has a full set of real
commits to cite spanning the whole build through this run's fix.

## Next action

Keep deepening while runway remains — a fresh angle each run beats
re-checking the same ground. Untried angles still on the table: a fresh
qualitative re-read of the prose (enough time has now passed since the 159h
coherence pass to read it cold again), the lecture pages/deck content
specifically (checked interaction, not content depth, at 146.5h), or the
people/policies pages under the same "does every frontmatter field that
looks like it might carry markdown actually render through markdown"
question this run just raised. Move to finishing steps only once
meaningfully closer to the 2026-09-21 noon deadline.
