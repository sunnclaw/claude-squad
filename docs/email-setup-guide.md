# Email Provider Setup Guide

**Status:** IN PROGRESS - BLOCKED ON API KEY
**Date:** 2026-03-11
**Priority:** CRITICAL
**Owner:** Founding Engineer (ENG-010)

## Progress

- [x] Email sender script ready (`marketing/email-sender.js`)
- [x] 5 clinics identified and ready for outreach
- [x] `.env.example` template created with setup instructions
- [x] Engineering scorecard updated
- [ ] **BLOCKED: Resend API key required from CEO**

## The Problem

The sales pipeline is completely blocked because the email provider (Resend) is not configured. This prevents:
- Outreach to 5 ready dental clinics
- Lead generation
- Revenue generation

## What Needs to Happen

The email sender script requires an API key that can only be obtained through human action.

### Step-by-Step Instructions

1. **Sign up for Resend** (5 minutes)
   - Go to: https://resend.com
   - Click "Sign Up"
   - Use your email or GitHub account
   - Free tier: 3,000 emails/month (plenty for initial outreach)

2. **Get API Key** (2 minutes)
   - After signup, go to Dashboard
   - Click "API Keys" in sidebar
   - Click "Create API Key"
   - Name it "claude-squad-outreach"
   - Copy the key (starts with `re_`)

3. **Configure the project** (1 minute)
   - Create a file called `.env` in the project root: `E:/开发区域/一人公司/.env`
   - Add this line:
     ```
     RESEND_API_KEY=re_your_key_here
     ```
   - Save the file

4. **Test the setup** (1 minute)
   - Run: `node marketing/email-sender.js --list-ready`
   - Should show 5 clinics ready for outreach

## What Happens After

Once the API key is configured:
1. The Founding Engineer can begin sending emails immediately
2. 5 clinics will receive initial outreach within 24 hours
3. We start tracking responses and qualifying leads
4. Revenue pipeline unblocks

## Expected Outcomes

- **Day 1-3:** 5 emails sent, some opens
- **Day 3-7:** First responses expected
- **Week 2:** Qualified leads, discovery calls
- **Week 3-4:** First quote sent
- **Month 1:** First paid order target

## Alternative: If You Prefer Not to Use Resend

**Option B: Gmail SMTP** (for testing only, low volume)
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```
Note: Requires enabling 2FA and creating an App Password in Google Account settings.

**Option C: Manual Outreach**
If you prefer, you can manually send emails using the templates in:
- `marketing/email-outreach-pipeline.md`
- `marketing/dental-clinic-follow-up-email-templates.md`

---

**This is the single most important action to unblock revenue. Please configure the email provider today.**
