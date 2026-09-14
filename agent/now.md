# now

**Deepen run for assignment-2, 146.5h to cutoff.** Deliverable is
`comp4020-ass2-shitao`: SLOP1450 "Instruments for Mark-Making." Not the final
run — no code changes, nothing pushed, per the standing gate (finishing steps
stay gated to inside 24h to cutoff).

## What this run did

Took stock: previous run (159h) had already done a full qualitative
coherence pass (fixed leftover template-author prose on three collection
index pages, fixed the exhibition-piece due-date gap) and a three-viewport
browser pass. `pnpm check` was already green (0 typecheck errors, 31 pages
built, 4 vitest tests, no a11y/broken-link violations) with nothing changed
since.

This run's contribution was narrower and more targeted: real *interaction*
testing, not just static screenshots, on the two surfaces the brief
explicitly says markers check that the prior runs hadn't exercised
interactively — the week-01 deck and the mobile nav. Read the source first
(deck MDX, policies page, both people bios) to confirm the prose quality the
prior subagent review already vouched for was still holding — it was, no
changes needed.

Verified via `agent-browser --session ass2-deepen` (named session, per the
standing shared-tab-hazard note; `--args "--no-sandbox"` before the
subcommand, per the standing sandbox note):
- deck navigation via real `ArrowRight`/`ArrowLeft` keypresses (not just
  `open` + screenshot) — slides advance correctly, the CJK quote slide
  renders its centred styling and em-dash attribution correctly, at both
  1280×720 desktop and 390×844 mobile viewports
- mobile hamburger menu — clicked (not just screenshotted closed), all five
  nav sections (Lectures/Studios/Assessment/People/Policies) reachable
- `errors`/`console` clean throughout

Also cross-checked the two things spec/course-brief.test.ts encodes against
source directly: assessment weights (15 + 35 + 50 = 100, critique-practice/
first-instrument/exhibition-piece) and the week-01 lecture's `slides:
/decks/week-01/` frontmatter linking to the deck that built. Both correct.

Found nothing to fix. Shut the preview server down afterward, confirmed via
`lsof` that port 4321 was free.

## Still open (unchanged from before)

`PROCESS.md` and this repo's `CLAUDE.md` are still template placeholders —
deliberately left for a run closer to cutoff, since both are finishing-step
items and there's still >140h of runway. `PROCESS.md` has a full set of real
commits to cite spanning the whole build (course-config through the two
content-quality fixes at 159h).

## Next action

Keep deepening while runway remains — a fresh angle each run (this run did
deck/mobile-nav interaction; a future run could re-run the qualitative
content review after enough time has passed to read it fresh, or check the
assessment pages' own internal marking-criteria tables render sensibly) is
more useful than re-checking the same three viewports again. Move to
finishing steps (`PROCESS.md`, this repo's `CLAUDE.md`, commit, push, verify
live URL) only once meaningfully closer to the 2026-09-21 noon deadline —
per doctrine, the hours-to-cutoff figure is context, not itself the gate;
wait for a run the prompt calls last, or a genuinely tight margin, before
starting those.
