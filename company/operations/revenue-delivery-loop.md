# Revenue Delivery Loop

Last updated: 2026-03-10
Owner: CTO

## Purpose

Create one standard path from lead to cash to testimonial, with no extra software and no ambiguous handoffs.

## Loop

### 1. Capture

Goal:
Get every inbound or outbound conversation into the dashboard the same day.

Required fields:
- lead name
- source
- offer
- status
- next action
- next action date

SLA:
- new lead logged within 24 hours

### 2. Qualify

Goal:
Decide quickly whether the lead fits a standard offer.

Questions:
- what outcome does the customer want?
- which standard offer fits?
- what is the deadline?
- what scope variable drives price?
- is payment likely if quote is clear?

Decision:
- fit for a standard offer -> move to quote
- unclear scope -> ask one clarifying message
- low-fit custom request -> decline or re-scope

SLA:
- qualification completed within 24 hours

### 3. Quote

Goal:
Send a clear quote fast enough that speed itself becomes an advantage.

Use:
- `company/templates/offer-pack-template.md`
- the relevant offer pack in `company/offers/`

Quote must include:
- deliverables
- turnaround time
- revision limit
- price
- payment trigger
- what the client must provide

SLA:
- standard-offer quote sent within 30 minutes after qualification

### 4. Collect Payment

Goal:
Do not start real work without payment clarity.

Rules:
- small standard orders: full payment up front
- larger or custom orders: 50% deposit before start, 50% before final delivery
- payment method and proof are recorded in the dashboard

If payment is blocked:
- send a reminder within 24 hours
- stop delivery prep after 48 hours without confirmation

### 5. Deliver

Goal:
Execute from a checklist, not from memory.

Required before work starts:
- confirmed scope
- confirmed deadline
- confirmed payment state
- chosen delivery checklist

Rules:
- standard offers only
- maximum 2 revision rounds unless quote says otherwise
- all work passes QA before delivery

Use the matching delivery kit:
- content creation -> `company/delivery-kits/content-creation-checklist.md`
- code review -> `company/delivery-kits/code-review-checklist.md`
- research report -> `company/delivery-kits/research-report-checklist.md`

Use the universal QA gate:
- `company/operations/delivery-quality-checklist.md`

SLA:
- standard delivery cycle under 3 days

### 6. Convert to Proof

Goal:
Turn each order into the asset that helps win the next one.

Choose at least one:
- testimonial request
- before/after example
- anonymized case study
- reusable prompt or checklist

SLA:
- proof request sent within 24 hours of delivery acceptance

## Failure Modes and Response

| Failure | Response |
|------|------|
| Lead not followed up | Fix dashboard and next-action discipline first |
| Quote takes too long | tighten offer packs, do not build software first |
| Payment friction | simplify instructions before integrating anything |
| Delivery drags | reduce scope variability and strengthen checklists |
| No proof assets | make post-delivery ask part of definition of done |

## Definition Of Done

An order is not complete until:
- payment state is recorded
- delivery is sent
- revisions are closed or acknowledged
- one reusable asset is captured
- dashboard is updated
