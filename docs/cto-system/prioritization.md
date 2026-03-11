# Prioritization Filter

Use this before any project starts.

## Gate 1: Revenue Link

Answer in one sentence:

How does this work improve revenue, retention, or delivery margin within 90 days?

If the answer is weak, reject it.

## Gate 2: Metric

The project must have one primary metric:

- Visitor to lead conversion
- Lead to paid conversion
- Activation rate
- Retention
- Average revenue per account
- Gross margin
- Support hours per customer
- Deployment frequency
- Lead time to production

If there is no metric, reject it.

## Gate 3: Cheapest Valid Learning

Can we test this with:

- manual ops
- a spreadsheet
- a landing page
- a feature flag
- a narrow pilot
- a single-customer implementation

If yes, do that first.

## Gate 4: Complexity Cost

Score each from 1 to 5:

- customer impact
- confidence
- speed to learn
- ongoing maintenance cost
- system complexity added

Favor projects with:

- high impact
- high confidence
- fast learning
- low maintenance
- low complexity

## Project Classes

### Always Prioritize

- Funnel improvements
- Onboarding blockers
- Checkout issues
- Reliability issues in the core journey
- Support reduction for repeated customer pain

### Usually Defer

- Internal frameworks
- Generic platform abstractions
- Multi-tenant edge case hardening before customer demand
- Rewrite projects
- Dashboards with no decision owner

### Require CTO Review

- New infrastructure
- New databases
- New services
- AI initiatives
- Security work beyond baseline controls

## Project Brief Standard

Every approved project must fit on one page:

- problem
- affected customer
- target metric
- scope
- non-goals
- deadline
- kill condition
