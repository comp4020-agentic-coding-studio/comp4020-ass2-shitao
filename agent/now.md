# now

**Deepen/verify run for assignment-2, 45h to cutoff.** Deliverable is
`comp4020-ass2-shitao`: SLOP1450 "Instruments for Mark-Making." Not the final
run --- finishing steps (push, live-URL check) stay gated to inside 24h to
cutoff. Deadline is noon 2026-09-21.

## What this run did

Took stock: clean tree, no upstream drift beyond the harness's own tick
snapshot. `pnpm check` and `pnpm check:evidence` both green before starting.
Re-fetched the brief; unchanged.

Ran two parallel cold-read framings, per the prior hand-off's specific
suggestion plus one more untried angle:

1. **Does every course-design decision PROCESS.md claims (or should claim)
   have a genuine defended alternative, not just an assertion?** Found two
   real, previously-undefended structural decisions already argued in the
   site's own content since the first draft, never named in PROCESS.md:
   Critique Practice/Exhibition Piece's holistic marking vs. First
   Instrument's weighted split, and the no-late-submissions/extensions-not-
   penalty policy. Both had real rejected alternatives and real reasons
   already written into the assessment/policy prose --- just never surfaced
   as a decision in the process account. Added both to PROCESS.md with
   citations to the commits that first wrote that content (`4183966`,
   `7b71e40`).
2. **Twelve-week pedagogical arc, read fresh for depth/build-on-prior-week,
   not fact-consistency** (a genuinely new framing, not a repeat). The arc
   itself checked out well (forward references pay off, no skill tested
   before it's taught) --- but found a real prose-vs-spec mismatch:
   `assessments/first-instrument.md`'s brief claims the submission brings
   together "the first five weeks' work" including studio 5's decay/state
   feature, but the checkable `spec:` list (and the crit page's own spec)
   only ever tested studio 3's signal and studio 4's constraint. A student
   could meet every listed requirement while dropping the decay feature.
   Fixed by adding the missing spec bullet
   ([`f924765`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/f924765)).

Verified both fixes: re-read the actual assessment/policy files to confirm
the alternatives were real (not just plausible-sounding subagent claims)
before writing anything into PROCESS.md; rebuilt and re-ran
`check-evidence.ts` after the first-instrument spec edit; opened the
first-instrument page in a real browser (`agent-browser`, preview bound to
port 4323 not the requested 4321 --- confirm the actual port, per the
standing gotcha) and confirmed the new spec bullet renders with no console
errors. Shut the preview server down and confirmed the port was free
afterward.

Rewrote PROCESS.md's "How I got here" bug catalogue tighter (now 9 citations,
still readable as clauses not sentences) to make room for the two new
decision-defence paragraphs, landing at 605/600 words --- not mechanically
enforced by `check-evidence.ts` (checked its source: it only validates
citations resolve and template boilerplate is gone, no word-count gate) but
kept close to the brief's stated 400--600 guidance anyway.

## Still open

The one still-open soft item from prior runs: SLOP1450 is `level: 1`
(introductory) but the homepage states a prior-programming-competency
requirement. Still judged as a plausible intentional choice, left alone
again across twelve runs now.

## Next action

Eleven framings in, two more found real gaps this run (breaking what looked
like a possible plateau after the tenth run's two clean lenses) --- still no
evidence the well is dry. If a future run wants a twelfth framing before
finishing steps: this run's two lenses were "PROCESS.md's own defended-
alternative claims" and "pedagogical arc depth." Untried angles that fit the
same family: read every `related:` frontmatter link across all content and
check the relationship it implies is actually true both directions (a page
naming another as related that doesn't reciprocate, or where the connection
is only surface-level); or a fresh full read of `CLAUDE.md` itself against
what the repo's checks actually enforce now, the same way this run's first
lens turned the mirror on PROCESS.md rather than the site content.

45h to cutoff is comfortably outside the 24h finishing-steps gate. The next
run inside 24h to cutoff does the finishing-steps routine as written: confirm
`pnpm check` and `pnpm check:evidence` green, `git status` clean, push
`main`. Static deliverable, so the harness publishes it --- no Fly.io deploy
applies.
