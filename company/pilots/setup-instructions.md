# Pilot Customer Setup Instructions

> Complete these instructions during the Day 2-3 configuration phase. Allow approximately 30-45 minutes for full setup.

---

## Table of Contents

1. [Call Forwarding Setup](#1-call-forwarding-setup)
2. [Dashboard Access](#2-dashboard-access)
3. [Notification Preferences](#3-notification-preferences)
4. [Testing Your Setup](#4-testing-your-setup)
5. [Troubleshooting](#5-troubleshooting)

---

## 1. Call Forwarding Setup

### Overview

Call forwarding ensures that when your clinic can't answer, calls automatically route to our AI system. We'll capture the caller's information and help them book an appointment.

### Step 1.1: Determine Your Forwarding Method

Choose based on your phone system:

| Phone System Type | Forwarding Method |
|-------------------|-------------------|
| Landline (traditional) | Contact your carrier for conditional forwarding |
| VoIP system | Configure in your phone system admin panel |
| Mobile phone | Use built-in call forwarding settings |
| PBX system | Add forwarding rule in PBX configuration |

### Step 1.2: Conditional Call Forwarding Setup

Conditional forwarding only redirects calls when your line is busy or unanswered. This is the recommended setup.

#### For Mobile Phones (iPhone)

1. Open **Settings** > **Phone** > **Call Forwarding**
2. Enable **Call Forwarding**
3. Enter your assigned forwarding number: **[FORWARDING_NUMBER]**
4. For conditional forwarding (no answer/busy):
   - Dial `*61*[FORWARDING_NUMBER]**[SECONDS]#` and press Call
   - Replace [SECONDS] with desired ring time (15-30 seconds recommended)
   - Example: `*61*13800138000**20#`

#### For Mobile Phones (Android)

1. Open **Phone** app > **Settings** > **Calls** > **Call Forwarding**
2. Select **Forward when busy** and enter **[FORWARDING_NUMBER]**
3. Select **Forward when unanswered** and enter **[FORWARDING_NUMBER]**
4. Set delay time (20-30 seconds recommended)

#### For Landlines

Contact your phone carrier and request:
- Conditional call forwarding to **[FORWARDING_NUMBER]**
- Forward on: busy signal, no answer after 4 rings
- Carrier activation codes vary by provider

Common carrier codes:
| Carrier | Busy Forward | No Answer Forward |
|---------|--------------|-------------------|
| China Mobile | *67*[NUMBER]# | *61*[NUMBER]# |
| China Unicom | *67*[NUMBER]# | *61*[NUMBER]# |
| China Telecom | *67*[NUMBER]# | *61*[NUMBER]# |

### Step 1.3: Verify Forwarding Works

1. Call your clinic from a different phone
2. Let it ring until it forwards (don't answer)
3. You should hear our AI greeting
4. If not working, see [Troubleshooting](#5-troubleshooting)

---

## 2. Dashboard Access

### Step 2.1: First Login

1. Open your web browser
2. Go to: **https://dashboard.claudesquad.com**
3. Enter your credentials:
   - Username: Your registered email
   - Password: [Provided in welcome email]

### Step 2.2: Change Your Password

1. Click your name (top right corner)
2. Select **Account Settings**
3. Click **Change Password**
4. Enter:
   - Current password (from welcome email)
   - New password (minimum 8 characters, include number and symbol)
   - Confirm new password
5. Click **Save**

### Step 2.3: Enable Two-Factor Authentication (Recommended)

1. In **Account Settings**, click **Security**
2. Click **Enable 2FA**
3. Scan the QR code with your authenticator app (Google Authenticator, Authy, etc.)
4. Enter the verification code
5. Save your backup codes in a secure location

### Step 2.4: Explore the Dashboard

**Main Sections:**

| Section | What You'll Find |
|---------|------------------|
| **Dashboard** | Overview of today's calls and metrics |
| **Call Log** | Complete history of all calls |
| **Messages** | Voicemail transcripts and messages |
| **Appointments** | Recovered appointment requests |
| **Reports** | Weekly and monthly performance reports |
| **Settings** | Account and notification preferences |

---

## 3. Notification Preferences

### Step 3.1: Configure Alerts

Choose how you want to be notified about missed calls and messages.

1. Go to **Settings** > **Notifications**
2. Configure each notification type:

#### Missed Call Alert
- **When:** Immediately when a call is captured
- **Delivery Options:**
  - [ ] Push notification (mobile app)
  - [ ] SMS to mobile
  - [ ] Email
- **Content:** Caller name, phone number, call reason

#### Voicemail Notification
- **When:** When a voicemail is left
- **Delivery Options:**
  - [ ] Email with transcript
  - [ ] SMS summary
  - [ ] Push notification
- **Include:** Audio file attachment (optional)

#### Daily Summary
- **When:** Every day at [TIME]
- **Content:** Total calls, recovered appointments, action items
- **Delivery:** Email

#### Weekly Report
- **When:** Every Monday at 9:00 AM
- **Content:** 7-day performance metrics
- **Delivery:** Email

### Step 3.2: Add Team Members

1. Go to **Settings** > **Team**
2. Click **Add Team Member**
3. Enter:
   - Name
   - Email
   - Role (Admin, Manager, Viewer)
   - Notification preferences
4. Click **Send Invite**
5. Team member will receive email to set up their account

### Step 3.3: Set Business Hours

1. Go to **Settings** > **Business Hours**
2. Set your clinic's operating hours
3. Configure after-hours behavior:
   - Forward all calls to AI
   - Send to voicemail only
   - Emergency escalation

---

## 4. Testing Your Setup

### Step 4.1: Test Checklist

Complete each test to ensure everything works:

#### Test 1: Basic Forwarding
- [ ] Call clinic number from external phone
- [ ] Let ring until forwarding activates
- [ ] Verify AI greeting plays
- [ ] Speak a test message
- [ ] Hang up

#### Test 2: Call Logging
- [ ] Log into dashboard
- [ ] Verify test call appears in Call Log
- [ ] Check caller ID displays correctly
- [ ] Verify call duration is recorded

#### Test 3: Notification Delivery
- [ ] Check SMS was received (if enabled)
- [ ] Check email was received (if enabled)
- [ ] Verify push notification (if app installed)

#### Test 4: Voicemail Transcription
- [ ] Call and leave a voicemail
- [ ] Check dashboard for transcript
- [ ] Verify accuracy of transcription
- [ ] Download audio file (if needed)

#### Test 5: After-Hours Routing
- [ ] Temporarily set hours to "closed"
- [ ] Make a test call
- [ ] Verify after-hours greeting plays
- [ ] Reset to normal hours

### Step 4.2: Record Test Results

| Test | Result | Notes |
|------|--------|-------|
| Basic Forwarding | Pass / Fail | |
| Call Logging | Pass / Fail | |
| Notification Delivery | Pass / Fail | |
| Voicemail Transcription | Pass / Fail | |
| After-Hours Routing | Pass / Fail | |

### Step 4.3: Go Live Checklist

Before going live:
- [ ] All tests passed
- [ ] Team members configured
- [ ] Notifications working
- [ ] Business hours set correctly
- [ ] Emergency contact updated
- [ ] Dashboard bookmarked on all devices

---

## 5. Troubleshooting

### Common Issues and Solutions

#### Calls Not Forwarding

**Symptoms:** Calls ring indefinitely or go to your old voicemail

**Solutions:**
1. Verify forwarding is enabled on your phone
2. Check forwarding number is correct
3. Test with a different calling phone
4. Contact your carrier to verify forwarding is active
5. Check for conflicting voicemail settings

#### Dashboard Login Issues

**Symptoms:** Cannot log in, "invalid credentials" error

**Solutions:**
1. Verify email is correct (case-sensitive)
2. Use "Forgot Password" to reset
3. Check spam folder for password reset email
4. Clear browser cache and cookies
5. Try a different browser

#### Notifications Not Received

**Symptoms:** No SMS, email, or push notifications

**Solutions:**
1. Check notification settings are enabled
2. Verify phone number/email is correct
3. Check spam/junk folder
4. For SMS: Verify number format (+86...)
5. For push: Ensure app permissions allow notifications

#### Poor Call Quality

**Symptoms:** Choppy audio, echoes, delays

**Solutions:**
1. Check your internet connection (for VoIP)
2. Try calling from a different location
3. Report issue to technical support
4. Note time and duration for investigation

#### Transcription Errors

**Symptoms:** Inaccurate or missing voicemail transcriptions

**Solutions:**
1. Check audio quality of original message
2. Some accents or terms may need manual review
3. Report persistent issues to support
4. Audio file is always available for manual review

---

## Support Contacts

| Issue Type | Contact | Response Time |
|------------|---------|---------------|
| General Questions | support@claudesquad.com | 2 hours |
| Technical Issues | tech@claudesquad.com | 1 hour |
| Billing Questions | billing@claudesquad.com | 4 hours |
| Emergency (24/7) | +86 XXX-XXXX-XXXX | 15 minutes |

---

## Quick Reference Card

**Dashboard URL:** https://dashboard.claudesquad.com
**Forwarding Number:** [FORWARDING_NUMBER]
**Support Email:** support@claudesquad.com
**Support Phone:** +86 XXX-XXXX-XXXX

**Carrier Forwarding Codes:**
- Enable (conditional): `*61*[NUMBER]#` or `*67*[NUMBER]#`
- Disable: `#61#` or `#67#`
- Check status: `*#61#` or `*#67#`

---

*Need help? Contact us at support@claudesquad.com or call +86 XXX-XXXX-XXXX*
