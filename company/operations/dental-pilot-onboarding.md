# Dental Clinic Pilot Onboarding Checklist

Last updated: 2026-03-11
Owner: CTO
Purpose: Onboard first dental clinic pilot customer for missed-call recovery service

## Capacity Check

Before starting onboarding, verify:
- Current active pilots: Check `company/dashboard.md`
- Maximum concurrent pilots: 5
- If at capacity, schedule staggered start (minimum 2 days between pilots)

See `company/pilots/capacity-planning.md` for escalation path.

## Overview

This checklist is used when a qualified lead (score 11+) accepts the pilot proposal. Complete all steps before starting the 30-day pilot.

## Phase 1: Information Collection

### Required From Clinic

| Item | Details | Collected |
|------|---------|-----------|
| Decision maker name | Person who approved pilot | ☐ |
| Decision maker email | For invoices and reports | ☐ |
| Decision maker phone | For urgent issues | ☐ |
| Point person name | Daily callback queue owner | ☐ |
| Point person phone/mobile | For same-day communication | ☐ |
| Point person email | For reports and updates | ☐ |
| Practice management system | Dentrix, Eaglesoft, Open Dental, etc. | ☐ |
| Phone system type | Landline, VoIP, cloud-based | ☐ |
| Phone system provider | If applicable | ☐ |
| Current missed-call process | What happens today | ☐ |
| Estimated missed calls per week | Baseline for comparison | ☐ |
| Peak missed-call times | Lunch, after hours, etc. | ☐ |
| New patient value (first visit) | Average revenue per new patient | ☐ |
| Practice hours | Days and hours of operation | ☐ |
| After-hours call handling | Voicemail, answering service, etc. | ☐ |

### Nice-to-Have (Ask But Don't Require)

- Number of front desk staff
- Current texting tools used
- Google Business Profile claimed
- Active marketing campaigns driving calls

## Phase 2: Setup Configuration

### Day 1 Tasks

- [ ] Confirm payment received
- [ ] Send onboarding confirmation email
- [ ] Schedule 30-minute setup call
- [ ] Document practice timezone

### Setup Call Agenda (30 minutes)

1. **Introduction** (5 min)
   - Confirm decision maker and point person
   - Review pilot timeline and success metrics

2. **Access Setup** (10 min)
   - Configure missed-call detection method
   - Test text-back template
   - Verify callback queue visibility

3. **Workflow Training** (10 min)
   - Show point person how to check callback queue
   - Demonstrate text-back flow
   - Review daily/weekly rhythm

4. **Questions and Confirmation** (5 min)
   - Confirm first check-in date
   - Provide contact for support
   - Confirm pilot start date

### Text Template Customization

Default template:
```
Hi, this is [Practice Name]. We missed your call. Would you like to schedule an appointment? Reply YES or call us back at [Phone]. We'll call you back shortly if we don't hear from you.
```

Customization options:
- [ ] Practice name correct
- [ ] Phone number correct
- [ ] Tone adjustment (formal/casual)
- [ ] CTA modification

## Phase 3: Success Metrics Baseline

### Record Before Pilot Starts

| Metric | Current State | Notes |
|--------|---------------|-------|
| Weekly missed calls | _____ | From clinic estimate |
| Current callback rate | _____ % | Estimated |
| Average new patient value | $_____ | First visit |
| Weekly new patients from calls | _____ | Estimated |

### Target Metrics (30 days)

| Metric | Target |
|--------|--------|
| Text-back response time | Under 5 minutes |
| Callback completion rate | 80%+ |
| Appointments recovered | 3+ |
| Revenue recovered | $_____ (target = pilot cost) |

## Phase 4: Check-in Schedule

### Weekly Check-ins (5 minutes each)

| Week | Date | Time | Focus |
|------|------|------|-------|
| Week 1 | _____ | _____ | First recoveries, template adjustments |
| Week 2 | _____ | _____ | Recovery count, process issues |
| Week 3 | _____ | _____ | Trend analysis, optimization |
| Week 4 | _____ | _____ | Final results, next steps decision |

### Check-in Questions

1. Any text template adjustments needed?
2. How many callbacks did [point person] complete?
3. Any missed calls that should have been caught?
4. How many appointments were recovered this week?
5. Any concerns or blockers?

## Onboarding Confirmation Email Template

```
Subject: Pilot Confirmed - [Practice Name] Missed-Call Recovery

Hi [Decision Maker Name],

Your missed-call recovery pilot is confirmed!

Pilot Start Date: [Date]
Pilot End Date: [Date + 30 days]
Point Person: [Name]

Your setup call is scheduled for:
Date: [Date]
Time: [Time] [Timezone]

During the call, we will:
- Configure your missed-call detection
- Customize your text-back template
- Train [Point Person] on the callback queue

What we need from you:
- Access to your call log or phone system
- 30 minutes with [Point Person] for setup

Reply to confirm, or let me know if you need to reschedule.

[Your Name]
Claude天团
```

## Integration with Existing Documents

This checklist integrates with:
- `company/operations/customer-onboarding.md` - General onboarding flow
- `company/delivery-kits/missed-call-recovery-checklist.md` - Delivery kit
- `company/offers/dental-missed-call-pilot-proposal.md` - Proposal reference
- `company/pilots/capacity-planning.md` - Capacity limits and escalation
- `company/pilots/templates/` - Templates for metrics and reports

## Post-Onboarding

After onboarding is complete:
1. Create pilot folder in `company/pilots/[practice-name]/`
2. Copy this checklist with completed items
3. Start weekly recovery reports
4. Track toward 3+ appointment recovery goal
