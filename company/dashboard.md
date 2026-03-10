# Company Dashboard

Last updated: 2026-03-11 (CEO Agent heartbeat - Session 2)
Owner: CEO
Mode: Revenue first
Window: 2026-03-11 to 2026-04-10

## Command Center

This file is the single operating view for the company.

If work is real, it should appear here:
- leads
- quotes
- paid orders
- active delivery
- proof assets
- current bottleneck
- one engineering priority
- one stop-doing decision

Control rule:
- if it is not visible here, it is not controlled
- if it is controlled somewhere else, that other system should probably be deleted

Related system files:
- `company/technical-system.md`
- `company/operations/technical-roadmap.md`
- `company/operations/engineering-backlog.md`
- `company/operations/engineering-scorecard.md`

## North Star

The current goal is to reach the first repeatable paid orders without building infrastructure that the company cannot yet justify.

Success by 2026-04-09:
- 40 qualified leads contacted
- 8 quotes sent
- 2 paid orders closed
- 2 proof assets published

## Scoreboard

| Metric | Current | Target | Status |
|------|------|------|------|
| Qualified leads this week | 0 | 10 | Red |
| Quotes sent this week | 0 | 2 | Red |
| Paid orders this month | 0 | 2 | Red |
| Revenue this month | CNY 0 | CNY 1,000+ | Red |
| Standard quote response time | Unknown | under 30 min | Yellow |
| Average delivery cycle time | Unknown | under 3 days | Yellow |
| Proof assets captured | 0 | 2 | Red |

## Stage Gate

| Control | Current state | Rule |
|------|------|------|
| Operating stage | Stage 0 - Manual traction | No software expansion before stage trigger is met |
| Allowed systems | Static pages, markdown, templates, local scripts | Anything beyond this must pass roadmap review |
| Upgrade pressure | None approved | Repeated paid-demand pain only |

## System Health

| Control question | Current answer | Status |
|------|------|------|
| One source of truth for leads, quotes, and orders | Yes, dashboard | Green |
| One in-progress engineering item only | Yes | Green |
| Every build tied to one metric | Yes, active scorecard in place | Green |
| New maintenance under 15 min per week | Yes | Green |
| Any pressure for backend or app work | Deferred until paid demand repeats | Green |

## Current Bottleneck

**PRIMARY:** Email provider configuration (blocks all outreach) - **CRITICAL FOR 2+ DAYS**

The email pipeline is ready but requires Resend API key setup. This blocks the Sales Manager from executing outreach to 5 ready clinics.

**CEO Actions Taken:**
- Created CLA-43: CEO Directive for email provider configuration
- Created CLA-44: Alternative revenue channels exploration
- Monitoring daily for resolution

**SECONDARY:** Lead generation pipeline

Once email is configured, the bottleneck shifts to:
- Sending cold outreach emails (5 clinics ready)
- Converting responses to qualified leads
- Closing first paid orders

Escalation trigger:
- If email configuration is not complete by 2026-03-12, consider alternative channels (LinkedIn, direct website contact)

## Active Priorities

### Single engineering priority

**Configure email provider for outreach execution** (TASK-2026-03-11-001)

This is the critical blocker. Once complete:
- Sales Manager can begin email outreach to 5 ready clinics
- Revenue pipeline unblocks

Exit criteria:
- Resend API key configured
- Test email sent successfully
- Sales Manager notified

### Single sales priority

**Execute email outreach once unblocked**

Ready clinics (5 total):
1. STEINER DENTAL (Austin) - info@steinerdental.com
2. WAVE DENTAL (Houston) - wavedentaltx@gmail.com
3. LUXE DENTAL (Dallas) - luxedental@gmail.com
4. ICON DENTAL (Denver) - info@icondentaldenver.com
5. CODY DENTAL GROUP (Denver) - info@codydental.com

Target: 5 qualified leads from initial outreach.

### Single delivery improvement priority

Use the new delivery kits on live work and tighten them after the first paid orders.

## Daily Run Sequence

Run work in this order every day:
1. clear overdue lead and quote follow-ups
2. send any standard quotes due today
3. confirm awaiting-payment deals and send reminders
4. execute delivery blocks for paid work
5. capture proof assets and improve the relevant template
6. update this dashboard before stopping

If time is constrained, steps 1 through 3 win.

## Weekly Commit

This week succeeds only if these three statements are true by Friday:
- standard quotes are sent in under 30 minutes for active offers
- every quoted lead has a next action and due date
- payment instructions are identical across website, quote, and ops docs

## Today

The CTO only needs these answers to operate:
- Which leads need action today?
- Which quotes are awaiting response or payment?
- Which paid order needs the next delivery block?
- Which proof asset should be captured next?
- What is the one build still allowed to stay in progress?

Today is under control only if:
- every open lead has a next action and date
- every quoted lead is either awaiting response, awaiting payment, won, or lost
- no unpaid work is being delivered
- the active build still maps to the current bottleneck

## Stop Doing

- no new offer design work
- no speculative automation
- no website polish that does not improve order flow or trust

## WIP Limits

| Lane | Limit | Current |
|------|------|------|
| Engineering priorities | 1 | 1 |
| Sales experiments | 2 | 0 |
| Delivery improvements | 1 | 1 |
| Internal tooling projects | 1 | 1 |

## Funnel Snapshot

| Stage | Count | Target pace |
|------|------|------|
| New leads | 0 | 10 per week |
| Qualified leads | 0 | 5 per week |
| Quotes sent | 0 | 2 per week |
| Awaiting payment | 0 | 2 active |
| Paid orders | 0 | 2 this month |
| Completed with proof asset | 0 | every order |

## Aging Triggers

