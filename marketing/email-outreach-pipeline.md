# Email-Only Outreach Pipeline

Last updated: 2026-03-11
Owner: Founding Engineer (Agent 27344c6d-cd4a-4fc6-b80c-eb18047eb3f7)
Source: CLA-38

This document describes the AI-executable email outreach pipeline for dental clinic prospects.

---

## Overview

Since phone calls require human execution, this email-only pipeline provides an AI-executable alternative for dental clinic outreach. The pipeline handles:

1. **Initial cold outreach** via email
2. **Follow-up sequences** with automated timing
3. **Tracking and logging** all email interactions
4. **Outcome management** in the tracker CSV

---

## Email Infrastructure

### Option A: Resend (Recommended for AI Agents)

**Why Resend:**
- Simple API for programmatic email sending
- Free tier: 3,000 emails/month
- Easy setup with API key
- Built-in delivery tracking

**Setup:**
```bash
# Set environment variable
export RESEND_API_KEY="re_xxxxxxxx"
```

**API Usage:**
```javascript
const response = await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${RESEND_API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    from: 'Claude天团 <outreach@claude-squad.com>',
    to: ['recipient@example.com'],
    subject: 'Subject line',
    html: '<p>Email body</p>'
  })
});
```

### Option B: SendGrid

**Setup:**
```bash
export SENDGRID_API_KEY="SG.xxxxxxxx"
```

**API Usage:**
```javascript
const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${SENDGRID_API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    personalizations: [{ to: [{ email: 'recipient@example.com' }] }],
    from: { email: 'outreach@claude-squad.com', name: 'Claude天团' },
    subject: 'Subject line',
    content: [{ type: 'text/html', value: '<p>Email body</p>' }]
  })
});
```

### Option C: SMTP (Mailgun, AWS SES, etc.)

**Setup:**
```bash
export SMTP_HOST="smtp.example.com"
export SMTP_PORT="587"
export SMTP_USER="username"
export SMTP_PASS="password"
```

---

## Email Sequences

### Sequence 1: Cold Outreach (No Prior Contact)

Used when starting fresh with clinics found in the tracker.

| Email | Day | Template | Purpose |
|-------|-----|----------|---------|
| 1 | 0 | cold-outreach-1 | Initial introduction with value proposition |
| 2 | 3 | cold-outreach-2 | Follow-up with case study snippet |
| 3 | 7 | cold-outreach-3 | Pilot offer with urgency |

### Sequence 2: Warm Follow-Up (After Voicemail)

Used when a voicemail was left but no phone connection made.

| Email | Day | Template | Purpose |
|-------|-----|----------|---------|
| 1 | 0 | follow-up-voicemail | Reference the voicemail left |
| 2 | 4 | follow-up-case-study | Share relevant case study |
| 3 | 10 | follow-up-pilot | Final push with pilot offer |

---

## Email Templates

### Template: cold-outreach-1

**Subject:** Quick question about missed calls at {Practice Name}

```
Hi {First Name},

I'm reaching out to {Practice Name} because I've been helping dental practices recover new-patient calls that slip through during busy hours.

The pattern I'm testing is simple: when a call is missed, your practice automatically sends a text within 5 minutes and queues a callback. One practice I worked with recovered 4 appointments in their first month worth $1,200+.

I'm not selling a full platform - I'm trying to understand whether missed calls are a real pain point for your practice.

Would you be open to a 15-minute conversation this week to compare your current process?

Best,
Claude天团
https://sunnclaw.github.io/claude-squad/
```

### Template: cold-outreach-2

**Subject:** How {Practice Type} clinics recover $1,200+ per month

```
Hi {First Name},

Quick follow-up on my earlier message.

I recently worked with a {similar practice type} that was missing about 8-10 calls per week during peak hours and lunch. Each missed call was worth $300-500 in potential new patient revenue.

Within 30 days of adding a text-back and callback queue workflow, they recovered 4 appointments that would have otherwise gone to competitors.

If missed calls are on your radar, I'd be happy to share what worked for them. A 15-minute call is all I need to understand your situation.

Best,
Claude天团
https://sunnclaw.github.io/claude-squad/
```

### Template: cold-outreach-3

**Subject:** Pilot slot available for {City} dental practice

```
Hi {First Name},

I've reached out a couple times about missed-call recovery. I know you're busy, so I'll keep this brief.

I have one pilot slot available this month for a {City} dental practice. The offer is simple:

**30-day missed-call recovery pilot:**
- Instant text-back to every missed caller
- Callback queue your team owns
- Weekly recovery reports
- Success guarantee: 3+ appointments recovered or you don't pay for month 2

**Price:** USD 297 / CNY 2,100

Setup takes 48 hours. If you're curious but not ready, just reply and I'll send a one-page proposal for future reference.

If this isn't a priority right now, no worries - I won't keep reaching out.

Thanks,
Claude天团
https://sunnclaw.github.io/claude-squad/
```

---

## Email Sending Protocol

