# Technical System

Last updated: 2026-03-10
Owner: CTO
Mode: Cash first, software second

## Purpose

Define the minimum technical system the company is allowed to run during the current revenue window.

This file exists to answer four questions fast:
- what the company runs on
- where each type of information lives
- what engineering is allowed to improve
- when a manual workflow is finally allowed to become software

## System Design

The company runs on five layers:

| Layer | Purpose | Default implementation | Source of truth |
|------|------|------|------|
| Demand capture | turn traffic and outreach into conversations | static HTML pages + direct contact | `docs/` and `company/dashboard.md` |
| Qualification and quote | turn conversations into fixed-scope offers | markdown intake + offer packs | `company/dashboard.md` and `company/offers/` |
| Payment and order activation | turn accepted quotes into paid work | manual payment request + confirmation | `company/dashboard.md` and `company/operations/payment-runbook.md` |
| Delivery and QA | turn paid orders into predictable output | delivery kits + QA checklist | `company/delivery-kits/` and `company/operations/delivery-quality-checklist.md` |
| Proof and reuse | turn fulfilled work into assets that close the next sale | templates + dashboard pipeline | `company/dashboard.md` and `company/templates/` |

Rule:
No new system may be introduced unless it strengthens one of these five layers directly.

## Operating Contract

The technical system has one job:
- get a lead to quote faster
- get a quote to payment faster
- get a paid order into delivery faster
- get delivery out with fewer defects
- turn completed work into proof that helps close the next deal

Everything else is secondary.

The system is healthy only if:
- the CTO can review it in under 5 minutes
- the active build can ship in 1 day or less
- the system adds under 15 minutes per week of maintenance
- every engineering item is tied to one visible dashboard metric

## Stage Gate

The company does not earn the right to build more software by intention alone.

Current stage: Stage 0 - Manual traction

Stage 0 means:
- services first
- fixed-scope offers first
- static pages, markdown, templates, and local scripts only
- no persistent services, auth, or databases

Promotion to a later stage requires the triggers in:
- `company/operations/technical-roadmap.md`

## Sources Of Truth

Use exactly one source of truth for each operating concern.

| Concern | File or system |
|------|------|
| company command view | `company/dashboard.md` |
| engineering approval | `company/operations/engineering-intake-gate.md` |
| engineering queue | `company/operations/engineering-backlog.md` |
| lead-to-cash workflow | `company/operations/revenue-delivery-loop.md` |
| payment handling | `company/operations/payment-runbook.md` |
| active offers | `company/services/README.md` |
| delivery execution | matching file in `company/delivery-kits/` |
| public trust and conversion | static pages in `docs/` |

If information needs to live in two places, the system is too complex.

## Allowed Technical Surface

Allowed now:
- static website pages
- markdown files
- reusable templates
- local scripts with no hosting requirement
- manual payment handling
- manual CRM discipline inside the dashboard

Disallowed now:
- databases
- background jobs
- logins or user accounts
- admin apps
- custom CRM
- custom checkout
- webhook-based automation that needs monitoring

Approval bias:
- fix with page copy before code
- fix with templates before scripts
- fix with local scripts before hosted systems
- fix the offer before building tooling around the offer

## Revenue SLOs

These are the only technical service levels that matter right now.

| Metric | Target | Owner |
|------|------|------|
| lead logged after first contact | within 24 hours | CTO |
| standard quote sent after qualification | within 30 minutes | CTO |
| payment reminder after no confirmation | within 24 hours | CTO |
| standard offer start after payment confirmation | same day | CTO |
| standard delivery cycle | under 3 days | CTO |
| proof asset capture after accepted delivery | within 24 hours | CTO |

Any build that does not improve one of these SLOs or a directly connected revenue metric is outside the system.

## Default Stack

| Need | Current default | Upgrade trigger |
|------|------|------|
| website | static HTML in `docs/` | traffic exists and conversion is clearly bottlenecked |
| lead tracking | markdown tables in dashboard | 3 missed follow-ups in 7 days despite discipline |
| quote generation | offer packs + markdown template | 3 quote delays in 7 days from repeated copy work |
| payment collection | manual instructions | 3 payment delays in 7 days caused by payment friction |
| delivery execution | checklist-driven | 3 deliveries slowed by the same internal setup step |
| reporting | single dashboard file | dashboard stops fitting into a 5-minute review |

Upgrade rule:
Templates come before scripts. Scripts come before software. Software comes before platforms only when paid demand is already real.

## Engineering Budget

The company is allowed only this technical budget each week:
- 1 in-progress engineering item
- 1 metric attached to that item
- 1 day maximum for the smallest shippable version
- under 15 minutes per week of new maintenance

If a proposed build exceeds any of those limits, reduce it or reject it.

## Build Ladder

Every repeated operational problem must move through this ladder in order:
1. manual discipline
2. reusable template or checklist
3. static page or local script
4. narrow software only after stage-gate approval

Do not skip levels because a later level sounds cleaner.

## Escalation Triggers

Build only when pain is repeated or revenue is blocked.

| Trigger | Allowed response |
|------|------|
| one-off friction | manual fix |
| same issue appears twice | tighten copy, template, or checklist |
| same issue appears 3 times in 7 days | ship a local script or static-page improvement |
| live revenue blocked once | ship the smallest same-day fix |
| maintenance burden grows after shipping | kill or simplify the build |

## Deletion Rules

Delete or defer anything that:
- needs a second tracker
- adds maintenance without improving speed, quality, or conversion
- assumes future scale before repeated paid demand exists
- tries to solve a founder-discipline problem with software
- cannot be explained in one sentence tied to one metric

## Approved Build Categories In The Current Window

Only these technical categories are approved through 2026-04-09:
- order flow clarity on the website
- faster qualification and quote generation
- payment instruction consistency
- delivery kit improvements for active offers
- proof-asset capture tied to completed orders
- reporting that keeps the dashboard review under 5 minutes

If a build does not fit one of those categories, it belongs in backlog or product review.

## Definition Of Control

The technical system is under control only if the CTO can answer these in under 5 minutes:
- which leads need action today
- which quotes are awaiting response or payment
- which order is currently in delivery
- which asset should be captured after the next delivery
- which one build is still approved
- which metric should move because of that build

If not, simplify the system before adding any new capability.
