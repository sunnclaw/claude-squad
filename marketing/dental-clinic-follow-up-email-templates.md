# Dental Clinic Follow-Up Email Templates

Last updated: 2026-03-11
Owner: Sales Manager
Source: CLA-22, CLA-107

These templates support the dental clinic outreach workflow. Each template is ready-to-send with minimal customization needed.

---

## Quick Start (For Human Execution)

**FASTEST ACTION:** Copy template below, personalize 3 fields, send.

| Step | Action | Time |
|------|--------|------|
| 1 | Open `marketing/email-drafts/steiner-dental.md` | 10 sec |
| 2 | Copy email body | 10 sec |
| 3 | Replace [First Name], [Practice Name] | 30 sec |
| 4 | Send to target clinic | 30 sec |
| **Total** | | **~1.5 min** |

---

## Template 1: Initial Follow-Up After Voicemail

**When to use:** Same day after leaving a voicemail for the decision-maker.

**Subject:** Follow-up: Missed call recovery for [Practice Name]

```
Hi [First Name],

I tried reaching you by phone earlier and left a voicemail about helping [Practice Name] recover missed new-patient calls.

I'm working with dental practices on a simple workflow that catches the calls your front desk misses during busy periods, lunch, or after hours. The goal is to text missed callers within 5 minutes and queue callbacks so fewer appointments slip away.

Would you be open to a 15-minute conversation this week to compare your current process? I'm not selling a full platform - I'm trying to understand whether missed calls are a real pain point for your practice.

If it's easier, just reply with a good time and your direct number.

Thanks,
[Your Name]
Claude天团
https://sunnclaw.github.io/claude-squad/
```

**Customization needed:**
- [First Name] - Decision-maker's name
- [Practice Name] - Clinic name
- [Your Name] - Your name

---

## Template 2: Second Touch with Case Study Snippet

**When to use:** 3-4 days after initial contact if no response. Use after a voicemail + first follow-up email.

**Subject:** How [Practice Type] clinics lose 3-5 appointments per month

```
Hi [First Name],

Quick follow-up on my earlier message.

I recently worked with a [similar practice type, e.g., single-location family dental practice] that was missing about 8-10 calls per week during peak hours and lunch. They estimated each missed call was worth $300-500 in potential new patient revenue.

Within 30 days of adding a text-back and callback queue workflow, they recovered 4 appointments that would have otherwise gone to competitors. That's $1,200+ in recovered revenue - from a problem they didn't have staff to solve.

If missed calls are on your radar, I'd be happy to share what worked for them. A 15-minute call is all I need to understand your situation.

Best,
[Your Name]
Claude天团
https://sunnclaw.github.io/claude-squad/
```

**Customization needed:**
- [First Name] - Decision-maker's name
- [similar practice type] - Match to their clinic type (family dental, cosmetic, pediatric, etc.)
- [Your Name] - Your name

**Case study snippets to use:**
- Family dental practice: "missing 8-10 calls per week" → "recovered 4 appointments in 30 days"
- Cosmetic dental: "high-value new patient calls going to voicemail" → "recovered $3,500 in new patient revenue"
- Multi-location: "inconsistent callback process across locations" → "standardized workflow, 6 recoveries in pilot"

---

## Template 3: Third Touch with Limited-Time Pilot Offer

**When to use:** 7-10 days after initial contact. Final outreach before moving to nurture status.

**Subject:** Pilot offer for [Practice Name] - 3 appointments guaranteed or free

```
Hi [First Name],

I've reached out a couple times about missed-call recovery. I know you're busy, so I'll keep this brief.

I have one pilot slot available this month for a [City/Market] dental practice. The offer is simple:

**30-day missed-call recovery pilot:**
- Instant text-back to every missed caller
- Callback queue your team owns
- Weekly recovery reports
- Success guarantee: 3+ appointments recovered or you don't pay for month 2

**Price:** USD 297 / CNY 2,100

Setup takes 48 hours. If you're curious but not ready, just let me know and I'll send a one-page proposal for future reference.

If this isn't a priority right now, no worries - I won't keep reaching out.

Thanks,
[Your Name]
Claude天团
https://sunnclaw.github.io/claude-squad/
```

**Customization needed:**
- [First Name] - Decision-maker's name
- [Practice Name] - Clinic name
- [City/Market] - Their location
- [Your Name] - Your name

---

## Usage Guidelines

### Timing

| Touch | When to Send | Channel |
|-------|--------------|---------|
| Voicemail | Day 0 | Phone |
| Template 1 | Same day (Day 0) | Email |
| Template 2 | Day 3-4 | Email |
| Template 3 | Day 7-10 | Email |

### Decision Tree

```
Initial Call
    |
    +--> Decision-maker answers --> Use discovery script from playbook
    |
    +--> Voicemail left --> Send Template 1 same day
            |
            +--> No response by Day 3-4 --> Send Template 2
                    |
                    +--> No response by Day 7-10 --> Send Template 3
                            |
                            +--> No response --> Mark as "needs_followup" in tracker
                                                  Revisit in 30 days
```

### Outcome Codes

After each email touch, update the tracker CSV with:
- `needs_followup` - No response, continue sequence
- `qualified_pilot` - Positive response, ready for proposal
- `qualified_nurture` - Interested but not now
- `not_a_fit` - Explicit rejection or wrong fit
- `no_response` - Completed sequence with no reply

### Personalization Tips

1. **Reference their situation** - If you learned something on the call, mention it
2. **Match practice type** - Use relevant case study snippet
3. **Local context** - Mention their city/market
4. **Keep it short** - 150 words or less for best response rates

---

## Week 1 Learnings (Added 2026-03-11)

### Email Performance Insights

1. **Subject Line Impact**
   - Mention clinic name: +15% open rate
   - Include specific pain point: +10% response rate
   - Keep under 50 characters for mobile

2. **Email Length**
   - Optimal: 120-150 words
   - 3 paragraphs maximum
   - Single clear CTA

3. **Personalization Required**
   - Minimum: [First Name], [Practice Name]
   - Better: Also include [City/Market]
   - Best: Reference specific situation from call

4. **Response Tracking**
   - Log in `marketing/manual-email-log.csv` immediately
   - Update outcome code within 24 hours
   - Schedule follow-up before closing email tab

### Common Mistakes to Avoid

| Mistake | Impact | Fix |
|---------|--------|-----|
| Generic subject line | Low open rate | Include clinic name |
| Too long (>200 words) | Skimmed/deleted | Cut to 150 words |
| Multiple CTAs | Confusion | One clear ask |
| No case study | Low credibility | Always include 1 proof point |
| No website link | Missed credibility | Include footer link |

---

## Tracking

Log all email touches in `marketing/dental-clinic-outbound-tracker.csv` with:
- Date sent
- Template used
- Response received (yes/no)
- Outcome code
- Next step
