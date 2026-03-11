/**
 * Claude天团 - Navigation Component
 * Mobile-friendly responsive navigation
 */

class Navigation {
    constructor() {
        this.isOpen = false;
        this.init();
    }

    init() {
        this.createMobileMenu();
        this.bindEvents();
    }

    createMobileMenu() {
        // Check if mobile menu already exists
        if (document.querySelector('.mobile-menu-toggle')) return;

        // Find navigation
        const nav = document.querySelector('nav');
        if (!nav) return;

        // Create mobile toggle button
        const toggle = document.createElement('button');
        toggle.className = 'mobile-menu-toggle';
        toggle.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        toggle.setAttribute('aria-label', 'Toggle menu');

        // Insert toggle before nav content
        const navContainer = nav.querySelector('.navbar-container') || nav;
        navContainer.insertBefore(toggle, navContainer.firstChild);

        // Add mobile class to nav links
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            if (!link.closest('.mobile-menu-toggle')) {
                link.classList.add('nav-link');
            }
        });
    }

    bindEvents() {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const nav = document.querySelector('nav');

        if (toggle && nav) {
            toggle.addEventListener('click', () => this.toggle());

            // Close on link click
            nav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth < 768) {
                        this.close();
                    }
                });
            });

            // Close on outside click
            document.addEventListener('click', (e) => {
                if (this.isOpen && !nav.contains(e.target)) {
                    this.close();
                }
            });
        }
    }

    toggle() {
        this.isOpen = !this.isOpen;
        const nav = document.querySelector('nav');
        const toggle = document.querySelector('.mobile-menu-toggle');

        if (nav) {
            nav.classList.toggle('menu-open', this.isOpen);
        }
        if (toggle) {
            toggle.classList.toggle('active', this.isOpen);
        }
    }

    close() {
        this.isOpen = false;
        const nav = document.querySelector('nav');
        const toggle = document.querySelector('.mobile-menu-toggle');

        if (nav) {
            nav.classList.remove('menu-open');
        }
        if (toggle) {
            toggle.classList.remove('active');
        }
    }
}

/**
 * Smooth Scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Active nav link highlighting
 */
function highlightActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (currentPath.endsWith(href) || (currentPath === '/' && href === 'index.html'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Form validation enhancement
 */
function initFormValidation() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');

        inputs.forEach(input => {
            // Add validation styling on blur
            input.addEventListener('blur', function() {
                if (this.required && !this.value.trim()) {
                    this.classList.add('error');
                } else {
                    this.classList.remove('error');
                }
            });

            // Remove error on input
            input.addEventListener('input', function() {
                this.classList.remove('error');
            });
        });
    });
}

/**
 * Lazy load images
 */
function initLazyLoad() {
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => observer.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

/**
 * Animate elements on scroll
 */
function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(el => observer.observe(el));
    }
}

/**
 * Cookie consent banner
 */
