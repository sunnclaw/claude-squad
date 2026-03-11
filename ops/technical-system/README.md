# CTO Technical System

This system is designed to do three things:

1. Get the company to revenue quickly.
2. Keep engineering attention on the few things that move revenue.
3. Prevent architecture, process, and tooling from growing faster than the business.

## Operating Rules

1. Every engineering task must map to one of four buckets:
   - `Revenue Now`: directly helps close, onboard, retain, or expand customers in the next 30 days.
   - `Revenue Soon`: removes a blocker for a planned revenue motion in the next 31-90 days.
   - `Quality Guardrail`: prevents customer-facing breakage, security issues, or operational instability.
   - `Debt With Deadline`: small technical work required to keep a near-term roadmap moving.
2. If work fits none of those buckets, it does not start.
3. The team may run only one company-level product bet at a time.
4. Platform or infrastructure work cannot exceed 20 percent of engineering capacity unless it resolves an active revenue or reliability constraint.
5. New services, frameworks, queues, databases, and internal platforms require a written decision using [decision-rubric.md](/E:/开发区域/一人公司/ops/technical-system/decision-rubric.md).
6. The default implementation path is the simplest thing that can ship safely in 1-2 weeks.

## Weekly Cadence

Run this every week:

1. Monday: choose one active bet using [bet-template.md](/E:/开发区域/一人公司/ops/technical-system/templates/bet-template.md).
2. Daily: pull work only from the active bet, urgent customer issues, and approved guardrails.
3. Thursday: review metrics in [scoreboard.csv](/E:/开发区域/一人公司/ops/technical-system/scoreboard.csv).
4. Friday: complete [weekly-review-template.md](/E:/开发区域/一人公司/ops/technical-system/templates/weekly-review-template.md).

## Work Intake Policy

Before any task enters active work, answer:

1. Which customer or revenue motion does this support?
2. What happens if we do not do it in the next 30 days?
3. What is the smallest version that proves value?
4. What metric should move if this works?

Use [tech-request-template.md](/E:/开发区域/一人公司/ops/technical-system/templates/tech-request-template.md) for any non-trivial request.

## Delivery Policy

Ship in this order:

1. Manual workaround.
2. Thin productized flow.
3. Automation only after repeated use.
4. Generalization only after at least two proven use cases.

This prevents building systems for hypothetical scale.

## Architecture Guardrails

- Prefer a modular monolith until load, team size, or deployment coupling creates a measured problem.
- Prefer one database unless a second one solves a concrete issue the first cannot.
- Prefer synchronous flows unless latency, retries, or third-party coupling makes background processing necessary.
- Prefer vendor tools over internal tools unless the internal version is materially cheaper and can be built in less than one week.
- Prefer feature flags, scripts, and admin screens over bespoke backoffice systems.

## Team Focus Rules

- Maximum of 3 tasks in progress per engineer.
- No roadmap item starts without an owner and a success metric.
- Bugs that block sales, onboarding, billing, or core workflow preempt roadmap work.
- Every completed project must either increase revenue, increase conversion, reduce churn risk, or reduce recurring operational time.

## Required Metrics

Track these weekly in [scoreboard.csv](/E:/开发区域/一人公司/ops/technical-system/scoreboard.csv):

- Demos booked
- Activation rate
- Time to first value
- Weekly active accounts
- Churned accounts
- MRR
- Open P1 bugs
- Deployment frequency
- Mean time to restore
- Engineering time spent by bucket

## Definition of Good Technical Leadership

The CTO is doing the job correctly when:

- engineering can explain how current work leads to revenue,
- the product gets simpler as it matures,
- customer requests turn into experiments before they turn into systems,
- reliability improves without creating a large internal platform,
- and the team says "no" more often than it starts side quests.
