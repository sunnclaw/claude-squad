# Revenue Engineering System

This system exists to do three things:

1. Ship work that creates or protects revenue.
2. Keep engineering focused on the smallest useful version.
3. Make overbuilding expensive and visible.

## Core Rules

### 1. Revenue before elegance

If a project does not clearly support one of these outcomes, it does not start:

- Win new customers
- Activate users faster
- Improve retention
- Increase expansion or upsell
- Reduce meaningful operating cost
- Remove a blocker for sales or support

### 2. One metric per bet

Every engineering bet must name one primary metric before build starts.

Examples:

- Trial to paid conversion
- Time to first value
- Weekly retained teams
- Gross margin per customer
- Demo to close rate

If the metric is not measurable within 2 to 6 weeks, the bet is too vague or too large.

### 3. Default to the smallest sellable thing

Teams should build the smallest version that can be sold, tested, or manually supported.

Use this order:

1. Manual service
2. Internal tooling
3. Narrow product feature
4. Generalized platform

Do not jump levels unless the lower level is already failing.

### 4. No platform work without pull

Platform, abstractions, frameworks, or infra investments require one of these:

- A live customer or revenue workflow is blocked
- The same pain occurred at least 3 times in 30 days
- The change removes at least 20 percent of delivery time on a repeated path

Otherwise, keep local duplication and move on.

### 5. Every project has a kill condition

Before work starts, write the condition that will stop the project.

Examples:

- Fewer than 3 customer teams use it within 30 days
- No measurable lift in activation after 2 onboarding cycles
- Sales still cannot demo it without manual setup

If the kill condition is met, stop or cut scope. Do not rescue the project with more architecture.

## Operating Cadence

### Weekly

- Monday: choose one company bet and one engineering debt item
- Wednesday: review customer evidence and delivery risk
- Friday: ship review, metrics review, and kill or continue decisions

### Monthly

- Re-rank the opportunity list
- Delete stale projects
- Review where engineering time went
- Review revenue impact from shipped work

## Required Artifacts

Every meaningful initiative must have:

1. `templates/opportunity-brief.md`
2. `templates/bet-plan.md`
3. `templates/decision-record.md` when scope changes materially

Use `templates/weekly-focus.md` for weekly execution.

## Execution Model

### Step 1: Capture opportunities

All new ideas become opportunity briefs. The burden is on proving revenue relevance, not technical appeal.

### Step 2: Score before building

Run the opportunity through `scripts/score-opportunity.js`.

Priority is determined by:

- Revenue impact
- Confidence
- Time to result
- Delivery complexity
- Strategic pull from customers, sales, or support

### Step 3: Commit to a narrow bet

The bet plan must define:

- The user segment
- The painful job to solve
- What is intentionally out of scope
- How the team will fake or manually support missing pieces
- The success metric and kill condition

### Step 4: Ship in slices

No initiative should wait for a "complete" launch if partial value can be delivered sooner.

Preferred slice order:

1. Internal-only or concierge flow
2. Design partner release
3. Limited production release
4. Default release

### Step 5: Review impact fast

Within 2 to 6 weeks:

- Continue and invest
- Keep but do not expand
- Roll back
- Convert to manual service
- Kill

## Guardrails Against Overbuilding

Use these defaults unless there is hard evidence otherwise:

- One codepath before multiple configuration-heavy variants
- Manual ops before automation
- Existing storage before new databases
- Existing auth before custom permissions models
- Existing queues before event-driven redesigns
- Existing UI patterns before design-system expansion

Questions that should stop a review:

- Who is paying for this?
- What metric moves if we ship only half of this?
- Why can't this be manual for 30 days?
- What happens if we never generalize this?
- What will we delete if this works?

## Engineering Capacity Rules

Suggested allocation:

- 60 percent revenue bets
- 20 percent activation, retention, and support leverage
- 20 percent debt and reliability

Debt work must be tied to one of:

- Incident reduction
- Faster shipping on repeated paths
- Lower support burden
- Material infrastructure cost reduction

## CTO Review Standard

Approve work only when all are true:

- Customer and revenue connection is explicit
- Scope is narrow enough to ship quickly
- Measurement is defined
- Kill condition is defined
- Manual fallback exists

Reject or cut scope when:

- The proposal starts with architecture, not customer pain
- The first release requires cross-system redesign
- The team wants to solve future scale without current pull
- The proposal cannot name a decision deadline

## Adoption

1. Start a single ranked backlog of opportunities.
2. Require the opportunity brief for all new work above one day.
3. Require the bet plan for all work above one week.
4. Review active bets every Friday against metrics and kill conditions.
5. Archive or kill aggressively.

This is a revenue operating system, not a documentation exercise. If a template is not changing decisions, simplify it.
