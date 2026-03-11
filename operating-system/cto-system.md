# CTO System

## Objective

Build only what increases revenue, shortens time-to-value, or reduces delivery risk for the current revenue engine.

Use this rule for every technical decision:

1. Does it help us close, onboard, retain, or expand paying customers within 90 days?
2. Does it reduce a delivery bottleneck that is already slowing revenue?
3. If neither is true, do not build it now.

## Company Operating Thesis

The company should run a single tight loop:

1. Find one painful customer workflow.
2. Ship the smallest product that solves it end-to-end.
3. Instrument activation, conversion, and retention.
4. Talk to customers weekly.
5. Double down only after real usage or revenue confirms the bet.

Engineering exists to compress this loop, not to perfect systems in advance.

## Technical Strategy

### What We Optimize For

- Shipping customer-visible value every week
- Low operational overhead
- Fast feedback from production
- Easy pricing and packaging changes
- Clear ownership of the revenue funnel

### What We Explicitly Avoid

- Multi-service architectures before scale requires them
- Platform teams before product-market pull exists
- Internal frameworks unless they remove repeated pain today
- Complex event-driven systems for simple product workflows
- Premature performance work without measured bottlenecks

## Default Architecture

Use the simplest stack that can support revenue for the next 12 months.

### Recommended Shape

- One primary app
- One primary relational database
- One background job system
- One analytics layer
- One payment system
- One CRM / support system

### Practical Baseline

- Frontend + backend in a single deployable product where possible
- Postgres as the system of record
- REST or server actions before introducing GraphQL
- Queue-based async jobs for email, imports, AI tasks, and webhooks
- Stripe for billing
- PostHog or equivalent for product analytics
- Sentry or equivalent for error tracking

### Service Split Rule

Do not create a separate service unless all three are true:

1. The domain has clearly different scaling or security needs.
2. Separate deployment materially reduces risk or team coupling.
3. The boundary has already become painful in the monolith.

## Revenue-Critical Product Surface

Prioritize these systems in order:

1. Acquisition capture
2. Demo / trial onboarding
3. Core value delivery
4. Billing and upgrade paths
5. Retention and reactivation
6. Internal admin tools that unblock the above

If the roadmap is crowded, cut from the bottom first.

## The Four Core Workstreams

Every sprint should map work into one of these buckets:

### 1. Revenue

- Checkout
- Pricing
- Trial conversion
- Upsells
- Sales enablement

### 2. Activation

- Time to first value
- Onboarding automation
- Empty-state removal
- Data import and setup

### 3. Retention

- Reliability
- Usage reporting
- Notifications
- Habit-forming workflows

### 4. Leverage

- Developer productivity
- Internal tooling
- Test coverage on critical paths
- Automation for repeated support or ops work

Leverage work only ships when it clearly accelerates one of the first three.

## Engineering Focus Rules

### The 70/20/10 Allocation

- 70% on current revenue bottlenecks
- 20% on retention and reliability
- 10% on technical debt with immediate business payoff

Do not reserve budget for speculative R&D unless explicitly approved.

### The Kill List

Default answer is no for:

- Rewrites
- Design system rebuilds
- Migrations without a live business problem
- Abstraction work before the third real use case
- Feature requests from non-paying edge cases

### The Two-Week Rule

Any project that cannot produce user-visible or revenue-relevant output within two weeks must be broken down further or stopped.

## Delivery System

### Weekly Cadence

Monday:

- Review pipeline metrics
- Review top customer friction
- Pick one primary outcome for the week

Wednesday:

- Demo current progress
- Cut non-essential scope
- Confirm instrumentation is in place

Friday:

- Ship
- Review learnings
- Update the scoreboard

### Shipping Standard

Every shipped feature should include:

- A clear user problem
- A measurable success metric
- Event tracking
- Basic logging / error visibility
- Owner for follow-up

If it lacks measurement, it is not done.

## Scoreboard

Track a small set of numbers weekly:

- New qualified leads
- Trial or demo starts
- Activation rate
- Time to first value
- Paid conversion rate
- Net revenue retained
- Weekly active accounts
- Failed payments
- Uptime on core workflow
- Support tickets per active account

Use trends, not vanity totals.

## Technical Decision Filter

Before approving any work, answer this:

1. What business metric moves if we ship this?
2. What customer segment needs it now?
3. What is the smallest version we can ship in 1 week?
4. How will we measure success?
5. What existing system can we reuse instead of building more?

If these answers are weak, do not start.

## Reliability Standard

Reliability matters most on the money path and core value path.

Tier 1:

- Signup
- Login
- Onboarding
- Core product workflow
- Billing

Tier 1 requirements:

- Automated coverage on critical path
- Error tracking
- Alerting
- Rollback plan

For lower-tier areas, prefer manual QA and lightweight monitoring until usage justifies more.

## Build vs Buy

Buy by default for:

- Payments
- Auth
- Analytics
- Email delivery
- CRM
- Support chat
- Basic admin workflows

Build only where differentiation compounds.

## Team Rules

- Product, engineering, and go-to-market review the same scoreboard.
- No roadmap item enters a sprint without an owner and metric.
- No engineer works on more than one major initiative at a time.
- Bugs on checkout, onboarding, and core delivery preempt feature work.
- Customer calls outrank internal opinions.

## First 30 Days

### Days 1-7

- Define ideal customer profile and one primary use case
- Map the funnel from lead to paid to retained
- Instrument the funnel
- Identify top three revenue bottlenecks

### Days 8-14

- Ship fixes to the biggest activation bottleneck
- Tighten billing and pricing flows
- Create internal admin shortcuts for manual ops

### Days 15-21

- Add retention triggers for inactive or stuck users
- Improve reliability on Tier 1 flows
- Remove one repeated support burden with product or automation

### Days 22-30

- Review data
- Kill low-signal work
- Double down on the best-performing loop
- Lock the next 30-day roadmap around one growth constraint

## Non-Negotiables

- Measure before debating
- Keep architecture boring
- Ship weekly
- Talk to users weekly
- Protect focus aggressively
- Do not scale complexity ahead of revenue
