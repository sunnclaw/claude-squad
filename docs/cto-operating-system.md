# CTO Operating System

## Purpose

Build only what shortens time to revenue, improves conversion, increases retention, or reduces delivery cost on an active revenue path.

If work does not support one of those outcomes inside the next 90 days, it is deferred.

## Company-Level Rules

1. One core product, one core ICP, one primary acquisition path at a time.
2. Engineering capacity is allocated by default:
   - 60% revenue-critical product work
   - 20% onboarding, activation, retention improvements
   - 10% reliability and cost control
   - 10% experiments
3. No platform work unless it removes a repeated bottleneck in the next two delivery cycles.
4. No internal tooling is built if a paid SaaS can solve it in under one day and under the monthly tool budget.
5. Every initiative must name one business metric it is expected to move.

## Technical Strategy

### Architecture Bias

Choose the simplest stack that supports:

- shipping weekly
- measuring user behavior
- charging customers
- supporting manual operations before automation

Default architecture:

- Monolith first
- Single relational database
- Server-rendered app or simple SPA if already established
- Background jobs only when required for customer-facing workflows
- Third-party auth, billing, email, analytics, and error tracking

Avoid by default:

- microservices
- event-driven systems
- custom infrastructure abstractions
- premature multi-tenant isolation layers
- generic internal platforms

### Build Order

1. Acquisition instrumentation
2. Lead capture and qualification
3. Signup and checkout
4. Onboarding and activation
5. Retention loops
6. Ops automation around proven workflows
7. Cost and scale optimization

## Product Delivery System

### The Only Three Roadmap Buckets

1. Revenue now
2. Friction removal
3. Learning bets

Anything else is backlog noise.

### Work Intake Gate

Every new request must answer:

1. Which metric moves?
2. Which customer segment benefits?
3. What happens if we do nothing for 30 days?
4. Can we solve it manually first?
5. What is the smallest production version?

If these are unclear, the work does not start.

### Definition of Ready

A task is ready only if it has:

- target user
- problem statement
- success metric
- scope boundary
- launch plan
- rollback or kill criteria

### Definition of Done

Work is done only when:

- shipped to production
- instrumented
- owner assigned
- result reviewed within 7 days

## Engineering Focus Model

### Weekly Cadence

- Monday: choose one revenue feature, one friction fix, one measurable experiment
- Wednesday: review scope, cut anything non-essential
- Friday: ship review tied to metrics, not output

### Delivery Constraints

- Prefer 1-3 day tasks
- Break anything larger than 5 days
- No parallel large projects
- No refactor without linked delivery pain
- No "future-proofing" tickets without a dated risk

### Decision Heuristics

Use this order:

1. Manual
2. Off-the-shelf
3. Thin custom layer
4. Full custom system

If the team wants option 4, they must explain why options 1-3 fail.

## Core Business Systems

### 1. Revenue Instrumentation

Track this funnel end to end:

- visitor
- lead
- qualified lead
- activated user
- paying customer
- retained customer

Minimum system requirements:

- product analytics
- CRM or lightweight pipeline
- billing events
- attribution capture
- dashboard for weekly review

### 2. Experimentation

Every experiment must define:

- hypothesis
- success threshold
- launch date
- decision date

Experiments expire quickly. If results are weak or ambiguous, cut or revise.

### 3. Customer Feedback

Create one pipeline for:

- lost deals
- churn reasons
- onboarding confusion
- top feature requests

Route only repeated patterns into engineering.

### 4. Reliability

Reliability work is prioritized when it affects:

- conversion
- onboarding completion
- payment success
- support load

Track:

- uptime
- error rate
- checkout failure rate
- onboarding completion rate
- median response time on critical flows

### 5. Cost Control

Review monthly:

- infrastructure cost per active customer
- third-party SaaS sprawl
- AI/API usage per successful outcome
- gross margin impact of technical choices

## Scoreboard

The CTO reviews these weekly:

- new leads
- activation rate
- trial-to-paid or lead-to-paid conversion
- churn or retention at the main interval
- revenue per customer
- cycle time from idea to production
- bug count on revenue-critical flows
- infra/tooling cost

If engineering metrics improve while business metrics stall, focus is wrong.

## Anti-Overbuilding Policy

Stop work immediately when you hear:

- "we might need this later"
- "let's make it configurable"
- "let's build a framework first"
- "this will help when we scale"
- "while we're here, let's also"

Replace with:

- what customer needs this now
- what is the smallest version
- what metric proves this matters

## 90-Day Execution Default

### Days 1-30

- instrument the funnel
- fix broken signup, checkout, onboarding paths
- remove top 3 sources of user drop-off
- ship one core offer fast

### Days 31-60

- tighten activation
- automate the highest-volume manual step
- improve conversion copy, pricing flow, and retention triggers

### Days 61-90

- deepen winning acquisition channels
- harden the product around retained users
- optimize delivery speed and margin only where proven demand exists

## CTO Standard

The technical system is working if:

- the team ships every week
- priorities are obvious
- most work has a clear revenue path
- weak ideas die early
- operational complexity stays below customer and revenue complexity