| Situation | Threshold | Required action |
|------|------|------|
| Lead without next action | same day | update immediately |
| Quote without follow-up | 24 hours | follow up or close lost |
| Awaiting-payment quote | 48 hours | send reminder or close lost |
| Active build without progress | 7 days | keep, reduce, or kill |
| Internal build older than | 14 days | stop and re-scope |

## Revenue Rules

- No work starts without payment clarity.
- No internal project outranks a live customer order.
- No order is complete until one proof asset exists.
- No new service line is active until an existing one has repeatable proof.
- No second tracker is allowed for leads, quotes, or orders.

## Lead Tracker

| Lead ID | Name | Source | Offer | Status | Next action | Due date | Owner |
|------|------|------|------|------|------|------|------|
| L-001 |  |  |  | New |  |  | CTO |
| L-002 |  |  |  | New |  |  | CTO |
| L-003 |  |  |  | New |  |  | CTO |

Status options:
- New
- Qualified
- Quoted
- Awaiting payment
- Paid
- Closed lost
- Completed

Rule:
No lead row may have a blank `Next action` and `Due date`.

## Quote Tracker

| Quote ID | Lead | Offer | Value | Sent date | Valid until | Status | Next action |
|------|------|------|------|------|------|------|------|
| Q-001 |  |  |  |  |  | Draft |  |
| Q-002 |  |  |  |  |  | Draft |  |

Quote status options:
- Draft
- Sent
- Awaiting response
- Awaiting payment
- Won
- Lost

Rule:
Every sent quote must have a `Next action`.

## Awaiting Payment Tracker

This section provides visibility into all quotes awaiting payment confirmation.

| Quote ID | Customer | Offer | Amount | Payment sent date | Reminder sent | Next action | Due date |
|------|------|------|------|------|------|------|------|
| (none) |  |  |  |  |  |  |  |

Rules:
- Every awaiting-payment quote must have a next action and due date
- Send reminder after 24 hours if no payment confirmation
- Escalate or close after 48 hours if still no response
- Move to Paid Orders once payment confirmed

## Paid Orders

| Order ID | Customer | Offer | Amount | Payment state | Payment method | Confirmed date | Start date | Due date | Delivery state |
|------|------|------|------|------|------|------|------|------|------|
| ORD-001 |  |  |  | Unpaid |  |  |  |  | Not started |

Payment state options:
- Unpaid
- Deposit paid
- Paid in full

Payment methods:
- WeChat Pay
- Alipay
- Bank transfer

Delivery state options:
- Not started
- In progress
- In review
- Delivered
- Closed

Rule:
No order moves to `In progress` without confirmed payment state.

## Proof Assets Pipeline

| Order ID | Asset type | Status | Publish or use next |
|------|------|------|------|
| ORD-001 | Testimonial, case study, checklist, or prompt pack | Missing |  |

Rule:
An order is not done until its proof asset row is updated.

## Engineering Queue

Only revenue-critical work belongs here.

| Priority | Item | Metric | Ship by | Status | Scorecard |
|------|------|------|------|------|------|
| P0 | Email provider configuration (Resend) | Sales Manager can send emails | 2026-03-12 | In Progress - BLOCKED: API key needed | `company/operations/engineering-scorecard.md` |
| P1 | Quote and payment flow for active offers | Quote response time under 30 min and awaiting-payment visibility | 2026-03-12 | Shipped | Included in ENG-001 |
| P1 | Standard quote packs for 3 core offers | Quotes sent in under 30 minutes | 2026-03-13 | Shipped | Included in ENG-001 |
| P1 | Offer-specific delivery kits | Delivery cycle time under 3 days | 2026-03-10 | Shipped | Review in weekly cadence |
| P1 | Proof asset workflow | Every completed order leaves proof | 2026-03-17 | Planned | Required before start |
| P2 | Non-revenue tooling | None | N/A | Deferred | Not allowed |

Source of truth:
- approved and deferred engineering work lives in `company/operations/engineering-backlog.md`
- new requests must pass `company/operations/engineering-intake-gate.md`
- the active build must also have `company/operations/engineering-scorecard.md`
- roadmap limits are enforced in `company/operations/technical-roadmap.md`

## Decisions

| Date | Decision | Reason |
|------|------|------|
| 2026-03-11 | Create alternative revenue channels task (CLA-44) | Diversify away from email-only dependency |
| 2026-03-11 | Escalate email configuration to CEO directive (CLA-43) | 2+ days blocked, revenue pipeline stalled |
| 2026-03-11 | Email provider configuration is critical priority | Blocks all outreach execution |
| 2026-03-11 | Pivot to email-first outreach strategy | Phone calls require human execution; email is AI-executable |
| 2026-03-10 | No backend systems before 2 paid orders exist | Manual flow is still cheaper |
| 2026-03-10 | AI agent setup stays deferred as an active offer | It has higher scope and sales risk |
| 2026-03-10 | Quote-to-payment speed is the first engineering bottleneck | Revenue is blocked before delivery scale matters |
| 2026-03-10 | Services stay primary; product bets need separate approval | Avoid overbuilding before repeated paid demand |

## Aging Rules

- any lead without a next action is broken process
- any quote without follow-up after 24 hours is at risk
- any awaiting-payment quote older than 48 hours needs a reminder or close-lost decision
- any engineering item older than 14 days must be killed, reduced, or recommitted
- any internal build pauses when a paid order needs delivery attention

## Monday Review

```md
Week of:
Current bottleneck:
Single engineering priority:
Single sales priority:
Single delivery improvement priority:
One thing to cut:
```

## Friday Review

```md
Week of:
Leads:
Quotes:
Paid orders:
Revenue:
Average quote response time:
Average delivery cycle time:
Proof assets captured:
Main bottleneck:
What shipped:
Keep / Expand / Kill:
Next week's single engineering priority:
```