function initCookieConsent() {
    // Check if already consented
    if (localStorage.getItem('cookieConsent')) return;

    // Create banner
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML = `
        <p>我们使用cookies来改善您的体验。继续浏览即表示同意我们的
        <a href="privacy.html">隐私政策</a>。</p>
        <button class="btn btn-sm btn-primary" onclick="acceptCookies()">接受</button>
    `;

    document.body.appendChild(banner);

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .cookie-banner {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #1a202c;
            color: white;
            padding: 16px 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
            z-index: 9999;
            box-shadow: 0 -4px 20px rgba(0,0,0,0.1);
        }
        .cookie-banner p {
            margin: 0;
            color: rgba(255,255,255,0.9);
        }
        .cookie-banner a {
            color: #667eea;
        }
    `;
    document.head.appendChild(style);
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'true');
    const banner = document.querySelector('.cookie-banner');
    if (banner) {
        banner.remove();
    }
}

// Make acceptCookies global
window.acceptCookies = acceptCookies;

/**
 * Toast Notification System
 * Usage: showToast('Success!', 'success') or showToast('Error!', 'error')
 */
class ToastManager {
    constructor() {
        this.container = null;
        this.init();
    }

    init() {
        // Create container if it doesn't exist
        if (!document.querySelector('.toast-container')) {
            this.container = document.createElement('div');
            this.container.className = 'toast-container';
            document.body.appendChild(this.container);
        } else {
            this.container = document.querySelector('.toast-container');
        }
    }

    show(message, type = 'info', duration = 4000) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;

        const icon = type === 'success' ? '✓' :
                     type === 'error' ? '✕' :
                     type === 'warning' ? '⚠' : 'ℹ';

        toast.innerHTML = `
            <span class="toast-icon">${icon}</span>
            <span class="toast-message">${message}</span>
            <button class="toast-close" onclick="this.parentElement.remove()">×</button>
        `;

        this.container.appendChild(toast);

        // Auto-remove after duration
        setTimeout(() => {
            if (toast.parentElement) {
                toast.classList.add('toast-exit');
                setTimeout(() => toast.remove(), 300);
            }
        }, duration);

        return toast;
    }

    success(message, duration) {
        return this.show(message, 'success', duration);
    }

    error(message, duration) {
        return this.show(message, 'error', duration);
    }

    warning(message, duration) {
        return this.show(message, 'warning', duration);
    }

    info(message, duration) {
        return this.show(message, 'info', duration);
    }
}

// Global toast instance
let toastManager;

function showToast(message, type = 'info', duration = 4000) {
    if (!toastManager) {
        toastManager = new ToastManager();
    }
    return toastManager.show(message, type, duration);
}

// Make showToast global
window.showToast = showToast;
window.ToastManager = ToastManager;

/**
 * Enhanced Real-time Form Validation
 */
function initEnhancedFormValidation() {
    const forms = document.querySelectorAll('form[data-validate="realtime"]');

    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');

        inputs.forEach(input => {
            // Create validation message element if needed
            let msgEl = input.parentElement.querySelector('.validation-message');
            if (!msgEl) {
                msgEl = document.createElement('span');
                msgEl.className = 'validation-message';
                input.parentElement.appendChild(msgEl);
            }

            // Real-time validation on input
            input.addEventListener('input', function() {
                validateField(this, msgEl);
            });

            // Validate on blur
            input.addEventListener('blur', function() {
                validateField(this, msgEl, true);
            });
        });
    });
}

function validateField(input, msgEl, showError = false) {
    const parent = input.closest('.form-field-enhanced') || input.parentElement;
    let isValid = true;
    let message = '';

    // Required check
    if (input.required && !input.value.trim()) {
        isValid = false;
        message = 'This field is required';
    }

    // Email validation
    if (input.type === 'email' && input.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
            isValid = false;
            message = 'Please enter a valid email address';
        }
    }

    // Phone validation
    if (input.type === 'tel' && input.value) {
        const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/;
        if (!phoneRegex.test(input.value)) {
            isValid = false;
            message = 'Please enter a valid phone number';
        }
    }

    // Min length check
    if (input.minLength && input.value.length < input.minLength) {
        isValid = false;
        message = `Minimum ${input.minLength} characters required`;
    }

    // Max length check
    if (input.maxLength && input.value.length > input.maxLength) {
        isValid = false;
        message = `Maximum ${input.maxLength} characters allowed`;
    }

    // Update UI
    if (showError) {
        parent.classList.remove('error', 'success');
        parent.classList.add(isValid ? 'success' : 'error');
        msgEl.textContent = isValid ? '' : message;
    }

    // Update input class
    input.classList.toggle('form-success-state', isValid && input.value);
    input.classList.toggle('form-error-state', !isValid && showError);

    return isValid;
}

/**
 * Scroll to Top Button
 */
function initScrollToTop() {
    // Create button if it doesn't exist
    if (document.querySelector('.scroll-to-top')) return;

    const btn = document.createElement('button');
    btn.className = 'scroll-to-top';
    btn.innerHTML = '↑';
    btn.setAttribute('aria-label', 'Scroll to top');
    btn.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    `;

    document.body.appendChild(btn);

    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.style.opacity = '1';
            btn.style.visibility = 'visible';
        } else {
            btn.style.opacity = '0';
            btn.style.visibility = 'hidden';
        }
    });

    // Scroll to top on click
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-3px)';
        btn.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.5)';
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0)';
        btn.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
    });
}