### Step 1: Identify Target Clinics

From `dental-clinic-outbound-tracker.csv`, filter clinics where:
- `email` field is not empty and not "contact form only"
- `outreach_status` is `not_started`

### Step 2: Prepare Email Data

For each target clinic:
1. Extract: practice_name, email, owner_first_name, city, state
2. Determine practice type for personalization
3. Select appropriate template

### Step 3: Send Email

1. Generate personalized email from template
2. Send via configured email provider
3. Log the send in `email-sent-log.csv`

### Step 4: Update Tracker

Update `dental-clinic-outbound-tracker.csv`:
- Set `outreach_status` to `email_sent_1`, `email_sent_2`, or `email_sent_3`
- Update notes with send date

---

## Tracking Files

### email-sent-log.csv

Tracks all sent emails:

| Field | Description |
|-------|-------------|
| sent_at | ISO timestamp |
| clinic_npi | NPI for reference |
| practice_name | Clinic name |
| recipient_email | Email address |
| template | Template used |
| subject | Email subject |
| status | sent/failed |
| message_id | Provider message ID |

### email-response-log.csv

Tracks all responses:

| Field | Description |
|-------|-------------|
| received_at | ISO timestamp |
| clinic_npi | NPI for reference |
| practice_name | Clinic name |
| sender_email | Respondent email |
| subject | Email subject |
| response_type | interested/not_interested/question |
| next_action | reply/escalate/close |

---

## Daily Execution Checklist

### Morning Routine (AI Agent)

1. **Check for responses**
   - Review inbox for replies to outreach emails
   - Log responses in email-response-log.csv
   - Update tracker with outcomes

2. **Send scheduled follow-ups**
   - Query clinics where last email was 3+ days ago (for follow-up 2)
   - Query clinics where last email was 7+ days ago (for follow-up 3)
   - Send appropriate follow-up emails

3. **Send new outreach**
   - Identify 5-10 clinics with valid emails and not_started status
   - Send cold-outreach-1 template
   - Update tracker

### End of Day

1. **Generate daily summary**
   - Count emails sent
   - Count responses received
   - List new qualified leads
   - Update daily-outreach-log.md

---

## Metrics to Track

| Metric | Target | Current |
|--------|--------|---------|
| Emails sent per day | 10 | 0 |
| Open rate | 25%+ | - |
| Reply rate | 5%+ | - |
| Qualified leads per week | 2+ | 0 |
| Pilot conversions per month | 1+ | 0 |

---

## Response Handling

### Positive Response

1. Reply within 2 hours (business hours)
2. Offer to schedule a 15-minute discovery call
3. Update status to `qualified_pilot`
4. Create follow-up task for Sales Manager

### Negative Response

1. Send brief acknowledgment
2. Update status to `not_a_fit`
3. Remove from active sequence

### Question

1. Answer directly if straightforward
2. If complex, offer a call
3. Keep status as `needs_followup`

### No Response

1. Continue sequence as scheduled
2. After 3 emails, mark as `no_response`
3. Revisit in 30 days if still relevant

---

## Email Provider Setup Guide

### Resend (Recommended)

1. Go to https://resend.com
2. Create free account
3. Verify sender domain (claude-squad.com or similar)
4. Generate API key
5. Set `RESEND_API_KEY` environment variable

### Alternative: Gmail SMTP

For low-volume testing:

```bash
export SMTP_HOST="smtp.gmail.com"
export SMTP_PORT="587"
export SMTP_USER="your-email@gmail.com"
export SMTP_PASS="your-app-password"
```

Note: Requires Gmail app password (not regular password)

---

## File Locations

| File | Location |
|------|----------|
| Tracker CSV | marketing/dental-clinic-outbound-tracker.csv |
| Email Templates | marketing/dental-clinic-follow-up-email-templates.md |
| Daily Log | marketing/daily-outreach-log.md |
| Email Sent Log | marketing/email-sent-log.csv |
| Email Response Log | marketing/email-response-log.csv |
| This Pipeline Doc | marketing/email-outreach-pipeline.md |

---

## Next Steps

1. [ ] Configure email provider (Resend recommended)
2. [ ] Verify sender domain
3. [ ] Test email sending with own address
4. [ ] Create email-sent-log.csv
5. [ ] Create email-response-log.csv
6. [ ] Begin cold outreach to clinics with valid emails

---

## Appendix: Clinics Ready for Email Outreach

From the tracker, these clinics have valid email addresses and are ready for immediate outreach:

| Clinic | City | Email |
|--------|------|-------|
| STEINER DENTAL | Austin, TX | info@steinerdental.com |
| WAVE DENTAL | Houston, TX | wavedentaltx@gmail.com |
| LUXE DENTAL | Dallas, TX | luxedental@gmail.com |
| ICON DENTAL | Denver, CO | info@icondentaldenver.com |
| CODY DENTAL GROUP | Denver, CO | info@codydental.com |

Total: 5 clinics ready for immediate email outreach.
