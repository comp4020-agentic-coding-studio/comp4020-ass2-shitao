# now

**Deepen run for assignment-2, 135h to cutoff.** Deliverable is
`comp4020-ass2-shitao`: SLOP1450 "Instruments for Mark-Making." Not the final
run --- per the standing gate, finishing steps (`PROCESS.md`, this repo's
`CLAUDE.md`, push) stay gated to inside 24h to cutoff.

## What this run did

Took stock: previous run (141h) fixed a markdown-in-plain-text-field bug on
exhibition-piece.md's spec line (`2db016d`) and left three untried angles for
future runs. No upstream drift since --- `git log` between then and now is
just harness tick-snapshot commits.

Picked the first untried angle: a fresh qualitative re-read of the lecture
pages and slide deck specifically (prior runs had checked deck/lecture
*interaction*, not content depth or cross-lecture coherence). First did a
cheap structural check myself --- grepped every content file's frontmatter
block for stray `*`/`_`/backtick markdown syntax (the class of bug found last
run); none found, so that specific gotcha doesn't recur elsewhere.

Then delegated a cold read of all six lectures, the week-01 slide deck, and
supporting session/index pages to a subagent, asked to check: do the six
lectures actually do distinct work or feel interchangeable; does the deck
have real depth or read as filler; any AI-slop prose; any cross-page factual
inconsistencies. Its verdict: the arc is genuinely coherent (each lecture
does load-bearing, non-swappable work; the teacher-assignment pattern and the
week-1-to-week-12 callback are real structural payoffs, not filler), the deck
has real depth (a primary-source citation, concrete forward references that
are actually fulfilled elsewhere in the site), and no AI-slop prose.

**It did find one real bug**: `src/decks/week-01.deck.mdx`'s closing slide
was headed "Read before week 3" but its body ("bring the build from week 1,
running, and the one decision about it you're least sure of") is
session 02's own "Before the studio" text verbatim --- week 3's actual prep
(`03-gesture-as-data.md`) is different content entirely ("bring last week's
build, you'll be cutting it open, not starting again"). The slide's content
was right for the *next* studio after week 1 (week 2); only the heading's
week number was wrong. `pnpm check` was green throughout, since nothing
validates cross-references between deck slides and session prep text ---
same shape as prior runs' "checks green, browser/close-reading catches it
anyway" findings, but via prose cross-referencing rather than rendering.
Fixed by changing the heading to "Read before week 2"; verified `pnpm check`
still green after. Committed as `595efe3`, not pushed (>24h-to-cutoff gate).

## Still open (unchanged from before)

`PROCESS.md` and this repo's `CLAUDE.md` are still template placeholders ---
deliberately left for a run closer to cutoff. `PROCESS.md` has a full set of
real commits to cite spanning the whole build through this run's fix,
including a good course-design-decision anecdote (the deck/session
cross-reference bug is a concrete example of "how did you know the result
was right before you accepted it" for `PROCESS.md`'s spine).

## Next action

Keep deepening while runway remains. Untried angles still on the table from
before (people/policies pages under the markdown-rendering question ---
now spot-checked via the frontmatter grep above and clean, so lower
priority) and newly worth trying: check the *other five* lecture pages'
"read before"/prep-style cross-references against their corresponding
session files the same way this run did for week-01's deck, since the bug
just found suggests this class of cross-file drift wasn't checked
systematically before. A dedicated browser/viewport pass hasn't happened
since 141h (last run) --- fine to skip once more, but don't let it lapse
past a couple more runs per the standing rule. Move to finishing steps only
once meaningfully closer to the 2026-09-21 noon deadline.
