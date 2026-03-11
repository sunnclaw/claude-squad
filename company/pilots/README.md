# Pilot Customers Directory

Last updated: 2026-03-11
Owner: CTO

## Purpose

This directory contains individual pilot customer folders for the Missed-Call Recovery service.

## Folder Structure

Each pilot customer gets a folder: `company/pilots/[practice-name-slug]/`

### Example Structure

```
company/pilots/
  sunshine-dental/
    onboarding-checklist.md
    weekly-reports/
      week-1.md
      week-2.md
      week-3.md
      week-4.md
    metrics-baseline.md
    final-roi-summary.md
```

### Folder Contents

| File | Purpose |
|------|---------|
| onboarding-checklist.md | Completed onboarding checklist from dental-pilot-onboarding.md |
| metrics-baseline.md | Initial metrics before pilot starts |
| weekly-reports/ | Weekly recovery reports (Monday delivery) |
| final-roi-summary.md | End-of-pilot ROI calculation and recommendation |
| notes.md | Any ad-hoc notes during the pilot |

## Pilot Naming Convention

Use lowercase with hyphens: `sunshine-dental`, `dr-smith-family-dentistry`, etc.

## Status Tracking

All pilots are tracked in:
- `company/dashboard.md` - Overall business dashboard
- `EXECUTION_BOARD.md` - Current active work

## Integration

- Onboarding: `company/operations/dental-pilot-onboarding.md`
- Delivery: `company/delivery-kits/missed-call-recovery-checklist.md`
- Offer: `company/offers/missed-call-recovery-offer.md`
