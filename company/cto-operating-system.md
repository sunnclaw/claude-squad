# CTO Operating System

Last updated: 2026-03-10
Owner: CTO
Mode: Revenue first, manual first, fixed-scope first

## Mission

Build the smallest technical system that turns demand into cash quickly, ships work with low defect risk, and compounds each delivery into reusable sales assets.

## CTO Mandate

The CTO is responsible for business leverage, not technical completeness.

In practice that means:
- choose the current bottleneck
- build only the smallest fix that relieves it
- measure whether the fix helped inside 7 days
- kill work that does not improve revenue speed, delivery speed, or delivery quality

## The Job of Engineering

Engineering is not here to build a company-shaped software platform.

Engineering exists to:
- increase lead-to-quote speed
- increase quote-to-payment speed
- reduce delivery cycle time
- reduce delivery defects
- convert completed work into proof and reusable assets

If a proposed build does not improve one of those five outcomes inside 30 days, it is not current work.

## The Technical System

The company runs on one lightweight technical system:
- static website pages to create demand and trust
- markdown operating files to control leads, quotes, orders, and decisions
- fixed-scope offer packs to keep sales and delivery repeatable
- delivery kits to start work from checklists instead of improvisation
- manual payment handling until real volume justifies software

This is the intentional first operating system, not temporary scaffolding.

Primary references:
- `company/technical-system.md`
- `company/dashboard.md`
- `company/operations/revenue-delivery-loop.md`
- `company/operations/engineering-intake-gate.md`
- `company/operations/engineering-scorecard.md`

## The Operating Constraint

This is a one-person company with AI leverage.

The scarce resources are:
- founder attention
- customer trust
- time to cash

The system must be optimized for:
- low coordination overhead
- low maintenance
- fast offer fulfillment

The system must reject:
- speculative infrastructure
- generic internal tooling
- broad product bets before offer traction exists

## Command Model

The company is run through four control loops:

| Loop | Primary metric | Default tool |
|------|------|------|
| Demand capture | qualified leads per week | website + dashboard |
| Quote and payment | quote response time and awaiting-payment count | offer packs + payment runbook |
| Delivery and QA | delivery cycle time and revision rate | delivery kits + QA checklist |
| Proof and reuse | proof assets per completed order | dashboard + templates |

Each week, only one loop can be treated as the engineering bottleneck.

Decision cascade:
1. protect live revenue
2. speed up the next sale
3. reduce delivery variance
4. capture proof
5. reject everything else

## Company Targets

The current revenue window is 2026-03-10 to 2026-04-09.

| Metric | Target | Why it matters |
|------|------|------|
| Qualified leads per week | 10 | Pipeline health |
| Quote response time | under 30 minutes for standard offers | Speed wins deals |
| Quote-to-paid conversion | 20%+ | Offer and sales quality |
| Delivery cycle time | under 3 days for standard work | Cash flow and trust |
| Gross margin | 80%+ | Prevent custom-work drag |
| Proof assets captured | 1 per completed order | Compounding sales evidence |

## Architecture Principles

### 1. Manual before software

Every new workflow follows this order:
1. manual step
2. reusable template
3. simple script
4. integrated software

Skipping steps is prohibited unless the manual version is already breaking under paid demand.

### 2. Fixed-scope before custom

The company sells standard offers first.

Custom work is allowed only when:
- the budget is materially higher
- scope is clear enough to price
- delivery can still be run with a checklist

### 3. One bottleneck at a time

At any moment there can be:
- 1 engineering priority
- 1 sales priority
- 1 delivery improvement priority

Everything else is backlog.

### 4. No parallel operating systems

The company runs from:
- one dashboard
- one intake gate
- one revenue delivery loop
- one payment runbook

If a new process cannot fit into those files, it probably should not exist.

### 5. Build only on repeated pain

Automation is approved only if at least one statement is true:
- it prevents lost leads or lost payment
- it saves more than 2 hours per week
- it shortens a customer-facing cycle time
- it reduces quality failures on paid work

### 6. The offer is the product until proven otherwise

The company currently monetizes:
- fixed-scope service outcomes
- trust through fast, clear delivery
- proof assets that increase close rate

It does not monetize:
- internal complexity
- speculative platforms
- automation that customers never see and revenue does not justify

## Technical Stack Policy

The default stack stays intentionally boring.

