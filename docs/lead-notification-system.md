# Lead Notification System

This document explains how to set up and use the lead notification system for Claude天团.

## Overview

The lead notification system provides three layers of lead capture:

1. **Browser localStorage** - Immediate local storage (always works, even offline)
2. **Webhook endpoint** - Real-time server notification (when configured)
3. **Email notification** - Instant email alerts for new leads (when configured)

## Quick Start

### 1. Start the Webhook Server (Optional but Recommended)

The webhook server provides a central place to collect leads and send notifications.

```bash
cd company

# Set environment variables
export RESEND_API_KEY="your-resend-api-key"  # Optional: for email notifications
export ADMIN_TOKEN="your-secret-admin-token"  # For admin endpoints

# Start the server
node lead-webhook-server.js
```

The server will run on port 3200 by default.

### 2. Configure the Webhook URL

Add this script before the form-handler.js on your pages:

```html
<script>
  window.leadCaptureConfig = {
    webhookUrl: 'http://your-server:3200/api/leads'
  };
</script>
<script src="js/form-handler.js"></script>
```

For GitHub Pages (static hosting), you can:
- Run the webhook server on a VPS or cloud service
- Use a serverless function (AWS Lambda, Vercel, CloudFlare Workers)
- Or simply export leads from the dashboard and import them locally

### 3. Test the Integration

Submit a test lead on your contact form. Check the webhook server logs:

```
[LEAD] New lead captured: test@example.com
[NOTIFY] Email sent to contact@claudetianduan.com
```

## Command Line Usage

### Check for New Leads

```bash
node lead-notification-system.js --check
```

### Process and Notify New Leads

```bash
# Set API key first
export RESEND_API_KEY="re_xxx"

# Process leads
node lead-notification-system.js --notify
```

### Configure Settings

```bash
# Set webhook URL
node lead-notification-system.js --webhook https://hooks.slack.com/services/xxx

# Set notification email
node lead-notification-system.js --email contact@claudetianduan.com

# Set email provider
node lead-notification-system.js --provider resend
```

### Import Leads from Dashboard Export

```bash
# Export from dashboard first (click "Export Dashboard Data" button)
# Then import:
node lead-notification-system.js --import ../dashboard-backup.json
```

## API Endpoints

### POST /api/leads
Create a new lead.

```bash
curl -X POST http://localhost:3200/api/leads \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","phone":"555-1234","company":"Acme Corp","interest":"Missed Call Recovery"}'
```

### GET /api/leads
List all leads (requires authentication).

```bash
curl http://localhost:3200/api/leads \
  -H "Authorization: Bearer claude-squad-admin-2026"
```

### GET /api/leads/new
Get unnotified leads (requires authentication).

```bash
curl http://localhost:3200/api/leads/new \
  -H "Authorization: Bearer claude-squad-admin-2026"
```

### POST /api/leads/notify
Send notifications for all unnotified leads (requires authentication).

```bash
curl -X POST http://localhost:3200/api/leads/notify \
  -H "Authorization: Bearer claude-squad-admin-2026"
```

## Email Provider Setup

### Resend (Recommended)

1. Sign up at https://resend.com (free tier: 3,000 emails/month)
2. Get your API key from the dashboard
3. Set the environment variable:

```bash
export RESEND_API_KEY="re_xxxxxxxxxxxxx"
```

### SendGrid

1. Sign up at https://sendgrid.com (free tier: 100 emails/day)
2. Get your API key from Settings > API Keys
3. Set the environment variable:

```bash
export SENDGRID_API_KEY="SG.xxxxxxxxxxxxx"
```

## Webhook Integration Options

### Slack Webhook

1. Create a Slack app and enable incoming webhooks
2. Configure the webhook URL:

```bash
node lead-notification-system.js --webhook https://hooks.slack.com/services/TXXX/BXXX/XXXX
```

### Discord Webhook

1. Create a webhook in your Discord channel settings
2. Configure the webhook URL:

```bash
node lead-notification-system.js --webhook https://discord.com/api/webhooks/XXX/XXX
```

### Custom Webhook

You can integrate with any service that accepts JSON webhooks:

```bash
node lead-notification-system.js --webhook https://your-service.com/webhook/leads
```

The webhook will receive:

```json
{
  "event": "new_lead",
  "timestamp": "2026-03-11T00:00:00.000Z",
  "data": {
    "id": "lead_xxx",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "555-1234",
    "company": "Acme Corp",
    "interest": "Missed Call Recovery",
    "source": "contact-form",
    "message": "I'm interested in your services"
  }
}
```

## Deployment Options

### Option 1: Local Server
- Run `lead-webhook-server.js` on a local machine
- Use ngrok or similar for public access
- Good for development and testing

### Option 2: VPS / Cloud Server
- Deploy to AWS EC2, DigitalOcean, etc.
- Run as a systemd service
- Recommended for production

### Option 3: Serverless
- Convert to AWS Lambda, Vercel, or CloudFlare Workers
- Cost-effective for low volume
- Requires some code modification

### Option 4: No Server (Manual)
- Export leads from dashboard periodically
- Import and process with CLI tool
- Works for low-volume or initial testing

## Troubleshooting

### Leads not syncing to webhook
- Check if webhook server is running
- Verify the webhook URL is correct
- Check browser console for errors
- Ensure CORS is properly configured

### Email notifications not sending
- Verify RESEND_API_KEY or SENDGRID_API_KEY is set
- Check notification email is configured
- Run `--notify` manually to see error messages

### Lost leads
- Leads are always saved to localStorage first
- Check browser's localStorage for `claude_squad_leads`
- Use dashboard export to backup leads

## Files

- `company/lead-webhook-server.js` - HTTP server for receiving leads
- `company/lead-notification-system.js` - CLI tool for lead management
- `company/lead-notification-config.json` - Configuration file
- `company/leads.json` - Lead storage (created automatically)
- `docs/js/form-handler.js` - Frontend form handling
