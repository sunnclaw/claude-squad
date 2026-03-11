# Sales Call Scheduling and Follow-up Workflow

Last updated: 2026-03-10
Owner: CTO
Purpose: Maximize qualified lead conversion in Week 1

## Overview

This workflow guides the Sales Manager through daily call scheduling and same-day follow-up for dental clinic outreach. It integrates with the dental clinic outreach playbook and tracker.

## Daily Schedule Structure

### Optimal Call Windows

| Time Window (Local) | Best For | Notes |
|---------------------|----------|-------|
| 9:00 - 11:00 AM | Morning block | Before lunch rush, front desk more available |
| 2:00 - 4:00 PM | Afternoon block | After lunch, before end-of-day rush |

### Avoid These Times

- 12:00 - 1:30 PM (lunch hour)
- First/last 30 minutes of office hours
- Monday mornings (catching up from weekend)

## Daily Workflow

### Step 1: Morning Prep (15 minutes)

1. Open `marketing/dental-clinic-outbound-tracker.csv`
2. Filter for target market (Austin/Dallas first)
3. Check `outreach_status` column for:
   - `not_started` → Call today
   - `needs_followup` → Call today
   - `voicemail_left` → Send email follow-up if >24 hours

### Step 2: Call Block (2 hours)

For each call:

1. **Before dialing**: Check timezone (see tracker column `timezone`)
   - Austin/Dallas/Houston: America/Chicago (Central)
   - Phoenix: America/Phoenix (Mountain, no DST)
   - Charlotte/Atlanta/Tampa: America/New_York (Eastern)
   - Denver: America/Denver (Mountain)
   - Nashville: America/Chicago (Central)
   - Columbus: America/New_York (Eastern)

2. **During call**: Use scripts from `marketing/dental-clinic-outreach-playbook.md`

3. **After call**: Immediately update tracker:
   - Set `outreach_status` to outcome code
   - Add notes to `notes` column
   - Record qualification score if discovery completed

### Step 3: Same-Day Email Follow-up (30 minutes)

**Trigger**: Call went to voicemail or gatekeeper took message

**Timing**: Send within 2 hours of call

**Template**: See outreach playbook "First-touch email" section

**Action**:
1. Use email from tracker or send to contact form URL
2. Reference practice name and today's call
3. Include your direct callback number

## Call Outcome Codes

Update the `outreach_status` column in tracker:

| Code | Meaning | Next Action |
|------|---------|-------------|
| `not_started` | Not yet contacted | Call during next block |
| `voicemail_left` | Left voicemail | Send email same day, retry in 3 days |
| `gatekeeper` | Receptionist took message | Send email same day, retry in 2 days |
| `needs_followup` | Interest expressed, callback scheduled | Add to calendar, prepare materials |
| `qualified_pilot` | Score 11+, ready for pilot proposal | Send pilot proposal immediately |
| `qualified_nurture` | Score 7-10, needs more info | Add to nurture sequence |
| `wrong_contact` | Wrong decision-maker reached | Ask for correct contact, update tracker |
| `not_a_fit` | Disqualified | Update notes with reason, move on |
| `no_response` | No answer, no voicemail | Retry in 2 days, then email |

## Qualification Scoring

After each discovery conversation, score the lead:

| Criterion | 0 | 1 | 2 |
|-----------|---|---|---|
| Missed-call pain | Rare/unknown | Sometimes | Frequent & painful |
| New-patient dependence | Mostly existing | Balanced | Strong dependence |
| Callback gap | Reliable workflow | Some inconsistency | No dependable process |
| Speed to value | Hard to measure | Some signal | Easy to track |
| Decision access | No clear owner | Influencer only | Owner engaged |
| Pilot urgency | No timeline | Curious later | Wants 30-day pilot |
| Tech readiness | Resistant | Neutral | Uses texting/tools |

**Scoring**:
- 11-14: Strong pilot candidate → Send proposal
- 7-10: Nurture and revisit
- 0-6: Low priority

## Week 1 Targets

| Metric | Target |
|--------|--------|
| Calls made | 50+ |
| Decision-makers reached | 10+ |
| Discovery conversations | 5+ |
| Qualified pilot candidates | 2+ |

## Tracker Update Rule

**Update after every interaction. No exceptions.**

The tracker is the source of truth for:
- What happened
- When to follow up
- Lead quality assessment

## Escalation Triggers

Notify CEO if:
- No decision-maker contact after 20 calls
- Multiple "not a fit" with same objection pattern
- Qualified lead goes cold after proposal sent
- Week 1 targets significantly missed

## Files Referenced

- Outreach playbook: `marketing/dental-clinic-outreach-playbook.md`
- Clinic tracker: `marketing/dental-clinic-outbound-tracker.csv`
- Pilot proposal: `company/offers/dental-missed-call-pilot-proposal.md`
- Missed-call offer: `company/offers/missed-call-recovery-offer.md`

## Reminder

The goal of the first conversation is **discovery**, not a hard sell. Listen more than you talk. Understand their missed-call problem before proposing a solution.
