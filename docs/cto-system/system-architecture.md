# Revenue-First System Architecture

## Design Principle

Use a modular monolith until revenue, team size, or scale forces separation.

That means:

- One deployable application when possible
- One primary database
- One analytics pipeline
- One queue only if async work is required
- One admin backoffice for operations

## Core Business Capabilities

### 1. Acquisition Layer

Purpose: turn traffic into identified leads or activated users.

Components:

- Marketing site or landing pages
- Lead capture forms
- CRM sync
- Attribution tracking
- Experiment hooks for copy, offer, and CTA tests

### 2. Product Layer

Purpose: deliver the smallest useful workflow customers will pay for.

Components:

- Auth and user identity
- Core domain workflow
- Customer-facing dashboard or interface
- Notifications for critical lifecycle events
- Feature flags for controlled rollout

### 3. Revenue Layer

Purpose: collect money and support monetization experiments safely.

Components:

- Billing and subscription logic
- Checkout integration
- Invoicing if applicable
- Plan and entitlement checks
- Refund and failure handling

### 4. Operations Layer

Purpose: keep delivery practical before automation is justified.

Components:

- Admin console
- Customer support views
- Retry and repair tools
- Import/export utilities
- Audit log for important state changes

### 5. Feedback Layer

Purpose: learn what drives revenue and where the funnel breaks.

Components:

- Product analytics events
- Funnel dashboards
- Error tracking
- Session or support feedback links
- Experiment result tracking

## Recommended Defaults

Choose boring tools with strong ecosystem support.

- Frontend: one web app
- Backend: one application service
- Data: Postgres
- Auth: managed provider or proven library
- Billing: Stripe or equivalent
- Analytics: product analytics plus application monitoring
- Hosting: managed platform before self-managed infrastructure

## Architecture Guardrails

- No microservices before clear scaling or ownership pressure exists.
- No event-driven architecture unless async workloads are material.
- No internal framework work unless it cuts repeated delivery time.
- No second database without a hard technical need.
- No AI feature without a measurable user workflow it improves.

## Data Model Priority

Protect these entities first:

- Account
- User
- Lead
- Subscription
- Order or transaction
- Core domain object
- Activity event

If the data model for these is weak, stop and fix it before adding features.

## Deployment Standard

- Main branch deployable at all times
- Small, reversible changes
- Feature flags for risky releases
- Migrations designed for rollback safety
- Logs, metrics, and alerts for revenue-critical paths

## Reliability Standard

The first reliability target is not global uptime. It is customer trust in the revenue path.

Protect first:

1. Sign-up
2. Checkout
3. Core value delivery
4. Support and recovery

## When To Split Systems

Only split a module into a separate service when all are true:

- The boundary is already clear in the code and data
- It is owned by a distinct team or workflow
- Independent scaling is required
- The operational overhead is justified by business impact
