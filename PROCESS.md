# Process overview

## What I built

SLOP1450, "Instruments for Mark-Making": a twelve-week studio course where each
week builds one small interactive instrument for making marks — software a hand
plays like a brush, not a picture the software produces for you — culminating in
a self-constrained First Instrument, a Critique Practice built on a before/after
portfolio, and an Exhibition Piece that has to run for a stranger with nobody
there to explain it. The course is image-free by design: an instrument earns its
page through what it does, argued in `src/site-config.ts`.

## How I got here

The brief scores "one idea explored throughout a semester," not a
find-and-replaced COMP4020. That constraint shaped the harness more than the
build did: the risk with a twelve-week fictional course isn't any single page
being wrong, it's drift — a slide, a blurb or a policy quietly disagreeing with
the page it's supposed to agree with, which no schema or build step can see
because every individual page is still valid content.

So the actual workflow, once content existed, was repeated cold reads of the
whole site against itself, each with a different framing, because each framing
caught something the others didn't. A plain fact cross-reference found week-01's
deck slide reusing session 02's prep text under a week-03 heading
([`595efe3`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/595efe3))
and, later, the fictional policies page linking out to the real
comp.anu.edu.au COMP4020 assessment page instead of SLOP1450's own
([`40fb8f8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/40fb8f8)).
A read for leftover template-author prose — instructions written for whoever
fills the template in, not course copy — found three collection index pages
still carrying them
([`49e3521`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/49e3521)).
Reading week-03's lecture as a student rather than a fact-checker surfaced a
forward reference to "state-based signals, for later weeks" that no later week
ever paid off, closed by tying it to week 7's own device-unification argument
([`c7d67c2`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/c7d67c2)).
Reading the assessments index as a prospective student deciding whether to
enrol — rather than checking it against anything — found a Critique Practice
blurb that was individually true but wrong in emphasis, framing it as critiquing
someone else's build when the brief's own weight is on a before/after portfolio
of your own
([`b7c5f48`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/b7c5f48)).
A later pass replaying the brief's own marking walkthrough came back clean. A
cross-reference sense-check after that, tracing every date against the page
it depended on, found Critique Practice's due date landing on noon the same
day as the studio it's meant to grade, which can't have happened yet at that
hour
([`f758c4a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/f758c4a)).
A ninth pass, reading every page as a confused student asking "what do I
actually do," found the policies page obliging a declared-assistance account
that no page ever said where to put, fixed by pointing it at the README
convention first-instrument.md already used for author's-voice context
([`5b1a0d4`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-shitao/commit/5b1a0d4)).
That each framing kept finding real bugs past the point where an earlier one
came back clean is itself the evidence for varying the framing, not trusting
one clean pass.

Some of what those reads found became durable checks rather than one-off fixes.
`spec/course-brief.test.ts` asserts the two facts a cold read can't watch for
every commit after this one: the course code keeps its assigned digits, and
published assessment weights actually sum to 100 (the content schema only
checks one assessment's own criteria, not the collection). What I left to
judgement rather than a check: whether a page's tone matches a real course,
whether an emphasis is right, whether a forward reference is honestly closed —
those need a reader, and a schema that tried to encode them would be checking
its own paraphrase of the brief, not the brief itself.