/**
 * Reading Progress Bar
 */
function initReadingProgress() {
    // Don't add on short pages
    if (document.body.scrollHeight < window.innerHeight * 2) return;

    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        width: 0%;
        z-index: 9999;
        transition: width 0.1s ease-out;
    `;

    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = `${Math.min(progress, 100)}%`;
    });
}

/**
 * Copy to Clipboard for Code Blocks
 */
function initCodeCopy() {
    document.querySelectorAll('pre code, .code-block').forEach(block => {
        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.textContent = 'Copy';
        btn.style.cssText = `
            position: absolute;
            top: 8px;
            right: 8px;
            padding: 4px 12px;
            background: rgba(102, 126, 234, 0.1);
            border: 1px solid rgba(102, 126, 234, 0.3);
            border-radius: 4px;
            color: #667eea;
            font-size: 12px;
            cursor: pointer;
            transition: all 0.2s;
        `;

        const pre = block.parentElement;
        if (pre.tagName === 'PRE') {
            pre.style.position = 'relative';
            pre.appendChild(btn);

            btn.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(block.textContent);
                    btn.textContent = 'Copied!';
                    btn.style.background = 'rgba(72, 187, 120, 0.1)';
                    btn.style.borderColor = 'rgba(72, 187, 120, 0.3)';
                    btn.style.color = '#48bb78';

                    setTimeout(() => {
                        btn.textContent = 'Copy';
                        btn.style.background = 'rgba(102, 126, 234, 0.1)';
                        btn.style.borderColor = 'rgba(102, 126, 234, 0.3)';
                        btn.style.color = '#667eea';
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy:', err);
                }
            });
        }
    });
}

/**
 * External Link Handler - Open in new tab with security
 */
function initExternalLinks() {
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (link.hostname !== window.location.hostname) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

/**
 * Keyboard Navigation Enhancement
 */
function initKeyboardNav() {
    // Add focus visible class for keyboard users
    document.body.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });

    document.body.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });

    // Add keyboard navigation styles
    const style = document.createElement('style');
    style.textContent = `
        body.keyboard-nav *:focus {
            outline: 2px solid #667eea !important;
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(style);
}

/**
 * Dark Mode Toggle
 * Persists preference in localStorage, respects system preference
 */
class DarkModeToggle {
    constructor() {
        this.storageKey = 'claude_squad_dark_mode';
        this.init();
    }

    init() {
        // Check for saved preference or system preference
        const savedPref = localStorage.getItem(this.storageKey);
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedPref === 'true' || (savedPref === null && systemPrefersDark)) {
            this.enable(false);
        }

        // Listen for system preference changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (localStorage.getItem(this.storageKey) === null) {
                if (e.matches) {
                    this.enable(false);
                } else {
                    this.disable(false);
                }
            }
        });

        // Create toggle button
        this.createToggleButton();
    }

    createToggleButton() {
        // Don't create if already exists
        if (document.querySelector('.dark-mode-toggle')) return;

        const btn = document.createElement('button');
        btn.className = 'dark-mode-toggle';
        btn.setAttribute('aria-label', 'Toggle dark mode');
        btn.innerHTML = `
            <svg class="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
            <svg class="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
        `;

        btn.addEventListener('click', () => this.toggle());
        document.body.appendChild(btn);
        this.addStyles();
    }

    toggle() {
        if (document.documentElement.classList.contains('dark-mode')) {
            this.disable(true);
        } else {
            this.enable(true);
        }
    }

    enable(save = true) {
        document.documentElement.classList.add('dark-mode');
        if (save) {
            localStorage.setItem(this.storageKey, 'true');
        }
        this.updateToggleButton(true);
    }

    disable(save = true) {
        document.documentElement.classList.remove('dark-mode');
        if (save) {
            localStorage.setItem(this.storageKey, 'false');
        }
        this.updateToggleButton(false);
    }

    updateToggleButton(isDark) {
        const btn = document.querySelector('.dark-mode-toggle');
        if (btn) {
            btn.classList.toggle('dark-active', isDark);
            btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        }
    }

    addStyles() {
        if (document.getElementById('dark-mode-styles')) return;

        const style = document.createElement('style');
        style.id = 'dark-mode-styles';
        style.textContent = `
            /* Dark Mode Toggle Button */
            .dark-mode-toggle {
                position: fixed;
                bottom: 100px;
                left: 20px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: var(--color-bg-white, #fff);
                border: 2px solid var(--color-border-light, #e2e8f0);
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 999;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease;
            }

            .dark-mode-toggle:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
            }

            .dark-mode-toggle .sun-icon,
            .dark-mode-toggle .moon-icon {
                position: absolute;
                transition: all 0.3s ease;
            }

            .dark-mode-toggle .moon-icon {
                opacity: 1;
                transform: rotate(0deg);
            }

            .dark-mode-toggle .sun-icon {
                opacity: 0;
                transform: rotate(-90deg);
            }

            .dark-mode-toggle.dark-active .moon-icon {
                opacity: 0;
                transform: rotate(90deg);
            }

            .dark-mode-toggle.dark-active .sun-icon {
                opacity: 1;
                transform: rotate(0deg);
            }

            /* Dark Mode Variables */
            :root.dark-mode {
                --color-bg-white: #1a202c;
                --color-bg-light: #2d3748;
                --color-bg-gray: #4a5568;
                --color-text-primary: #f7fafc;
                --color-text-secondary: #e2e8f0;
                --color-text-muted: #a0aec0;
                --color-border-light: #4a5568;
                --color-border-medium: #718096;
            }

            /* Dark Mode Overrides */
            :root.dark-mode body {
                background: var(--color-bg-white);
                color: var(--color-text-primary);
            }

            :root.dark-mode .navbar {
                background: var(--color-bg-light) !important;
            }

            :root.dark-mode .navbar a {
                color: var(--color-text-primary) !important;
            }

            :root.dark-mode .service-card,
            :root.dark-mode .case-card,
            :root.dark-mode .card,
            :root.dark-mode .cta-section,
            :root.dark-mode .skills-section {
                background: var(--color-bg-light);
            }

            :root.dark-mode .footer {
                background: var(--color-bg-gray);
            }

            :root.dark-mode input,
            :root.dark-mode textarea,
            :root.dark-mode select {
                background: var(--color-bg-light);
                color: var(--color-text-primary);
                border-color: var(--color-border-light);
            }

            :root.dark-mode .floating-contact-menu {
                background: var(--color-bg-light);
            }

            :root.dark-mode .popup-content {
                background: var(--color-bg-light);
            }

            :root.dark-mode .newsletter-popup {
                background: var(--color-bg-light);
            }

            :media (max-width: 768px) {
                .dark-mode-toggle {
                    bottom: 80px;
                    left: 15px;
                    width: 44px;
                    height: 44px;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * Page Transition Effects
 */
function initPageTransitions() {
    // Add fade-in on page load
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';

    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });

    // Add fade-out on navigation
    document.querySelectorAll('a[href]:not([href^="#"]):not([href^="javascript"]):not([target="_blank"])').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            // Only for internal links
            if (href && !href.startsWith('http') && !href.startsWith('mailto:')) {
                e.preventDefault();
                document.body.style.opacity = '0';
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });
}

/**
 * Image Lazy Loading Enhancement
 */
function initImageLazyLoading() {
    // Native lazy loading support check
    if ('loading' in HTMLImageElement.prototype) {
        document.querySelectorAll('img:not([loading])').forEach(img => {
            img.setAttribute('loading', 'lazy');
        });
    } else {
        // Fallback for older browsers
        const images = document.querySelectorAll('img:not([loading])');
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                        }
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            }, { rootMargin: '50px' });

            images.forEach(img => observer.observe(img));
        }
    }

    // Add fade-in animation for images
    const style = document.createElement('style');
    style.textContent = `
        img {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        img.loaded, img[loading="lazy"]:not([data-src]) {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);

    // Mark existing images as loaded
    document.querySelectorAll('img:not([data-src])').forEach(img => {
        img.classList.add('loaded');
    });
}

/**
 * Accessibility Enhancements
 */
function initAccessibilityEnhancements() {
    // Add skip to main content link
    if (!document.querySelector('.skip-link')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 0;
            background: var(--color-primary, #667eea);
            color: white;
            padding: 8px 16px;
            z-index: 10000;
            transition: top 0.3s;
        `;
        document.body.insertBefore(skipLink, document.body.firstChild);

        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '0';
        });
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
    }

    // Add main content id if missing
    const main = document.querySelector('main') || document.querySelector('.main-content');
    if (main && !main.id) {
        main.id = 'main-content';
    }

    // Ensure all interactive elements have focus states
    const style = document.createElement('style');
    style.textContent = `
        a:focus-visible,
        button:focus-visible,
        input:focus-visible,
        textarea:focus-visible,
        select:focus-visible {
            outline: 2px solid var(--color-primary, #667eea);
            outline-offset: 2px;
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    `;
    document.head.appendChild(style);

    // Add ARIA labels to navigation
    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('aria-label')) {
        nav.setAttribute('aria-label', 'Main navigation');
    }
}

/**
 * Service Card Micro-interactions
 */
function initServiceCardAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        .service-card,
        .case-card,
        .pricing-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card:hover,
        .case-card:hover,
        .pricing-card:hover {
            transform: translateY(-8px);
        }

        .service-card::after,
        .case-card::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: var(--gradient-primary, linear-gradient(135deg, #667eea 0%, #764ba2 100%));
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        .service-card:hover::after,
        .case-card:hover::after {
            transform: scaleX(1);
        }
    `;
    document.head.appendChild(style);
}

/**
 * Testimonial Carousel Component
 * Auto-rotating testimonial slider with touch support
 */
class TestimonialCarousel {
    constructor(container, options = {}) {
        this.container = typeof container === 'string' ? document.querySelector(container) : container;
        if (!this.container) return;

        this.options = {
            autoplay: options.autoplay ?? true,
            interval: options.interval ?? 5000,
            showDots: options.showDots ?? true,
            showArrows: options.showArrows ?? true,
            pauseOnHover: options.pauseOnHover ?? true,
            ...options
        };

        this.slides = this.container.querySelectorAll('.testimonial-slide');
        this.currentIndex = 0;
        this.autoplayTimer = null;
        this.isPaused = false;

        this.init();
    }

    init() {
        if (this.slides.length <= 1) return;

        this.createStyles();
        this.setupSlides();

        if (this.options.showArrows) {
            this.createArrows();
        }

        if (this.options.showDots) {
            this.createDots();
        }

        if (this.options.autoplay) {
            this.startAutoplay();
        }

        if (this.options.pauseOnHover) {
            this.setupHoverPause();
        }

        this.setupTouchSupport();
    }

    createStyles() {
        if (document.getElementById('testimonial-carousel-styles')) return;

        const style = document.createElement('style');
        style.id = 'testimonial-carousel-styles';
        style.textContent = `
            .testimonial-carousel {
                position: relative;
                overflow: hidden;
            }

            .testimonial-carousel-inner {
                display: flex;
                transition: transform 0.5s ease-in-out;
            }

            .testimonial-slide {
                min-width: 100%;
                padding: 0 10px;
                box-sizing: border-box;
            }

            .testimonial-carousel-arrows {
                position: absolute;
                top: 50%;
                left: 0;
                right: 0;
                transform: translateY(-50%);
                display: flex;
                justify-content: space-between;
                pointer-events: none;
                padding: 0 10px;
            }

            .testimonial-arrow {
                width: 44px;
                height: 44px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.95);
                border: none;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                color: var(--color-primary, #667eea);
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
                transition: all 0.3s ease;
                pointer-events: auto;
            }

            .testimonial-arrow:hover {
                background: var(--color-primary, #667eea);
                color: white;
                transform: scale(1.1);
            }

            .testimonial-dots {
                display: flex;
                justify-content: center;
                gap: 8px;
                margin-top: 20px;
            }

            .testimonial-dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: var(--color-border-light, #e2e8f0);
                border: none;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .testimonial-dot.active {
                background: var(--color-primary, #667eea);
                transform: scale(1.2);
            }

            .testimonial-dot:hover {
                background: var(--color-primary-dark, #5a67d8);
            }

            @media (max-width: 768px) {
                .testimonial-arrow {
                    width: 36px;
                    height: 36px;
                    font-size: 16px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    setupSlides() {
        const inner = document.createElement('div');
        inner.className = 'testimonial-carousel-inner';

        this.slides.forEach(slide => {
            slide.style.minWidth = '100%';
            inner.appendChild(slide);
        });

        // Wrap slides
        const wrapper = document.createElement('div');
        wrapper.className = 'testimonial-carousel';
        this.container.insertBefore(wrapper, this.slides[0]);
        wrapper.appendChild(inner);

        this.inner = inner;
        this.wrapper = wrapper;
    }

    createArrows() {
        const arrowsContainer = document.createElement('div');
        arrowsContainer.className = 'testimonial-carousel-arrows';

        const prevBtn = document.createElement('button');
        prevBtn.className = 'testimonial-arrow prev';
        prevBtn.innerHTML = '←';
        prevBtn.setAttribute('aria-label', 'Previous testimonial');
        prevBtn.addEventListener('click', () => this.prev());

        const nextBtn = document.createElement('button');
        nextBtn.className = 'testimonial-arrow next';
        nextBtn.innerHTML = '→';
        nextBtn.setAttribute('aria-label', 'Next testimonial');
        nextBtn.addEventListener('click', () => this.next());

        arrowsContainer.appendChild(prevBtn);
        arrowsContainer.appendChild(nextBtn);
        this.wrapper.appendChild(arrowsContainer);
    }

    createDots() {
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'testimonial-dots';

        this.slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'testimonial-dot' + (index === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
            dot.addEventListener('click', () => this.goTo(index));
            dotsContainer.appendChild(dot);
        });

        this.wrapper.appendChild(dotsContainer);
        this.dots = dotsContainer.querySelectorAll('.testimonial-dot');
    }

    setupHoverPause() {
        this.wrapper.addEventListener('mouseenter', () => {
            this.isPaused = true;
            this.stopAutoplay();
        });

        this.wrapper.addEventListener('mouseleave', () => {
            this.isPaused = false;
            if (this.options.autoplay) {
                this.startAutoplay();
            }
        });
    }

    setupTouchSupport() {
        let startX = 0;
        let isDragging = false;

        this.wrapper.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        }, { passive: true });

        this.wrapper.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            isDragging = false;

            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
        }, { passive: true });
    }

    goTo(index) {
        this.currentIndex = index;
        this.updateSlide();
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateSlide();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateSlide();
    }

    updateSlide() {
        this.inner.style.transform = `translateX(-${this.currentIndex * 100}%)`;

        // Update dots
        if (this.dots) {
            this.dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentIndex);
            });
        }
    }

    startAutoplay() {
        if (this.autoplayTimer) return;
        this.autoplayTimer = setInterval(() => {
            if (!this.isPaused) {
                this.next();
            }
        }, this.options.interval);
    }

    stopAutoplay() {
        if (this.autoplayTimer) {
            clearInterval(this.autoplayTimer);
            this.autoplayTimer = null;
        }
    }
}

/**
 * Form Progress Bar Component
 * Shows visual progress for multi-step forms
 */
class FormProgressBar {
    constructor(form, options = {}) {
        this.form = typeof form === 'string' ? document.querySelector(form) : form;
        if (!this.form) return;

        this.options = {
            showPercentage: options.showPercentage ?? true,
            showStepText: options.showStepText ?? true,
            color: options.color ?? null,
            height: options.height ?? 6,
            position: options.position ?? 'top',
            ...options
        };

        this.fields = this.form.querySelectorAll('input, textarea, select');
        this.requiredFields = this.form.querySelectorAll('[required]');
        this.filledFields = new Set();

        this.init();
    }

    init() {
        this.createStyles();
        this.createProgressBar();
        this.bindEvents();
        this.updateProgress();
    }

    createStyles() {
        if (document.getElementById('form-progress-styles')) return;

        const style = document.createElement('style');
        style.id = 'form-progress-styles';
        style.textContent = `
            .form-progress-container {
                position: relative;
                margin-bottom: 24px;
            }

            .form-progress-bar {
                width: 100%;
                height: var(--progress-height, 6px);
                background: var(--color-bg-gray, #edf2f7);
                border-radius: var(--progress-height, 6px);
                overflow: hidden;
            }

            .form-progress-fill {
                height: 100%;
                background: var(--gradient-primary, linear-gradient(90deg, #667eea, #764ba2));
                border-radius: var(--progress-height, 6px);
                transition: width 0.4s ease;
                position: relative;
            }

            .form-progress-fill::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                animation: progressShine 2s infinite;
            }

            @keyframes progressShine {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }

            .form-progress-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 8px;
                font-size: var(--font-size-sm, 0.875rem);
            }

            .form-progress-percentage {
                font-weight: var(--font-weight-semibold, 600);
                color: var(--color-primary, #667eea);
            }

            .form-progress-text {
                color: var(--color-text-muted, #718096);
            }

            .form-progress-complete {
                display: none;
                align-items: center;
                gap: 6px;
                color: var(--color-success, #48bb78);
                font-weight: var(--font-weight-semibold, 600);
            }

            .form-progress-complete.visible {
                display: flex;
            }

            .form-progress-container.complete .form-progress-percentage,
            .form-progress-container.complete .form-progress-text {
                display: none;
            }

            .form-progress-container.complete .form-progress-complete {
                display: flex;
            }

            /* Animated border for focused fields */
            .form-field-progress {
                position: relative;
            }

            .form-field-progress::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 2px;
                background: var(--gradient-primary, linear-gradient(90deg, #667eea, #764ba2));
                transform: scaleX(0);
                transition: transform 0.3s ease;
            }

            .form-field-progress.filled::after {
                transform: scaleX(1);
            }
        `;
        document.head.appendChild(style);
    }

    createProgressBar() {
        this.container = document.createElement('div');
        this.container.className = 'form-progress-container';
        this.container.style.setProperty('--progress-height', `${this.options.height}px`);

        if (this.options.color) {
            this.container.style.setProperty('--gradient-primary', this.options.color);
        }

        this.container.innerHTML = `
            <div class="form-progress-bar">
                <div class="form-progress-fill" style="width: 0%"></div>
            </div>
            <div class="form-progress-info">
                <span class="form-progress-percentage">0%</span>
                <span class="form-progress-text">Getting started...</span>
                <span class="form-progress-complete">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Ready to submit!
                </span>
            </div>
        `;

        // Insert at the top of the form
        if (this.options.position === 'top') {
            this.form.insertBefore(this.container, this.form.firstChild);
        } else {
            this.form.appendChild(this.container);
        }

        this.progressBar = this.container.querySelector('.form-progress-fill');
        this.percentageEl = this.container.querySelector('.form-progress-percentage');
        this.textEl = this.container.querySelector('.form-progress-text');
    }

    bindEvents() {
        this.fields.forEach(field => {
            // Check initial state
            if (field.value.trim()) {
                this.filledFields.add(field);
            }

            // Listen for changes
            field.addEventListener('input', () => this.handleFieldChange(field));
            field.addEventListener('change', () => this.handleFieldChange(field));
            field.addEventListener('blur', () => this.handleFieldChange(field));
        });
    }

    handleFieldChange(field) {
        const hasValue = field.value.trim() !== '';

        if (hasValue) {
            this.filledFields.add(field);
            field.classList.add('filled');
        } else {
            this.filledFields.delete(field);
            field.classList.remove('filled');
        }

        this.updateProgress();
    }

    updateProgress() {
        const totalRequired = this.requiredFields.length;
        let filledRequired = 0;

        this.requiredFields.forEach(field => {
            if (field.value.trim()) {
                filledRequired++;
            }
        });

        const percentage = totalRequired > 0 ? Math.round((filledRequired / totalRequired) * 100) : 0;

        this.progressBar.style.width = `${percentage}%`;
        this.percentageEl.textContent = `${percentage}%`;

        // Update text
        if (percentage === 0) {
            this.textEl.textContent = 'Getting started...';
        } else if (percentage < 50) {
            this.textEl.textContent = 'Keep going...';
        } else if (percentage < 100) {
            this.textEl.textContent = 'Almost there...';
        } else {
            this.textEl.textContent = 'Complete!';
            this.container.classList.add('complete');
        }

        // Update container class
        this.container.classList.toggle('complete', percentage === 100);
    }
}

// Make classes global
window.TestimonialCarousel = TestimonialCarousel;
window.FormProgressBar = FormProgressBar;

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    new Navigation();

    // Smooth scroll
    initSmoothScroll();

    // Active nav
    highlightActiveNav();

    // Form validation
    initFormValidation();

    // Enhanced form validation for forms with data-validate="realtime"
    initEnhancedFormValidation();

    // Lazy load
    initLazyLoad();

    // Scroll animations
    initScrollAnimations();

    // Initialize toast manager (ready for use)
    toastManager = new ToastManager();

    // Scroll to top button
    initScrollToTop();

    // Reading progress bar
    initReadingProgress();

    // Code copy buttons
    initCodeCopy();

    // External links
    initExternalLinks();

    // Keyboard navigation
    initKeyboardNav();

    // Dark mode toggle
    new DarkModeToggle();

    // Page transitions
    initPageTransitions();

    // Image lazy loading
    initImageLazyLoading();

    // Accessibility enhancements
    initAccessibilityEnhancements();

    // Service card animations
    initServiceCardAnimations();

    // Initialize testimonial carousels
    document.querySelectorAll('[data-testimonial-carousel]').forEach(carousel => {
        new TestimonialCarousel(carousel, {
            autoplay: carousel.dataset.autoplay !== 'false',
            interval: parseInt(carousel.dataset.interval) || 5000,
            showDots: carousel.dataset.showDots !== 'false',
            showArrows: carousel.dataset.showArrows !== 'false'
        });
    });

    // Initialize form progress bars
    document.querySelectorAll('[data-form-progress]').forEach(form => {
        new FormProgressBar(form, {
            showPercentage: form.dataset.showPercentage !== 'false',
            showStepText: form.dataset.showStepText !== 'false',
            height: parseInt(form.dataset.progressHeight) || 6
        });
    });

    // Cookie consent (optional - uncomment if needed)
    // initCookieConsent();
});
