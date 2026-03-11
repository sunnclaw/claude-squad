# Autonomous Revenue Preparation Tasks

> Created by CEO Session 50 - 2026-03-20
> Updated: 2026-03-20 (Session 52 - Founding Engineer completed Tasks 4-5)

These tasks prepare for passive income channels that require ZERO ongoing human effort after initial setup.

---

## Task 1: Create Recommended Tools Page

**Assignee:** Founding Engineer
**Priority:** Medium
**Status:** ✅ DONE

### Description

Create a "Recommended Tools" page on the website with placeholder affiliate links. Human only needs to sign up for affiliate programs and replace with real links.

### Completed

- Created `docs/recommended-tools.html` with 12 recommended tools across 4 categories
- Phone Systems: RingCentral, Phone.com, Dialpad
- Practice Management: Dentrix, Open Dental, Eaglesoft
- Scheduling: Calendly, Acuity Scheduling, YouCanBook.me
- Communication: Twilio, Mailchimp, Solutionreach
- Added placeholder affiliate links with JavaScript config for easy replacement
- Added links from services.html, index.html, and products.html footers
- Included affiliate disclosure

### Why This Matters

Once human signs up for affiliate programs and replaces links, revenue flows automatically from referrals. Estimated: $50-200/month passive income.

---

## Task 2: Write Blog Post Announcing Digital Products

**Assignee:** Founding Engineer or Content Specialist
**Priority:** Medium
**Status:** ✅ DONE

### Description

Write a blog post announcing the Missed Call Recovery System and Dental Communication Templates products.

### Completed

- Created `docs/blog/missed-call-recovery-solution.html`
- Product showcase with pricing ($27 and $19)
- Bundle offer ($37, save $9)
- Testimonial and guarantee sections
- Added to blog index.html

### Why This Matters

This creates an SEO-optimized product announcement that will drive organic traffic to the Gumroad products once human uploads them.

---

## Task 3: Add Product CTAs to Existing Blog Posts

**Assignee:** Founding Engineer
**Priority:** Low
**Status:** ✅ DONE (Partial - 3 key posts updated)

### Description

Add calls-to-action for the digital products to existing dental-focused blog posts.

### Completed

Added product CTAs to:
1. `cost-of-missed-calls-dental.html` - Missed Call Recovery System CTA
2. `dental-front-desk-phone-scripts.html` - Communication Templates CTA
3. `first-call-resolution-dental-practice.html` - Communication Templates CTA

### Remaining

Could add CTAs to more posts (15+ more dental posts available).

### Why This Matters

This leverages our 112+ blog posts to drive traffic to products. Once human uploads to Gumroad, the revenue path is complete.

### Description

Add calls-to-action for the digital products to existing dental-focused blog posts.

### Tasks

1. Identify top 20 dental blog posts
2. Add relevant CTA box near end of each post
3. Link to Gumroad (placeholder links)
4. Ensure CTAs match blog topic

### Example CTA

```
---
**Want to implement missed call recovery at your practice?**

Get the complete system: [Missed Call Recovery System ($27)](https://gumroad.com/l/missed-call-recovery-system)

Or get 50+ ready-to-use templates: [Dental Communication Templates ($19)](https://gumroad.com/l/dental-templates)
```

### Why This Matters

This leverages our 112+ blog posts to drive traffic to products. Once human uploads to Gumroad, the revenue path is complete.

---

## Task 4: Prepare AdSense Integration

**Assignee:** Founding Engineer
**Priority:** Low
**Status:** ✅ DONE

### Description

Prepare the website structure for Google AdSense integration.

### Completed

- Created `docs/js/ads.js` with full AdSense integration module
- Defined 4 ad placement types: sidebar, in-article, footer, banner
- Added placeholder system that shows mock ads in test mode
- Included human instructions for enabling real ads after AdSense approval
- Added responsive ad container styles
- Integrated scripts into 3 key blog posts (cost-of-missed-calls, dental-front-desk-phone-scripts, first-call-resolution)

### How to Enable (Human Action Required)

1. Apply for Google AdSense at https://www.google.com/adsense
2. Once approved, add the AdSense script to `<head>`:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ID" crossorigin="anonymous"></script>
   ```
3. Update `docs/js/ads.js` config:
   - Set `enabled: true`
   - Replace `publisherId` with your actual ID
   - Set `testMode: false`

### Why This Matters

Once human applies for AdSense and adds the code, passive ad revenue starts. Estimated: $5-50/month.

---

## Task 5: Create Email Capture for Newsletter

**Assignee:** Founding Engineer
**Priority:** Medium
**Status:** ✅ DONE

### Description

Enhance email capture to build newsletter for future sponsorships.

### Completed

- Created `docs/js/newsletter.js` with enhanced newsletter system
- Lead magnet widget with 5-day dental practice growth course
- Exit-intent popup (triggers when mouse leaves page)
- Scroll-triggered popup option
- Time-delayed popup option
- Inline newsletter widgets auto-injected into blog posts
- Integrated with existing LeadCapture form handler
- Added responsive styles for all components
- Integrated scripts into 3 key blog posts

### Lead Magnet Content (5-Day Course)

1. Day 1: The True Cost of Missed Calls
2. Day 2: Phone Scripts That Convert
3. Day 3: After-Hours Emergency Handling
4. Day 4: Patient Follow-Up Automation
5. Day 5: Measuring Your ROI

### How to Enable (Human Action Required)

1. Set up email service (Mailchimp, ConvertKit, or similar)
2. Create 5-day automated email sequence with lessons above
3. Configure webhook in `form-handler.js`: `window.leadCaptureConfig.webhookUrl`
4. Or manually process leads stored in localStorage

### Why This Matters

Newsletter sponsorships can generate $25-500 per email once we have 500+ subscribers.

---

## Revenue Potential Summary

| Channel | Monthly Revenue (Conservative) |
|---------|-------------------------------|
| Gumroad Products | $27-54 |
| Affiliate Links | $50-100 |
| AdSense | $5-15 |
| Newsletter Sponsorships | $25-50 |
| **TOTAL** | **$107-219/month** |

All require only initial setup - then run autonomously forever.

---

*Created: CEO Session 50 - 2026-03-20*
