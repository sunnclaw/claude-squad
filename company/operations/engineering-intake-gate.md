# Engineering Intake Gate

Last updated: 2026-03-10
Owner: CTO

## Purpose

Prevent engineering time from being consumed by ideas that feel useful but do not move revenue.

Use this gate before starting any new internal build, automation, or website change.

If the request is a product bet or looks like future software to sell, also apply `company/operations/product-build-policy.md`.
Confirm the request is also allowed by `company/operations/technical-roadmap.md`.
If the item is approved and started, open a matching scorecard in `company/operations/engineering-scorecard.md`.

## Approval Rules

An item is approved only if:
- it affects revenue within 30 days
- it solves a repeated problem, not a hypothetical one
- it can ship in 1 day or less
- it has one owner and one metric
- it does not create ongoing maintenance the company cannot justify yet

## Intake Form

Copy this section before starting work:

```md
# Engineering Request

Request name:
Date:
Owner:

Problem:
What real problem happened?

Revenue effect:
How does this improve lead volume, conversion, payment speed, delivery speed, or quality?

Evidence:
- Times this happened in the last 7 days:
- Time lost per occurrence:
- Customer impact:

Manual workaround:
How are we handling this today?

Smallest shippable fix:
What is the minimum change that solves 80% of the problem?

Ship time:
Can this ship in 1 day or less?

Metric:
What number should move if this works?

Kill condition:
What result would make us stop or roll back this idea?
```

## Scoring

Score each item from 1 to 5.

| Factor | Question |
|------|------|
| Revenue impact | Will this directly help close revenue in 30 days? |
| Speed to ship | Can this be live today? |
| Repeat pain | Is this happening often enough to matter? |
| Maintenance cost | Will this stay cheap to operate? |
| Confidence | Do we have evidence this solves the right problem? |

## Decision Threshold

| Total | Decision |
|------|------|
| 21-25 | Approve now |
| 16-20 | Approve only if it is the current bottleneck |
| 15 or less | Reject or defer |

## Hard Rejection Cases

Reject immediately if the request needs:
- a database
- user accounts
- a dashboard app
- generic automation before 3 repeated uses per week
- a redesign that does not improve conversion
- a product build with no path to charge inside 30 days

## Priority Ladder

If multiple approved items exist, use this order:
1. payment capture
2. lead response and follow-up
3. quote generation
4. delivery quality
5. proof asset generation
6. admin time reduction
7. brand polish

## Exit Review

After shipping, record:

```md
Date shipped:
Metric after 7 days:
Keep / Expand / Kill:
What manual work did this remove?
What new maintenance did this create?
```

Then update the matching scorecard with the 7-day keep / expand / kill decision.
