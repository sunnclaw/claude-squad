# Delivery Capacity Planning

Last updated: 2026-03-11
Owner: CTO
Purpose: Ensure delivery capacity is ready for 3-5 pilot customers

## Maximum Concurrent Pilots Calculation

### Time Analysis Per Pilot

| Task | Frequency | Time per Pilot |
|------|-----------|----------------|
| Setup (onboarding) | Once | 2-3 hours |
| Daily monitoring | Daily | 5-10 minutes |
| Weekly report | Weekly | 15-20 minutes |
| Weekly check-in call | Weekly | 5 minutes |
| Issue handling | As needed | 0-30 minutes/week |

### Weekly Time Commitment per Active Pilot

- Daily monitoring: 7 x 10 min = 70 minutes
- Weekly report: 20 minutes
- Weekly check-in: 5 minutes
- Issue buffer: 15 minutes

**Total: ~2 hours/week per active pilot**

### Setup Phase (First Week)

During setup week, additional 2-3 hours required per new pilot.

### Maximum Capacity Calculation

Assuming 40-hour work week with 50% available for delivery (20 hours):

| Phase | Available Hours | Max Pilots |
|-------|-----------------|------------|
| Steady state (all pilots active) | 20 hrs/week | 10 pilots |
| Setup week (new pilots) | 20 hrs - setup time | 3-4 new setups |
| Mixed (some new, some active) | Varies | 5-7 total |

### Recommended Maximum: 5 Concurrent Pilots

**Reasoning:**
- Allows buffer for unexpected issues
- Provides time for sales and business development
- Ensures quality delivery without burnout
- Each pilot gets proper attention

## Time-Intensive Tasks (Automation Candidates)

### High-Impact Automation Opportunities

| Task | Current Time | Automation Potential | Priority |
|------|--------------|---------------------|----------|
| Missed-call detection | Manual check | **High** - API integration | 1 |
| Weekly report generation | 20 min/pilot | **High** - Template + data pull | 2 |
| Text-back sending | Manual | **High** - Automation tool | 3 |
| Metrics collection | Manual entry | **Medium** - Dashboard tool | 4 |
| Email scheduling | 5 min/pilot | **Low** - Already templated | 5 |

### Recommended Automation Sequence

1. **Week 1-2: Text-back automation**
   - Research: Twilio, MessageBird, or similar
   - Integrate with call detection trigger
   - Estimated time savings: 30 min/day per pilot

2. **Week 3-4: Weekly report template**
   - Create reusable template with auto-calculated metrics
   - Estimated time savings: 10 min/pilot

3. **Month 2: Dashboard for all pilots**
   - Single view of all pilot metrics
   - Estimated time savings: 20 min/day total

## Daily Delivery Time Requirements

### Morning Routine (Before 9 AM)

| Task | Time | For N Pilots |
|------|------|--------------|
| Check missed-call logs | 5 min | 5 x 1 min = 5 min |
| Verify text-backs sent | 5 min | 5 x 1 min = 5 min |
| Flag issues | 5 min | Variable |

**Morning Total: 15 minutes**

### Afternoon Routine (After 4 PM)

| Task | Time | For N Pilots |
|------|------|--------------|
| Review callback completion | 5 min | 5 x 1 min = 5 min |
| Update metrics | 10 min | 5 x 2 min = 10 min |
| Handle any issues | 10 min | Variable |

**Afternoon Total: 25 minutes**

### Weekly Tasks (Monday)

| Task | Time | For N Pilots |
|------|------|--------------|
| Generate weekly reports | 20 min | 5 x 4 min = 20 min |
| Send reports | 5 min | 5 x 1 min = 5 min |
| Schedule check-ins | 5 min | 5 x 1 min = 5 min |

**Weekly Total: 30 minutes**

### Total Daily Commitment

- Steady state: ~45 minutes/day
- With issues: up to 90 minutes/day
- Setup week: additional 2-3 hours per new pilot

## Reporting Templates

### Weekly Recovery Report Template

See: `company/pilots/templates/weekly-report-template.md`

### Final ROI Summary Template

See: `company/pilots/templates/final-roi-template.md`

## Quality Assurance Checklist

Before each weekly report, verify:
- [ ] Missed-call count matches phone system
- [ ] Text-back logs match missed calls
- [ ] Recovered appointments are verified with point person
- [ ] Revenue estimates are reasonable (new patient value x count)

## Gaps Identified

### Documentation Gaps

| Gap | Severity | Fix |
|-----|----------|-----|
| No text-back tool specified | High | Need to select and document tool |
| No escalation path | Medium | Add to this document |
| No pilot folder template | Low | Create template structure |

### Process Gaps

| Gap | Severity | Fix |
|-----|----------|-----|
| Manual data entry | Medium | Automate when possible |
| No centralized dashboard | Medium | Build simple tracker |
| Issue tracking ad-hoc | Low | Use pilot folder notes |

## Escalation Path for Capacity Issues

### Level 1: Self-Managed (Current capacity)

- Up to 5 pilots: Handle all personally
- Flag in daily notes if behind on any pilot
- Extend response time SLA to 24 hours if needed

### Level 2: Priority Triage (Over 5 pilots)

**Trigger:** 6+ active pilots OR missing deliverables

Actions:
1. Pause new pilot onboarding
2. Prioritize pilots closest to success metrics
3. Extend check-in frequency to bi-weekly for stable pilots
4. Consider contractor support for routine tasks

### Level 3: External Support (Sustained overload)

**Trigger:** 8+ pilots for 2+ weeks OR quality declining

Actions:
1. Hire part-time virtual assistant for:
   - Daily monitoring
   - Report generation
   - Scheduling
2. Focus CTO time on:
   - Setup calls
   - Issue resolution
   - Customer relationships
3. Estimated VA cost: $200-400/week (offset by pilot revenue)

### Level 4: Capacity Hard Stop

**Trigger:** 10+ pilots

Actions:
1. Stop accepting new pilots immediately
2. Create waitlist
3. Announce 2-week lead time for new starts
4. Evaluate full-time hire or contractor promotion

## Risk Mitigation: 5 Pilots in Week 1

**Scenario:** All 25 outreach contacts say yes simultaneously (unlikely but possible)

### Immediate Response

| Day | Action |
|-----|--------|
| Day 1 | Accept up to 3 pilots to start immediately |
| Day 1 | Schedule remaining 2 for staggered starts (Day 3, Day 5) |
| Day 1 | Notify all 5 of onboarding timeline |
| Day 2-3 | Complete setups for first batch |
| Day 3-5 | Complete setups for second batch |

### Time Management

- Allocate 8 hours/day to delivery during surge
- Pause sales outreach during surge
- Communicate realistic timelines to customers
- Quality over speed - never compromise setup quality

### Backup Plan

If capacity exceeded:
1. Offer delayed start with discount ($50 off)
2. Refer overflow to competitor or waitlist
3. Prioritize highest-value customers

## Integration Checklist

This capacity plan integrates with:
- [x] `company/operations/dental-pilot-onboarding.md`
- [x] `company/delivery-kits/missed-call-recovery-checklist.md`
- [x] `company/pilots/README.md` (created)
- [ ] `company/pilots/templates/` (to create)
