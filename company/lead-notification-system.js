/**
 * Lead Notification System for Claude天团
 *
 * This script provides:
 * 1. Lead collection from localStorage exports
 * 2. Email notifications when new leads arrive
 * 3. Webhook support for external integrations
 *
 * Usage:
 *   node lead-notification-system.js --check          # Check for new leads
 *   node lead-notification-system.js --notify         # Send notifications for new leads
 *   node lead-notification-system.js --webhook <url>  # Configure webhook URL
 *   node lead-notification-system.js --list           # List all leads
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Configuration
const CONFIG_PATH = path.join(__dirname, 'lead-notification-config.json');
const LEADS_PATH = path.join(__dirname, 'leads.json');
const NOTIFICATION_LOG_PATH = path.join(__dirname, 'notification-log.json');

// Default config
const DEFAULT_CONFIG = {
  notificationEmail: 'contact@claudetianduan.com',
  emailProvider: 'resend', // 'resend' or 'sendgrid'
  webhookUrl: null,
  notifyOnNewLead: true,
  notificationTemplate: {
    subject: 'New Lead from Claude天团 Website',
    body: `
A new lead has been captured from the website.

**Lead Details:**
- Name: {name}
- Email: {email}
- Phone: {phone}
- Company: {company}
- Interest: {interest}
- Source: {source}
- Time: {timestamp}

**Message:**
{message}

---
This is an automated notification from Claude天团 Lead System.
    `
  }
};

/**
 * Load configuration
 */
function loadConfig() {
  try {
    if (fs.existsSync(CONFIG_PATH)) {
      return JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
    }
  } catch (err) {
    console.error('Error loading config:', err.message);
  }
  return { ...DEFAULT_CONFIG };
}

/**
 * Save configuration
 */
function saveConfig(config) {
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2));
  console.log('Configuration saved.');
}

/**
 * Load leads from storage
 */
function loadLeads() {
  try {
    if (fs.existsSync(LEADS_PATH)) {
      return JSON.parse(fs.readFileSync(LEADS_PATH, 'utf-8'));
    }
  } catch (err) {
    console.error('Error loading leads:', err.message);
  }
  return [];
}

/**
 * Save leads to storage
 */
function saveLeads(leads) {
  fs.writeFileSync(LEADS_PATH, JSON.stringify(leads, null, 2));
}

/**
 * Load notification log
 */
function loadNotificationLog() {
  try {
    if (fs.existsSync(NOTIFICATION_LOG_PATH)) {
      return JSON.parse(fs.readFileSync(NOTIFICATION_LOG_PATH, 'utf-8'));
    }
  } catch (err) {
    console.error('Error loading notification log:', err.message);
  }
  return [];
}

/**
 * Log notification
 */
function logNotification(leadId, type, status, details = {}) {
  const log = loadNotificationLog();
  log.push({
    leadId,
    type,
    status,
    timestamp: new Date().toISOString(),
    details
  });
  fs.writeFileSync(NOTIFICATION_LOG_PATH, JSON.stringify(log, null, 2));
}

/**
 * Import leads from exported JSON (from dashboard export)
 */
function importLeads(jsonData) {
  const existingLeads = loadLeads();
  const existingIds = new Set(existingLeads.map(l => l.id));

  let imported = 0;
  for (const lead of jsonData) {
    if (!existingIds.has(lead.id)) {
      existingLeads.push({
        ...lead,
        importedAt: new Date().toISOString(),
        notified: false
      });
      imported++;
    }
  }

  saveLeads(existingLeads);
  return { imported, total: existingLeads.length };
}

/**
 * Send email notification via Resend
 */
