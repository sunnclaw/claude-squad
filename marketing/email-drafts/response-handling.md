# Response Handling Templates

**Created:** 2026-03-11
**Owner:** Sales Manager
**Purpose:** Pre-written responses for different reply scenarios

---

## Response Categories

| Category | Definition | Next Action |
|----------|------------|-------------|
| Interested | Positive response, wants to learn more | Schedule discovery call |
| Question | Has specific questions | Answer directly or offer call |
| Not Interested | Declines or not a fit | Acknowledge and close |
| No Response | No reply after sequence | Revisit in 30 days |

---

## Interested Response Templates

### Template: Schedule Discovery Call

**When to use:** Prospect expresses interest and wants to learn more

```
Hi [First Name],

Great to hear from you! I'd love to learn more about [Practice Name]'s current process and see if missed-call recovery could help.

Would you have 15 minutes this week for a quick discovery call? I'm available:

- [Day 1] at [Time] CST
- [Day 2] at [Time] CST
- [Day 3] at [Time] CST

Or feel free to suggest a time that works better for you.

Best,
Claude天团
```

### Template: Send Proposal

**When to use:** Prospect asks for pricing/details

```
Hi [First Name],

Thanks for your interest! Here's a one-page overview of the pilot offer:

**30-Day Missed-Call Recovery Pilot**

**What's included:**
- Instant text-back to every missed caller (customizable message)
- Callback queue your team manages
- Weekly recovery reports showing:
  - Calls missed
  - Text-backs sent
  - Appointments recovered
  - Revenue captured

**Timeline:**
- Day 1-2: Setup and customization
- Day 3-30: Active pilot
- Day 31: Results review and decision

**Pricing:**
- Single location: USD 297 / CNY 2,100
- Multi-location (2-3): USD 597 / CNY 4,200

**Success Guarantee:**
If you don't recover at least 3 appointments in 30 days, month 2 is free.

**To get started:**
1. Reply to confirm your interest
2. I'll send a brief setup questionnaire
3. We'll have your system live within 48 hours

Questions? Just reply or schedule a call: [Link]

Best,
Claude天团
https://sunnclaw.github.io/claude-squad/
```

---

## Question Response Templates

### Question: "How does it work?"

```
Hi [First Name],

Great question! Here's how the system works:

**When a call is missed:**
1. Our system detects the missed call within 60 seconds
2. Automatically sends a text to the caller: "Hi, this is [Practice Name]. Sorry we missed your call! How can we help you today?"
3. Caller can reply to the text or call back
4. Your team sees all missed calls in a simple dashboard
5. We send you a weekly report of recovered opportunities

**What your team needs to do:**
- Nothing changes in how you answer calls
- You'll just see a callback queue to work through
- Typically takes 5-10 minutes per day to follow up

**Setup takes 48 hours** - I'll just need:
- Your practice name and phone number
- Preferred text message wording
- Your email for weekly reports

Would you like to try it for 30 days and see what you recover?

Best,
Claude天团
```

### Question: "What's the cost?"

```
Hi [First Name],

The pilot pricing is straightforward:

**Single-location practice:**
- USD 297 (approx. CNY 2,100) for 30 days
- If you recover 3+ appointments, it pays for itself
- Month 2+: Same price, cancel anytime

**Multi-location practice (2-3 locations):**
- USD 597 (approx. CNY 4,200) for all locations
- Individual reporting per location

**Success Guarantee:**
If you don't recover at least 3 appointments in the first 30 days, you don't pay for month 2. No risk to try it.

Most practices recover 4-8 appointments in the first month, worth $1,200-$4,000 in new patient revenue.

Would you like to see how it would work for [Practice Name]?

Best,
Claude天团
```

### Question: "Is this automated or do I need to manage it?"

```
Hi [First Name],

Good question - it's a hybrid:

**Automated:**
- Detecting missed calls
- Sending the text message
- Tracking all activity
- Generating weekly reports

**Your team manages:**
- The callback queue (we provide the list)
- Customizing the text message wording
- Deciding which callbacks to prioritize

**Time investment:**
- Setup: 15-minute call to configure
- Daily: 5-10 minutes to review callback queue
- Weekly: 5 minutes to read the recovery report

The goal is to capture leads that would otherwise go to voicemail and never call back. Your team stays in control of the actual follow-up.

Sound like something [Practice Name] could use?

Best,
Claude天团
```

### Question: "Can I see a demo?"

```
Hi [First Name],

Absolutely! I can show you how it works in a 15-minute call.

Here's what I'll cover:
1. How the text-back system works
2. Sample weekly report (anonymized)
3. Setup process for your practice
4. Q&A

Pick a time that works for you:
- [Option 1]
- [Option 2]
- [Option 3]

Or share your calendar link and I'll book around your schedule.

Looking forward to showing you!

Best,
Claude天团
```

---

## Not Interested Response Templates

### Template: Acknowledge and Close

**When to use:** Prospect clearly declines

```
Hi [First Name],

Thanks for letting me know. I appreciate your time.

If missed calls ever become a priority for [Practice Name] in the future, feel free to reach out. I'll keep your info on file.

Best of luck with everything!

Best,
Claude天团
```

### Template: Soft Close with Future Reference

**When to use:** "Not right now" but not a hard no

```
Hi [First Name],

Understood - timing is everything.

I'll follow up in a few months to see if things have changed. In the meantime, here's a one-page overview you can keep for reference: [Attach or link]

Feel free to reach out whenever you're ready.

Best,
Claude天团
```

### Template: Referral Ask

**When to use:** Prospect declines but might know others

```
Hi [First Name],

No problem at all. Thanks for considering it.

Quick question - do you know any other dental practice owners who might benefit from missed-call recovery? I'd appreciate any referrals.

Either way, thanks again for your time!

Best,
Claude天团
```

---

## Response Logging

After each response, update `manual-email-log.csv`:

| Field | Values |
|-------|--------|
| response_received | Y/N |
| follow_up_needed | Y/N |
| notes | Category (interested/question/not_interested) + key details |

---

## Escalation Rules

| Situation | Action |
|-----------|--------|
| Multiple questions | Offer a call instead of back-and-forth emails |
| Pricing objection | Mention success guarantee, ask what budget works |
| "Need to think about it" | Send proposal, follow up in 3 days |
| Decision maker not available | Ask for correct contact, offer to follow up |
| Very positive response | Move to quote immediately |

---

## Next Actions by Response Type

| Response Type | Next Action | Timeline |
|---------------|-------------|----------|
| Interested - wants call | Schedule discovery call | Within 24 hours |
| Interested - wants info | Send proposal | Same day |
| Question | Answer within template | Same day |
| Not interested | Close, update tracker | Same day |
| No response after sequence | Mark for 30-day revisit | After Day 10 |
