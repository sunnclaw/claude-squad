# Engineering Backlog

Last updated: 2026-03-11 (Founding Engineer heartbeat - Session 5)
Owner: CEO
Rule: this is the only backlog for technical work

## Purpose

Keep engineering focused on the current revenue bottleneck and make deferral explicit.

Every item here must come through `company/operations/engineering-intake-gate.md`.
Any item moved to `In progress` must also get a scorecard in `company/operations/engineering-scorecard.md`.

## Working Rules

- maximum 1 item can be `In progress`
- maximum 3 items can be `Approved`
- deferred items do not consume attention until the weekly review reactivates them
- any item without a metric is invalid
- any in-progress item without a scorecard is invalid
- any item older than 14 days must be recommitted, killed, or rewritten smaller

## In Progress

| ID | Item | Metric | Ship by | Why now | Status |
|------|------|------|------|------|------|
| ENG-010 | Configure email provider (Resend) | Sales Manager can send emails | 2026-03-12 | Blocks all outreach | **BLOCKED: Awaiting API key from CEO** |

### ENG-010 Progress Notes
- [x] Created `.env.example` with setup instructions
- [x] Updated engineering scorecard
- [x] Verified email-sender.js script works (5 clinics ready)
- [x] Updated dashboard with current status
- [ ] **BLOCKER: CEO needs to provide Resend API key**

**Setup Instructions for CEO:**
1. Go to https://resend.com and sign up (free tier: 3,000 emails/month)
2. Navigate to Dashboard > API Keys > Create API Key
3. Name it "claude-squad-outreach"
4. Copy the API key (starts with `re_`)
5. Create `.env` file in project root with: `RESEND_API_KEY=re_your_key_here`
6. Notify Founding Engineer to test

## Approved Next

| ID | Item | Metric | Trigger to start | Size | Status |
|------|------|------|------|------|------|
| ENG-004 | Proof asset workflow | 1 proof asset per completed order | First paid order delivered | 1 day | Approved |

## Shipped Recently

| ID | Item | Date shipped | Metric | Result to watch |
|------|------|------|------|------|
| ENG-001 | Quote and payment flow for active offers | 2026-03-10 | Quote response time under 30 minutes | Whether first quotes are sent in under 30 minutes |
| ENG-002 | Standard quote packs for 3 core offers | 2026-03-10 | Quotes sent in under 30 minutes | Included in ENG-001, no separate work needed |
| ENG-003 | Offer-specific delivery kits | 2026-03-10 | Delivery cycle time under 3 days | Whether active orders now start from checklists instead of custom setup |

## Deferred

| ID | Item | Why deferred | Re-open only if |
|------|------|------|------|
| ENG-005 | CRM or dashboard app | Manual tracking is still cheaper | 3 missed follow-ups in 7 days despite dashboard discipline |
| ENG-006 | Payment integration | Manual payment volume is too low | Manual payment confirmation becomes a repeated conversion blocker |
| ENG-007 | AI agent setup as a sellable build system | Too custom and too slow for the first revenue window | 2 paid orders closed and repeated inbound demand appears |
| ENG-008 | Major website redesign | Conversion proof is not yet constrained by design quality | Existing pages show traffic but poor conversion on active offers |

## Killed

| ID | Item | Date | Reason |
|------|------|------|------|
| ENG-009 | Generic internal automation | 2026-03-10 | No direct revenue effect inside 30 days |

## Weekly Review Actions

Every Friday:
- confirm whether the in-progress item moved its metric
- move one approved item up only if it is the next bottleneck
- add at least one rejected or deferred idea if new requests appeared
- kill stale items instead of letting them accumulate
