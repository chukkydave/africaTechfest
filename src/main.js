// Countdown Timer Functionality
function updateCountdown() {
    const targetDate = new Date('November 4, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = days.toString().padStart(3, '0');
        if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
        if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
        if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
    } else {
        // Event has started
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = '000';
        if (hoursEl) hoursEl.textContent = '00';
        if (minutesEl) minutesEl.textContent = '00';
        if (secondsEl) secondsEl.textContent = '00';
    }
}

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('[data-menu-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    const hamburgerLine1 = document.querySelector('[data-hamburger-line-1]');
    const hamburgerLine2 = document.querySelector('[data-hamburger-line-2]');
    const hamburgerLine3 = document.querySelector('[data-hamburger-line-3]');

    if (menuToggle && mobileMenu && hamburgerLine1 && hamburgerLine2 && hamburgerLine3) {
        let isMenuOpen = false;

        menuToggle.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;

            if (isMenuOpen) {
                // Show mobile menu
                mobileMenu.classList.remove('hidden');

                // Animate hamburger to X
                hamburgerLine1.style.transform = 'rotate(45deg) translate(4px, 4px)';
                hamburgerLine2.style.opacity = '0';
                hamburgerLine3.style.transform = 'rotate(-45deg) translate(4px, -4px)';
            } else {
                // Hide mobile menu
                mobileMenu.classList.add('hidden');

                // Animate X back to hamburger
                hamburgerLine1.style.transform = 'rotate(0) translate(0, 0)';
                hamburgerLine2.style.opacity = '1';
                hamburgerLine3.style.transform = 'rotate(0) translate(0, 0)';
            }
        });

        // Close menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a, button');
        for (const link of mobileLinks) {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.add('hidden');

                // Reset hamburger animation
                hamburgerLine1.style.transform = 'rotate(0) translate(0, 0)';
                hamburgerLine2.style.opacity = '1';
                hamburgerLine3.style.transform = 'rotate(0) translate(0, 0)';
            });
        }

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (isMenuOpen && !menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                isMenuOpen = false;
                mobileMenu.classList.add('hidden');

                // Reset hamburger animation
                hamburgerLine1.style.transform = 'rotate(0) translate(0, 0)';
                hamburgerLine2.style.opacity = '1';
                hamburgerLine3.style.transform = 'rotate(0) translate(0, 0)';
            }
        });
    }
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href')?.substring(1);
            const targetElement = targetId ? document.getElementById(targetId) : null;

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Button Click Handlers
function initButtonHandlers() {
    const registerButtons = document.querySelectorAll('button');

    registerButtons.forEach(button => {
        if (button.textContent?.includes('Register Now')) {
            button.addEventListener('click', () => {
                // In a real application, this would redirect to the registration page
                alert('Registration page would open here!');
            });
        }
    });
}

// Navbar scroll effect: fade background and show register link
function initNavbarScrollEffect() {
    const navbar = document.getElementById('main-navbar');
    const registerLink = document.getElementById('navbar-register-link');
    const heroSection = document.getElementById('hero');

    function onScroll() {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        if (heroBottom <= 80) {
            // User has scrolled past hero
            navbar.classList.remove('bg-transparent');
            navbar.classList.add('bg-black', 'bg-opacity-80', 'backdrop-blur-md');
            if (registerLink) registerLink.classList.remove('hidden');
        } else {
            // At top/hero
            navbar.classList.add('bg-transparent');
            navbar.classList.remove('bg-black', 'bg-opacity-80', 'backdrop-blur-md');
            if (registerLink) registerLink.classList.add('hidden');
        }
    }
    window.addEventListener('scroll', onScroll);
    onScroll(); // Run on load
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Start countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Initialize other features
    initMobileMenu();
    initSmoothScrolling();
    initButtonHandlers();
    initNavbarScrollEffect();
});

// Add some animations on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Initialize scroll animations when page loads
window.addEventListener('load', initScrollAnimations);
