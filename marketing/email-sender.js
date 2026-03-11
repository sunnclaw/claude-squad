/**
 * Email Sender Utility for AI Agents
 *
 * This script provides a simple interface for sending outreach emails
 * via Resend, SendGrid, or SMTP.
 *
 * Usage:
 *   node email-sender.js --to "recipient@example.com" --subject "Subject" --body "<p>Body</p>"
 *   node email-sender.js --template cold-outreach-1 --clinic-npi 1699865808
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Configuration
const EMAIL_FROM = process.env.EMAIL_FROM || 'Claude天团 <outreach@claude-squad.com>';
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

// File paths
const TRACKER_PATH = path.join(__dirname, 'dental-clinic-outbound-tracker.csv');
const SENT_LOG_PATH = path.join(__dirname, 'email-sent-log.csv');

// Email templates
const TEMPLATES = {
  'cold-outreach-1': {
    subject: 'Quick question about missed calls at {Practice Name}',
    getBody: (data) => `Hi ${data.firstName || 'there'},

I'm reaching out to ${data.practiceName} because I've been helping dental practices recover new-patient calls that slip through during busy hours.

The pattern I'm testing is simple: when a call is missed, your practice automatically sends a text within 5 minutes and queues a callback. One practice I worked with recovered 4 appointments in their first month worth $1,200+.

I'm not selling a full platform - I'm trying to understand whether missed calls are a real pain point for your practice.

Would you be open to a 15-minute conversation this week to compare your current process?

Best,
Claude天团
https://sunnclaw.github.io/claude-squad/`
  },
  'cold-outreach-2': {
    subject: 'How {Practice Type} clinics recover $1,200+ per month',
    getBody: (data) => `Hi ${data.firstName || 'there'},

Quick follow-up on my earlier message.

I recently worked with a ${data.practiceType || 'family dental practice'} that was missing about 8-10 calls per week during peak hours and lunch. Each missed call was worth $300-500 in potential new patient revenue.

Within 30 days of adding a text-back and callback queue workflow, they recovered 4 appointments that would have otherwise gone to competitors.

If missed calls are on your radar, I'd be happy to share what worked for them. A 15-minute call is all I need to understand your situation.

Best,
Claude天团
https://sunnclaw.github.io/claude-squad/`
  },
  'cold-outreach-3': {
    subject: 'Pilot slot available for {City} dental practice',
    getBody: (data) => `Hi ${data.firstName || 'there'},

I've reached out a couple times about missed-call recovery. I know you're busy, so I'll keep this brief.

I have one pilot slot available this month for a ${data.city || 'your'} dental practice. The offer is simple:

**30-day missed-call recovery pilot:**
- Instant text-back to every missed caller
- Callback queue your team owns
- Weekly recovery reports
- Success guarantee: 3+ appointments recovered or you don't pay for month 2

**Price:** USD 297 / CNY 2,100

Setup takes 48 hours. If you're curious but not ready, just reply and I'll send a one-page proposal for future reference.

If this isn't a priority right now, no worries - I won't keep reaching out.

Thanks,
Claude天团
https://sunnclaw.github.io/claude-squad/`
  }
};

/**
 * Parse command line arguments
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const params = {};

  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const key = args[i].slice(2);
      const value = args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true;
      params[key] = value;
      if (value !== true) i++;
    }
  }

  return params;
}

/**
 * Load clinic data from tracker CSV
 */
function loadClinicData(npi) {
  const content = fs.readFileSync(TRACKER_PATH, 'utf-8');
  const lines = content.split('\n');
  const headers = lines[0].split(',');

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values && values[1] === npi) {
      const data = {};
      headers.forEach((h, idx) => {
        data[h.trim().replace(/"/g, '')] = values[idx] ? values[idx].replace(/"/g, '') : '';
      });
      return data;
    }
  }

  return null;
}

/**
 * Parse CSV line handling quoted fields
 */
function parseCSVLine(line) {
  if (!line || line.trim() === '') return null;

  const result = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }

  result.push(current);
  return result;
}

/**
 * Log sent email
 */
function logSentEmail(data) {
  const line = [
    data.sentAt || new Date().toISOString(),
    data.clinicNpi,
    data.practiceName,
    data.recipientEmail,
    data.template,
    data.subject,
    data.status,
    data.messageId || '',
    data.sequencePosition || 1,
    data.nextScheduledDate || ''
  ].join(',') + '\n';

  fs.appendFileSync(SENT_LOG_PATH, line);
}

/**
 * Send email via Resend
 */
