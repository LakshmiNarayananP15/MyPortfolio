document.addEventListener('DOMContentLoaded', () => {
    // Single entry point for all initializations
    initializePage();
});

function initializePage() {
    initializeLoading();
    initializeNavigation();
    initializeSmoothScrolling();
    initializeScrollAnimations();
    initializeScrollEffects();
    initializeParallax();
    initializeKeyboardNavigation();
    preloadResources();
    improveAccessibility();
    initializeCertificateModal();
    initializeScrollAnimator();
    initializeHeaderScroll();
    setupEventListeners();

    // Console message for developers
    console.log('%c👋 Welcome to Laksshmi Narayanan P\'s Portfolio!', 'color: #fff; background: #000; padding: 10px; border-radius: 5px; font-size: 16px;');
    console.log('%cInterested in the code? Check out the repository!', 'color: #ccc; font-size: 14px;');
}

// Loading Screen Management
function initializeLoading() {
    const loadingScreen = document.getElementById('loading');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    });
}

// Navigation Management
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll to specific section (used by CTA button)
function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.about-content, .timeline-item, .education-card, .project-card, .certificate-card, .contact-content');
    animateElements.forEach(element => {
        element.classList.add('animate-on-scroll');
        observer.observe(element);
    });
}

// Scroll Effects (navbar background, etc.)
function initializeScrollEffects() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        }
    });
}

// Parallax effect for hero section
function initializeParallax() {
    const gridPattern = document.querySelector('.grid-pattern');
    if (gridPattern) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            gridPattern.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
    }
}

// Keyboard navigation support
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
}

// Preload critical resources
function preloadResources() {
    const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
    ];
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = resource;
        document.head.appendChild(link);
    });
}

// Accessibility improvements
function improveAccessibility() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 10000;
        transition: top 0.3s;
    `;
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);

    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.setAttribute('aria-label', 'View my work - scroll to projects section');
    }

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        if (!link.textContent.trim() && !link.getAttribute('aria-label')) {
            const icon = link.querySelector('i');
            if (icon) {
                const iconClass = icon.className;
                if (iconClass.includes('linkedin')) {
                    link.setAttribute('aria-label', 'View my LinkedIn profile');
                } else if (iconClass.includes('github')) {
                    link.setAttribute('aria-label', 'View my GitHub profile');
                } else if (iconClass.includes('envelope')) {
                    link.setAttribute('aria-label', 'Send me an email');
                }
            }
        }
    });
}

// Certificate Modal Functions
function initializeCertificateModal() {
    const modal = document.getElementById('certificateModal');
    const iframe = document.getElementById('certificateFrame');

    window.openCertificate = (certificateUrl) => {
        iframe.src = certificateUrl;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    window.closeCertificate = () => {
        modal.style.display = 'none';
        iframe.src = '';
        document.body.style.overflow = 'auto';
    };

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeCertificate();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeCertificate();
        }
    });
}

// Scroll Animation System
function initializeScrollAnimator() {
    const scrollAnimator = new ScrollAnimator();
}

class ScrollAnimator {
    constructor() {
        this.init();
    }

    init() {
        this.setupObserver();
        this.addAnimationClasses();
        this.staggerSkillTags();
    }

    setupObserver() {
        const options = {
            root: null,
            rootMargin: '0px 0px -10% 0px',
            threshold: 0.1
        };
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                } else {
                    this.resetElement(entry.target);
                }
            });
        }, options);
    }

    addAnimationClasses() {
        document.querySelectorAll('.certificate-card, .certificate-domain, .timeline-item, .section-title, .about-description').forEach(el => {
            this.observer.observe(el);
        });
    }

    staggerSkillTags() {
        const skillTags = document.querySelectorAll('.skill-tag');
        skillTags.forEach((tag, index) => {
            tag.style.transitionDelay = `${index * 0.1}s`;
            this.observer.observe(tag);
        });
    }

    animateElement(element) {
        element.classList.add('animate');
        if (element.classList.contains('section-title')) {
            setTimeout(() => {
                element.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    element.style.transform = 'scale(1)';
                }, 200);
            }, 400);
        }
    }

    resetElement(element) {
        element.classList.remove('animate');
        if (element.classList.contains('section-title')) {
            element.style.transform = '';
        }
    }
}

// Header Transparency on Scroll
function initializeHeaderScroll() {
    const headerScroll = new HeaderScroll();
}

class HeaderScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.init();
    }

    init() {
        // No need to add another scroll listener here, it's handled by the global one
    }

    updateHeaderTransparency() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const maxScroll = 500;
        const baseOpacity = 0.8;
        const minOpacity = 0.3;
        const scrollRatio = Math.min(scrollTop / maxScroll, 1);
        const newOpacity = baseOpacity - (scrollRatio * (baseOpacity - minOpacity));
        this.navbar.style.background = `rgba(0, 0, 0, ${newOpacity})`;
        const baseBlur = 25;
        const maxBlur = 35;
        const newBlur = baseBlur + (scrollRatio * (maxBlur - baseBlur));
        this.navbar.style.backdropFilter = `blur(${newBlur}px)`;
        this.navbar.style.webkitBackdropFilter = `blur(${newBlur}px)`;
    }
}

// Centralized event listeners
function setupEventListeners() {
    const headerScroll = new HeaderScroll();
    const scrollAnimator = new ScrollAnimator();

    const throttledScroll = throttle(() => {
        updateActiveNavLink();
        // The scroll animator is observer based, so it doesn't need to be in the scroll handler.
        headerScroll.updateHeaderTransparency();
    }, 16);

    window.addEventListener('scroll', throttledScroll);

    window.addEventListener('error', (e) => {
        console.warn('Resource failed to load:', e.target.src || e.target.href);
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    const scrollPosition = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}