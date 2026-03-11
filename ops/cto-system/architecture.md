# Revenue-First Architecture

## Primary Goal

Support fast iteration on the product and commercial funnel with the minimum operational burden.

## Baseline Architecture

- Frontend and backend may live in one repo.
- Application logic should stay centralized, not split across many services.
- Use a single relational database as the source of truth.
- Use managed services for commodity concerns.
- Keep integration boundaries explicit but lightweight.

## Recommended Layers

1. `Presentation`
   User app, admin screens, landing pages, and any internal tools.
2. `Core Product`
   Business rules for onboarding, billing states, activation, and value delivery.
3. `Operations`
   Support actions, customer success workflows, back-office tooling, reporting jobs.
4. `Instrumentation`
   Analytics events, error monitoring, audit logs on critical revenue actions.

## Non-Negotiables

- Revenue-critical flows must have logs and error tracking.
- Billing and account state changes must be auditable.
- Admin tooling is allowed if it removes founder or support bottlenecks.
- Migrations must be safe and reversible where practical.
- Every new integration must have a clear owner.

## What To Delay

Delay these until scale proves the need:

- Service decomposition
- Event-driven redesigns
- Full plugin systems
- Workflow builders
- Deep abstraction layers
- Multi-region deployments
- Extreme generalization for hypothetical future products

## Engineering Standard

The standard is not "beautiful architecture."
The standard is:

- Easy to change
- Easy to debug
- Cheap to operate
- Good enough to close and retain customers