| Need | Default |
|------|------|
| Website | static HTML |
| Lead tracking | markdown tables |
| Quotes | markdown templates |
| Delivery tracking | folders plus checklists |
| Metrics | single dashboard file |
| Payments | manual instructions plus manual confirmation |

The following are disallowed before 2 paid orders exist:
- databases
- user accounts
- admin apps
- CRM builds
- backend order pipelines
- custom payment integrations
- analytics systems beyond simple manual tracking

Engineering budget:
- 1 in-progress build
- 1 owner
- 1 metric
- 1 day for the smallest shippable version
- under 15 minutes per week of added maintenance

## Build Versus Manual Matrix

Use this table before adding any software behavior:

| Situation | Response |
|------|------|
| One missed follow-up or one slow quote | fix the behavior manually |
| The same friction appears twice | tighten the template, checklist, or page copy |
| The same friction appears 3 times in 7 days | approve a small script or static-page improvement |
| A live order is blocked by the friction | ship a same-day minimal fix |
| The fix introduces hosting, auth, monitoring, or support burden | reject unless paid demand already covers that burden |

Default bias:
- fix with copy before code
- fix with templates before tooling
- fix with a static page before an app
- fix with one local script before any hosted service

## System Design

The company runs as four connected loops:
1. demand capture
2. quote and payment
3. delivery and QA
4. proof and reuse

Engineering only strengthens those loops.

The current system of record is:
- website pages for demand capture
- `company/technical-system.md` for technical architecture and upgrade triggers
- `company/dashboard.md` for command and control
- `company/operations/revenue-delivery-loop.md` for operating flow
- `company/operations/engineering-intake-gate.md` for build approval
- `company/operations/engineering-scorecard.md` for post-ship proof
- `company/operations/engineering-backlog.md` for approved and deferred work
- offer packs, delivery kits, and templates for fulfillment

Anything outside this system is overhead until real volume demands it.

## Revenue System Layers

### Layer 1: Revenue Capture

Purpose:
Turn conversations into tracked leads, clear quotes, and payment requests.

Allowed:
- landing pages
- order page
- contact links
- offer packs
- lead and quote tables
- payment instructions

Not allowed:
- custom CRM
- dynamic quoting software
- lead scoring systems

### Layer 2: Delivery Engine

Purpose:
Turn a paid order into a predictable delivery with minimal context switching.

Allowed:
- offer packs
- delivery kits
- QA checklists
- reusable prompt packs
- case study templates

Not allowed:
- generalized project management tooling
- speculative workflow automation
- custom internal platforms

### Layer 3: Command and Control

Purpose:
Force focus on the current bottleneck and expose whether builds are helping revenue.

Allowed:
- dashboard
- weekly review
- decision log
- engineering intake gate

Rule:
If a metric, order, or decision is not visible in command and control, it is not being managed.

### Layer 4: Stage-Gated Upgrades

Purpose:
Prevent engineering from scaling the system ahead of demand.

Use:
- `company/operations/technical-roadmap.md`

Rule:
No move from manual workflow to software is approved without the stage trigger being true in the dashboard.

## Engineering Capacity Allocation

Default weekly capacity:
- 60% paid delivery or delivery preparation
- 25% revenue infrastructure and website improvements
- 15% proof assets, cleanup, and review

If a live customer order requires attention, internal build work pauses.

## Daily CTO Run Sequence

Run in this exact order:
1. update lead tracker and overdue next actions
2. send quotes and follow-ups
3. confirm payment status and unblock awaiting-payment deals
4. execute active delivery from the relevant delivery kit
5. capture proof assets or update the offer pack with what was learned
6. update the dashboard and kill, defer, or recommit distracting builds

If time runs short, steps 1 through 3 outrank everything else.

## Engineering Output Standard

Each engineering week should leave exactly three things:
- one shipped change tied to one metric
- one updated template, checklist, or offer pack
- one deleted, deferred, or rejected idea

This prevents engineering from becoming a queue of unfinished possibilities.

## Definition Of A Controlled Week

A week is under control only if all of these are true by Friday:
- the current bottleneck stayed singular
- no second source of truth was created
- the active build shipped or was killed
- every quoted lead has a next action
- every paid order has a defined proof asset

## Build Gate

Before starting any technical work, the answer to all five questions must be yes:

| Question | Required answer |
|------|------|
| Will this move revenue, payment speed, delivery speed, or quality within 30 days? | Yes |
| Is the current manual process already causing pain on real work? | Yes |
| Has the pain repeated at least 3 times in 7 days or blocked real revenue once? | Yes |
| Can the smallest useful version ship in 1 day or less? | Yes |
| Is there one owner and one metric to watch after shipping? | Yes |

Use `company/operations/engineering-intake-gate.md` before starting.

## Automation Thresholds

Use these thresholds before turning a manual process into software:

| Situation | Default response |
|------|------|
| Happened once | fix manually |
| Happened twice | write a template or checklist |
| Happened 3 times in 7 days | consider a small script |
| Blocks payment or delivery on live work | ship a same-day fix |
| Requires ongoing monitoring or support | reject unless revenue already justifies it |

Small script means:
- static page change
- markdown template
- copy-paste helper
- local script with no persistent service

Not small script:
- hosted backend
- webhook workflow that needs monitoring
- database-backed tracker
- anything requiring auth or user management

## Revenue Escalation Thresholds

Escalate only when the numbers justify it.

| Trigger | Allowed response |
|------|------|
| 3 missed follow-ups in 7 days | consider a stronger tracker or reminder aid |
| 3 payment delays caused by unclear instructions | improve payment copy or add a simple payment page |
| 3 deliveries slowed by repeated internal setup work | strengthen or automate the delivery kit |
| 5 paid orders in one offer category | re-evaluate whether a narrow tool or product is justified |
| 2 weeks with no metric movement from an internal build | kill it and return to direct sales or delivery work |

## Weekly Operating Cadence

### Monday

1. Review dashboard metrics.
2. Identify the single bottleneck.
3. Choose exactly one engineering priority.
4. Delete or defer at least one non-critical task.

### Daily

Run in this order:
1. check new leads and inbox
2. send quotes and follow-ups
3. confirm payment status
4. execute delivery blocks
5. capture proof assets or update templates
6. update dashboard before stopping

### Friday

1. Review leads, quotes, paid orders, revenue, cycle time, and proof assets.
2. Decide whether the current engineering change helped.
3. Keep, expand, or kill the change.
4. Reset next week's single engineering priority.

## Standard of Technical Work

Every shipped change should do at least one of these:
- remove a manual step from quoting or payment
- reduce delivery variability
- improve the clarity of an active offer
- make the next order faster to start or easier to close

Every completed customer order should leave one asset:
- checklist
- quote improvement
- prompt pack
- reusable snippet
- case study
- testimonial

No silent delivery. No silent learning.

## Definition Of A Good Build

A build is good only if all of these are true:
- it made one revenue metric move or removed one recurring blocker
- it reduced founder decision load instead of adding another place to check
- it is easy to explain in one sentence
- it can be maintained in less than 15 minutes per week
- it did not create a second source of truth

If a change fails those tests, it is process debt.

## Technical Debt Policy

Technical debt matters only when it threatens:
- conversion
- payment collection
- delivery speed
- delivery quality
- maintenance load on the current system

Refactoring for neatness alone is not approved during the current revenue window.

## Approved 30-Day Build Categories

Only these categories are approved during the current window:
- lead capture and order intake
- quote and payment support
- delivery kits for active offers
- dashboard reporting tied to the funnel
- proof-asset capture tied to completed work

Each approved build also needs:
- one written scorecard
- one 7-day keep / expand / kill decision
- one clear maintenance owner
- one explicit reason the manual process is no longer enough

Everything else is backlog.

## Kill Rules

Stop work immediately if:
- it shows no visible revenue effect after 7 days
- it requires backend infrastructure before paid demand justifies it
- it increases maintenance without increasing pricing power
- it improves polish but not conversion, speed, or quality
- it creates a second system for tracking the same information

## Definition Of System Control

The technical system is under control when the CTO can answer these questions in under 5 minutes:
- Which leads need action today?
- Which quotes are awaiting response or payment?
- Which paid orders are active?
- What is the current engineering bottleneck?
- What single build is in progress?
- Which proof asset should be captured next?

If answering any of those takes longer, simplify the system before adding to it.

## Files That Run This System

- `company/technical-system.md`
- `company/dashboard.md`
- `company/operations/revenue-delivery-loop.md`
- `company/operations/engineering-intake-gate.md`
- `company/operations/engineering-scorecard.md`
- `company/operations/engineering-backlog.md`
- `company/operations/payment-runbook.md`
- `company/services/README.md`

If a proposal cannot be represented inside these files, challenge it before building it.
