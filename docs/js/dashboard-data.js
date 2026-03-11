/**
 * Dashboard Data Loader
 * Loads and manages data for Claude天团 Revenue Dashboard
 *
 * Data Sources:
 * - METRICS.md: Parsed for targets and weekly progress
 * - dental-clinic-outbound-tracker.csv: Clinic outreach data
 * - LocalStorage: Lead log, quote log, and manual metrics
 */

// Configuration
const CONFIG = {
    csvPath: '../marketing/dental-clinic-outbound-tracker.csv',
    metricsPath: '../METRICS.md',
    storageKeys: {
        leadLog: 'claude_squad_lead_log',
        quoteLog: 'claude_squad_quote_log',
        metrics: 'claude_squad_metrics'
    }
};

// State
let dashboardState = {
    clinics: [],
    leads: [],
    quotes: [],
    metrics: {
        totalRevenue: 0,
        mrr: 0,
        oneTimeSales: 0,
        totalCustomers: 0,
        weekTargets: {
            clinics: 25,
            conversations: 15,
            qualified: 5,
            orders: 1
        },
        weekActuals: {
            clinics: 0,
            conversations: 0,
            qualified: 0,
            orders: 0
        }
    },
    lastUpdated: null
};

/**
 * Parse CSV data
 */
function parseCSV(csvText) {
    const lines = csvText.split('\n').filter(line => line.trim());
    const headers = parseCSVLine(lines[0]);

    return lines.slice(1).map(line => {
        const values = parseCSVLine(line);
        const obj = {};
        headers.forEach((header, i) => {
            obj[header] = values[i] || '';
        });
        return obj;
    });
}

/**
 * Parse a single CSV line handling quoted values
 */
function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];

        if (char === '"') {
            if (inQuotes && line[i + 1] === '"') {
                current += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current.trim());

    return result;
}

/**
 * Parse METRICS.md for targets and progress
 */
