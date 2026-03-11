# Execution Playbook

## Goal

Convert company strategy into a repeatable engineering operating loop that protects focus.

## Decision Filter

Before approving work, ask:

1. Does this help close deals, activate users, retain users, or reduce cost on a live path?
2. Is the problem observed in data, customer conversations, or delivery pain?
3. Can the first version ship inside one week?

If any answer is no, cut scope or defer.

## Priority Matrix

### P0

Revenue-critical breakage:

- checkout issues
- signup failures
- onboarding blockers
- production incidents on core workflows

### P1

Direct growth work:

- landing page experiments
- lead routing
- onboarding improvements
- retention mechanisms
- sales-enablement features tied to active deals

### P2

Efficiency work with short payback:

- automations replacing repeated manual steps
- observability for critical flows
- cost reductions on proven usage

### P3

Everything else. Default state: not started.

## Delivery Template

Each work item uses this template:

- Problem:
- Customer:
- Metric:
- Smallest shippable version:
- What we are explicitly not building:
- Launch date:
- Review date:
- Owner:

## Meeting Structure

### Weekly Product/Engineering Review

Agenda:

1. What shipped
2. What changed in the funnel
3. What is blocked
4. What gets cut

If a meeting does not change priority or remove risk, shorten it or remove it.

### Monthly Technical Review

Review:

- top incidents
- slowest delivery points
- major cost drivers
- tools to remove
- manual work ready for automation

## Build vs Buy Rules

Buy when:

- the workflow is common
- the tool is cheap relative to engineering time
- customization is not a differentiator

Build when:

- it touches the unique value proposition
- vendor limits block revenue
- workflow is frequent and stable

## Required Systems

Minimum stack categories:

- app runtime
- primary database
- auth
- billing
- analytics
- error tracking
- CRM
- email or messaging
- documentation

Anything beyond this needs a concrete business reason.

## Release Rules

- Ship behind flags if risk is meaningful
- Prefer narrow launches to broad launches
- Measure within 24 hours for critical flows
- Roll back fast if the metric moves the wrong way

## Technical Debt Policy

Pay debt only when it:

- slows weekly shipping
- causes recurring bugs
- increases customer-facing latency or failure
- materially raises cost

Debt is not cleaned for aesthetics.

## Automation Policy

Automate only after the manual process is:

- repeated
- understood
- stable

Otherwise automation locks in confusion.

## Hiring and Team Shape

Prefer small, product-minded engineers who can:

- talk to users
- ship end to end
- work inside tight constraints

Avoid role specialization too early. Generalists preserve speed.

## Red Flags

Escalate if you see:

- roadmap items without metrics
- projects with no launch date
- architecture discussions detached from customer pain
- more planning artifacts than shipped work
- rising complexity without rising revenue

## Usage

Use [cto-operating-system.md](E:\开发区域\一人公司\docs\cto-operating-system.md) as the company policy.

Use this playbook during planning, sprint selection, and technical reviews to enforce it.
