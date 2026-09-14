---
title: Feedback and decay
description:
  Giving the instrument a state that keeps moving on its own, so it's a small
  system and not just a picture machine
week: 5
date: 2027-03-22
teachers:
  - idris-fenn
spec:
  - some part of your instrument's state changes over time on its own, not only in direct response to input
  - a person watching without touching anything can see that change happening
related:
  - lectures/week-05
---

## Before the studio

Bring a build where every change on screen is a direct, immediate response to
input. That's the thing you're about to break.

## In the studio

Add a clock. Ink that dries out unless topped up, a charge that drains, a mark
that fades if it isn't renewed --- something that keeps changing whether or
not anyone is touching the instrument, and that the constraint from last week
now has to answer to. This is the week instruments stop being reactive
surfaces and start being small systems with their own state, which is also the
week they start failing in genuinely new ways: watch for the failure mode
where your decay term and your input handling fight each other for the same
number.

## Afterwards

Leave the instrument alone for thirty seconds without touching it and watch
what it does. If nothing happens, the decay isn't wired to anything visible
yet.
