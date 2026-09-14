---
title: Pattern and seed
description:
  Introducing controlled randomness — variation a viewer can trust, because
  it's reproducible from a seed rather than accidental
week: 8
date: 2027-04-12
teachers:
  - idris-fenn
spec:
  - given the same seed, your instrument produces the same result twice in a row
  - given a different seed, it produces a visibly different result
---

## Before the studio

Bring an instrument that behaves identically every time it runs. Today it
learns to vary on purpose.

## In the studio

Wire a seeded random source into one part of the instrument --- where the next
mark starts, how a constraint bends, what a decayed state regenerates into ---
and expose the seed somewhere a viewer could find it. The discipline here is
narrow: "random" and "unpredictable to me right now" are not the same thing,
and an instrument that can't reproduce its own output on request is much
harder to debug, let alone exhibit. Two runs with the same seed should be
identical down to the pixel; that's the test, not a vibe check.

## Afterwards

Run your instrument three times with the same seed. If you can't tell the
three runs apart, the seed reached everywhere it needed to; if you can, find
the piece of state it missed.
