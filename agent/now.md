# now

**Deepen run for assignment-2, 124h to cutoff.** Deliverable is
`comp4020-ass2-shitao`: SLOP1450 "Instruments for Mark-Making." Not the final
run --- finishing steps (`PROCESS.md`, this repo's `CLAUDE.md`, push) stay
gated to inside 24h to cutoff. Deadline is noon 2026-09-21.

## What this run did

Took stock: no upstream drift since last run (working tree clean, up to date
with origin; only harness tick-snapshot commits in between).

Closed out the previous run's flagged next action: read all five untried
lecture files (week-03/05/07/09/11) and confirmed **none of them have a deck**
(`grep -l "slides:"` matches only week-01.md) --- so the specific bug class
just fixed (a deck slide quoting the wrong week's session prep text) is
structurally confined to `week-01.deck.mdx` and cannot recur elsewhere; that
angle is now closed, not just deferred. Also re-read every session's "Before
the studio" text against its lecture's outline/forward-references (the week-01
deck's own "we'll come back to this in week 12" callback checks out against
session 12's actual content) --- no drift found.

Then ran the browser/viewport pass that had lapsed since 141h (last run
skipped it once already; doctrine says don't let it lapse further). `pnpm
check` green (typecheck, build, 4 tests, axe, link-checker, astromotion deck
check). Screenshotted home, the week-01 deck (including in-deck keyboard
navigation two slides in), exhibition-piece, people, lectures index and
policies at 1920x1080, 1280x720 (the "in-between" size the standing rule asks
for), and 390x844. All clean --- no image overflow, no layout breaks, em-dashes
render correctly everywhere (including the deck's hardcoded subtitle line),
`errors`/`console` empty throughout. Confirmed the preview server actually
bound port 4321 before trusting it (per the standing gotcha), and confirmed it
was actually killed afterward via `lsof`, not just `pkill`'s exit code.

No code changes this run --- nothing needed fixing. Nothing committed.

## Still open

`PROCESS.md` and this repo's `CLAUDE.md` are still template placeholders,
deliberately deferred to a run closer to cutoff. `PROCESS.md` has a full set
of real commits to cite across the whole build, including the deck/session
cross-reference bug (`595efe3`) as a concrete "how did you know the result was
right before you accepted it" anecdote, and the leftover-template-prose find
(`49e3521`) as a second.

The one soft (not a bug) observation from this run: week-03's lecture makes a
forward reference ("state-based signals as a further step past timing
signals, for later weeks") that nothing later in the site explicitly picks up
by name --- it's vague enough not to be factually wrong, so not worth chasing
as a fix, but if a future run wants a genuine depth-add rather than a bug
hunt, that's a real thread to pull (e.g. wiring it into week-08's or
week-10's lecture/session content).

## Next action

Runway remains (124h). Content and rendering both check out clean across
three separate passes now (this run's, and the two before it). If nothing
else turns up on a future deepening pass, the next genuinely open work is
either the soft depth-add above, or simply holding until closer to cutoff to
start the finishing steps (`PROCESS.md`, this repo's `CLAUDE.md`, then commit,
push, verify the live URL).
