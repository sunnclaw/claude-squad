# CTO System

## Objective

Build the smallest technical system that:

1. gets customer value live fast,
2. turns usage into revenue,
3. keeps engineering focused on a narrow surface area,
4. avoids custom infrastructure until it is clearly earned.

This is the company operating system for product, engineering, data, and delivery.

## Company Rules

- One product, one ICP, one revenue motion at a time.
- Ship sales-enabling features before scale features.
- Buy before build for commodity capabilities.
- Every feature must map to one of: activation, retention, conversion, expansion, support cost reduction.
- If a feature does not move one of those metrics within 30 days, it is not roadmap material.
- Prefer boring technology with low ops overhead.
- Keep the team on one primary stack and one deployment path.

## What We Are Building

The company system has five layers:

1. Acquisition layer: website, landing pages, lead capture, analytics.
2. Product layer: the core workflow customers pay for.
3. Revenue layer: billing, plans, trials, entitlement, CRM handoff.
4. Feedback layer: support, session replay, error tracking, product analytics.
5. Control layer: backlog rules, release cadence, architecture guardrails, KPI reviews.

Anything outside these layers is optional.

## Target Architecture

### 1. Frontend

- `Next.js` for app and marketing site unless there is an existing stack already in production.
- One design system at the token/component level, but only after the first revenue path is live.
- Server-rendered pages for marketing, auth, onboarding, billing, and dashboard shells.
- Client-side interactivity only where it materially improves the core workflow.

### 2. Backend

- `Supabase` as the default backend platform:
  - Postgres
  - Auth
  - Storage
  - Realtime only if the product truly needs it
- `Next.js` server actions or route handlers for product logic close to the app.
- Small background job layer only for async work:
  - email sending
  - report generation
  - imports/exports
  - retries/webhooks
- No microservices. One deployable application plus managed services.

### 3. Data

- Postgres is the source of truth.
- Core entities only:
  - `accounts`
  - `users`
  - `memberships`
  - `subscriptions`
  - `events`
  - product-specific core records
- Every table needs:
  - owner
  - created timestamp
  - updated timestamp
  - soft-delete decision made explicitly
- Add analytics events intentionally, not exhaustively.

### 4. Payments

- `Stripe` for:
  - checkout
  - subscriptions
  - invoices
  - trials
  - usage-based billing if needed later
- Entitlements reflected in our database, not inferred ad hoc from frontend state.
- Revenue events must be auditable:
  - trial started
  - subscription created
  - payment succeeded
  - payment failed
  - subscription canceled
  - plan changed

### 5. Customer Communication

- Transactional email provider: `Resend` or equivalent.
- CRM: pick one simple system and integrate only lead capture plus lifecycle stage updates.
- Support inbox: shared email or helpdesk, not a custom messaging system.

### 6. Observability

- Error tracking: `Sentry`
- Product analytics: `PostHog`
- Session replay: only if support burden justifies it, preferably through the same analytics vendor
- Uptime checks on:
  - homepage
  - signup
  - checkout
  - core job endpoint

## Revenue-First Product Scope

The product roadmap is constrained to four surfaces:

### Surface A: Activation

User reaches first value as fast as possible.

Must include:

- clear signup path
- guided onboarding
- seeded empty states
- one visible success metric
- first-run checklist

### Surface B: Core Job

The smallest workflow that solves the customer problem end-to-end.

Must include:

- input
- processing
- output
- saved history or proof of value

Anything beyond that is backlog, not MVP.

### Surface C: Conversion

The user sees why payment is justified and can pay without friction.

Must include:

- pricing page
- trial or limited free plan
- upgrade prompts tied to value moments
- checkout
- billing management

### Surface D: Retention

The user has a reason to return.

Must include:

- notifications or reminders
- history/activity view
- account settings
- support/contact path

## Engineering Focus System

### Backlog Policy

Every work item must fit one of these buckets:

- `P0 Revenue`: directly improves acquisition, activation, conversion, retention, or collections.
- `P1 Delivery`: testing, reliability, observability, developer speed for currently active revenue work.
- `P2 Foundation`: only allowed if it removes repeated friction across at least three upcoming items.
- `Not Now`: everything else.

