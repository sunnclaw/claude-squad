# Customer Onboarding

Last updated: 2026-03-10
Owner: CTO

## Purpose

Start paid work cleanly so delivery can run from a checklist instead of memory.

## Definition Of Ready

An order can start only when all five are true:
- scope is written
- price is written
- payment state is confirmed
- due date is confirmed
- required customer inputs are received or explicitly pending

## Onboarding Flow

### 1. Confirm the order

Send:
- order ID
- deliverables
- deadline
- revision limit
- payment state

### 2. Confirm inputs

Request only the minimum needed to start:
- source files or repo access
- references, links, or examples
- target audience or business goal
- constraints or must-not-do items

### 3. Set delivery expectations

State:
- when work starts
- when the next update happens
- what counts as a revision
- what might cause delay

### 4. Open the delivery file

Create or update:
- order row in the dashboard
- delivery checklist
- proof asset reminder

## Order Confirmation Template

```md
Subject: Order confirmed - [Order ID]

Hi [Name],

Your order is confirmed.

Order ID:
Deliverables:
Timeline:
Revision limit:
Payment state:

To begin, please send:
- 
- 

Once the remaining inputs are in place, work starts immediately.
```

## Progress Update Rule

- standard jobs under 3 days: no progress update unless blocked
- larger jobs: one midpoint update with risk flag if needed

## Customer Risk Flags

Watch for:
- slow input handoff
- changing scope after payment
- unclear approver
- urgency that exceeds package scope

If any appear, update the dashboard and tighten scope before continuing.

---

## Dental Clinic Pilot Onboarding

Specialized onboarding flow for the Missed-Call Recovery pilot. Use this when a dental clinic has committed to a 30-day pilot.

### Phase 1: Information Collection (Before Setup)

Send the intake request within 1 hour of commitment:

**Required from clinic:**
- [ ] Practice name and physical address
- [ ] Decision maker name, role, phone, email
- [ ] Point person for callbacks (if different from decision maker)
- [ ] Current phone system or call-tracking tool
- [ ] Average weekly call volume (estimate is fine)
- [ ] Peak missed-call times (lunch, after-hours, Monday morning, etc.)
- [ ] Current new patient value (average revenue per new patient)
- [ ] Pilot start date preference

**Optional but helpful:**
- [ ] Current missed-call volume (if known)
- [ ] Existing text-back or callback process (if any)
- [ ] Practice management software (Dentrix, Eaglesoft, Open Dental, etc.)
- [ ] Business hours

### Phase 2: Access and Configuration (Day 1-2)

**Access requirements:**
- [ ] Call log access confirmed (method documented)
- [ ] Text-back automation access confirmed
- [ ] Point person contact verified

**Configuration steps:**
- [ ] Document baseline missed-call volume
- [ ] Set up text-back template with practice name
- [ ] Configure missed-call detection window
- [ ] Test with intentional missed call
- [ ] Brief point person on callback queue ownership

### Phase 3: Success Metrics Baseline (Day 1)

Before pilot starts, record:

| Metric | Baseline Value | Target |
|--------|---------------|--------|
| Weekly missed calls | ___ | Track only |
| Weekly recovered appointments | ___ | 3+ during pilot |
| Revenue per new patient | $___ | Track only |
| Callback completion rate | ___% | 80%+ |

### Phase 4: Check-in Schedule (Set at Setup)

**Week 1:**
- Day 3: Quick email check (no issues?)
- Day 5: 5-minute call or email (first results?)

**Week 2:**
- Day 10: Weekly recovery report + quick check

**Week 3:**
- Day 17: Weekly recovery report + quick check

**Week 4:**
- Day 24: Final recovery report preparation
- Day 30: ROI summary + next-step call (15 minutes)

### Dental Pilot Confirmation Template

```md
Subject: Pilot confirmed - [Practice Name] Missed-Call Recovery

Hi [Name],

Your missed-call recovery pilot is confirmed.

Pilot ID: [ID]
Practice: [Name]
Start date: [Date]
Duration: 30 days
Investment: $297 (pilot) / $199 monthly after

To begin setup, please reply with:

1. Your phone system name (e.g., Weave, Patient Prism, generic VoIP)
2. Best callback point person name and phone
3. Average new patient value ($)
4. Your business hours

I'll send a 30-minute setup call invite once we have these details.

Setup takes 48 hours. Your first recovered appointment could happen this week.
```

### Dental Pilot Risk Flags

Watch for:
- Phone system incompatibility (check early)
- Point person not responding to callbacks (flag by Week 2)
- No recovered appointments by Week 2 (review workflow)
- Decision maker not engaged (escalate or pause)
- Text template approval delays (offer defaults)

If any appear, refer to `company/delivery-kits/missed-call-recovery-checklist.md` for objection handlers.
