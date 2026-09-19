# Process overview

## What I built

SLOP1450, "Instruments for Mark-Making": a twelve-week studio course where each
week builds one small interactive instrument for making marks — software a hand
plays like a brush, not a picture it produces for you — culminating in a
self-constrained First Instrument, a before/after Critique Practice, and an
Exhibition Piece that has to run for a stranger with nobody there to explain
it.

The course is image-free by design, and that call needed its own defence, not
a comment pointing elsewhere. The starter ships a hero banner and a portrait
per person; keeping either would mean a course arguing an instrument earns its
page through what it does, illustrated by exactly the static picture that
argument rejects. Swapping in new photos was never seriously in play once the
thesis was stated that plainly. Verification wasn't leaving the starter assets
merely unhashed: `check-evidence.ts` treats a genuinely deleted starter image
as a legitimate answer; I confirmed all four are actually gone, not unused
in place.

Two more structural calls carry the same defended-alternative shape, present
since the first draft but never named until a later pass. Critique Practice and
Exhibition Piece are marked holistically — "one coherent instrument" doesn't
decompose into scored parts — while First Instrument keeps a 50/50 split,
since a constraint and a motion signal are separable and checkable
([`4183966`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/4183966)).
The no-late-submissions policy trades a familiar penalty scheme for
extensions arranged in advance, since an unattended instrument fails quietly
once "I'll finish it tonight" becomes a habit
([`7b71e40`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/7b71e40)).

## How I got here

The brief scores "one idea explored throughout a semester," not a
find-and-replaced COMP4020. That shaped the harness more than the build: the
risk with a twelve-week fictional course isn't any single page being wrong,
it's drift — a slide, a blurb or a policy quietly disagreeing with the page
it's supposed to agree with, invisible to any schema because every individual
page still passes as valid content on its own.

So the actual workflow, once content existed, was repeated cold reads of the
whole site against itself, each with a different framing, because each kept
finding what the last one missed: a deck slide reusing the wrong week's prep
text
([`595efe3`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/595efe3)),
leftover template-author instructions live as course copy on three index pages
([`49e3521`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/49e3521)),
an unpaid forward reference
([`c7d67c2`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/c7d67c2)),
an assessment blurb whose emphasis drifted from the brief it summarised
([`b7c5f48`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/b7c5f48)),
a due date landing on the studio it's meant to grade
([`f758c4a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/f758c4a)),
a declared-assistance obligation nowhere told to go
([`5b1a0d4`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/5b1a0d4)),
a policies page linking to the real COMP4020 instead of SLOP1450's own
([`40fb8f8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/40fb8f8)),
that same section reading as generic agentic-coding disclosure rather than
argued from the course's own stance on hands and instruments
([`db9f14a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/db9f14a)),
First Instrument's checkable spec never testing the decay feature its own
brief claimed to bring together
([`f924765`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/f924765)),
and, this run, a week-10 studio naming the exhibition piece by title with
neither the `related:` entry nor the inline link every other such session
carries
([`8fe9eca`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/8fe9eca)),
found by checking every cross-reference field against its target, both
directions, a framing distinct from fact-checking or tone. Twelve framings
in, a clean pass still only means that question came back clean.

Some of what those reads found became durable checks rather than one-off
fixes: `spec/course-brief.test.ts` checks what a cold read can't, on every
future commit — the course code keeps its assigned digits, and published
assessment weights sum to 100 (the content schema only checks one assessment
at a time). What stayed judgement: tone, emphasis, whether a forward reference
is honestly closed, whether a policy argues from the course's own premise or
a borrowed one — those need a reader, not a schema checking its own
paraphrase of the brief.
