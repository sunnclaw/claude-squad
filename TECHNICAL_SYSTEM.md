# Technical System

## Objective

Build only what increases revenue speed, customer learning speed, or delivery reliability.

The company technical system exists to:

1. Ship revenue-linked product changes quickly.
2. Keep engineering focused on one bottleneck at a time.
3. Prevent architecture and feature overbuilding.
4. Make operating cadence explicit so the team can repeat it.

## Operating Principles

### 1. Revenue First

Every engineering task must map to one of these:

- Acquire customers
- Activate users
- Convert to paid
- Retain paying users
- Reduce delivery cost for the above

If a task maps to none of them, it does not enter the active sprint.

### 2. One Product Bet at a Time

Run only one primary growth bet per cycle.

Examples:

- Improve onboarding conversion
- Shorten time-to-value
- Add a paid tier trigger
- Improve outbound demo flow

All other work is maintenance unless the CTO explicitly promotes it.

### 3. Default to Thin Slices

Ship the smallest version that can:

- be sold,
- be measured,
- and be supported manually if needed.

Avoid platform work until repeated pain proves the need.

### 4. Manual Before Automated

If a workflow can be done manually for the first 10 to 30 customers, keep it manual.

Automation is justified only when:

- the task is repeated often,
- the manual cost is visible,
- and the workflow is already stable.

### 5. Instrument Before Optimizing

No major feature ships without:

- an owner,
- a success metric,
- an event or outcome to measure,
- and a rollback condition.

## System Architecture

Keep the architecture intentionally boring.

### Core Stack

- One application codebase
- One primary database
- One analytics/event pipeline
- One billing system
- One CRM or customer pipeline
- One support inbox
- One deployment pipeline

### Recommended Shape

- Frontend: one web app
- Backend: one API/service boundary unless scale clearly demands more
- Data: Postgres as system of record
- Auth: managed auth provider
- Billing: Stripe
- Analytics: product analytics plus basic warehouse export later
- Infra: managed hosting first, containers only when needed

### System Boundaries

Split the system into only these domains early:

1. Product app
2. Marketing site
3. Billing and entitlements
4. Analytics and reporting
5. Internal ops tooling

Do not create microservices for these unless operational pressure is already real.

## Delivery System

### The Revenue Board

Use one prioritized board with these columns:

1. Pipeline
2. This Week
3. In Progress
4. Awaiting Customer Feedback
5. Done

Every item must include:

- problem statement,
- linked revenue metric,
- owner,
- scope cap,
- ship date,
- success check date.

### Task Admission Rules

A task is allowed into `This Week` only if:

- it supports the current growth bet,
- it can be shipped in 1 to 3 days,
- the user impact is clear,
- and the metric is defined.

If bigger, split it.

### Weekly Cadence

Monday:

- Review funnel metrics
- Identify the biggest bottleneck
- Choose one weekly bet
- Lock scope

Daily:

- 15-minute engineering sync
- Review blockers, production issues, and live experiments

Friday:

- Demo shipped changes
- Review metric movement
- Decide: double down, revise, or kill

### Definition of Done

Work is done only when:

- shipped to production,
- basic analytics added,
- sales/support know what changed,
- and post-ship metric check is scheduled.

## Anti-Overbuilding Controls

### Build / Buy / Wait Filter

Before implementation, answer:

1. Can we sell without building this?
2. Can an existing tool cover 80%?
3. Can we fake this manually for now?
4. What evidence says this is the bottleneck now?
5. What breaks if we do nothing for 30 days?

If answers are weak, do not build.

### Scope Caps

For any initiative, define:

- max engineering days,
- max number of screens/endpoints touched,
- max number of new abstractions introduced.

Default cap:

- 3 engineering days
- 1 core flow
- 0 new platforms

### Architectural Approval Rules

CTO approval required for:

- new infrastructure vendors,
- new services or repos,
- background job systems,
- complex permission systems,
- internal frameworks,
- and any refactor without immediate customer or delivery impact.

### Refactor Policy

Refactor only when one of these is true:

- it is blocking a live revenue task,
- it reduces repeated incident risk,
- or it cuts recurring developer time materially.

No speculative cleanup projects.

## Metrics System

Track a minimal company scoreboard.

### Business Metrics

- Leads per week
- Activated accounts per week
- Trial-to-paid conversion
- MRR
- Net revenue retention or basic logo retention
- Payback period if outbound/sales-assisted

### Product Metrics

- Time to first value
- Core action completion rate
- Weekly active accounts
- Feature adoption for new bets

### Engineering Metrics

- Cycle time
- Production incidents
- Rework rate
- % roadmap tied directly to revenue bets

Target:

At least 70% of engineering time must map directly to acquisition, activation, conversion, or retention.

## Execution Model

### Team Structure

Keep a simple functional split:

- CTO owns technical direction, architecture approval, and delivery discipline
- Product/Growth owner defines bottleneck and success metric
- Engineers ship thin slices tied to the weekly bet

If the company is very small, one person may hold multiple roles, but the decisions remain separate.

### Project Types

There are only four work types:

1. Growth
2. Core product value
3. Reliability
4. Mandatory admin/compliance

Growth gets priority unless reliability risk is acute.

### Capacity Allocation

Default weekly allocation:

- 60% current revenue bottleneck
- 20% core product improvements
- 10% reliability
- 10% cleanup/admin

If incidents rise, temporarily increase reliability allocation.

## Technical Standards

### Default Choices

- Prefer managed services over self-hosting
- Prefer monolith over distributed systems
- Prefer explicit SQL/data models over premature data abstractions
- Prefer server-rendered or simple app flows over complex client state
- Prefer feature flags over long-lived branches

### Required Guardrails

- Production error tracking
- Basic audit logs for critical actions
- Backups and restore test for primary database
- Staging only if it does not slow shipping materially
- CI for tests, lint, and deploy checks

### Testing Policy

Test depth follows risk:

- Critical billing/auth/core flows: automated coverage required
- Normal product flows: focused integration coverage
- UI polish: manual verification acceptable initially

Do not spend a week building a test harness for a feature that may be deleted next month.

## First 30 Days

### Week 1

- Define primary funnel and current bottleneck
- Map existing system and tools
- Remove or pause low-value engineering work
- Set up company scoreboard

### Week 2

- Instrument activation and conversion events
- Create the revenue board and weekly operating cadence
- Identify top 3 product friction points from customer calls and data

### Week 3

- Ship first thin-slice growth bet
- Review sales/support feedback
- Measure movement within 3 to 7 days

### Week 4

- Double down on what moved the metric
- Kill or pause the rest
- Document repeated ops pain before automating

## Required Artifacts

The company should maintain these lightweight documents:

1. `TECHNICAL_SYSTEM.md`
2. `REVENUE_SCOREBOARD.md`
3. `CURRENT_BOTTLENECK.md`
4. `ARCHITECTURE_DECISIONS.md`
5. `WEEKLY_BET_TEMPLATE.md`

Each should stay short and operational.

## CTO Rules

Use these rules aggressively:

- No platform project without customer evidence.
- No rewrite to fix discomfort alone.
- No feature without a metric and owner.
- No more than one major bet at a time.
- No architecture added for hypothetical scale.
- No automation before repeated manual pain.
- No refactor that does not unblock revenue or reliability.
