# Engineering Rules

## Default Build Strategy

1. Validate demand manually.
2. Ship the smallest usable software.
3. Instrument behavior immediately.
4. Double down only on observed usage or revenue.

## Build vs Buy

Build only if the capability is:

- core to differentiation
- repeatedly used by paying customers
- too expensive or too limiting to outsource

Buy or integrate everything else.

## Technical Standards

- One deployable app unless separation is unavoidable
- One Postgres database unless data isolation is required
- Type-safe code paths for billing and account state
- Feature flags for risky releases
- Logs, metrics, and error tracking in production by default
- Migrations must be reversible when practical

## Product Standards

- Every new flow must have a measurable activation step
- Every paywall must be testable within a week
- Every onboarding step must justify itself
- Every support ticket theme must be tracked

## Process Standards

- No roadmap longer than 90 days
- No epic longer than 2 weeks without a user-visible checkpoint
- No refactor without a business or reliability trigger
- No rewrite of working systems to improve aesthetics

## CTO Review Questions

- Does this make money, save money, or reduce a current risk?
- What happens if we do nothing for 30 days?
- Can we launch a narrower version by Friday?
- What manual workaround exists?
- What should we explicitly not build as part of this?
