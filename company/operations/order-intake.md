# Order Intake

Last updated: 2026-03-10
Owner: CTO

## Purpose

Move from inbound request to clear quote with minimum delay and minimum custom scoping.

## Intake Rules

- standard offers first
- one clarifying round maximum before quoting
- if the request does not fit a standard offer, either re-scope or decline
- no execution starts before payment policy is clear

## Intake Flow

### 1. Log the lead

Record in the dashboard:
- lead ID
- name
- source
- likely offer
- next action
- due date

### 2. Qualify the request

Capture only what affects price and delivery:
- desired outcome
- deliverable type
- deadline
- scope variable
- language or technical complexity

### 3. Match to an offer

Choose one:
- content creation
- code review
- research report

If none fit, ask:
- can this be reduced to a paid discovery or a smaller fixed-scope job?

### 4. Prepare the quote

Every quote must specify:
- deliverables
- turnaround
- revision limit
- price
- payment trigger
- what the customer must provide

### 5. Ask for payment

Use the payment runbook immediately after the quote is accepted or when the quote itself includes the payment ask.

## Intake Form

```md
# Intake Summary

Lead ID:
Date:
Source:

Customer:
Offer:

Outcome requested:

Scope driver:

Deadline:

Best-fit package:

Risks or unknowns:

Recommended quote:

Payment policy:
```

## Standard Decline Rule

Decline or re-scope if the request has any of these traits:
- open-ended consulting with no deliverable
- unclear decision maker
- delivery depends on unpaid discovery work
- customer requests platform building without proof of budget

## SLA

- lead logged within 24 hours
- qualification completed within 24 hours
- standard-offer quote sent within 30 minutes after qualification