function parseMetricsMD(markdown) {
    const metrics = {
        totalRevenue: 0,
        mrr: 0,
        oneTimeSales: 0,
        totalCustomers: 0,
        weekTargets: { clinics: 25, conversations: 15, qualified: 5, orders: 1 },
        weekActuals: { clinics: 0, conversations: 0, qualified: 0, orders: 0 },
        dailyProgress: []
    };

    // Extract Week 1 Outreach Tracking
    const weekMatch = markdown.match(/## Week 1 Outreach Tracking.*?\n\|.*?\n\|.*?\n([\s\S]*?)(?=\n##|\n###|$)/);
    if (weekMatch) {
        const rows = weekMatch[1].trim().split('\n');
        rows.forEach(row => {
            const cells = row.split('|').map(c => c.trim()).filter(c => c);
            if (cells.length >= 3) {
                // Parse metrics like "Clinics Contacted | 25 | 0"
                const label = cells[0].toLowerCase();
                const target = parseInt(cells[1]) || 0;
                const actual = parseInt(cells[2]) || 0;

                if (label.includes('clinic')) {
                    metrics.weekTargets.clinics = target;
                    metrics.weekActuals.clinics = actual;
                } else if (label.includes('convers')) {
                    metrics.weekTargets.conversations = target;
                    metrics.weekActuals.conversations = actual;
                } else if (label.includes('qualif')) {
                    metrics.weekTargets.qualified = target;
                    metrics.weekActuals.qualified = actual;
                }
            }
        });
    }

    // Extract Total Revenue Summary
    const revenueMatch = markdown.match(/### Total Revenue Summary[\s\S]*?\|.*?\n\|.*?\n([\s\S]*?)(?=\n##|\n###|$)/);
    if (revenueMatch) {
        const rows = revenueMatch[1].trim().split('\n');
        rows.forEach(row => {
            const cells = row.split('|').map(c => c.trim()).filter(c => c);
            if (cells.length >= 2) {
                const label = cells[0].toLowerCase();
                const value = parseCurrency(cells[1]);

                if (label.includes('one-time')) {
                    metrics.oneTimeSales = value;
                } else if (label.includes('mrr')) {
                    // Extract number from "¥0/mo"
                    metrics.mrr = value;
                } else if (label.includes('customer')) {
                    metrics.totalCustomers = parseInt(cells[1]) || 0;
                }
            }
        });
    }

    metrics.totalRevenue = metrics.oneTimeSales + metrics.mrr;

    // Extract Daily Progress
    const dailyMatch = markdown.match(/### Week 1 Daily Progress[\s\S]*?\n\|.*?\n\|.*?\n([\s\S]*?)(?=\n##|\n###|$)/);
    if (dailyMatch) {
        const rows = dailyMatch[1].trim().split('\n');
        rows.forEach(row => {
            const cells = row.split('|').map(c => c.trim()).filter(c => c);
            if (cells.length >= 4) {
                metrics.dailyProgress.push({
                    date: cells[0],
                    clinicsCalled: parseInt(cells[1]) || 0,
                    conversations: parseInt(cells[2]) || 0,
                    qualified: parseInt(cells[3]) || 0,
                    status: cells[4] || ''
                });
            }
        });
    }

    return metrics;
}

/**
 * Parse currency string to number
 */
function parseCurrency(str) {
    if (!str) return 0;
    return parseInt(str.replace(/[^\d]/g, '')) || 0;
}

/**
 * Load clinic data from CSV
 */
async function loadClinicData() {
    try {
        const response = await fetch(CONFIG.csvPath);
        if (!response.ok) throw new Error('CSV not found');
        const csvText = await response.text();
        dashboardState.clinics = parseCSV(csvText);
        return true;
    } catch (error) {
        console.warn('Could not load clinic CSV, using sample data:', error);
        // Use sample data if CSV not available
        dashboardState.clinics = getSampleClinics();
        return false;
    }
}

/**
 * Get sample clinic data
 */
function getSampleClinics() {
    return [
        { target_market: 'Austin', practice_name: 'HAPII DENTAL', phone: '(512) 832-6840', primary_contact_name: 'ALEEAHNA PHAN', outreach_status: 'not_started', notes: 'Website found' },
        { target_market: 'Austin', practice_name: 'STEINER DENTAL', phone: '(512) 266-9585', primary_contact_name: 'G DEVINE', outreach_status: 'not_started', notes: 'Email: info@steinerdental.com' },
        { target_market: 'Austin', practice_name: 'BRIDGEVIEW DENTAL', phone: '(512) 347-8299', primary_contact_name: 'LANCE LOVELESS', outreach_status: 'not_started', notes: 'Loveless Dental' },
        { target_market: 'Dallas', practice_name: 'LUXE DENTAL', phone: '(214) 763-6907', primary_contact_name: 'TRANG NGUYEN', outreach_status: 'not_started', notes: 'Multiple locations' },
        { target_market: 'Houston', practice_name: 'WAVE DENTAL', phone: '(281) 888-1150', primary_contact_name: 'AYHAM NAHHAS', outreach_status: 'not_started', notes: 'Email: wavedentaltx@gmail.com' },
        { target_market: 'Denver', practice_name: 'BAROTZ DENTAL', phone: '(303) 595-4994', primary_contact_name: 'CHARLES BAROTZ', outreach_status: 'not_started', notes: 'Cosmetic focus' },
        { target_market: 'Denver', practice_name: 'ICON DENTAL', phone: '(641) 821-0256', primary_contact_name: 'NAZELI TARJAN', outreach_status: 'not_started', notes: 'Email: info@icondentaldenver.com' },
        { target_market: 'Denver', practice_name: 'CODY DENTAL GROUP', phone: '(303) 758-5858', primary_contact_name: 'WESSELY CHAMBERS', outreach_status: 'not_started', notes: 'Est. 1946, multi-specialty' },
        { target_market: 'Phoenix', practice_name: 'GILKEY DENTAL', phone: '(602) 978-3500', primary_contact_name: 'RYAN ARTHURS', outreach_status: 'not_started', notes: '' },
        { target_market: 'Charlotte', practice_name: 'STELLAR DENTAL', phone: '(704) 688-7120', primary_contact_name: 'HERBERT VU', outreach_status: 'not_started', notes: '' },
        { target_market: 'Tampa', practice_name: 'COMFORT DENTAL', phone: '(813) 361-9727', primary_contact_name: 'FATIMA FARROKHROOZ', outreach_status: 'not_started', notes: '' },
        { target_market: 'Atlanta', practice_name: 'C S DENTAL', phone: '(404) 577-0868', primary_contact_name: 'STANLEY CARTER', outreach_status: 'not_started', notes: '' },
        { target_market: 'Nashville', practice_name: 'PREMIER DENTAL', phone: '(615) 837-8855', primary_contact_name: 'THOMAS WILLIAMS', outreach_status: 'not_started', notes: '' },
        { target_market: 'Columbus', practice_name: 'BEECHCROFT DENTAL', phone: '(614) 776-4950', primary_contact_name: 'CHRISTOPHER HERRICK', outreach_status: 'not_started', notes: '' }
    ];
}

/**
 * Load metrics from METRICS.md
 */
async function loadMetrics() {
    try {
        const response = await fetch(CONFIG.metricsPath);
        if (!response.ok) throw new Error('METRICS.md not found');
        const markdown = await response.text();
        const parsedMetrics = parseMetricsMD(markdown);

        // Merge with stored metrics (stored metrics take precedence for actuals)
        const storedMetrics = getStoredMetrics();
        dashboardState.metrics = {
            ...parsedMetrics,
            weekActuals: storedMetrics.weekActuals || parsedMetrics.weekActuals
        };

        return true;
    } catch (error) {
        console.warn('Could not load METRICS.md, using defaults:', error);
        dashboardState.metrics = getStoredMetrics();
        return false;
    }
}

/**
 * Get stored metrics from localStorage
 */
function getStoredMetrics() {
    try {
        const stored = localStorage.getItem(CONFIG.storageKeys.metrics);
        if (stored) {
            return JSON.parse(stored);
        }
    } catch (e) {
        console.warn('Could not read stored metrics:', e);
    }
    return dashboardState.metrics;
}

/**
 * Save metrics to localStorage
 */
function saveMetrics() {
    try {
        localStorage.setItem(CONFIG.storageKeys.metrics, JSON.stringify(dashboardState.metrics));
        return true;
    } catch (e) {
        console.warn('Could not save metrics:', e);
        return false;
    }
}

/**
 * Load leads from localStorage
 */
function loadLeads() {
    try {
        const stored = localStorage.getItem(CONFIG.storageKeys.leadLog);
        if (stored) {
            dashboardState.leads = JSON.parse(stored);
        }
    } catch (e) {
        console.warn('Could not load leads:', e);
        dashboardState.leads = [];
    }
    return dashboardState.leads;
}

/**
 * Save lead to log
 */
function saveLead(lead) {
    lead.id = lead.id || 'L-' + Date.now().toString(36).toUpperCase();
    lead.createdAt = lead.createdAt || new Date().toISOString();

    const existingIndex = dashboardState.leads.findIndex(l => l.id === lead.id);
    if (existingIndex >= 0) {
        dashboardState.leads[existingIndex] = lead;
    } else {
        dashboardState.leads.push(lead);
    }

    localStorage.setItem(CONFIG.storageKeys.leadLog, JSON.stringify(dashboardState.leads));
    return lead;
}

/**
 * Delete lead
 */
function deleteLead(leadId) {
    dashboardState.leads = dashboardState.leads.filter(l => l.id !== leadId);
    localStorage.setItem(CONFIG.storageKeys.leadLog, JSON.stringify(dashboardState.leads));
}

/**
 * Load quotes from localStorage
 */
function loadQuotes() {
    try {
        const stored = localStorage.getItem(CONFIG.storageKeys.quoteLog);
        if (stored) {
            dashboardState.quotes = JSON.parse(stored);
        }
    } catch (e) {
        console.warn('Could not load quotes:', e);
        dashboardState.quotes = [];
    }
    return dashboardState.quotes;
}

/**
 * Save quote to log
 */
function saveQuote(quote) {
    quote.id = quote.id || 'Q-' + Date.now().toString(36).toUpperCase();
    quote.createdAt = quote.createdAt || new Date().toISOString();

    const existingIndex = dashboardState.quotes.findIndex(q => q.id === quote.id);
    if (existingIndex >= 0) {
        dashboardState.quotes[existingIndex] = quote;
    } else {
        dashboardState.quotes.push(quote);
    }

    localStorage.setItem(CONFIG.storageKeys.quoteLog, JSON.stringify(dashboardState.quotes));
    return quote;
}

/**
 * Delete quote
 */
function deleteQuote(quoteId) {
    dashboardState.quotes = dashboardState.quotes.filter(q => q.id !== quoteId);
    localStorage.setItem(CONFIG.storageKeys.quoteLog, JSON.stringify(dashboardState.quotes));
}

/**
 * Get pipeline counts from leads
 */
function getPipelineCounts() {
    const counts = {
        new: 0,
        qualified: 0,
        quoted: 0,
        payment: 0,
        paid: 0,
        completed: 0,
        lost: 0
    };

    dashboardState.leads.forEach(lead => {
        const stage = lead.stage?.toLowerCase().replace(' ', '_') || 'new';
        if (counts.hasOwnProperty(stage)) {
            counts[stage]++;
        }
    });

    return counts;
}

/**
 * Get active quotes (not won or lost)
 */
function getActiveQuotes() {
    return dashboardState.quotes.filter(q =>
        !['won', 'lost'].includes(q.status?.toLowerCase())
    );
}

/**
 * Calculate pipeline value
 */
function getPipelineValue() {
    return dashboardState.quotes
        .filter(q => ['sent', 'follow-up_sent', 'awaiting_payment'].includes(q.status?.toLowerCase()))
        .reduce((sum, q) => sum + (parseInt(q.value) || 0), 0);
}

/**
 * Calculate conversion rate
 */
function getConversionRate() {
    const total = dashboardState.leads.length;
    if (total === 0) return 0;
    const converted = dashboardState.leads.filter(l =>
        ['paid', 'completed'].includes(l.stage?.toLowerCase())
    ).length;
    return Math.round((converted / total) * 100);
}

/**
 * Update weekly actuals
 */
function updateWeekActuals(actuals) {
    dashboardState.metrics.weekActuals = {
        ...dashboardState.metrics.weekActuals,
        ...actuals
    };
    saveMetrics();
}

/**
 * Get clinic status counts
 */
function getClinicStatusCounts() {
    const counts = {
        not_started: 0,
        in_progress: 0,
        completed: 0
    };

    dashboardState.clinics.forEach(clinic => {
        const status = clinic.outreach_status?.toLowerCase() || 'not_started';
        if (counts.hasOwnProperty(status)) {
            counts[status]++;
        }
    });

    return counts;
}

/**
 * Export data for backup
 */
function exportData() {
    return {
        version: '1.0',
        exportedAt: new Date().toISOString(),
        metrics: dashboardState.metrics,
        leads: dashboardState.leads,
        quotes: dashboardState.quotes
    };
}

/**
 * Import data from backup
 */
function importData(data) {
    if (data.metrics) {
        dashboardState.metrics = data.metrics;
        saveMetrics();
    }
    if (data.leads) {
        dashboardState.leads = data.leads;
        localStorage.setItem(CONFIG.storageKeys.leadLog, JSON.stringify(data.leads));
    }
    if (data.quotes) {
        dashboardState.quotes = data.quotes;
        localStorage.setItem(CONFIG.storageKeys.quoteLog, JSON.stringify(data.quotes));
    }
}

/**
 * Initialize all data
 */
async function initializeData() {
    await Promise.all([
        loadClinicData(),
        loadMetrics()
    ]);

    loadLeads();
    loadQuotes();

    dashboardState.lastUpdated = new Date().toISOString();

    return dashboardState;
}

// Export functions for use in dashboard
window.DashboardData = {
    initialize: initializeData,
    getState: () => dashboardState,
    getPipelineCounts,
    getActiveQuotes,
    getPipelineValue,
    getConversionRate,
    getClinicStatusCounts,
    saveLead,
    deleteLead,
    saveQuote,
    deleteQuote,
    updateWeekActuals,
    exportData,
    importData,
    formatNumber: (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
};
