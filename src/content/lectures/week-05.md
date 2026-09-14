---
title: Time inside the instrument
description:
  Why an instrument with a clock of its own is a different kind of thing than
  one that only ever reacts
week: 5
date: 2027-03-22
teachers:
  - idris-fenn
related:
  - sessions/05-feedback-and-decay
---

Everything built in the first four weeks is a pure function of input: touch
it, something happens; stop touching it, nothing does. That's a reasonable
instrument, and it's also a limited one --- ink doesn't wait for you to decide
it's dry, and a held note doesn't wait for you to decide it's over. Giving an
instrument its own advancing clock, independent of input, is what turns it
from a responsive surface into a small dynamical system, with everything that
implies: state that can drift, oscillate, or get stuck in a way no single
input event caused.

That last part is the week's actual warning. Once decay and input both write
to the same piece of state, a bug where one path silently overrides the other
becomes possible, and it's a genuinely different failure mode from anything
in weeks 1 through 4: a value can get pushed to a boundary by one path while
looking, from the outside, like it's simply obeying the other. Test for it by
continuing to act after the suspicious state is reached, not by taking one
screenshot and trusting it.

## Outline

- from pure reaction to a system with its own clock
- ink, charge, and other decay metaphors as the same mechanism
- the specific failure mode where decay and input fight over one value