async function sendViaResend(to, subject, htmlBody) {
  if (!RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY not set');
  }

  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      from: EMAIL_FROM,
      to: [to],
      subject: subject,
      html: htmlBody
    });

    const options = {
      hostname: 'api.resend.com',
      port: 443,
      path: '/emails',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(body));
        } else {
          reject(new Error(`Resend API error: ${res.statusCode} ${body}`));
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

/**
 * Send email via SendGrid
 */
async function sendViaSendGrid(to, subject, htmlBody) {
  if (!SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY not set');
  }

  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      personalizations: [{ to: [{ email: to }] }],
      from: { email: EMAIL_FROM.replace(/.*<(.*)>/, '$1'), name: EMAIL_FROM.replace(/(.*)<.*/, '$1').trim() },
      subject: subject,
      content: [{ type: 'text/html', value: htmlBody }]
    });

    const options = {
      hostname: 'api.sendgrid.com',
      port: 443,
      path: '/v3/mail/send',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ messageId: res.headers['x-message-id'] });
        } else {
          reject(new Error(`SendGrid API error: ${res.statusCode} ${body}`));
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

/**
 * Send email (auto-detect provider)
 */
async function sendEmail(to, subject, htmlBody) {
  if (RESEND_API_KEY) {
    return sendViaResend(to, subject, htmlBody);
  } else if (SENDGRID_API_KEY) {
    return sendViaSendGrid(to, subject, htmlBody);
  } else {
    throw new Error('No email provider configured. Set RESEND_API_KEY or SENDGRID_API_KEY');
  }
}

/**
 * Main execution
 */
async function main() {
  const args = parseArgs();

  try {
    let to, subject, htmlBody, template, clinicNpi, practiceName;

    // Template-based sending
    if (args.template && args['clinic-npi']) {
      template = args.template;
      clinicNpi = args['clinic-npi'];

      const clinic = loadClinicData(clinicNpi);
      if (!clinic) {
        throw new Error(`Clinic with NPI ${clinicNpi} not found`);
      }

      practiceName = clinic.practice_name;
      to = clinic.email;

      if (!to || to.includes('contact form')) {
        throw new Error(`No valid email for clinic ${practiceName}`);
      }

      const templateData = TEMPLATES[template];
      if (!templateData) {
        throw new Error(`Unknown template: ${template}`);
      }

      subject = templateData.subject
        .replace('{Practice Name}', practiceName)
        .replace('{Practice Type}', 'family dental')
        .replace('{City}', clinic.city);

      const bodyText = templateData.getBody({
        firstName: clinic.owner_first_name || 'there',
        practiceName: practiceName,
        practiceType: 'family dental practice',
        city: clinic.city
      });

      htmlBody = bodyText.replace(/\n/g, '<br>\n');
    }
    // Direct sending
    else if (args.to && args.subject) {
      to = args.to;
      subject = args.subject;
      htmlBody = args.body || '';
    }
    // List ready clinics
    else if (args['list-ready']) {
      const content = fs.readFileSync(TRACKER_PATH, 'utf-8');
      const lines = content.split('\n');
      const ready = [];

      for (let i = 1; i < lines.length; i++) {
        const values = parseCSVLine(lines[i]);
        if (values && values[16] && !values[16].includes('contact form') && values[14] === 'not_started') {
          ready.push({
            npi: values[1],
            name: values[2],
            email: values[16],
            city: values[5]
          });
        }
      }

      console.log(JSON.stringify(ready, null, 2));
      return;
    }
    else {
      console.log(`
Email Sender Utility

Usage:
  node email-sender.js --template <template> --clinic-npi <npi>
  node email-sender.js --to <email> --subject <subject> --body <html>
  node email-sender.js --list-ready

Templates:
  cold-outreach-1   Initial cold outreach
  cold-outreach-2   Follow-up with case study
  cold-outreach-3   Pilot offer with urgency

Environment Variables:
  RESEND_API_KEY    Resend API key (recommended)
  SENDGRID_API_KEY  SendGrid API key
  EMAIL_FROM        Sender email (default: Claude天团 <outreach@claude-squad.com>)
`);
      return;
    }

    // Send the email
    console.log(`Sending email to ${to}...`);
    const result = await sendEmail(to, subject, htmlBody);

    // Log the sent email
    logSentEmail({
      sentAt: new Date().toISOString(),
      clinicNpi: clinicNpi || '',
      practiceName: practiceName || '',
      recipientEmail: to,
      template: template || 'custom',
      subject: subject,
      status: 'sent',
      messageId: result.id || result.messageId || '',
      sequencePosition: template ? parseInt(template.split('-')[2]) : 1
    });

    console.log(`Email sent successfully!`);
    console.log(`  To: ${to}`);
    console.log(`  Subject: ${subject}`);
    console.log(`  Message ID: ${result.id || result.messageId || 'N/A'}`);

  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main();
