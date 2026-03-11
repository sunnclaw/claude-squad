# Clinic Email Enrichment Task (CLA-91)

**Created:** 2026-03-11
**Owner:** Sales Manager
**Status:** Research Required
**Target:** Enrich 20 clinics with email addresses

---

## Summary

Current tracker has ~100 clinics, but only 5 have verified email addresses. This task focuses on enriching the remaining clinics with contact emails for outreach.

---

## Clinics WITH Emails (Already Complete)

| Clinic | City | Email |
|--------|------|-------|
| Steiner Dental | Austin | info@steinerdental.com |
| Luxe Dental | Dallas | luxedental@gmail.com |
| Wave Dental | Houston | wavedentaltx@gmail.com |
| Icon Dental | Denver | info@icondentaldenver.com |
| Cody Dental | Denver | info@codydental.com |

---

## Priority Clinics for Email Enrichment (20 Targets)

### HIGH PRIORITY - Have Websites (Easier to Research)

| # | Clinic | City | Website | Phone | Notes |
|---|--------|------|---------|-------|-------|
| 1 | HAPII DENTAL | Austin | hapiidental.com | (512) 832-6840 | Has contact form, need direct email |
| 2 | BRIDGEVIEW DENTAL | Austin | bridgeviewdental.com | (512) 347-8299 | Rebranded as Loveless Dental |
| 3 | UNIQUE DENTAL | Houston | uniquedentalhouston.com | (713) 952-6161 | Multiple locations |
| 4 | DENTAL INNOVATIONS | Houston | dentalinnovationstx.com | (713) 928-3311 | Has contact form |
| 5 | BAROTZ DENTAL | Denver | barotzdental.com | (303) 595-4994 | Cosmetic focus |
| 6 | RINO DENTAL | Denver | rinodental.com | (303) 292-3120 | Modern practice |
| 7 | SMILES FOR LIFE ORTHODONTICS | Charlotte | smilesforlifeortho.com | (704) 545-2018 | Orthodontics |

### MEDIUM PRIORITY - Need Website Research

| # | Clinic | City | Phone | Owner | Notes |
|---|--------|------|-------|-------|-------|
| 8 | DENTAL SMILES | Austin | (512) 467-9955 | Divya Shetty | No website found - call for email |
| 9 | PEAK DENTAL | Austin | (917) 991-9717 | Feda Zayed | No website found - call for email |
| 10 | MUELLER DENTAL | Austin | (512) 203-2768 | Kamyar Yazdi | No website found - call for email |
| 11 | LONGHORN DENTAL | Austin | (512) 371-0978 | Malcolm Scott | Chain - research corporate contact |
| 12 | EVERITT DENTAL | Austin | (512) 744-6011 | Barry Levinson | No website found |
| 13 | WS DENTAL | Austin | (512) 608-4420 | David Wallach | No website found |
| 14 | DENTAL PEOPLE | Dallas | (800) 578-2114 | Sharon Chan | No website found |
| 15 | BRAVO DENTAL | Dallas | (214) 704-6778 | Rita Ne | No website found |
| 16 | ARTELL DENTAL | Dallas | (214) 942-6106 | Artur Khurshudian | No website found |
| 17 | REFLECTIONS DENTAL | Dallas | (434) 466-0307 | Sina Sadeghi | No website found |
| 18 | SINA DENTAL | Dallas | (972) 404-0000 | Ahmad Hamidfar | No website found |
| 19 | KENDALE DENTAL | Dallas | (972) 302-1955 | Lu Zou | No website found |
| 20 | ALL DENTAL | Dallas | (972) 386-4999 | Amir Izaddoust | No website found |

---

## Research Methods

### Method 1: Website Contact Page
1. Visit clinic website
2. Look for "Contact Us" page
3. Find direct email (not just contact form)
4. If only form, try: info@[domain], contact@[domain], [practice]@gmail.com

### Method 2: Google Search
```
search: "[clinic name] [city] dental email"
search: "[clinic name] [city] contact"
```

### Method 3: Phone Call
For clinics without websites:
1. Call the phone number
2. Ask: "May I have your email address for a business inquiry?"
3. Log the response

### Method 4: LinkedIn
```
search: "[clinic name] dental [city]"
search: "[owner name] dentist [city]"
```

---

## Update Instructions

When emails are found, update `marketing/dental-clinic-outbound-tracker.csv`:

1. Add email to the `email` column
2. Update `notes` column with source
3. Change `outreach_status` to `ready` when email is verified

---

## Progress Tracking

| Status | Count |
|--------|-------|
| Total clinics needing enrichment | ~95 |
| Target for this task | 20 |
| Completed | 0 |
| Remaining | 20 |

---

## Next Steps

1. **HUMAN ACTION REQUIRED:** Research emails using methods above
2. Update tracker CSV with findings
3. Mark CLA-91 complete when 20 new emails added

---

*This document supports CLA-91. Auto-updated by Sales Manager agent.*

---

## Session 55 Update (2026-03-20)

**Status:** Task BLOCKED
**Blocker:** WebSearch and WebFetch tools not available

### What Sales Manager Can Do:
1. Prepare email templates (DONE)
2. Organize tracking documents (DONE)
3. Create status reports (DONE)

### What Requires Human/Web Access:
1. Website visits to find emails
2. Google searches for clinic contacts
3. LinkedIn research for decision makers

### Alternative Paths (No Research Required):
- 5 clinics have direct emails ready: STEINER, WAVE, LUXE, ICON, CODY
- 7 clinics have contact forms ready: HAPII, BRIDGEVIEW, UNIQUE, DENTAL INNOVATIONS, SMILES FOR LIFE, BAROTZ, RINO
- Phone scripts ready for 89 clinics without email

### Human Action Required:
Either:
1. Grant WebSearch permission to AI agent, OR
2. Research emails manually using the methods documented above, OR
3. Use the 12 clinics already ready for outreach (5 email + 7 contact forms)

---

*Last updated: Sales Manager Agent - 2026-03-20 (Session 55)*
