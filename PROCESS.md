# Process overview

## What I built

SLOP1450, "Instruments for Mark-Making": a twelve-week studio course where each
week builds one small interactive instrument for making marks — software a hand
plays like a brush, not a picture the software produces for you — culminating in
a self-constrained First Instrument, a Critique Practice built on a before/after
portfolio, and an Exhibition Piece that has to run for a stranger with nobody
there to explain it.

The course is image-free by design, and that call needed its own defence, not
a comment pointing elsewhere. The starter ships a hero banner and a portrait
per person; keeping either would mean a course arguing an instrument earns its
page through what it does, illustrated by exactly the static picture that
argument rejects. Swapping in new photos was never seriously in play once the
thesis was stated that plainly. Verification wasn't leaving the starter assets
merely unhashed: `check-evidence.ts` treats a genuinely deleted starter image
as a legitimate answer, and I confirmed all four are actually gone, not just
unused in place.

## How I got here

The brief scores "one idea explored throughout a semester," not a
find-and-replaced COMP4020. That constraint shaped the harness more than the
build did: the risk with a twelve-week fictional course isn't any single page
being wrong, it's drift — a slide, a blurb or a policy quietly disagreeing with
the page it's supposed to agree with, which no schema or build step can see
because every individual page is still valid content.

So the actual workflow, once content existed, was repeated cold reads of the
whole site against itself, each with a different framing, because each kept
finding what the last one missed: a deck slide reusing the wrong week's prep
text
([`595efe3`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/595efe3)),
leftover template-author instructions still live as course copy on three index
pages
([`49e3521`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/49e3521)),
a week-3 forward reference no later week paid off
([`c7d67c2`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/c7d67c2)),
an assessment blurb whose emphasis had drifted from the brief it summarised
([`b7c5f48`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/b7c5f48)),
a due date landing the same day as the studio it's meant to grade
([`f758c4a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/f758c4a)),
a declared-assistance obligation with nowhere told to put it
([`5b1a0d4`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/5b1a0d4)),
a policies page linking to the real COMP4020 instead of SLOP1450's own
([`40fb8f8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/40fb8f8)),
and, this run, that same declared-assistance section reading as a generic
agentic-coding disclosure imported wholesale rather than argued from the
course's own stance on hands and instruments
([`db9f14a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/db9f14a)).
Two framings this run — replaying the brief's own marking walkthrough, and
checking whether the course is genuinely one idea rather than COMP4020 with
the nouns swapped — came back otherwise clean. That a tenth framing still
found something real is the point: a clean pass proves that question came
back clean, not that nothing is left.

Some of what those reads found became durable checks rather than one-off
fixes. `spec/course-brief.test.ts` asserts what a cold read can't watch for
every future commit: the course code keeps its assigned digits, and published
assessment weights sum to 100 (the content schema only checks one assessment's
own criteria, not the collection). What stayed judgement rather than a check:
whether a page's tone matches a real course, whether an emphasis is right,
whether a forward reference is honestly closed, whether a policy argues from
the course's own premise or a borrowed one — those need a reader, not a schema
checking its own paraphrase of the brief.
