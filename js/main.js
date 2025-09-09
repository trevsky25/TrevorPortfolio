// Portfolio Website JavaScript
// Trevor Kist - Marketing Technology Leader
console.log('main.js loaded!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    // Initialize all features
    initMobileMenu();
    initScrollAnimations();
    initCounterAnimations();
    initSmoothScrolling();
    initFormHandling();
    initEmailCopy();
    initCarousel();
    initBrandAnimation();
    initBridgeModal();
});

// ===== MOBILE MENU FUNCTIONALITY =====
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (!navToggle || !navMenu) return;
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger bars
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(45deg) translate(6px, 6px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                bar.style.transform = '';
                bar.style.opacity = '';
            }
        });
    });
    
    // Close menu when clicking on links
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            // Reset hamburger bars
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = '';
                bar.style.opacity = '';
            });
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = '';
                bar.style.opacity = '';
            });
        }
    });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Special handling for staggered animations
                if (entry.target.dataset.aos === 'fade-up') {
                    const delay = parseInt(entry.target.dataset.aosDelay) || 0;
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay);
                }
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => observer.observe(element));
    
    // Add stagger delays to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
}

// ===== ANIMATED COUNTERS =====
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5
    };
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000; // 2 seconds
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const offsetTop = target.offsetTop - 100; // Account for fixed nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== FORM HANDLING =====
function initFormHandling() {
    const contactForm = document.querySelector('.contact-form');
    const successMessage = document.getElementById('success-message');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        // Let Netlify handle the form submission
        // Show success message after a short delay to allow submission
        setTimeout(() => {
            if (successMessage) {
                contactForm.style.display = 'none';
                successMessage.style.display = 'block';
                successMessage.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    });
    
    // Form validation
    const requiredFields = contactForm.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        field.addEventListener('blur', validateField);
        field.addEventListener('input', clearValidation);
    });
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Remove existing error styling
    field.classList.remove('error');
    
    // Check if field is empty
    if (!value) {
        showFieldError(field, 'This field is required');
        return false;
    }
    
    // Email validation
    if (field.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Please enter a valid email address');
            return false;
        }
    }
    
    return true;
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '12px';
    errorDiv.style.marginTop = '4px';
    
    field.parentNode.appendChild(errorDiv);
}

function clearValidation(e) {
    const field = e.target;
    field.classList.remove('error');
    
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// ===== EMAIL COPY FUNCTIONALITY =====
function initEmailCopy() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        // Add click handler for copy functionality
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const email = this.getAttribute('href').replace('mailto:', '');
            copyToClipboard(email);
            showCopyNotification(this);
        });
    });
}

async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
}

function showCopyNotification(element) {
    const notification = document.createElement('div');
    notification.textContent = 'Email copied to clipboard!';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #00D4AA;
        color: white;
        padding: 12px 20px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 500;
        z-index: 1000;
        transform: translateY(-20px);
        opacity: 0;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateY(-20px)';
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ===== NAVIGATION ACTIVE STATE =====
function updateActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('nav-link--active');
        
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath || (currentPath === '/' && link.textContent.trim() === 'Home')) {
            link.classList.add('nav-link--active');
        }
    });
}

// Update active nav link on page load
window.addEventListener('load', updateActiveNavLink);

// ===== PERFORMANCE OPTIMIZATIONS =====
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for resize events
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
    };
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
// Keyboard navigation for custom elements
document.addEventListener('keydown', function(e) {
    // Tab navigation for project cards
    if (e.key === 'Enter' || e.key === ' ') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('project-card')) {
            const link = focusedElement.querySelector('.project-link');
            if (link) {
                e.preventDefault();
                link.click();
            }
        }
    }
});

// Add keyboard accessibility to interactive elements
const interactiveElements = document.querySelectorAll('.project-card, .skill-tag');
interactiveElements.forEach(element => {
    if (!element.hasAttribute('tabindex')) {
        element.setAttribute('tabindex', '0');
    }
});

// ===== LAZY LOADING FOR IMAGES =====
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Initialize lazy loading
initLazyLoading();

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You could send error reports to an analytics service here
});

// ===== ANALYTICS HELPERS =====
function trackEvent(eventName, properties = {}) {
    // Google Analytics 4 event tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, properties);
    }
    
    // Console log for development
    console.log('Event tracked:', eventName, properties);
}

// Track important interactions
document.addEventListener('click', function(e) {
    const target = e.target.closest('a, button');
    if (!target) return;
    
    // Track external links
    if (target.hostname && target.hostname !== window.location.hostname) {
        trackEvent('external_link_click', {
            url: target.href,
            text: target.textContent.trim()
        });
    }
    
    // Track CTA buttons
    if (target.classList.contains('btn--primary')) {
        trackEvent('cta_click', {
            text: target.textContent.trim(),
            page: window.location.pathname
        });
    }
    
    // Track project views
    if (target.classList.contains('project-link')) {
        trackEvent('project_view', {
            project: target.closest('.project-card')?.querySelector('.project-title')?.textContent
        });
    }
});

// Track form submissions
document.addEventListener('submit', function(e) {
    if (e.target.classList.contains('contact-form')) {
        trackEvent('form_submit', {
            form: 'contact',
            page: window.location.pathname
        });
    }
});