async function sendEmailViaResend(to, subject, body, config) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY not configured. Set environment variable.');
  }

  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      from: 'Claude天团 Leads <leads@claude-squad.com>',
      to: [to],
      subject: subject,
      html: body.replace(/\n/g, '<br>\n')
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
      let responseBody = '';
      res.on('data', chunk => responseBody += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(responseBody));
        } else {
          reject(new Error(`Resend API error: ${res.statusCode} ${responseBody}`));
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

/**
 * Send webhook notification
 */
async function sendWebhookNotification(lead, webhookUrl) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      event: 'new_lead',
      timestamp: new Date().toISOString(),
      data: lead
    });

    const url = new URL(webhookUrl);
    const isHttps = url.protocol === 'https:';
    const lib = isHttps ? https : http;

    const options = {
      hostname: url.hostname,
      port: url.port || (isHttps ? 443 : 80),
      path: url.pathname + url.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = lib.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ status: res.statusCode, body });
        } else {
          reject(new Error(`Webhook error: ${res.statusCode} ${body}`));
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

/**
 * Process new leads and send notifications
 */
async function processNewLeads(config) {
  const leads = loadLeads();
  const newLeads = leads.filter(l => !l.notified);

  if (newLeads.length === 0) {
    console.log('No new leads to process.');
    return { processed: 0 };
  }

  console.log(`Processing ${newLeads.length} new lead(s)...`);

  const results = {
    processed: 0,
    notified: 0,
    errors: []
  };

  for (const lead of newLeads) {
    try {
      // Prepare notification content
      const template = config.notificationTemplate;
      const subject = template.subject;
      const body = template.body
        .replace('{name}', lead.name || lead.contactName || 'Not provided')
        .replace('{email}', lead.email || 'Not provided')
        .replace('{phone}', lead.phone || 'Not provided')
        .replace('{company}', lead.company || lead.practiceName || 'Not provided')
        .replace('{interest}', lead.interest || lead.missedCalls || 'Not specified')
        .replace('{source}', lead.source || 'Unknown')
        .replace('{timestamp}', lead.createdAt || lead.timestamp || new Date().toISOString())
        .replace('{message}', lead.message || 'No message');

      // Send email notification if configured
      if (config.notifyOnNewLead && config.notificationEmail) {
        try {
          if (config.emailProvider === 'resend' && process.env.RESEND_API_KEY) {
            await sendEmailViaResend(config.notificationEmail, subject, body, config);
            console.log(`  Email sent to ${config.notificationEmail}`);
            logNotification(lead.id, 'email', 'sent', { to: config.notificationEmail });
            results.notified++;
          } else {
            console.log(`  Email skipped: No API key configured`);
            logNotification(lead.id, 'email', 'skipped', { reason: 'No API key' });
          }
        } catch (err) {
          console.error(`  Email failed: ${err.message}`);
          logNotification(lead.id, 'email', 'failed', { error: err.message });
          results.errors.push({ leadId: lead.id, type: 'email', error: err.message });
        }
      }

      // Send webhook notification if configured
      if (config.webhookUrl) {
        try {
          await sendWebhookNotification(lead, config.webhookUrl);
          console.log(`  Webhook sent to ${config.webhookUrl}`);
          logNotification(lead.id, 'webhook', 'sent', { url: config.webhookUrl });
        } catch (err) {
          console.error(`  Webhook failed: ${err.message}`);
          logNotification(lead.id, 'webhook', 'failed', { error: err.message });
          results.errors.push({ leadId: lead.id, type: 'webhook', error: err.message });
        }
      }

      // Mark as notified
      lead.notified = true;
      lead.notifiedAt = new Date().toISOString();
      results.processed++;

    } catch (err) {
      console.error(`  Error processing lead ${lead.id}: ${err.message}`);
      results.errors.push({ leadId: lead.id, type: 'processing', error: err.message });
    }
  }

  // Save updated leads
  saveLeads(leads);

  return results;
}

/**
 * List all leads
 */
function listLeads() {
  const leads = loadLeads();
  console.log(`\n=== Leads (${leads.length} total) ===\n`);

  leads.forEach((lead, i) => {
    console.log(`${i + 1}. ${lead.name || lead.contactName || lead.practiceName || 'Unknown'}`);
    console.log(`   Email: ${lead.email || 'N/A'}`);
    console.log(`   Phone: ${lead.phone || 'N/A'}`);
    console.log(`   Source: ${lead.source || 'Unknown'}`);
    console.log(`   Created: ${lead.createdAt || lead.timestamp || 'Unknown'}`);
    console.log(`   Notified: ${lead.notified ? 'Yes' : 'No'}`);
    console.log('');
  });
}

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
 * Print usage
 */
function printUsage() {
  console.log(`
Lead Notification System for Claude天团

Usage:
  node lead-notification-system.js [options]

Options:
  --check              Check for new leads without notifying
  --notify             Process new leads and send notifications
  --webhook <url>      Configure webhook URL for notifications
  --email <email>      Configure notification email address
  --provider <name>    Set email provider (resend or sendgrid)
  --import <file>      Import leads from JSON file
  --list               List all leads
  --config             Show current configuration
  --help               Show this help message

Environment Variables:
  RESEND_API_KEY       Resend API key for email notifications
  SENDGRID_API_KEY     SendGrid API key for email notifications

Examples:
  # Configure webhook
  node lead-notification-system.js --webhook https://hooks.slack.com/services/xxx

  # Configure email notifications
  node lead-notification-system.js --email contact@claudetianduan.com --provider resend

  # Process and notify new leads
  node lead-notification-system.js --notify

  # Import leads from dashboard export
  node lead-notification-system.js --import leads-export.json
`);
}

/**
 * Main execution
 */
async function main() {
  const args = parseArgs();

  if (args.help) {
    printUsage();
    return;
  }

  const config = loadConfig();

  // Show configuration
  if (args.config) {
    console.log('\nCurrent Configuration:');
    console.log(JSON.stringify(config, null, 2));
    return;
  }

  // Configure webhook
  if (args.webhook) {
    config.webhookUrl = args.webhook;
    saveConfig(config);
    console.log(`Webhook configured: ${args.webhook}`);
    return;
  }

  // Configure email
  if (args.email) {
    config.notificationEmail = args.email;
    saveConfig(config);
    console.log(`Notification email configured: ${args.email}`);
    return;
  }

  // Configure provider
  if (args.provider) {
    if (!['resend', 'sendgrid'].includes(args.provider)) {
      console.error('Invalid provider. Use "resend" or "sendgrid".');
      process.exit(1);
    }
    config.emailProvider = args.provider;
    saveConfig(config);
    console.log(`Email provider configured: ${args.provider}`);
    return;
  }

  // Import leads
  if (args.import) {
    try {
      const importData = JSON.parse(fs.readFileSync(args.import, 'utf-8'));
      const result = importLeads(importData.leads || importData);
      console.log(`Imported ${result.imported} new leads. Total: ${result.total}`);

      // Optionally notify on import
      if (args.notify) {
        await processNewLeads(config);
      }
    } catch (err) {
      console.error(`Import failed: ${err.message}`);
      process.exit(1);
    }
    return;
  }

  // Check for new leads
  if (args.check) {
    const leads = loadLeads();
    const newLeads = leads.filter(l => !l.notified);
    console.log(`\nNew leads: ${newLeads.length}`);
    console.log(`Total leads: ${leads.length}`);

    if (newLeads.length > 0) {
      console.log('\nNew leads pending notification:');
      newLeads.forEach(lead => {
        console.log(`  - ${lead.name || lead.email || lead.id}`);
      });
    }
    return;
  }

  // Send notifications
  if (args.notify) {
    const results = await processNewLeads(config);
    console.log(`\nNotification Results:`);
    console.log(`  Processed: ${results.processed}`);
    console.log(`  Notified: ${results.notified}`);
    if (results.errors.length > 0) {
      console.log(`  Errors: ${results.errors.length}`);
      results.errors.forEach(e => {
        console.log(`    - ${e.leadId}: ${e.error}`);
      });
    }
    return;
  }

  // List leads
  if (args.list) {
    listLeads();
    return;
  }

  // Default: show usage
  printUsage();
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
