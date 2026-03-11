# Missed-Call Recovery Capacity Plan

Last updated: 2026-03-10
Owner: CTO

## Purpose

Define maximum concurrent pilot capacity for a one-person delivery operation and establish risk mitigation strategies.

## Capacity Calculation

### Time Required Per Pilot

| Phase | Time Investment | Frequency |
|-------|-----------------|-----------|
| Setup (Day 1-2) | 2-3 hours | Once |
| Weekly check-in | 5-10 minutes | Weekly |
| Weekly report prep | 15-20 minutes | Weekly |
| Text template revision | 10-15 minutes | As needed (max 2 per pilot) |
| Month-end ROI summary | 30 minutes | Once |

### Monthly Per-Pilot Time (After Setup)

| Week | Time |
|------|------|
| Week 1 | ~30 min (check-in + report + adjustments) |
| Week 2 | ~25 min (check-in + report) |
| Week 3 | ~25 min (check-in + report) |
| Week 4 | ~45 min (check-in + report + ROI summary) |
| **Total Monthly** | ~2 hours per active pilot |

## Maximum Concurrent Pilots

### Conservative Estimate: 8-10 Active Pilots

Rationale:
- At 2 hours/month per pilot, 10 pilots = 20 hours/month
- This allows for:
  - New pilot setups (staggered, not all at once)
  - Unexpected issues
  - Buffer for communication delays
  - Other business operations

### Optimistic Estimate: 12-15 Active Pilots

With:
- Optimized reporting templates
- Batch check-ins (multiple calls on same day)
- Proactive template library (less customization)

### Absolute Maximum: 20 Pilots

Requires:
- Full-time focus (40+ hours/week)
- Automation tools for reporting
- Minimal template customization
- Perfect customer responsiveness

## Staggered Onboarding Recommendation

To avoid setup bottlenecks, limit new pilot starts to:
- **Max 2-3 new pilots per week** during setup phase
- Each setup requires 2-3 hours over 2 days

### Week 1 Scenario: 5 Pilots Close

| Day | Action | Time |
|-----|--------|------|
| Mon | Start Pilot 1 setup | 2 hours |
| Tue | Start Pilot 2 setup + Pilot 1 day 2 | 3 hours |
| Wed | Start Pilot 3 setup | 2 hours |
| Thu | Start Pilot 4 setup + Pilot 3 day 2 | 3 hours |
| Fri | Start Pilot 5 setup | 2 hours |
| Next Mon | Pilot 5 day 2 | 1 hour |

**Total setup time for 5 pilots: ~13 hours over 6 business days**

This is manageable but requires focused execution.

## Time-Intensive Tasks to Automate

### Current Manual Tasks

1. **Missed-call log checking** - Could be automated with API integration
2. **Report generation** - Template-based, could be semi-automated
3. **Text-back verification** - Manual test calls
4. **ROI calculation** - Spreadsheet formula, already efficient

### Automation Opportunities

| Task | Current Time | Automation Potential |
|------|--------------|---------------------|
| Missed-call detection verification | 5 min/pilot/day | High - API webhook |
| Weekly report generation | 15-20 min/pilot | Medium - template + auto-fill |
| Check-in reminders | 2 min/pilot | High - calendar automation |
| Text template library | 10-15 min/review | High - pre-approved templates |

## Daily Delivery Time Requirements

### With 5 Active Pilots

| Task | Daily Time |
|------|------------|
| Morning check: missed-call detection | 10-15 min |
| Customer communication (async) | 10-15 min |
| Report preparation (1-2 pilots/day on rotation) | 20 min |
| **Total Daily** | ~40-50 min |

### With 10 Active Pilots

| Task | Daily Time |
|------|------------|
| Morning check: missed-call detection | 20-30 min |
| Customer communication (async) | 20-30 min |
| Report preparation (2-3 pilots/day on rotation) | 30-40 min |
| **Total Daily** | ~70-100 min |

## Risk Mitigation

### Scenario: 5 Pilots Close in Week 1

**Immediate Actions:**
1. Accept all 5 (capacity allows it)
2. Stagger setups over 6 days (see above schedule)
3. Use default templates to speed up setup
4. Batch check-ins on specific days

**Escalation Path:**
- If overwhelmed, prioritize by pilot start date
- Delay new setups by 2-3 days if needed
- All customers informed of 48-hour setup timeline upfront

### Scenario: Customer Demands Same-Day Setup

**Response:**
- Standard timeline is 48 hours
- Rush setup possible but requires:
  - Immediate access to phone system
  - Immediate point person availability
  - Immediate template approval

### Scenario: Point Person Unresponsive

**Protocol:**
1. Day 1: Send reminder via email + text
2. Day 2: Call decision maker directly
3. Day 3: Escalate to decision maker with concern note
4. Day 5: Document as "paused - awaiting response"

## Scaling Triggers

When to consider hiring/contracting help:

| Signal | Action |
|--------|--------|
| 12+ active pilots consistently | Document process for handoff |
| 15+ active pilots | Consider part-time contractor for reporting |
| 20+ active pilots | Full-time delivery support needed |
| Setup backlog > 1 week | Pause new sales or add capacity |

## Capacity Summary

| Metric | Value |
|--------|-------|
| Max concurrent pilots (solo) | 8-10 comfortably, 15 max |
| Max new pilots per week | 2-3 for quality setup |
| Time per active pilot/month | ~2 hours |
| Daily time with 10 pilots | ~1.5 hours |
| Break-even point | 4 pilots cover ops time |

## Integration with Other Documents

- `company/delivery-kits/missed-call-recovery-checklist.md` - Delivery steps
- `company/operations/dental-pilot-onboarding.md` - Onboarding process
- `company/offers/missed-call-recovery-offer.md` - Service definition
