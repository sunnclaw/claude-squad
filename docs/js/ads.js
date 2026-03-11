/**
 * Claude天团 - AdSense Integration Module
 *
 * This module provides a clean integration point for Google AdSense.
 * When human applies for AdSense and gets approved, they only need to:
 * 1. Add their AdSense script to the <head> section
 * 2. Set window.adSenseConfig.enabled = true
 * 3. Add their publisher ID
 *
 * Estimated revenue: $5-50/month once approved
 */

(function() {
    'use strict';

    // Configuration - Human needs to update these after AdSense approval
    window.adSenseConfig = window.adSenseConfig || {
        enabled: false,                    // Set to true after AdSense approval
        publisherId: 'ca-pub-XXXXXXXXXX',  // Replace with actual publisher ID
        testMode: true,                    // Shows placeholder ads in test mode

        // Ad slot IDs (get these from AdSense dashboard)
        slots: {
            sidebar: '1234567890',         // Sidebar ad slot
            inArticle: '0987654321',       // In-article ad slot
            footer: '1122334455',          // Footer ad slot
            banner: '5544332211'           // Banner ad slot
        }
    };

    /**
     * Ad placement definitions
     * These define where ads appear and their sizes
     */
    const adPlacements = {
        // Sidebar ad - appears on blog posts
        sidebar: {
            containerClass: 'ad-container-sidebar',
            sizes: [
                { width: 300, height: 250, label: 'Medium Rectangle' },
                { width: 300, height: 600, label: 'Half Page' }
            ],
            position: 'after-content'
        },

        // In-article ad - appears mid-content
        inArticle: {
            containerClass: 'ad-container-inarticle',
            sizes: [
                { width: 336, height: 280, label: 'Large Rectangle' },
                { width: 300, height: 250, label: 'Medium Rectangle' }
            ],
            position: 'mid-content'
        },

        // Footer banner ad
        footer: {
            containerClass: 'ad-container-footer',
            sizes: [
                { width: 728, height: 90, label: 'Leaderboard' },
                { width: 320, height: 100, label: 'Mobile Banner' }
            ],
            position: 'before-footer'
        },

        // Top banner
        banner: {
            containerClass: 'ad-container-banner',
            sizes: [
                { width: 728, height: 90, label: 'Leaderboard' },
                { width: 970, height: 90, label: 'Large Leaderboard' }
            ],
            position: 'after-header'
        }
    };

    /**
     * Create ad placeholder element
     */
    function createAdPlaceholder(type, config) {
        const container = document.createElement('div');
        container.className = `ad-placeholder ${config.containerClass}`;
        container.setAttribute('data-ad-type', type);

        if (window.adSenseConfig.enabled) {
            // Production mode - insert actual AdSense code
            container.innerHTML = `
                <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-client="${window.adSenseConfig.publisherId}"
                     data-ad-slot="${window.adSenseConfig.slots[type]}"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
                <script>
                     (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            `;
        } else if (window.adSenseConfig.testMode) {
            // Test mode - show placeholder
            const size = config.sizes[0];
            container.innerHTML = `
                <div class="ad-placeholder-inner" style="width:${size.width}px;max-width:100%;height:${size.height}px;">
                    <div class="ad-placeholder-content">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
                            <path d="M9 9H15M9 12H15M9 15H12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <span>Ad Space (${size.label})</span>
                        <small>Google AdSense - Est. $5-50/month</small>
                    </div>
                </div>
            `;
        }

        return container;
    }

    /**
     * Inject ads into blog articles
     */
    function injectBlogAds() {
        const articles = document.querySelectorAll('.blog-article .article-content');

        articles.forEach(article => {
            // Check if ads already injected
            if (article.querySelector('.ad-placeholder')) return;

            const paragraphs = article.querySelectorAll('p, h2, h3');
            const totalParagraphs = paragraphs.length;

            if (totalParagraphs < 5) return; // Don't inject on short articles

            // Insert in-article ad at approximately 40% of content
            const midPoint = Math.floor(totalParagraphs * 0.4);
            if (paragraphs[midPoint]) {
                const inArticleAd = createAdPlaceholder('inArticle', adPlacements.inArticle);
                paragraphs[midPoint].parentNode.insertBefore(inArticleAd, paragraphs[midPoint].nextSibling);
            }
        });
    }

    /**
     * Inject sidebar ads
     */
    function injectSidebarAds() {
        // Only on blog articles
        const articleContent = document.querySelector('.blog-article .article-content');
        if (!articleContent) return;

        // Check if sidebar ad already exists
        if (document.querySelector('.ad-container-sidebar')) return;

        const sidebarAd = createAdPlaceholder('sidebar', adPlacements.sidebar);
        articleContent.appendChild(sidebarAd);
    }

    /**
     * Inject footer ads
     */
    function injectFooterAds() {
        // Check if footer ad already exists
        if (document.querySelector('.ad-container-footer')) return;

        const footer = document.querySelector('.footer');
        if (!footer) return;

        const footerAd = createAdPlaceholder('footer', adPlacements.footer);
        footer.parentNode.insertBefore(footerAd, footer);
    }

    /**
     * Initialize ad injection
     */
    function initAds() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initAds);
            return;
        }

        // Inject ads based on page type
        injectBlogAds();
        injectSidebarAds();
        // injectFooterAds(); // Uncomment to enable footer ads

        // Add placeholder styles if in test mode
        if (!window.adSenseConfig.enabled && window.adSenseConfig.testMode) {
            addPlaceholderStyles();
        }

        console.log('AdSense module initialized', {
            enabled: window.adSenseConfig.enabled,
            testMode: window.adSenseConfig.testMode
        });
    }

    /**
     * Add CSS styles for ad placeholders
     */
    function addPlaceholderStyles() {
        if (document.getElementById('ad-placeholder-styles')) return;

        const style = document.createElement('style');
        style.id = 'ad-placeholder-styles';
        style.textContent = `
            .ad-placeholder {
                margin: 30px 0;
                display: flex;
                justify-content: center;
            }

            .ad-placeholder-inner {
                background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                border: 2px dashed #cbd5e0;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
            }

            .ad-placeholder-inner:hover {
                border-color: #667eea;
                background: linear-gradient(135deg, #f0f4ff 0%, #e8ecff 100%);
            }

            .ad-placeholder-content {
                text-align: center;
                color: #718096;
                padding: 20px;
            }

            .ad-placeholder-content svg {
                margin-bottom: 10px;
                opacity: 0.5;
            }

            .ad-placeholder-content span {
                display: block;
                font-weight: 500;
                font-size: 14px;
                margin-bottom: 5px;
            }

            .ad-placeholder-content small {
                font-size: 11px;
                color: #a0aec0;
            }

            /* Responsive adjustments */
            @media (max-width: 768px) {
                .ad-placeholder-inner {
                    width: 100% !important;
                    height: auto !important;
                    min-height: 100px;
                }
            }

            /* Ad container types */
            .ad-container-inarticle {
                clear: both;
            }

            .ad-container-sidebar {
                float: none;
                width: 100%;
                max-width: 300px;
                margin: 30px auto;
            }

            .ad-container-footer {
                width: 100%;
                max-width: 728px;
                margin: 0 auto 30px;
            }

            /* Don't show on very short content */
            .article-content:not(:has(p:nth-of-type(5))) .ad-placeholder {
                display: none;
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize
    initAds();

    // Export for manual control
    window.AdSenseModule = {
        init: initAds,
        injectBlogAds,
        injectSidebarAds,
        injectFooterAds,
        config: window.adSenseConfig
    };

})();

/**
 * HUMAN INSTRUCTIONS:
 *
 * After you get AdSense approval, follow these steps:
 *
 * 1. Add the AdSense script to your <head> section:
 *    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ID"
 *            crossorigin="anonymous"></script>
 *
 * 2. Update the config at the top of this file:
 *    - Set enabled: true
 *    - Replace publisherId with your actual publisher ID
 *    - Replace slot IDs with actual slot IDs from AdSense dashboard
 *
 * 3. Set testMode: false to disable placeholder ads
 *
 * That's it! Ads will automatically appear on your blog posts.
 */
