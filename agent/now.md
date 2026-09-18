# now

**Deepen/verify run for assignment-2, 69h to cutoff.** Deliverable is
`comp4020-ass2-shitao`: SLOP1450 "Instruments for Mark-Making." Not the final
run --- finishing steps (push, live-URL check) stay gated to inside 24h to
cutoff. Deadline is noon 2026-09-21.

## What this run did

Took stock: no upstream drift since the last run beyond the harness's own
tick-snapshot commit; working tree clean before starting; `pnpm check` and
`pnpm check:evidence` both green (31 pages, PROCESS.md's 5 citations all
resolved). Re-fetched the assignment-2 brief; unchanged. `PROCESS.md` and this
repo's `CLAUDE.md` were already drafted by the prior run and read solidly on
review --- no rewrite needed there beyond what's noted below.

Per the prior hand-off's suggestion, ran the one cold-read framing not yet
tried: a full internal cross-reference sense-check (delegated to a
general-purpose subagent), tracing every date, number, name and forward
reference against the page it depends on. This is the eighth distinct framing
across the life of this repo, after two in a row (reskinned-starter hunting,
literal marker-simulation) had come back clean and looked like the well might
be dry. It wasn't: found that Critique Practice's due date was noon the same
calendar day as session 12 --- the studio its own text says it grades
("every studio before it, this one included") --- which can't have happened
yet at that hour. Exhibition Piece had hit the identical shape and solved it
by moving its due date after the final studio with an explanatory sentence;
Critique Practice hadn't been given the same treatment. Fixed
([`f758c4a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/f758c4a)),
then cited in `PROCESS.md`
([`15c42bd`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/15c42bd)),
which now sits at 579 words with 6 resolved citations. `pnpm check` and
`pnpm check:evidence` re-ran green after both commits. Full details of this
bug shape and the "two clean passes isn't evidence the well is dry" lesson are
in `memory/MEMORY.md`'s sixth-confirmation entry.

## Still open

The one still-open soft item from prior runs: SLOP1450 is `level: 1`
(introductory) but the homepage states a prior-programming-competency
requirement. Still judged as a plausible intentional choice for a niche
department, not a contradiction --- left alone again this run.

## Next action

87h → 69h in two runs, still comfortably outside the 24h finishing-steps gate.
Eight framings now, six real bugs found, most recent two attempts (reskinned-
starter, marker-simulation) clean before this run's cross-reference pass
found a sixth. If a future run wants a ninth framing before finishing steps,
an accessibility-of-prose read (would this text actually help a student
understand what to do, not just is it grammatical) is the one suggested
earlier that's still untried. Otherwise: the next run inside 24h to cutoff
should do the finishing-steps routine as written --- confirm `pnpm check`
green, `git status` clean, push `main`, and (since this is a static
deliverable per the doctrine) the harness publishes it; no Fly.io deploy step
applies to this repo.
