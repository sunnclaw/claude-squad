# Engineering Rules

These rules are the default unless there is a documented exception.

## 1. Build Only Against a Present Constraint

A task must map to one of these:

1. Revenue this month
2. Reliability of a revenue path
3. Manual work consuming real operator time

If not, do not build it.

## 2. Prefer Direct Solutions

Choose in this order:

1. Manual operation
2. Script
3. Single-purpose app code
4. Shared internal abstraction
5. Platform

Moving down the list requires evidence that the simpler option is failing.

## 3. Keep Architecture Boring

Default choices:

1. Monolith over distributed systems
2. Single database over polyglot persistence
3. Existing framework conventions over custom infrastructure
4. Synchronous flows over event-driven flows unless latency or resilience requires otherwise

## 4. Timebox Uncertain Work

Default timeboxes:

1. 30 minutes for local investigation
2. 1 day for a prototype
3. 1 week for a meaningful shipped bet

If the timebox expires without clarity, reduce scope or stop.

## 5. Every Ticket Needs a Reason

Each task should state:

1. Problem
2. User or operator affected
3. Metric or pain tied to it
4. Why now

## 6. Protect Focus

Allowed priorities:

1. Production breakage
2. Paying customer blocker
3. This week's single bet
4. Small follow-up tasks from the active bet

Everything else waits.

## 7. Measure Lightly

Track only what changes decisions:

1. Leads
2. Activation
3. Conversion
4. Retention
5. Time-to-ship
6. Support burden

Do not build reporting systems before you have repeated decision use.

## 8. Defer Reuse

Duplication is cheaper than the wrong abstraction early on.

Extract shared systems only after:

1. The same pattern exists at least three times
2. The pattern is stable
3. The abstraction clearly reduces future cost

## 9. Reliability Over New Surface Area

When facing a choice between:

1. A fragile new feature
2. A smaller feature that is reliable

Ship the reliable one.

## 10. End With a Decision

Every technical discussion should end with one of:

1. Build now
2. Defer
3. Kill
4. Re-scope smaller
