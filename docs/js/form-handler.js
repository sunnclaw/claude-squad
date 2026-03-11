/**
 * Claude天团 - Lead Capture Form Handler
 * Handles newsletter signups, contact forms, and lead tracking
 *
 * Features:
 * - Local storage backup (offline-first)
 * - Webhook endpoint integration for server-side notifications
 * - Automatic sync when online
 */

class LeadCapture {
    constructor() {
        this.storageKey = 'claude_squad_leads';
        // Configure webhook endpoint (can be overridden via window.leadCaptureConfig)
        this.webhookUrl = (window.leadCaptureConfig && window.leadCaptureConfig.webhookUrl) || null;
        this.init();
    }

    init() {
        this.bindForms();
        this.createFloatingContactButton();
        this.initNewsletterForms();
        // Sync any pending leads from previous offline sessions
        this.syncPendingLeads();
    }

    /**
     * Bind all lead capture forms on the page
     */
    bindForms() {
        // Newsletter forms
        document.querySelectorAll('.newsletter-form').forEach(form => {
            form.addEventListener('submit', (e) => this.handleNewsletterSubmit(e));
        });

        // Contact forms
        document.querySelectorAll('.contact-form').forEach(form => {
            form.addEventListener('submit', (e) => this.handleContactSubmit(e));
        });

        // Lead capture CTAs
        document.querySelectorAll('.lead-capture-form').forEach(form => {
            form.addEventListener('submit', (e) => this.handleLeadCaptureSubmit(e));
        });
    }

    /**
     * Handle newsletter signup
     */
    handleNewsletterSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const email = form.querySelector('input[type="email"]').value;
        const source = form.dataset.source || document.location.pathname;

        const lead = {
            type: 'newsletter',
            email: email,
            source: source,
            timestamp: new Date().toISOString(),
            page: window.location.href
        };

