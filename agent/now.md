# now

**Deepen/verify run for assignment-2, 39h to cutoff.** Deliverable is
`comp4020-ass2-shitao`: SLOP1450 "Instruments for Mark-Making." Not the final
run --- finishing steps (push, live-URL check) stay gated to inside 24h to
cutoff. Deadline is noon 2026-09-21.

## What this run did

Took stock: clean tree, no upstream drift beyond the harness's own tick
snapshot. `pnpm check` and `pnpm check:evidence` both green before starting.
Re-fetched the brief; unchanged.

Ran a twelfth cold-read framing, one of the two untried angles the prior
hand-off suggested: read every `related:`-style frontmatter cross-reference
across all content and check whether the relationship it implies is actually
true and, where the site's own pattern makes it mutual, reciprocated.
Delegated to a subagent (general-purpose); it read all 12 sessions, 6
lectures, 3 assessments, 2 people files plus in-body links, and confirmed the
site's established pattern (lecture/session pairs reciprocate; sessions that
name an assessment by title in prose also carry a matching `related:` entry
and inline link; assessments only cross-link to other assessments, never
back to a session) holds everywhere except one place: `sessions/
10-stroke-to-system.md` names "the exhibition piece in week 12" in prose but
had no `related:` field and no inline link, unlike sessions 02/06/12 which do
this consistently. Fixed by adding `related: [assessments/exhibition-piece]`
and turning the prose mention into a real link
([`8fe9eca`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/8fe9eca)).
Cited in PROCESS.md as the twelfth framing
([`f41bab3`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/f41bab3)),
landing at 619 words --- still not mechanically gated, kept close to the
400--600 guidance anyway.

Also did a full real-browser pass (per the standing rule that green checks
aren't sufficient) at both marking viewports (1920x1080, 390x844) on the
home page, two non-adjacent sessions (03, 08), an assessment
(first-instrument), the deck (week-01), and policies --- matching the
brief's own "ten minutes: home, a few non-adjacent weeks, an assessment, the
deck, policies" marking routine. Everything rendered clean, no console
errors. Confirmed the fix itself renders correctly and the new link resolves
to the right URL under the base path
(`/comp4020-ass2-shitao/assessments/exhibition-piece/`).

Preview server bound to port 4323 on first start (4321 was requested but
taken), then 4321 cleanly after an explicit `lsof -ti:<port> | xargs kill -9`
on both 4321 and 4323 --- `pkill -f "vite preview"` alone left stale
listeners, consistent with the standing gotcha about not trusting `pkill`'s
exit code. Shut both ports down and confirmed free before finishing.

## Still open

The one still-open soft item from prior runs: SLOP1450 is `level: 1`
(introductory) but the homepage states a prior-programming-competency
requirement. Still judged as a plausible intentional choice, left alone
again across thirteen runs now.

## Next action

Twelve framings in, twelve real bugs found, no evidence the well is dry.
This run's own suggested-but-untried second angle from the last hand-off ---
a fresh read of `CLAUDE.md` itself against what the repo's checks actually
enforce now --- was spot-checked directly this run (not delegated): compared
`CLAUDE.md`'s "spec/ holds only..." claim against `spec/course-brief.test.ts`
and `spec/README.md`, and confirmed the data-integrity check CLAUDE.md
doesn't mention is the starter-shipped one, correctly out of scope for that
sentence. No bug there. A genuinely fresh thirteenth framing for a future
run, if one runs before 24h to cutoff: read the whole site as if checking the
brief's own cited reference courses (*Calling Bullshit*, *How to Make
(Almost) Anything*, *CS 007*) actually apply as models --- does SLOP1450
carry "a single idea through a whole site" the way those are held up as
doing, or does some week feel like padding against that specific bar (a
distinct question from the pedagogical-arc-depth framing already tried).

39h to cutoff is comfortably outside the 24h finishing-steps gate. The next
run inside 24h to cutoff does the finishing-steps routine as written: confirm
`pnpm check` and `pnpm check:evidence` green, `git status` clean, push
`main`. Static deliverable, so the harness publishes it --- no Fly.io deploy
applies.
