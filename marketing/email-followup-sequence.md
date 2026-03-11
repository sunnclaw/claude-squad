# Email Follow-Up Sequence - Non-Responders

**Created:** 2026-03-12
**Owner:** Sales Manager
**Related:** CLA-71

---

## Complete Follow-Up Sequence

This document defines the complete follow-up sequence for clinics that don't respond to initial outreach.

### Sequence Timeline

| Day | Touch | Channel | Purpose |
|-----|-------|---------|---------|
| 0 | Initial email | Email | Value proposition + case study |
| 3 | Follow-up #1 | Email | Reminder + additional value |
| 7 | Follow-up #2 | Email | Limited pilot offer |
| 14 | Final follow-up | Email | Break-up email |

---

## Day 0: Initial Email

**Subject:** Quick question about missed calls at [Practice Name]

```
Hi [First Name],

I'm reaching out to [Practice Name] because I've been helping dental practices recover new-patient calls that slip through during busy hours.

The pattern I'm testing is simple: when a call is missed, your practice automatically sends a text within 5 minutes and queues a callback. One practice I worked with recovered 4 appointments in their first month worth $1,200+.

I'm not selling a full platform - I'm trying to understand whether missed calls are a real pain point for your practice.

Would you be open to a 15-minute conversation this week to compare your current process?

Best,
[Signature]
```

---

## Day 3: Follow-Up #1

**Subject:** Quick follow-up re: missed calls

```
Hi [First Name],

Following up on my earlier message.

A quick question: how does your front desk currently handle missed calls during busy hours?

I ask because I've seen practices lose 3-5 appointments per month simply because callers went to voicemail and never left a message.

Happy to share what's working for other practices - just reply with a good time for a 10-minute call.

Best,
[Signature]
```

---

## Day 7: Follow-Up #2 (Pilot Offer)

**Subject:** Pilot slot for [Practice Name]?

```
Hi [First Name],

I've reached out a couple times about missed-call recovery. I'll keep this brief.

I have one pilot slot available this month for a [City] dental practice:

**30-day pilot:**
- Instant text-back to missed callers
- Callback queue your team manages
- Weekly recovery reports
- Guarantee: 3+ appointments recovered or month 2 is free

**Price:** $297

Setup takes 48 hours. Interested?

Best,
[Signature]
```

---

## Day 14: Final Follow-Up (Break-Up)

**Subject:** Closing the loop

```
Hi [First Name],

I've reached out a few times about missed-call recovery for [Practice Name]. I don't want to keep filling your inbox if this isn't a priority.

I'll close your file for now. If missed calls ever become something you want to address, I'm happy to help.

Thanks for your time.

Best,
[Signature]
```

**Why This Works:**
- Removes pressure
- Leaves door open for future
- Often triggers response ("Actually, let's talk...")

---

## Re-Engagement (30-60 Days Later)

**Subject:** Update: [relevant news or case study]

```
Hi [First Name],

Hope this finds you well.

Quick update: We just helped a [similar practice type] in [City] recover 6 missed appointments in their first month.

Thought of [Practice Name] because [specific reason - same city, same size, etc.].

If missed calls are ever on your radar, I'd be happy to share what worked.

Best,
[Signature]
```

---

## Tracking

Log all follow-ups in `marketing/dental-clinic-outbound-tracker.csv`:

| Field | Value |
|-------|-------|
| followup_1_date | Day 3 email sent |
| followup_2_date | Day 7 email sent |
| followup_3_date | Day 14 email sent |
| final_status | no_response / re_engaged / not_interested |

---

## Automation Note

This sequence is designed for human execution. Once Resend API is configured, these can be automated via:
1. Initial email triggers 3-day follow-up timer
2. No response triggers 7-day follow-up
3. No response triggers 14-day break-up
4. Log all sends and opens

---

*Template for CLA-71 - Email follow-up sequence for non-responders*