// ===== BRAND ANIMATION ON SCROLL =====
function initBrandAnimation() {
    const nav = document.querySelector('.nav');
    const brandText = document.querySelector('.brand-text');
    
    if (!nav || !brandText) return;
    
    let isAnimating = false;
    
    const handleScroll = throttle(() => {
        const scrollY = window.scrollY;
        const shouldBeCompact = scrollY > 50;
        
        if (shouldBeCompact && !nav.classList.contains('scrolled')) {
            // Scroll down - animate to TK
            nav.classList.add('scrolled');
            animateText(brandText, 'TREVOR KIST', 'TK');
        } else if (!shouldBeCompact && nav.classList.contains('scrolled')) {
            // Scroll up - animate to TREVOR KIST
            nav.classList.remove('scrolled');
            animateText(brandText, 'TK', 'TREVOR KIST');
        }
    }, 100);
    
    window.addEventListener('scroll', handleScroll);
}

function animateText(element, fromText, toText) {
    if (element.dataset.animating === 'true') return;
    
    element.dataset.animating = 'true';
    
    // Fade out
    element.style.opacity = '0';
    element.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
        // Change text
        element.textContent = toText;
        
        // Fade in
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        
        setTimeout(() => {
            element.dataset.animating = 'false';
        }, 300);
    }, 150);
}

// ===== CAROUSEL FUNCTIONALITY =====
function initCarousel() {
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-image');
        const indicators = carousel.querySelectorAll('.indicator');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        
        if (!images.length) return;
        
        let currentIndex = 0;
        let autoPlayInterval = null;
        
        function showImage(index) {
            // Hide all images
            images.forEach(img => img.classList.remove('active'));
            indicators.forEach(ind => ind.classList.remove('active'));
            
            // Show selected image
            images[index].classList.add('active');
            indicators[index].classList.add('active');
            currentIndex = index;
        }
        
        function nextImage() {
            const newIndex = (currentIndex + 1) % images.length;
            showImage(newIndex);
        }
        
        function prevImage() {
            const newIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(newIndex);
        }
        
        // Button event listeners
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextImage();
                resetAutoPlay();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevImage();
                resetAutoPlay();
            });
        }
        
        // Indicator event listeners
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showImage(index);
                resetAutoPlay();
            });
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (carousel.closest('.project-detail')) {
                if (e.key === 'ArrowLeft') {
                    prevImage();
                    resetAutoPlay();
                }
                if (e.key === 'ArrowRight') {
                    nextImage();
                    resetAutoPlay();
                }
            }
        });
        
        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;
        
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            if (touchEndX < touchStartX - 50) {
                nextImage();
                resetAutoPlay();
            }
            if (touchEndX > touchStartX + 50) {
                prevImage();
                resetAutoPlay();
            }
        }
        
        // Auto-play functionality
        function startAutoPlay() {
            autoPlayInterval = setInterval(nextImage, 4000);
        }
        
        function stopAutoPlay() {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
                autoPlayInterval = null;
            }
        }
        
        function resetAutoPlay() {
            stopAutoPlay();
            startAutoPlay();
        }
        
        // Start auto-play on load
        startAutoPlay();
        
        // Pause on hover
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
    });
}

// ===== BRIDGE MODAL FUNCTIONALITY =====
function initBridgeModal() {
    console.log('Initializing bridge modal...');
    const bridgeStar = document.getElementById('bridge-star');
    const mobileStar = document.getElementById('mobile-bridge-star');
    const modal = document.getElementById('bridge-modal');
    const modalClose = document.getElementById('modal-close');
    
    console.log('Elements found:', { bridgeStar, mobileStar, modal, modalClose });
    
    if (!modal || !modalClose) {
        console.log('Modal or close button not found!');
        return;
    }
    
    // Open modal on click - desktop star
    if (bridgeStar) {
        bridgeStar.addEventListener('click', function() {
            openModal();
            trackEvent('bridge_modal_open', {
                trigger: 'click',
                page: window.location.pathname
            });
        });
    }
    
    // Open modal on click - mobile star
    if (mobileStar) {
        mobileStar.addEventListener('click', function(e) {
            console.log('Mobile star clicked!');
            e.preventDefault();
            e.stopPropagation();
            openModal();
            trackEvent('bridge_modal_open', {
                trigger: 'click',
                page: window.location.pathname,
                element: 'mobile_star'
            });
        });
        
        // Also handle keyboard events for mobile star
        mobileStar.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal();
                trackEvent('bridge_modal_open', {
                    trigger: 'keyboard',
                    page: window.location.pathname,
                    element: 'mobile_star'
                });
            }
        });
    }
    
    // Open modal on Enter key
    bridgeStar.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal();
            trackEvent('bridge_modal_open', {
                trigger: 'keyboard',
                page: window.location.pathname
            });
        }
    });
    
    // Close modal on close button
    modalClose.addEventListener('click', closeModal);
    
    // Close modal on overlay click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    function openModal() {
        console.log('Opening modal...', modal);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus the close button for accessibility
        setTimeout(() => {
            modalClose.focus();
        }, 300);
    }
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Return focus to the star
        setTimeout(() => {
            bridgeStar.focus();
        }, 300);
    }
}

console.log('Portfolio website loaded successfully! 🚀');