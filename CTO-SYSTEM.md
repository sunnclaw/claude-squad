# CTO System

## Purpose

This system exists to do three things:

1. Ship revenue-moving product changes fast.
2. Keep engineering effort constrained to the smallest useful scope.
3. Prevent the company from building infrastructure, features, or processes before they are needed.

## Operating Principles

- Revenue over elegance. Prefer the solution that helps close deals, activate users, or retain paying customers this week.
- Manual first, automation second. If a workflow happens fewer than 5 times per week, default to manual operations.
- Single product thesis. Work on one core customer problem at a time.
- One source of truth. Customer demand, roadmap, and metrics live in one place.
- Buy before build. Use managed services and off-the-shelf tooling unless custom software is a direct product advantage.
- Instrument before optimizing. If a workflow is not measured, do not spend time improving it.
- Time-box uncertainty. New ideas get a strict validation window and a kill decision.
- Default to boring technology. Reliability and hiring simplicity matter more than novelty.

## Company-Level Targets

Track these every week:

- New qualified pipeline created
- Demos booked
- Trial or onboarding starts
- Activation rate
- Paid conversion rate
- 30-day retention
- Net revenue added
- Engineering cycle time
- Bugs affecting revenue paths

## Decision Filters

Every proposed task must answer:

1. Which revenue metric does this move?
2. What customer evidence supports it?
3. What is the smallest version that proves value?
4. Can we ship it in 1 to 5 days?
5. What existing tool or service lets us avoid building this?

If a task cannot answer those clearly, it does not enter active work.

## Work Buckets

All engineering work must fall into one of four buckets:

- Revenue Now: unblock sales, onboarding, activation, billing, or retention
- Revenue Soon: product gaps repeatedly blocking customer adoption
- Risk Control: reliability, security, data loss, compliance issues with material downside
- Debt With Payback: technical debt with a near-term, measurable speed or reliability return

Everything else stays in backlog.

## Weekly Operating Cadence

### Monday

- Review revenue metrics and blocked deals
- Review top 5 product frictions from sales/support/customer calls
- Select one company priority and up to three engineering outcomes

### Tuesday to Thursday

- Ship small increments daily
- Demo changes internally against real customer workflows
- Keep a running list of open questions and kill decisions

### Friday

- Review shipped work against metrics
- Remove backlog items that no longer matter
- Document new learnings from customer behavior
- Decide whether any manual workflow now deserves automation

## Engineering Rules

- Limit work in progress to 3 concurrent outcomes.
- No project longer than 2 weeks without a measurable checkpoint.
- No platform rewrite without current revenue pain tied to it.
- No internal tool unless it saves at least 3 hours per week or removes meaningful error risk.
- No new service unless one owner is named for cost, security, and operations.
- Every shipped user-facing change must include event tracking.
- Every checkout, signup, booking, and onboarding path must have an owner and a dashboard.

## Product Delivery Standard

Each initiative must have:

- Problem statement
- Customer evidence
- Success metric
- Smallest shippable slice
- Kill criteria
- Owner
- Ship date

If any field is missing, the initiative is not ready.

## Technical Architecture Standard

Use a simple stack unless an existing codebase forces otherwise:

- Frontend: Next.js
- Backend: Next.js API routes or a small Node service
- Database: Postgres
- Auth: managed auth provider
- Billing: Stripe
- Analytics: PostHog
- Email: Resend or equivalent
- File storage: object storage
- Background jobs: managed queue or cron
- Hosting: Vercel or equivalent for app, managed Postgres for data
- Error monitoring: Sentry

This stack is intentionally biased toward fast iteration and low ops load.

## System Boundaries

### Core product

Only build what the customer directly experiences and will pay for.

### Ops layer

Use no-code or light-code automation for CRM sync, onboarding steps, reminders, notifications, and reporting.

### Data layer

Store only the business data required to operate and measure the funnel. Avoid speculative data modeling.

## Build vs Buy Rules

Build only when at least one is true:

- It is central to product differentiation
- It materially improves conversion or retention
- Existing tools create unacceptable cost, latency, or workflow constraints

Buy or use managed services when:

- The workflow is standard across SaaS businesses
- The tool is cheap relative to team time
- The failure mode is operational rather than strategic

## Meeting Rules

- Replace status meetings with dashboards and short written updates.
- Customer feedback review is mandatory each week.
- Architecture discussion must end with a decision, owner, and revisit date.

## What To Build First

1. Website and signup flow
2. Activation path to first value
3. Billing and plan controls
4. Basic CRM and support integrations
5. Usage and funnel analytics
6. Reliability around the above paths

Anything after that requires proof.

## Kill List

Do not build these early:

- Multi-tenant abstractions beyond current need
- Complex permissions systems without real customer demand
- Custom workflow engines
- Internal admin suites beyond minimal support tools
- Microservices
- Event buses
- Fancy design systems
- AI features without proven buyer pull

## CTO Scorecard

The CTO is succeeding if:

- Revenue paths are instrumented and improving
- Engineers know the top priority without asking
- Time from idea to production stays short
- Infrastructure cost remains low relative to revenue
- Technical debt is controlled instead of ignored or over-rotated on

## Immediate 30-Day Focus

Week 1:

- Instrument funnel
- Tighten signup and onboarding
- Stand up weekly metric review

Week 2:

- Fix top activation blockers
- Improve billing and trial conversion points

Week 3:

- Add customer-facing features directly tied to closed-lost or churn feedback

Week 4:

- Automate the highest-frequency manual workflow
- Review stack, cost, and cycle time
