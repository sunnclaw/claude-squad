/**
 * Simple Lead Webhook Server
 *
 * This server provides:
 * 1. POST /api/leads - Receive leads from website forms
 * 2. GET /api/leads - List all leads (admin only)
 * 3. POST /api/leads/notify - Trigger notification processing
 *
 * Run: node lead-webhook-server.js
 *
 * Environment:
 *   PORT - Server port (default: 3200)
 *   ADMIN_TOKEN - Token for admin endpoints
 *   RESEND_API_KEY - For email notifications
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3200;
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'claude-squad-admin-2026';

// File paths
const LEADS_PATH = path.join(__dirname, 'leads.json');
const CONFIG_PATH = path.join(__dirname, 'lead-notification-config.json');

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
 * Load config
 */
function loadConfig() {
  try {
    if (fs.existsSync(CONFIG_PATH)) {
      return JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
    }
  } catch (err) {
    console.error('Error loading config:', err.message);
  }
  return { notificationEmail: 'contact@claudetianduan.com' };
}

/**
 * Parse JSON body from request
 */
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(new Error('Invalid JSON'));
      }
    });
    req.on('error', reject);
  });
}

/**
 * Send JSON response
 */
function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(data, null, 2));
}

/**
 * Verify admin token
 */
function verifyAdmin(req) {
  const auth = req.headers.authorization || '';
  const token = auth.replace('Bearer ', '');
  return token === ADMIN_TOKEN;
}

/**
 * Handle incoming lead
 */
async function handleNewLead(leadData) {
  const leads = loadLeads();

  const newLead = {
    id: 'lead_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
    ...leadData,
    createdAt: new Date().toISOString(),
    notified: false
  };

  leads.push(newLead);
  saveLeads(leads);

  console.log(`[LEAD] New lead captured: ${newLead.name || newLead.email || newLead.id}`);

  return newLead;
}

/**
 * Send notification email via Resend
 */
async function sendNotification(lead, config) {
  const https = require('https');

  if (!process.env.RESEND_API_KEY) {
    console.log('[NOTIFY] RESEND_API_KEY not configured, skipping email');
    return { sent: false, reason: 'No API key' };
  }

  const emailBody = `
A new lead has been captured from the Claude天团 website.

<strong>Lead Details:</strong>
- Name: ${lead.name || lead.contactName || 'Not provided'}
- Email: ${lead.email || 'Not provided'}
- Phone: ${lead.phone || 'Not provided'}
- Company: ${lead.company || lead.practiceName || 'Not provided'}
- Interest: ${lead.interest || 'Not specified'}
- Source: ${lead.source || 'Unknown'}
- Time: ${lead.createdAt}

${lead.message ? `<strong>Message:</strong><br>${lead.message}` : ''}

---
This is an automated notification from Claude天团 Lead System.
  `;

  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      from: 'Claude天团 Leads <leads@claude-squad.com>',
      to: [config.notificationEmail],
      subject: '🔔 New Lead from Claude天团 Website',
      html: emailBody.replace(/\n/g, '<br>\n')
    });

    const options = {
      hostname: 'api.resend.com',
      port: 443,
      path: '/emails',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log(`[NOTIFY] Email sent to ${config.notificationEmail}`);
          resolve({ sent: true, messageId: JSON.parse(body).id });
        } else {
          console.error(`[NOTIFY] Email failed: ${res.statusCode}`);
          resolve({ sent: false, reason: body });
        }
      });
    });

    req.on('error', (err) => {
      console.error(`[NOTIFY] Email error: ${err.message}`);
      resolve({ sent: false, reason: err.message });
    });

    req.write(data);
    req.end();
  });
}

/**
 * Create HTTP server
 */
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    res.end();
    return;
  }

  try {
    // POST /api/leads - Create new lead
    if (req.method === 'POST' && url.pathname === '/api/leads') {
      const body = await parseBody(req);
      const lead = await handleNewLead(body);

      // Send notification if configured
      const config = loadConfig();
      if (config.notificationEmail && process.env.RESEND_API_KEY) {
        await sendNotification(lead, config);
        lead.notified = true;
        const leads = loadLeads();
        const idx = leads.findIndex(l => l.id === lead.id);
        if (idx >= 0) {
          leads[idx].notified = true;
          saveLeads(leads);
        }
      }

      sendJson(res, 201, {
        success: true,
        lead: lead
      });
      return;
    }

    // GET /api/leads - List leads (admin)
    if (req.method === 'GET' && url.pathname === '/api/leads') {
      if (!verifyAdmin(req)) {
        sendJson(res, 401, { error: 'Unauthorized' });
        return;
      }

      const leads = loadLeads();
      sendJson(res, 200, { leads, count: leads.length });
      return;
    }

    // GET /api/leads/new - Get unnotified leads
    if (req.method === 'GET' && url.pathname === '/api/leads/new') {
      if (!verifyAdmin(req)) {
        sendJson(res, 401, { error: 'Unauthorized' });
        return;
      }

      const leads = loadLeads();
      const newLeads = leads.filter(l => !l.notified);
      sendJson(res, 200, { leads: newLeads, count: newLeads.length });
      return;
    }

    // POST /api/leads/notify - Process notifications (admin)
    if (req.method === 'POST' && url.pathname === '/api/leads/notify') {
      if (!verifyAdmin(req)) {
        sendJson(res, 401, { error: 'Unauthorized' });
        return;
      }

      const leads = loadLeads();
      const config = loadConfig();
      const results = { processed: 0, notified: 0, errors: [] };

      for (const lead of leads.filter(l => !l.notified)) {
        try {
          const result = await sendNotification(lead, config);
          if (result.sent) {
            lead.notified = true;
            results.notified++;
          } else {
            results.errors.push({ leadId: lead.id, reason: result.reason });
          }
          results.processed++;
        } catch (err) {
          results.errors.push({ leadId: lead.id, error: err.message });
        }
      }

      saveLeads(leads);
      sendJson(res, 200, results);
      return;
    }

    // GET /api/health - Health check
    if (req.method === 'GET' && url.pathname === '/api/health') {
      sendJson(res, 200, { status: 'ok', timestamp: new Date().toISOString() });
      return;
    }

    // 404 for other routes
    sendJson(res, 404, { error: 'Not found' });

  } catch (err) {
    console.error('[ERROR]', err);
    sendJson(res, 500, { error: err.message });
  }
});

// Start server
server.listen(PORT, () => {
  console.log(`Lead Webhook Server running on port ${PORT}`);
  console.log(``);
  console.log(`Endpoints:`);
  console.log(`  POST /api/leads        - Create new lead`);
  console.log(`  GET  /api/leads        - List all leads (requires auth)`);
  console.log(`  GET  /api/leads/new    - Get unnotified leads (requires auth)`);
  console.log(`  POST /api/leads/notify - Send notifications (requires auth)`);
  console.log(`  GET  /api/health       - Health check`);
  console.log(``);
  console.log(`Admin Token: ${ADMIN_TOKEN}`);
  console.log(``);
  console.log(`Example usage:`);
  console.log(`  curl -X POST http://localhost:${PORT}/api/leads -H "Content-Type: application/json" -d '{"name":"Test","email":"test@example.com"}'`);
  console.log(`  curl http://localhost:${PORT}/api/leads -H "Authorization: Bearer ${ADMIN_TOKEN}"`);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\nShutting down...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});
