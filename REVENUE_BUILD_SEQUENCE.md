# Revenue Build Sequence

## Purpose

Translate the CTO system into a practical execution order so engineering does not overbuild.

## Rule

Never work on a lower phase while a higher phase is materially broken.

## Phase 0: Foundation That Sells

Goal: make the business able to capture demand and charge money.

Build:

- marketing site
- lead capture or signup flow
- analytics
- auth
- account model
- billing and subscription model
- error tracking

Exit criteria:

- users can sign up,
- users can start a trial or pay,
- core funnel is measurable,
- failures are visible.

## Phase 1: Core Value

Goal: one complete workflow that produces the paid outcome.

Build:

- the single core input flow
- processing logic
- output/result view
- saved history
- minimal empty/loading/error states

Exit criteria:

- a target customer can complete the job without human intervention,
- first value happens reliably,
- there is evidence of repeat use or clear willingness to pay.

## Phase 2: Conversion Tightening

Goal: remove friction between value and payment.

Build:

- plan gating
- upgrade prompts at value moments
- pricing clarity improvements
- onboarding simplification
- checkout recovery and failed payment handling

Exit criteria:

- trial-to-paid conversion is improving,
- support requests about pricing or checkout are decreasing,
- onboarding drop-off is understood and acted on.

## Phase 3: Retention Loop

Goal: make the product habit-forming enough to sustain revenue.

Build:

- reminders or notifications
- activity/history
- lightweight reporting or proof-of-value views
- team/invite features only if required by the ICP

Exit criteria:

- returning usage increases,
- users can see accumulated value,
- churn reasons are narrowing.

## Phase 4: Efficiency

Goal: reduce manual work after revenue signals exist.

Build:

- admin tooling for frequent support actions
- import/export tools
- selective automation for repetitive ops
- performance fixes on proven hot paths

Exit criteria:

- support overhead per customer decreases,
- engineering time lost to repetitive work decreases,
- reliability supports current growth.

## Phase 5: Scale

Goal: address actual capacity or organizational bottlenecks, not imagined ones.

Allowed work:

- data partitioning
- queue hardening
- service separation
- advanced permissions
- deeper observability

Only enter this phase when there is hard evidence:

- sustained load,
- repeated reliability incidents,
- large customer requirements,
- multi-team coordination pressure.

## Stop List

Do not build these early unless a live customer or critical metric forces it:

- microservices
- custom design systems
- workflow builders
- plugin ecosystems
- generalized permissions frameworks
- event buses
- real-time collaboration
- ML infrastructure
- internal platform tooling
- multi-region deployment

## Weekly CTO Review

Score each planned task from 1 to 5 on:

- revenue impact
- learning speed
- customer urgency
- implementation effort inverse

Prioritize the highest combined score. Kill or defer the rest.
