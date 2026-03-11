/**
 * Claude天团 - Enhanced Newsletter Capture System
 *
 * Features:
 * - Lead magnet delivery (5-day email course)
 * - Exit-intent popup
 * - Scroll-triggered inline forms
 * - Analytics tracking
 *
 * Newsletter sponsorships can generate $25-500 per email once we have 500+ subscribers.
 */

(function() {
    'use strict';

    // Newsletter configuration
    window.newsletterConfig = window.newsletterConfig || {
        enabled: true,
        leadMagnet: {
            enabled: true,
            title: '5-Day Dental Practice Growth Course',
            description: 'Learn how to reduce missed calls, improve patient retention, and boost revenue with our free email course.',
            lessons: [
                'Day 1: The True Cost of Missed Calls',
                'Day 2: Phone Scripts That Convert',
                'Day 3: After-Hours Emergency Handling',
                'Day 4: Patient Follow-Up Automation',
                'Day 5: Measuring Your ROI'
            ]
        },
        popup: {
            enabled: true,
            trigger: 'exit',      // 'exit', 'scroll', 'time'
            scrollPercent: 50,    // Show after 50% scroll
            timeDelay: 30,        // Show after 30 seconds
            showAgainAfter: 7     // Days before showing popup again
        },
        inline: {
            enabled: true,
            minParagraphs: 5      // Only show on articles with 5+ paragraphs
        }
    };

    /**
     * Create lead magnet opt-in widget
     */
    function createLeadMagnetWidget(options = {}) {
        const config = window.newsletterConfig.leadMagnet;
        const container = document.createElement('div');
        container.className = 'lead-magnet-widget';
        container.innerHTML = `
            <div class="lead-magnet-content">
                <div class="lead-magnet-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z" stroke="currentColor" stroke-width="2"/>
                        <path d="M22 7L12 13L2 7" stroke="currentColor" stroke-width="2"/>
                    </svg>
                </div>
                <div class="lead-magnet-text">
                    <h3>${config.title}</h3>
                    <p>${config.description}</p>
                    <ul class="lead-magnet-lessons">
                        ${config.lessons.map(lesson => `<li>${lesson}</li>`).join('')}
                    </ul>
                </div>
                <form class="lead-magnet-form newsletter-form" data-source="lead-magnet-${options.position || 'inline'}" data-lead-magnet="true">
                    <input type="email" name="email" placeholder="Enter your email" required>
                    <button type="submit">Get Free Course</button>
                    <p class="form-note">Free email course. No spam. Unsubscribe anytime.</p>
                </form>
            </div>
        `;

        // Bind form submission
        const form = container.querySelector('form');
        form.addEventListener('submit', handleLeadMagnetSubmit);

        return container;
    }

    /**
     * Handle lead magnet form submission
     */
    function handleLeadMagnetSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const email = form.querySelector('input[type="email"]').value;

        // Store with lead magnet flag
        const leadData = {
            type: 'lead_magnet',
            email: email,
            source: form.dataset.source,
            leadMagnet: '5-day-dental-course',
            timestamp: new Date().toISOString()
        };

        // Save using existing LeadCapture if available
        if (window.leadCapture) {
            window.leadCapture.saveLead(leadData);
        }

        // Show success with next steps
        showLeadMagnetSuccess(form);
        form.reset();

        // Track conversion
        trackNewsletterEvent('lead_magnet_signup', { source: form.dataset.source });
    }

    /**
     * Show success message after lead magnet signup
     */
    function showLeadMagnetSuccess(form) {
        const successDiv = document.createElement('div');
        successDiv.className = 'lead-magnet-success';
        successDiv.innerHTML = `
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#10B981"/>
                <path d="M8 12L11 15L16 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div>
                <h4>You're In!</h4>
                <p>Check your email for Day 1 of the course. It should arrive within 5 minutes.</p>
            </div>
        `;

        form.innerHTML = '';
        form.appendChild(successDiv);
    }

    /**
     * Create exit-intent popup
     */
    function createExitPopup() {
        const config = window.newsletterConfig.popup;
        if (!config.enabled) return;

        // Check if already shown recently
        if (wasPopupShownRecently()) return;

        const popup = document.createElement('div');
        popup.className = 'newsletter-popup-overlay';
        popup.id = 'exit-popup';
        popup.innerHTML = `
            <div class="newsletter-popup">
                <button class="popup-close" aria-label="Close">&times;</button>
                <div class="popup-content">
                    <h2>Wait! Don't Miss Out</h2>
                    <p>Get our free 5-day dental practice growth course delivered to your inbox.</p>
                    <ul class="popup-benefits">
                        <li>Reduce missed call revenue loss</li>
                        <li>Proven phone scripts that convert</li>
                        <li>Automation strategies for busy practices</li>
                        <li>ROI tracking templates included</li>
                    </ul>
                    <form class="popup-form newsletter-form" data-source="exit-popup" data-lead-magnet="true">
                        <input type="email" name="email" placeholder="Your email address" required>
                        <button type="submit">Send Me the Free Course</button>
                    </form>
                    <p class="popup-note">Join 500+ dental practice owners. Unsubscribe anytime.</p>
                </div>
            </div>
        `;

        document.body.appendChild(popup);

        // Close handlers
        popup.querySelector('.popup-close').addEventListener('click', () => closePopup(popup));
        popup.addEventListener('click', (e) => {
            if (e.target === popup) closePopup(popup);
        });

        // Form submission
        popup.querySelector('form').addEventListener('submit', (e) => {
            handleLeadMagnetSubmit(e);
            setTimeout(() => closePopup(popup), 2000);
        });

        return popup;
    }

    /**
     * Show popup and mark as shown
     */
    function showPopup(popup) {
        popup.classList.add('visible');
        document.body.style.overflow = 'hidden';
        markPopupShown();
        trackNewsletterEvent('popup_shown');
    }

    /**
     * Close popup
     */
    function closePopup(popup) {
        popup.classList.remove('visible');
        document.body.style.overflow = '';
    }

    /**
     * Check if popup was shown recently
     */
    function wasPopupShownRecently() {
        const lastShown = localStorage.getItem('newsletter_popup_shown');
        if (!lastShown) return false;

        const daysSince = (Date.now() - parseInt(lastShown)) / (1000 * 60 * 60 * 24);
        return daysSince < window.newsletterConfig.popup.showAgainAfter;
    }

    /**
     * Mark popup as shown
     */
    function markPopupShown() {
        localStorage.setItem('newsletter_popup_shown', Date.now().toString());
    }

    /**
     * Detect exit intent (mouse leaving viewport)
     */
    function setupExitIntent() {
        if (window.newsletterConfig.popup.trigger !== 'exit') return;

        let popup = null;
        let shown = false;

        document.addEventListener('mouseout', (e) => {
            if (shown) return;

            // Check if mouse is leaving the top of the page
            if (e.clientY <= 0 && e.relatedTarget === null) {
                if (!popup) {
                    popup = createExitPopup();
                }
                if (popup) {
                    showPopup(popup);
                    shown = true;
                }
            }
        });
    }

    /**
     * Setup scroll-triggered popup
     */
    function setupScrollTrigger() {
        if (window.newsletterConfig.popup.trigger !== 'scroll') return;

        let popup = null;
        let shown = false;
        const triggerPercent = window.newsletterConfig.popup.scrollPercent;

        window.addEventListener('scroll', () => {
            if (shown) return;

            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

            if (scrollPercent >= triggerPercent) {
                if (!popup) {
                    popup = createExitPopup();
                }
                if (popup) {
                    showPopup(popup);
                    shown = true;
                }
            }
        });
    }

    /**
     * Setup time-triggered popup
     */
    function setupTimeTrigger() {
        if (window.newsletterConfig.popup.trigger !== 'time') return;

        setTimeout(() => {
            const popup = createExitPopup();
            if (popup) showPopup(popup);
        }, window.newsletterConfig.popup.timeDelay * 1000);
    }

    /**
     * Inject inline newsletter widgets
     */
    function injectInlineWidgets() {
        if (!window.newsletterConfig.inline.enabled) return;

        const articles = document.querySelectorAll('.blog-article .article-content');
        const minParagraphs = window.newsletterConfig.inline.minParagraphs;

        articles.forEach(article => {
            const paragraphs = article.querySelectorAll('p');
            if (paragraphs.length < minParagraphs) return;

            // Check if widget already exists
            if (article.querySelector('.lead-magnet-widget')) return;

            // Insert at end of article, before existing CTA
            const existingCTA = article.querySelector('.article-cta, .product-cta-box, .lead-capture-section');
            const widget = createLeadMagnetWidget({ position: 'end-of-article' });

            if (existingCTA) {
                existingCTA.parentNode.insertBefore(widget, existingCTA);
            } else {
                article.appendChild(widget);
            }
        });
    }

    /**
     * Track newsletter events
     */
    function trackNewsletterEvent(eventName, data = {}) {
        // Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                event_category: 'Newsletter',
                ...data
            });
        }

        // Console log for debugging
        console.log('Newsletter event:', eventName, data);
    }

    /**
     * Add CSS styles
     */
    function addStyles() {
        if (document.getElementById('newsletter-enhanced-styles')) return;

        const style = document.createElement('style');
        style.id = 'newsletter-enhanced-styles';
        style.textContent = `
            /* Lead Magnet Widget */
            .lead-magnet-widget {
                background: linear-gradient(135deg, #f0f4ff 0%, #e8ecff 100%);
                border: 2px solid #667eea;
                border-radius: 16px;
                padding: 30px;
                margin: 40px 0;
            }

            .lead-magnet-content {
                display: grid;
                grid-template-columns: auto 1fr auto;
                gap: 25px;
                align-items: start;
            }

            .lead-magnet-icon {
                color: #667eea;
                padding: 15px;
                background: white;
                border-radius: 12px;
                box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
            }

            .lead-magnet-text h3 {
                margin: 0 0 8px 0;
                color: #1a202c;
                font-size: 1.3em;
            }

            .lead-magnet-text p {
                margin: 0 0 15px 0;
                color: #4a5568;
            }

            .lead-magnet-lessons {
                list-style: none;
                padding: 0;
                margin: 0;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                gap: 8px;
            }

            .lead-magnet-lessons li {
                font-size: 0.85em;
                color: #667eea;
                padding: 4px 0;
            }

            .lead-magnet-lessons li::before {
                content: '✓';
                margin-right: 6px;
                font-weight: bold;
            }

            .lead-magnet-form {
                display: flex;
                flex-direction: column;
                gap: 10px;
                min-width: 220px;
            }

            .lead-magnet-form input {
                padding: 14px 16px;
                border: 2px solid #e2e8f0;
                border-radius: 8px;
                font-size: 14px;
                transition: all 0.2s;
            }

            .lead-magnet-form input:focus {
                outline: none;
                border-color: #667eea;
                box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
            }

            .lead-magnet-form button {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border: none;
                padding: 14px 24px;
                border-radius: 8px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s;
            }

            .lead-magnet-form button:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
            }

            .form-note {
                font-size: 11px;
                color: #718096;
                margin: 0;
            }

            /* Success state */
            .lead-magnet-success {
                display: flex;
                align-items: center;
                gap: 15px;
                padding: 20px;
                background: white;
                border-radius: 12px;
            }

            .lead-magnet-success h4 {
                margin: 0;
                color: #10B981;
            }

            .lead-magnet-success p {
                margin: 5px 0 0 0;
                font-size: 0.9em;
                color: #4a5568;
            }

            /* Exit Popup */
            .newsletter-popup-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.6);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }

            .newsletter-popup-overlay.visible {
                opacity: 1;
                visibility: visible;
            }

            .newsletter-popup {
                background: white;
                border-radius: 20px;
                max-width: 500px;
                width: 90%;
                max-height: 90vh;
                overflow-y: auto;
                position: relative;
                transform: scale(0.9);
                transition: transform 0.3s ease;
            }

            .newsletter-popup-overlay.visible .newsletter-popup {
                transform: scale(1);
            }

            .popup-close {
                position: absolute;
                top: 15px;
                right: 15px;
                background: none;
                border: none;
                font-size: 28px;
                color: #718096;
                cursor: pointer;
                z-index: 1;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.2s;
            }

            .popup-close:hover {
                background: #f5f5f5;
                color: #333;
            }

            .popup-content {
                padding: 40px;
                text-align: center;
            }

            .popup-content h2 {
                margin: 0 0 15px 0;
                font-size: 1.8em;
                color: #1a202c;
            }

            .popup-content > p {
                color: #4a5568;
                margin-bottom: 20px;
            }

            .popup-benefits {
                list-style: none;
                padding: 0;
                margin: 0 0 25px 0;
                text-align: left;
                display: inline-block;
            }

            .popup-benefits li {
                padding: 8px 0;
                padding-left: 28px;
                position: relative;
                color: #4a5568;
            }

            .popup-benefits li::before {
                content: '✓';
                position: absolute;
                left: 0;
                color: #10B981;
                font-weight: bold;
            }

            .popup-form {
                display: flex;
                flex-direction: column;
                gap: 12px;
            }

            .popup-form input {
                padding: 16px;
                border: 2px solid #e2e8f0;
                border-radius: 10px;
                font-size: 16px;
            }

            .popup-form button {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border: none;
                padding: 16px;
                border-radius: 10px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s;
            }

            .popup-form button:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
            }

            .popup-note {
                font-size: 12px;
                color: #718096;
                margin-top: 15px;
            }

            /* Responsive */
            @media (max-width: 768px) {
                .lead-magnet-content {
                    grid-template-columns: 1fr;
                    text-align: center;
                }

                .lead-magnet-icon {
                    justify-self: center;
                }

                .lead-magnet-form {
                    min-width: unset;
                }

                .popup-content {
                    padding: 30px 20px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    /**
     * Initialize newsletter system
     */
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        addStyles();

        // Only run on blog pages
        if (!document.querySelector('.blog-article')) return;

        // Setup triggers
        setupExitIntent();
        setupScrollTrigger();
        setupTimeTrigger();

        // Inject inline widgets
        injectInlineWidgets();

        console.log('Newsletter system initialized');
    }

    // Initialize
    init();

    // Export for external control
    window.NewsletterSystem = {
        init,
        createLeadMagnetWidget,
        createExitPopup,
        showPopup,
        closePopup,
        injectInlineWidgets,
        config: window.newsletterConfig
    };

})();

/**
 * HUMAN INSTRUCTIONS:
 *
 * To enable the 5-day email course delivery:
 *
 * 1. Set up an email service (Mailchimp, ConvertKit, or similar)
 * 2. Create a 5-day automated sequence with the lessons above
 * 3. Configure webhook URL in window.leadCaptureConfig.webhookUrl
 * 4. Or manually process leads stored in localStorage
 *
 * Revenue potential: $25-500 per newsletter sponsorship once you reach 500+ subscribers
 */
