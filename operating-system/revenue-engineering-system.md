# Revenue-First Engineering System

## 1. Company Objective

The technical team has one job: ship the smallest reliable system that creates cash flow and can be operated without chaos.

The default strategy is:

- sell before building
- automate after repetition
- generalize after proof
- hire after bottleneck

## 2. Decision Standard

Every project must answer these questions in one page before engineering starts:

1. What customer pain creates revenue within 30 days?
2. What is the smallest deliverable that gets paid?
3. What manual operation is acceptable before automation?
4. What metric will prove this work should continue?
5. What is explicitly out of scope?

If any answer is unclear, the project is not ready.

## 3. Work Portfolio

All engineering work fits one of four buckets:

- `Revenue Now`: directly tied to signed deals, active pipeline, checkout, onboarding, activation, retention, upsell.
- `Delivery Capacity`: work that removes a bottleneck blocking revenue work right now.
- `Risk Control`: security, reliability, compliance, or finance controls required to keep selling.
- `Exploration`: time-boxed bets with a decision date.

Portfolio limits:

- at least 60% of effort goes to `Revenue Now`
- at most 20% goes to `Delivery Capacity`
- at most 10% goes to `Risk Control` unless there is a concrete compliance or reliability event
- at most 10% goes to `Exploration`

Anything outside these buckets is backlog noise.

## 4. Product Architecture Principles

Architecture is optimized for speed of learning, not elegance.

- prefer one deployable product before multiple services
- prefer one database before polyglot persistence
- prefer boring infrastructure with strong defaults
- prefer configuration over customization
- prefer manual ops over premature internal tooling
- prefer vendor SaaS over custom systems when the process is not core IP

Default stack standard:

- one primary application codebase
- one primary relational database
- one analytics sink
- one queue only when async work is proven necessary
- one auth provider
- one billing provider

Introduce a second system only when the first is a measured bottleneck.

## 5. Delivery Model

Teams do not pull random backlog items. They execute a narrow loop:

1. identify revenue friction
2. quantify expected impact
3. ship smallest fix
4. measure outcome in production
5. either scale, simplify, or stop

Shipping standard:

- default project size: 1 to 5 days
- anything above 10 days must be split
- anything above 20 days needs a written reason from leadership
- exploration work expires automatically unless renewed with evidence

## 6. Metrics That Matter

Track these weekly:

- leads to active trials
- active trials to paid
- time from deal close to live customer value
- weekly recurring revenue added
- churned revenue
- incidents affecting customers
- engineering cycle time
- percent of roadmap tied to named customers or proven funnel issues

Stop tracking vanity metrics unless they explain one of the numbers above.

## 7. Engineering Guardrails

The CTO rejects work that has any of these smells:

- platform rewrite without customer pull
- internal framework creation without repeated pain
- infrastructure migration for aesthetics
- generic “scalability” work without usage evidence
- roadmap items with no owner, metric, or stop condition
- custom admin tools before trying the operation manually
- feature branches that stay open for weeks

## 8. Team Responsibilities

CTO:

- protect focus
- enforce the portfolio mix
- kill low-signal projects early
- define technical standards
- keep architecture simple

Engineering:

- ship in slices
- surface blockers early
- instrument outcomes
- document irreversible decisions

Product / Founder:

- bring customer evidence, not feature wishlists
- define success in business terms
- decide tradeoffs quickly

## 9. Operating Rules

- no project starts without an opportunity brief
- no build starts before deciding what will stay manual
- no feature ships without analytics or a measurable success proxy
- no major refactor starts during active revenue bottlenecks
- no tool is built internally if a vendor solves 80% of the need cheaply
- no work survives two review cycles without evidence

## 10. Exit Criteria

A project is complete only if one of these is true:

- it increased revenue
- it reduced time-to-cash
- it removed a current operating bottleneck
- it produced a clear “stop” decision that prevented waste

If none of these happened, treat it as a lesson, not an asset.
