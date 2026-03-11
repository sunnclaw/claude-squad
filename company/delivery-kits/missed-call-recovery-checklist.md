# Missed-Call Recovery Delivery Kit

Last updated: 2026-03-11
Owner: CTO

## Purpose

Start and finish missed-call recovery pilot delivery from a repeatable checklist so setup stays fast and results stay measurable.

## Current Stage: Manual Delivery

**Important:** The company is in Stage 0 (Manual traction). Text-back automation is currently manual while we validate demand.

### Manual Workflow (Current)

- Missed-call detection: Check phone system log daily
- Text-back sending: Manual via clinic's existing SMS tool or direct message
- Metrics tracking: Record in pilot folder

### Automation Candidates (Post-Pilot Validation)

After 3+ successful pilots, consider:
1. Twilio or MessageBird for automated text-back
2. Dashboard for multi-pilot metrics
3. Automated weekly report generation

See `company/pilots/capacity-planning.md` for automation timeline.

## Definition Of Ready

Do not start until these are clear:
- order ID
- package selected (Pilot Only / Pilot + 3 Months / Multi-Location)
- practice name and market
- point person for callback queue
- access to call log or phone system
- payment state
- pilot start date

## Setup Checklist

### Day 1: Access and Configuration
- [ ] Confirm call log/phone system access method
- [ ] Document current missed-call volume (baseline)
- [ ] Identify peak missed-call times (lunch, after-hours, etc.)
- [ ] Confirm point person contact info
- [ ] Schedule 30-minute setup call with point person

### Day 1-2: Text Template Setup
- [ ] Draft initial text-back template
- [ ] Include practice name and callback offer
- [ ] Send for approval (same day if possible)
- [ ] Revise based on feedback (up to 2 rounds)
- [ ] Finalize template

### Day 2: Workflow Launch
- [ ] Confirm missed-call detection is active
- [ ] Confirm text-back automation is working
- [ ] Brief point person on callback queue ownership
- [ ] Send test missed call to verify flow
- [ ] Document setup completion

## Week 1 Checklist

- [ ] Check daily: missed-call detection working
- [ ] Check daily: text-backs sent successfully
- [ ] Log first recovered appointments
- [ ] Schedule Week 1 check-in call (5 minutes)
- [ ] Ask: Any text template adjustments needed?
- [ ] Record baseline metrics

## Week 2-3 Checklist

- [ ] Send weekly recovery report (Monday)
- [ ] Track: Total missed calls
- [ ] Track: Text-backs sent
- [ ] Track: Callbacks completed
- [ ] Track: Appointments recovered
- [ ] Track: Estimated revenue recovered
- [ ] Check for workflow issues or blockers

## Week 4 Checklist

- [ ] Send final Week 4 recovery report
- [ ] Calculate 30-day ROI summary
- [ ] Total appointments recovered
- [ ] Total revenue recovered
- [ ] Compare to pilot cost
- [ ] Prepare next-step recommendation

## Delivery Package

At pilot end, send:
- 30-day ROI summary document
- All weekly recovery reports (compiled)
- Recommendation: Continue / Adjust / Pause
- Monthly pricing reminder if continuing
- Testimonial request (if successful)

## QA Checklist

Before each weekly report:
- [ ] Missed-call count matches phone system
- [ ] Text-back logs match missed calls
- [ ] Recovered appointments are verified
- [ ] Revenue estimates are reasonable

## Success Metrics Reference

| Metric | Target | How Measured |
|--------|--------|--------------|
| Response time | Under 5 minutes | Auto-logged |
| Callback rate | 80%+ | Daily tracking |
| Appointments recovered | 3+ during pilot | Weekly report |
| Revenue recovered | Pilot pays for itself | Final ROI report |

## Objection Handlers

### Text template not approved yet
Offer 2 default templates to choose from. If still stuck, offer a 10-minute call to draft together.

### Point person not responding to callbacks
Remind them of the ROI. If persistent, suggest an alternative owner or pause the pilot.

### Phone system access issues
Work with their IT or phone provider. Common solutions: API access, call forwarding, or manual daily log export.

### No recovered appointments after Week 2
Review callback process with point person. Check if texts are being sent at wrong times. Adjust workflow.

## Internal Reuse Capture

After each pilot, record at least one:
- objection that came up and how we handled it
- text template phrase that worked well
- scoping issue to add to the offer pack
- before/after metric for proof content

## Capacity Limits

Maximum concurrent pilots: 5

If you have 5 active pilots and need to start a new one:
1. Stagger start dates (minimum 2 days between starts)
2. See `company/pilots/capacity-planning.md` for escalation path

## Pilot Folder Structure

Each pilot gets a folder: `company/pilots/[practice-name-slug]/`

Required files:
- `onboarding-checklist.md` - Completed checklist
- `metrics-baseline.md` - Initial metrics
- `weekly-reports/` - Weekly reports
- `final-roi-summary.md` - End-of-pilot summary

Templates available in: `company/pilots/templates/`

## Related Documents

- Onboarding: `company/operations/dental-pilot-onboarding.md`
- Offer pack: `company/offers/missed-call-recovery-offer.md`
- Capacity planning: `company/pilots/capacity-planning.md`
- Pilot templates: `company/pilots/templates/`
