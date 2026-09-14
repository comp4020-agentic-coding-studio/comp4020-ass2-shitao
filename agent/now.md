# now

**Deepen run for assignment-2, 159h to cutoff.** Deliverable is
`comp4020-ass2-shitao`: SLOP1450 "Instruments for Mark-Making." Not the final
run — did not push, per the standing gate.

## What this run did

Took stock of the prior run's build (12 sessions, 6 lectures, 3 assessments,
people, homepage/policies, spec checks — see prior `now.md` content folded
into `git log` if needed) and spent the run on a coherence/quality pass
against assignment-2's actual marking language ("does it hold together,"
"isn't AI slop," "twelve weeks that repeat one another"), rather than adding
new content.

Delegated a read-only content review to a subagent (full method and finding
now in `MEMORY.md`'s "Working habits" section). Verdict: the session/
lecture/assessment/people/homepage prose is genuinely coherent and
distinctive — no repetition across the twelve weeks, assessments visibly
build on the session arc, no buzzword filler. But three of the four
collection index pages
(`src/pages/{sessions,lectures,assessments}/index.{astro,mdx}`) still
carried unedited **template-author** prose (schema/authoring notes like
"Weights should sum to 100"), sitting right under the top-nav links a
marker hits first. Rewrote all three in the course's own voice
([`49e3521`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/49e3521)).

Also fixed a real inconsistency the review surfaced: `exhibition-piece.md`'s
`due:` date (2027-05-21) sits 11 days after the live-crit date it's judged
against (week 12, 2027-05-10), with nothing explaining the gap. Added one
clarifying sentence — the later date is for writing up staging notes, not
for changing what ran
([`ff03097`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/ff03097)).

Rewriting the `.astro` index page's prose re-triggered the standing
em-dash-in-`.astro` gotcha (a literal "—" is needed, not "---" — see
`MEMORY.md`) — caught it myself this time by reading rendered `innerText`
before moving on, not by a fresh discovery.

`pnpm check` clean after both commits (typecheck 0/0, build 31 pages, 4
vitest tests, no a11y/broken-link violations). Verified all three edited
pages plus the exhibition-piece page render correctly at
`http://localhost:4321/comp4020-ass2-shitao/...` via `agent-browser`
(confirmed port via the preview server's own log line, shut the server down
afterward, confirmed via `lsof`).

## Still open (unchanged from before)

`PROCESS.md` and this repo's `CLAUDE.md` are still template placeholders —
deliberately left for a run closer to cutoff, since both are finishing-step
items and there's still ~159h of runway. `PROCESS.md` now has real commits
across the whole build to cite (the ones above plus the four from the prior
run: sessions/lectures/assessments/spec-checks).

## Verification done this run (after the two content commits above)

Real-browser pass (`agent-browser --session ass2-v1`) at 1920×1080,
390×844, and — per the standing "check a viewport *between* the two
declared ones too" refinement — 1280×720 as well: homepage, sessions/
lectures/assessments/people/policies indexes, a session detail, the
week-01 lecture, the exhibition-piece assessment, and the week-01 deck.
No console errors at any size, em-dashes render correctly everywhere
(including the two just-rewritten `.astro`/`.mdx` blurbs), no layout
breakage at the in-between width. Confirmed port via the preview server's
own log line each restart; shut the server down afterward and verified via
`lsof` that the port was free. Nothing further to fix from this pass.

## Next action

Either keep deepening (nothing broken, nothing urgent — a fresh
qualitative content pass or another resize-sequence check would be the
next thing to try if there's a run to spare) or, if nearer cutoff, move to
the finishing steps: write `PROCESS.md` (400–600 words, citing real
commits, telling the course-design narrative not a changelog) and this
repo's `CLAUDE.md`, then commit/push/verify the live URL per doctrine's
finishing-step list. `check:evidence` still fails only on `PROCESS.md`
(template boilerplate) — expected until that's written.
