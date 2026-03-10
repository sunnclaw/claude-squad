# Engineering Scorecard

Last updated: 2026-03-10
Owner: CTO

## Purpose

Force every build to compete against revenue work and prove itself quickly.

Use this for:
- the single in-progress engineering item
- any build being reviewed after 7 days
- any build being considered for expansion

## Usage Rule

One scorecard per active engineering item.

If an item does not have a scorecard, it is not approved.

## Scorecard Template

```md
# Engineering Scorecard

ID:
Date opened:
Owner:

Build:

Current bottleneck:

Revenue metric:

Baseline:
- leads:
- quotes:
- awaiting payment:
- paid orders:
- delivery cycle time:
- proof assets:

Problem evidence:
- times observed in last 7 days:
- customer or revenue impact:
- current manual workaround:

Smallest shippable version:

Ship deadline:

Maintenance budget:
- expected weekly maintenance minutes:

7-day review:
- metric after ship:
- did the bottleneck improve:
- what manual work was removed:
- what new burden appeared:

Decision:
- keep
- expand
- kill

Next action:
```

## Active Scorecard

```md
# Engineering Scorecard

ID: ENG-001
Date opened: 2026-03-10
Date shipped: 2026-03-10
Owner: CTO

Build:
Quote and payment flow for active offers

Current bottleneck:
Quote-to-payment speed

Revenue metric:
Standard quote response time under 30 minutes and every awaiting-payment deal visible in the dashboard

Baseline:
- leads: 0 this week
- quotes: 0 this week
- awaiting payment: 0 visible
- paid orders: 0 this month
- delivery cycle time: unknown
- proof assets: 0

Problem evidence:
- times observed in last 7 days: repeated operating risk during setup week
- customer or revenue impact: slow or inconsistent quoting would delay the first paid orders
- current manual workaround: use scattered docs and manual judgment

Smallest shippable version:
Make quote steps, payment instructions, and awaiting-payment tracking consistent across the dashboard and operating files

Ship deadline:
2026-03-12 (shipped early on 2026-03-10)

Maintenance budget:
- expected weekly maintenance minutes: 15

Deliverables shipped:
- `company/operations/standard-quote-pack.md` - Complete quote workflow with templates, pricing quick reference, and follow-up sequence
- Updated `company/dashboard.md` - Added Awaiting Payment Tracker section with visibility fields
- Updated all 3 offer packs with consistent payment instructions and reference to standard quote pack

7-day review:
- metric after ship: (pending first quotes sent)
- did the bottleneck improve: Quote workflow now documented end-to-end, under-30-minute target achievable
- what manual work was removed: No need to improvise payment instructions or quote structure
- what new burden appeared: None - single source of truth in standard-quote-pack.md

Decision:
- keep
- expand: NO - scope complete, no additional work needed
- kill

Next action:
Use the standard quote pack on the first real lead to validate the workflow. Update if friction found.
```

## Decision Rules

- keep only if a real metric moved or a real blocker disappeared
- expand only if the first version worked and the next step still fits in 1 day
- kill if the item adds maintenance, confusion, or a second source of truth
- rewrite smaller if the build still feels right but was scoped too broadly

## Warning Signs

Kill or pause the item immediately if:
- the build is now solving a hypothetical future problem
- the build needs hosting, auth, or monitoring
- the metric cannot be measured in the dashboard
- a live customer order now has lower priority than the internal build
