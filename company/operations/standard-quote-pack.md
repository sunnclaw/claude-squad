# Standard Quote Pack

Last updated: 2026-03-10
Owner: CTO

## Purpose

Send a complete quote in under 30 minutes without improvising scope, pricing, or payment instructions.

This pack consolidates quote steps, pricing logic, and payment instructions into one file so quoting is fast and consistent.

## Quote Workflow (Under 30 Minutes)

### Step 1: Qualify The Lead (5 minutes)

Confirm:
- [ ] Which offer they need (content / code review / research)
- [ ] Rough scope (package size or custom)
- [ ] Timeline urgency (standard / rush)
- [ ] Budget alignment with pricing ranges

If scope is unclear, send the **Scope Clarification Email** (below) before quoting.

### Step 2: Build The Quote (10 minutes)

Copy the relevant quote template from this pack:
- Content Creation Quote Template
- Code Review Quote Template
- Research Report Quote Template

Fill in:
- [ ] Customer name
- [ ] Specific deliverables
- [ ] Timeline
- [ ] Price
- [ ] Payment method (use standard text below)

### Step 3: Send Quote (2 minutes)

Send via email or preferred channel.

Log in dashboard:
- [ ] Lead ID
- [ ] Quote ID (Q-XXX format)
- [ ] Quote sent date
- [ ] Valid until date (7 days standard)
- [ ] Next action: "Follow up in 24 hours if no response"

### Step 4: Track Quote Status

Update dashboard quote tracker with:
- Sent date
- Status: Sent / Awaiting response / Awaiting payment / Won / Lost
- Next action and due date

---

## Standard Payment Instructions

Use this exact text in every quote:

```text
Payment:
- 100% up front for orders under CNY 500
- 50% deposit to start, 50% before delivery for orders CNY 500 and above
- Payment methods accepted:
  - WeChat Pay: [QR code or ID]
  - Alipay: [QR code or ID]
  - Bank transfer: [account details if applicable]

After payment, please send:
- screenshot or payment reference

Once payment is confirmed, work starts immediately and the delivery clock begins.
```

---

## Quote Templates

### Content Creation Quote Template

```md
Subject: Content creation quote for [Customer Name]

Hi [Name],

Based on your request, here is my quote for content creation.

**Package:** [Option A / B / C or Custom]

**Deliverables:**
- [specific content type, word count, format]

**Timeline:**
- [24 / 48 / 72] hours from payment confirmation

**Price:** CNY [amount]
- [if applicable: Rush fee +50% = CNY total]

**Revision policy:** Up to 2 revision rounds included

**To start, please send:**
- Target audience
- Reference materials or examples
- Preferred tone or CTA

**Payment:**
- 100% up front for orders under CNY 500
- Payment methods: WeChat Pay / Alipay

After payment, please send a screenshot or payment reference. Work starts immediately once payment is confirmed.

This quote is valid for 7 days.

Best,
[Your Name]
```

### Code Review Quote Template

```md
Subject: Code review quote for [Customer Name]

Hi [Name],

Based on your request, here is my quote for code review.

**Package:** [Option A / B / C or Custom]

**Scope:**
- Files or module covered: [list]
- Language/framework: [specify]

**Deliverables:**
- Prioritized findings
- Risk summary
- Recommended fixes

**Timeline:**
- [24 / 48 / 72] hours from payment confirmation

**Price:** CNY [amount]
- [if applicable: Rush fee +50% = CNY total]

**Revision policy:** One follow-up clarification round on the report

**To start, please send:**
- Repo access or files
- Review goal or known concern
- Deadline constraints

**Payment:**
- 100% up front for standard reviews
- Payment methods: WeChat Pay / Alipay

After payment, please send a screenshot or payment reference. Work starts immediately once payment is confirmed.

This quote is valid for 7 days.

Best,
[Your Name]
```

### Research Report Quote Template

```md
Subject: Research report quote for [Customer Name]

Hi [Name],

Based on your request, here is my quote for research.

**Package:** [Option A / B / C or Custom]

**Research focus:**
- [core question or topic]

**Deliverables:**
- [brief / structured report / deep report with tables]
- [findings, analysis, recommendations]

**Timeline:**
- [48 / 72 hours / 3-5 days] from payment confirmation

**Price:** CNY [amount]
- Payment structure: 50% deposit to start, 50% before final delivery
- [if applicable: Rush fee +50% = CNY total]

**Revision policy:** Up to 2 revision rounds

**To start, please send:**
- Core research question
- Decision this report should support
- Any must-include competitors, markets, or sources

**Payment:**
- 50% deposit (CNY [amount]) to start
- 50% balance (CNY [amount]) before final delivery
- Payment methods: WeChat Pay / Alipay

After deposit payment, please send a screenshot or payment reference. Research starts immediately once payment is confirmed.

This quote is valid for 7 days.

Best,
[Your Name]
```

---

## Scope Clarification Email

Use when lead scope is unclear:

```md
Subject: Quick clarification for your [offer type] request

Hi [Name],

Thanks for reaching out. Before I send a quote, I have a few quick questions:

1. What is the main outcome you need from this [content / review / research]?
2. What is your timeline?
3. Are there specific requirements for scope, format, or depth?

This helps me recommend the right package and give you an accurate price.

Best,
[Your Name]
```

---

## Quote Follow-Up Sequence

### 24 Hours After Quote (No Response)

```md
Subject: Re: [Original subject line]

Hi [Name],

Following up on the quote I sent yesterday. Let me know if you have any questions or if the scope needs adjustment.

Happy to jump on a quick call if that's easier.

Best,
[Your Name]
```

### 48 Hours After Quote (No Response)

```md
Subject: Re: [Original subject line]

Hi [Name],

I wanted to check in one more time on the quote. If the timing isn't right or the scope needs changes, just let me know.

If I don't hear back, I'll assume this isn't a priority right now and won't follow up further.

Best,
[Your Name]
```

### 7 Days After Quote (Expiry)

Move quote status to "Lost" in dashboard with note: "Quote expired, no response after 7 days."

---

## Pricing Quick Reference

| Offer | Option A | Option B | Option C | Rush Fee |
|-------|----------|----------|----------|----------|
| Content Creation | CNY 100 (1K words, 24h) | CNY 180-220 (2K words, 48h) | CNY 260-400 (3K words, 48-72h) | +50% |
| Code Review | CNY 50-150 (1-3 files, 24h) | CNY 300-500 (10 files, 48h) | CNY 800+ (module, 72h) | +50% |
| Research Report | CNY 200-300 (brief, 48h) | CNY 400-600 (report, 72h) | CNY 800+ (deep, 3-5d) | +50-100% |

---

## Quote-To-Payment Checklist

Before marking a quote as "Sent":
- [ ] Customer name is correct
- [ ] Deliverables are specific
- [ ] Timeline is realistic
- [ ] Price is within offer range
- [ ] Payment instructions are included
- [ ] Quote validity (7 days) is stated

Before moving quote to "Awaiting Payment":
- [ ] Customer has confirmed intent to proceed
- [ ] Payment amount and method are clear
- [ ] Next action is logged in dashboard
