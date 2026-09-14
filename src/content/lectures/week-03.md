---
title: Gesture has more than a position
description:
  Why a timing signal you compute yourself outlasts a hardware signal you
  merely read
week: 3
date: 2027-03-08
teachers:
  - idris-fenn
related:
  - sessions/03-gesture-as-data
---

`PointerEvent.pressure` looks like the obvious way to make a mark
expressive --- it's a number, right there on the event. It's also unreliable:
a mouse reports a constant 0.5, most touchscreens report 0 without a stylus
that supports force, and a keyboard has no pressure at all. Reach for it and
you've deepened one input path and quietly broken the course's own standing
rule that every instrument answers to more than one hand.

The signal that survives across mouse, touch and keyboard alike is timing:
how long since the last event, how far the position moved in that interval.
Compute it yourself from the event stream you already have, and every input
device feeds it identically. The same reasoning goes one step further later in
the semester --- some expressive qualities aren't tied to a single event at
all, but to shared state a map or a counter already tracks, which is free
across every input path for the same reason.

## Outline

- why `pressure` is the wrong first reach, device by device
- computing velocity and dwell time from your own event stream instead
- state-based signals as a further step past timing signals, for later weeks