If an item is not clearly `P0`, `P1`, or justified `P2`, it does not get built.

### Definition of Ready

Do not start work until all are true:

- target user is named,
- desired metric movement is stated,
- scope is small enough for 1 to 3 days of work,
- acceptance criteria are testable,
- analytics and rollout implications are known.

### Definition of Done

Work is not done until all are true:

- shipped to production,
- analytics instrumented,
- errors monitored,
- user-facing copy reviewed,
- owner knows what metric will be checked after launch.

## Product Decision Framework

When deciding whether to build something, ask:

1. Does this help us close deals faster?
2. Does this reduce time-to-value?
3. Does this increase paid conversion?
4. Does this reduce churn or support cost?
5. Can we ship a thinner version in 3 days?

If the answer to the first four is no, do not build it.
If the answer to the fifth is no, cut scope until it becomes yes.

## Metrics Dashboard

The leadership dashboard should fit on one screen.

### Acquisition

- visitors
- signup conversion rate
- qualified leads
- demo booked rate

### Activation

- signup to first value rate
- median time to first value
- onboarding completion rate

### Revenue

- trial to paid conversion
- MRR
- new MRR
- churned MRR
- failed payment recovery rate

### Retention

- weekly active accounts
- 30-day retained accounts
- support tickets per active account

### Reliability

- deploy frequency
- rollback count
- P1 incidents
- critical flow error rate

## Build vs Buy

Default buy decisions:

- auth
- billing
- email delivery
- analytics
- error monitoring
- CRM
- support tooling
- file storage
- feature flags, if needed

Build only the differentiated workflow customers pay for.

## Delivery Cadence

### Weekly

- Monday: revenue review and scope cut
- Tuesday to Thursday: build and ship
- Friday: production review, analytics review, support review, backlog cleanup

### Monthly

- review metric movement,
- remove low-value roadmap items,
- identify one bottleneck in funnel,
- focus next month on that bottleneck.

## 90-Day Sequence

### Days 1-14

- Define ICP and paid problem clearly.
- Finalize the single core workflow.
- Stand up app shell, auth, database, analytics, error tracking.
- Build landing page, waitlist or signup, and onboarding skeleton.
- Implement Stripe checkout and subscription model early.

### Days 15-30

- Ship the end-to-end core job.
- Add first-value instrumentation.
- Add account settings, billing portal, and support path.
- Put the product in front of real users immediately.

### Days 31-60

- Tighten onboarding based on actual drop-off.
- Improve the output quality of the core workflow.
- Add only the retention loop needed to drive repeat usage.
- Build internal admin tools only where support pain is real.

### Days 61-90

- Improve conversion and pricing clarity.
- Add sales-assist features only if live deals require them.
- Automate the highest-frequency support and ops tasks.
- Delay platform work unless reliability is blocking growth.

## Technical Guardrails

- One app, one database, one analytics pipeline.
- No internal frameworks in the first phase.
- No premature abstractions for features with one use case.
- No queue system until async work is proven necessary.
- No multi-tenant complexity beyond what billing and access control require.
- No AI features unless they strengthen the paid core workflow and are measurable.
- No rebuilds for aesthetic reasons while funnel metrics are weak.

## Recommended Initial Stack

- Frontend/App: `Next.js`
- Database/Auth/Storage: `Supabase`
- Payments: `Stripe`
- Analytics: `PostHog`
- Error tracking: `Sentry`
- Email: `Resend`
- Hosting: `Vercel`
- Docs/CRM/ops: use existing team tools, keep integration surface minimal

This stack is not sacred. It is selected because it is fast to ship, cheap to operate, and narrow in cognitive load.

## First Technical Hires

Hire in this order:

1. strong full-stack product engineer,
2. growth/product-minded designer or frontend engineer,
3. operations/support generalist before specialized platform engineering.

Do not hire platform specialists before the product has real usage pressure.

## CTO Operating Checklist

Every week, the CTO should be able to answer:

- What shipped that could move revenue?
- Where are users dropping before value?
- What is the current paid conversion bottleneck?
- What did engineering spend time on that did not affect revenue or reliability?
- What can be cut from the roadmap this week?

If these answers are unclear, the system is too complex.