        this.saveLead(lead);
        this.showSuccess(form, 'Thank you for subscribing! Check your inbox for confirmation.');
        form.reset();
        this.trackConversion('newsletter_signup', lead);
    }

    /**
     * Handle contact form submission
     */
    handleContactSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const lead = {
            type: 'contact',
            name: formData.get('name') || '',
            email: formData.get('email') || '',
            phone: formData.get('phone') || '',
            company: formData.get('company') || '',
            message: formData.get('message') || '',
            source: form.dataset.source || document.location.pathname,
            timestamp: new Date().toISOString(),
            page: window.location.href
        };

        this.saveLead(lead);
        this.showSuccess(form, 'Message sent! We\'ll get back to you within 24 hours.');
        form.reset();
        this.trackConversion('contact_form', lead);
    }

    /**
     * Handle lead capture form (simplified CTA forms)
     */
    handleLeadCaptureSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const lead = {
            type: 'lead_capture',
            email: formData.get('email') || '',
            name: formData.get('name') || '',
            interest: form.dataset.interest || 'general',
            source: form.dataset.source || document.location.pathname,
            timestamp: new Date().toISOString(),
            page: window.location.href
        };

        this.saveLead(lead);
        this.showSuccess(form, 'Got it! We\'ll be in touch soon.');
        form.reset();
        this.trackConversion('lead_capture', lead);
    }

    /**
     * Save lead to local storage (for demo/offline)
     * Also sends to webhook endpoint if configured and online
     */
    async saveLead(lead) {
        const leadWithId = {
            ...lead,
            id: this.generateId(),
            createdAt: new Date().toISOString()
        };

        // Always save to localStorage first (offline-first approach)
        const leads = this.getLeads();
        leads.push(leadWithId);
        localStorage.setItem(this.storageKey, JSON.stringify(leads));
        console.log('Lead saved locally:', leadWithId);

        // Send to webhook endpoint if configured and online
        if (this.webhookUrl && navigator.onLine) {
            try {
                await this.sendToWebhook(leadWithId);
                leadWithId.synced = true;
                // Update localStorage with sync status
                localStorage.setItem(this.storageKey, JSON.stringify(leads));
            } catch (err) {
                console.warn('Webhook sync failed, lead saved locally only:', err.message);
                // Will retry on next page load or manual sync
            }
        }

        return leadWithId;
    }

    /**
     * Send lead to webhook endpoint
     */
    async sendToWebhook(lead) {
        const response = await fetch(this.webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(lead)
        });

        if (!response.ok) {
            throw new Error(`Webhook error: ${response.status}`);
        }

        const result = await response.json();
        console.log('Lead synced to webhook:', result);
        return result;
    }

    /**
     * Sync all unsynced leads to webhook
     */
    async syncPendingLeads() {
        if (!this.webhookUrl || !navigator.onLine) {
            console.log('Cannot sync: offline or no webhook configured');
            return { synced: 0 };
        }

        const leads = this.getLeads();
        const unsynced = leads.filter(l => !l.synced);
        let synced = 0;

        for (const lead of unsynced) {
            try {
                await this.sendToWebhook(lead);
                lead.synced = true;
                synced++;
            } catch (err) {
                console.warn(`Failed to sync lead ${lead.id}:`, err.message);
            }
        }

        // Save updated leads
        localStorage.setItem(this.storageKey, JSON.stringify(leads));
        console.log(`Synced ${synced} leads to webhook`);

        return { synced, pending: unsynced.length - synced };
    }

    /**
     * Get all stored leads
     */
    getLeads() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : [];
    }

    /**
     * Show success message after form submission
     */
    showSuccess(form, message) {
        // Remove any existing success message
        const existing = form.querySelector('.form-success');
        if (existing) existing.remove();

        // Create success message
        const success = document.createElement('div');
        success.className = 'form-success';
        success.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#10B981"/>
                <path d="M6 10L9 13L14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>${message}</span>
        `;

        form.appendChild(success);

        // Animate in
        setTimeout(() => success.classList.add('visible'), 10);

        // Remove after 5 seconds
        setTimeout(() => {
            success.classList.remove('visible');
            setTimeout(() => success.remove(), 300);
        }, 5000);
    }

    /**
     * Track conversion (placeholder for analytics)
     */
    trackConversion(type, data) {
        // Google Analytics 4 event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'conversion', {
                event_category: 'Lead',
                event_label: type,
                value: 1
            });
        }

        // Console log for debugging
        console.log('Conversion tracked:', type, data);

        // Could also send to analytics endpoint
        // fetch('/api/analytics/conversion', { method: 'POST', body: JSON.stringify({ type, data }) });
    }

    /**
     * Generate unique ID for leads
     */
    generateId() {
        return 'lead_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    /**
     * Create floating contact button
     */
    createFloatingContactButton() {
        // Check if already exists
        if (document.querySelector('.floating-contact-btn')) return;

        const btn = document.createElement('div');
        btn.className = 'floating-contact-btn';
        btn.innerHTML = `
            <button class="floating-btn-main" aria-label="Contact us">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                </svg>
            </button>
            <div class="floating-contact-menu">
                <a href="../contact.html" class="floating-menu-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                    </svg>
                    <span>Contact Form</span>
                </a>
                <a href="../order.html" class="floating-menu-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"/>
                    </svg>
                    <span>Quick Order</span>
                </a>
                <a href="https://wa.me/your-number" class="floating-menu-item" target="_blank">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>WhatsApp</span>
                </a>
            </div>
        `;

        document.body.appendChild(btn);

        // Toggle menu on click
        const mainBtn = btn.querySelector('.floating-btn-main');
        mainBtn.addEventListener('click', () => {
            btn.classList.toggle('open');
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!btn.contains(e.target)) {
                btn.classList.remove('open');
            }
        });

        // Add styles if not present
        this.addFloatingButtonStyles();
    }

    /**
     * Add styles for floating contact button
     */
    addFloatingButtonStyles() {
        if (document.getElementById('floating-btn-styles')) return;

        const style = document.createElement('style');
        style.id = 'floating-btn-styles';
        style.textContent = `
            .floating-contact-btn {
                position: fixed;
                bottom: 30px;
                right: 30px;
                z-index: 1000;
            }

            .floating-btn-main {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border: none;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
                transition: all 0.3s ease;
            }

            .floating-btn-main:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 25px rgba(102, 126, 234, 0.5);
            }

            .floating-contact-menu {
                position: absolute;
                bottom: 70px;
                right: 0;
                background: white;
                border-radius: 12px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
                padding: 8px;
                opacity: 0;
                visibility: hidden;
                transform: translateY(10px);
                transition: all 0.3s ease;
                min-width: 180px;
            }

            .floating-contact-btn.open .floating-contact-menu {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }

            .floating-menu-item {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 12px 16px;
                color: #333;
                text-decoration: none;
                border-radius: 8px;
                transition: all 0.2s ease;
            }

            .floating-menu-item:hover {
                background: #f5f5f5;
                color: #667eea;
            }

            .floating-menu-item svg {
                opacity: 0.7;
            }

            .floating-menu-item span {
                font-size: 14px;
                font-weight: 500;
            }

            .form-success {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 16px 20px;
                background: #10B981;
                color: white;
                border-radius: 8px;
                margin-top: 16px;
                opacity: 0;
                transform: translateY(-10px);
                transition: all 0.3s ease;
            }

            .form-success.visible {
                opacity: 1;
                transform: translateY(0);
            }

            @media (max-width: 768px) {
                .floating-contact-btn {
                    bottom: 20px;
                    right: 20px;
                }

                .floating-btn-main {
                    width: 50px;
                    height: 50px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    /**
     * Initialize newsletter forms with inline signup
     */
    initNewsletterForms() {
        document.querySelectorAll('.newsletter-inline').forEach(container => {
            if (container.querySelector('form')) return;

            const form = document.createElement('form');
            form.className = 'newsletter-form';
            form.dataset.source = document.location.pathname;
            form.innerHTML = `
                <div class="newsletter-form-inner">
                    <input type="email" name="email" placeholder="Enter your email" required>
                    <button type="submit">Subscribe</button>
                </div>
                <p class="newsletter-note">Join 1,000+ subscribers. No spam, unsubscribe anytime.</p>
            `;

            container.appendChild(form);
            form.addEventListener('submit', (e) => this.handleNewsletterSubmit(e));
        });
    }
}

/**
 * Create inline newsletter signup widget
 */
function createNewsletterWidget(containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const {
        title = 'Stay Updated',
        description = 'Get the latest AI productivity tips delivered to your inbox.',
        buttonText = 'Subscribe'
    } = options;

    container.innerHTML = `
        <div class="newsletter-widget">
            <h4>${title}</h4>
            <p>${description}</p>
            <form class="newsletter-form" data-source="${document.location.pathname}">
                <input type="email" name="email" placeholder="Your email address" required>
                <button type="submit">${buttonText}</button>
            </form>
        </div>
    `;
}

/**
 * Create lead capture CTA widget
 */
function createLeadCaptureWidget(containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const {
        title = 'Get Started',
        description = 'Ready to boost your productivity?',
        buttonText = 'Contact Us',
        interest = 'general'
    } = options;

    container.innerHTML = `
        <div class="lead-capture-widget">
            <h4>${title}</h4>
            <p>${description}</p>
            <form class="lead-capture-form" data-interest="${interest}" data-source="${document.location.pathname}">
                <input type="email" name="email" placeholder="Your email" required>
                <button type="submit">${buttonText}</button>
            </form>
        </div>
    `;
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    window.leadCapture = new LeadCapture();
});

// Export for use in other scripts
window.LeadCapture = LeadCapture;
window.createNewsletterWidget = createNewsletterWidget;
window.createLeadCaptureWidget = createLeadCaptureWidget;
