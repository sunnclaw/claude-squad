# Sales Tracking System

Last updated: 2026-03-10
Owner: CTO

## Purpose

Track only the sales information that changes revenue decisions.

This file supports the dashboard. It is not a second CRM.

## Rules

- every real lead is logged the same day
- every lead has one next action and one due date
- every quote has a clear owner, amount, and payment trigger
- if a lead has no next action, it is stale
- if a quote sits without follow-up for 24 hours, it is at risk

## Funnel Definitions

| Stage | Definition | Required action |
|------|------|------|
| New | Contact exists but fit is unconfirmed | qualify within 24 hours |
| Qualified | Standard offer likely fits | send quote or one clarifying message |
| Quoted | Price and scope were sent | follow up within 24 hours |
| Awaiting payment | Customer is interested but payment is pending | send payment reminder |
| Paid | Payment or deposit confirmed | move to delivery immediately |
| Closed lost | No sale after follow-up or low fit | record reason and move on |
| Completed | Delivery accepted | request proof asset |

## Daily Sales Block

Run in this order:
1. review all leads due today
2. respond to every new conversation
3. send pending quotes
4. follow up all outstanding quotes and payment requests
5. update the dashboard before stopping

## Lead Log Template

Copy rows from this structure into the dashboard:

| Lead ID | Name | Source | Offer | Stage | Need | Next action | Due date | Blocker | Notes |
|------|------|------|------|------|------|------|------|------|------|
| L-XXX |  |  |  | New |  |  |  |  |  |

## Quote Log Template

| Quote ID | Lead ID | Offer | Package | Value | Sent date | Expiry | Status | Next action |
|------|------|------|------|------|------|------|------|------|
| Q-XXX |  |  |  |  |  |  | Draft |  |

Status options:
- Draft
- Sent
- Follow-up sent
- Awaiting payment
- Won
- Lost

## Lost Reason Codes

Use one short label:
- no urgency
- no budget
- unclear fit
- custom scope too large
- no response
- chose alternative

## Weekly Review Questions

Every Friday, answer:
- which offer got the most qualified conversations?
- where did quotes stall?
- what objection repeated most?
- which source produced the best conversations?
- what should be removed from the sales process next week?

## Escalation Rules

- If leads are not being logged: stop all non-customer work and fix operating discipline first.
- If quote speed is slipping: simplify offer packs before building tooling.
- If payment conversion is weak: tighten package clarity and payment instructions before discounting.
