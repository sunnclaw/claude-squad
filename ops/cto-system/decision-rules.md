# Decision Rules

These rules exist to prevent overbuilding.

## Build vs Manual

Stay manual when:

- The task happens fewer than 5 times per week.
- The process is still changing.
- A founder or operator is still learning what customers actually want.
- A spreadsheet, form, or Zap solves 80 percent of the problem.

Build software when:

- The manual process is stable.
- The task happens often enough to create delay, errors, or lost revenue.
- Speed or consistency materially affects conversion or retention.
- The workflow is core to the product, not just an internal convenience.

## Simplicity Defaults

Default answers:

- `One service?` Yes.
- `One database?` Yes.
- `One queue system?` Optional, only if background jobs are required.
- `Separate admin app?` No, unless security or complexity clearly requires it.
- `Multi-tenant complexity?` No, keep the simplest tenant model possible.
- `Real-time infra?` No, poll first unless real-time is the product.
- `Custom design system?` No, use a small shared component layer only.
- `Internal platform tooling?` No.

## Complexity Gates

You may add architectural complexity only if all three are true:

1. The current bottleneck is measured, not assumed.
2. The simpler option has failed or is clearly insufficient.
3. The change improves one of revenue, reliability, or delivery speed in the next quarter.

## Buy vs Build

Buy by default for:

- Auth
- Billing
- CRM
- Email delivery
- Analytics
- Customer support tooling
- Feature flags
- Error monitoring
- File storage

Build only when the vendor meaningfully blocks product differentiation, margin, or control.

## Roadmap Filter

Every item must answer:

1. Which commercial metric moves?
2. What is the shortest path to learning?
3. What is the smallest shippable version?
4. Why now?
5. What are we explicitly not building?

If those answers are weak, the item does not start.
