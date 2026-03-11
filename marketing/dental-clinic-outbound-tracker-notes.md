# Dental Clinic Outbound Tracker Notes

This tracker supports `CMP-9` and seeds founder-led outreach for dental missed-call recovery discovery.

## What is included

- 100 dental clinic organization records across 10 US metro markets
- 10 clinics each from Austin, Dallas, Houston, Phoenix, Charlotte, Tampa, Denver, Atlanta, Nashville, and Columbus
- Practice name, NPI, address, phone, owner or authorized official fields, timezone, outreach status, and a simple size heuristic

## Source

- Public source: NLM Clinical Tables `npi_org` API backed by NPI organization records
- Query filter used: organization providers with `provider_type = Dentist` and city/state market filters

## Important caveats

- `clinic_size_proxy` is heuristic only:
  - `group_or_multi_location_likely` when the legal name suggests a group or chain
  - otherwise `single_location_likely`
- `website` and `email` are intentionally left blank for the next enrichment pass
- NPI update dates vary by record, so website and owner fields should be spot-checked before live outreach

## Enrichment Status (Updated 2026-03-11)

### Clinics 6-10 Research Complete (2026-03-11)

**Finding:** All 5 clinics (DENTAL SMILES, PEAK DENTAL, DENTAL PEOPLE, BRAVO DENTAL, MUELLER DENTAL) have no published email addresses or websites. They require **phone-first outreach** to obtain contact emails.

**Action:** Phone scripts prepared in `marketing/email-drafts/clinics-6-10-phone-scripts.md`

---

## Enrichment Status (Updated 2026-03-10)

### Top 25 Clinics - Enrichment Complete

All top 25 clinics have been reviewed for website/email availability.

### Clinics with Website & Contact Info Found (12 clinics)

| Market | Clinic | Website | Contact Method |
|--------|--------|---------|----------------|
| Austin | HAPII DENTAL | https://www.hapiidental.com | Contact form |
| Austin | STEINER DENTAL | https://www.steinerdental.com | info@steinerdental.com |
| Austin | BRIDGEVIEW DENTAL | https://www.bridgeviewdental.com | Contact form (rebranded as Loveless Dental) |
| Dallas | LUXE DENTAL | https://www.luxedentaldallas.com | luxedental@gmail.com (multiple locations) |
| Houston | UNIQUE DENTAL | https://www.uniquedentalhouston.com | Contact form |
| Houston | WAVE DENTAL | https://wavedentaltx.com | wavedentaltx@gmail.com |
| Houston | DENTAL INNOVATIONS | https://www.dentalinnovationstx.com | Contact form |
| Denver | BAROTZ DENTAL | https://www.barotzdental.com | Contact form |
| Denver | ICON DENTAL | https://icondentaldenver.com | info@icondentaldenver.com |
| Denver | RINO DENTAL | https://www.rinodental.com | Contact form |
| Denver | CODY DENTAL GROUP | https://codydental.com | info@codydental.com |
| Charlotte | SMILES FOR LIFE ORTHODONTICS | https://www.smilesforlifeortho.com | Contact form |

### Clinics Without Websites (13 clinics in top 25)

Phone outreach is the primary contact method for these clinics:

**Austin:**
- DENTAL SMILES - (512) 467-9955
- PEAK DENTAL - (917) 991-9717
- MUELLER DENTAL - (512) 203-2768
- LONGHORN DENTAL (Cameron Rd) - (512) 371-0978
- LONGHORN DENTAL (Research Blvd) - (512) 258-7890
- EVERITT DENTAL - (512) 744-6011
- WS DENTAL - (512) 608-4420

**Dallas:**
- DENTAL PEOPLE - (800) 578-2114
- BRAVO DENTAL - (214) 704-6778
- ARTELL DENTAL - (214) 942-6106
- REFLECTIONS DENTAL - (434) 466-0307
- SINA DENTAL - (972) 404-0000
- KENDALE DENTAL - (972) 302-1955
- ALL DENTAL - (972) 386-4999
- DENTAL BOULEVARD - (214) 321-1358
- ARTE DENTAL - (214) 843-3658

**Houston:**
- BRISK DENTAL - (713) 228-3384
- DHEERA DENTAL - (713) 777-0070

### Notes on Enrichment

- Many clinics operate under different names online or don't have dedicated websites
- Some domains redirect to unrelated businesses or are for sale
- Contact forms are the most common contact method (no direct email published)
- Email addresses found are often Gmail accounts rather than domain-specific
- Small dental practices often rely on word-of-mouth and don't have web presence

## Recommended Outreach Strategy

1. **Clinics with websites:** Use contact form URLs for email follow-up after phone calls
2. **Clinics without websites:** Phone outreach as primary contact method
3. **Multi-location practices:** May have centralized booking; ask for owner/decision-maker
4. **Best prospects for email:** LUXE DENTAL, STEINER DENTAL, WAVE DENTAL, CODY DENTAL GROUP, ICON DENTAL (have direct email addresses)
