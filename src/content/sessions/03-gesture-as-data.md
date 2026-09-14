---
title: Gesture as data
description:
  Reading more out of a pointer than its position — speed, dwell, and what
  those signals should change
week: 3
date: 2027-03-08
teachers:
  - idris-fenn
spec:
  - your instrument reads at least one signal derived from motion over time, not just a raw x/y position
  - something about the drawn mark visibly changes because of that signal
related:
  - lectures/week-03
---

## Before the studio

Bring last week's build. You'll be cutting it open, not starting again.

## In the studio

An `(x, y)` position is the least interesting thing a pointer gives you. The
gap between two events also carries how fast the hand was moving, how long it
paused, whether it's accelerating into the next mark or slowing out of the
last one. Pick one such signal and wire it to something the mark does ---
width, opacity, colour, whatever suits the instrument you're building. The
lecture this week works through why velocity, computed from your own event
stream, travels further across input devices than a hardware signal like
pressure ever will.

## Afterwards

You should be able to point at a specific line of code and say "this is the
number that makes a fast stroke look different from a slow one," rather than
gesturing at the instrument as a whole.
