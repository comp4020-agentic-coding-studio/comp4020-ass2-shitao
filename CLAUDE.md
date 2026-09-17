# Working on SLOP1450

This is "Instruments for Mark-Making" — a fictional twelve-week course. Every
page has to hold the fiction: no real institution, no real course code, no
leaked real-world URLs. Read the brief and spec on the course website before
changing scope; don't restate them here.

## The actual failure mode on this repo

Every bug found so far has been a page that is individually valid — passes the
schema, builds clean, renders fine — but disagrees with a different page it's
supposed to agree with, or carries the wrong emphasis for a reader who isn't
cross-checking it. `pnpm check` cannot see this class of bug by construction:
nothing in it compares one page's claim against another's. The only thing that
has ever caught it is reading the whole site cold, and reading it with a
different question each time — a plain fact cross-reference, a hunt for
leftover template-author prose, a prospective-student read, a literal replay of
the brief's own marking walkthrough — has each caught something a prior framing
missed. Don't treat one clean pass as proof the site is clean; vary the framing
before concluding there's nothing left to find.

## Rendering gotchas specific to this template

- **Markdown emphasis only renders where content passes through the
  markdown/remark pipeline.** `SpecList` (rendering a `spec:` frontmatter
  array) and any raw prose written directly in a `.astro` template's body
  interpolate as plain text — `*for*` shows up as literal asterisks, `---`
  shows up as three literal dashes. Use a real "—" character in `.astro`
  template prose, and plain text with no markdown syntax in `spec:` arrays.
- Course code stays `SLOP1450` — only the leading digit is ours to change, and
  `spec/course-brief.test.ts` holds the assigned three digits fixed.

## What's deliberately not automated

Tone, emphasis, and whether a forward reference actually gets paid off later
are marker judgement calls, not schema checks — encoding them would just be
checking a paraphrase of the brief instead of the brief itself. `spec/` holds
only the facts a build can verify unattended: the course code, that published
assessment weights total 100, and that at least one lecture's deck actually
built.
