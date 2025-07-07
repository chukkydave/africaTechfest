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
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileProgramsToggle = document.getElementById('mobile-programs-toggle');
    const mobileProgramsDropdown = document.getElementById('mobile-programs-dropdown');
    const hamburgerLine1 = document.getElementById('hamburger-line-1');
    const hamburgerLine2 = document.getElementById('hamburger-line-2');
    const hamburgerLine3 = document.getElementById('hamburger-line-3');
    const navbar = document.getElementById('main-navbar');
    let prevNavbarClasses = '';

    if (mobileMenuButton && mobileMenu && mobileMenuOverlay && mobileMenuClose) {
        let isMenuOpen = false;

        function openMenu() {
            isMenuOpen = true;
            mobileMenu.classList.remove('translate-x-full');
            mobileMenuOverlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';

            // Save previous navbar classes and set to solid white
            if (navbar) {
                prevNavbarClasses = navbar.className;
                navbar.className = 'fixed top-0 left-0 w-full z-30 bg-white text-slate-900 transition-colors duration-300';
            }

            // Animate hamburger to X
            hamburgerLine1.style.transform = 'rotate(45deg) translate(5px, 5px)';
            hamburgerLine2.style.opacity = '0';
            hamburgerLine3.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        }

        function closeMenu() {
            isMenuOpen = false;
            mobileMenu.classList.add('translate-x-full');
            mobileMenuOverlay.classList.add('hidden');
            document.body.style.overflow = '';

            // Restore previous navbar classes
            if (navbar && prevNavbarClasses) {
                navbar.className = prevNavbarClasses;
            }

            // Reset hamburger animation
            hamburgerLine1.style.transform = 'rotate(0) translate(0, 0)';
            hamburgerLine2.style.opacity = '1';
            hamburgerLine3.style.transform = 'rotate(0) translate(0, 0)';
        }

        // Open menu
        mobileMenuButton.addEventListener('click', openMenu);

        // Close menu
        mobileMenuClose.addEventListener('click', closeMenu);
        mobileMenuOverlay.addEventListener('click', closeMenu);

        // Programs dropdown toggle
        if (mobileProgramsToggle && mobileProgramsDropdown) {
            mobileProgramsToggle.addEventListener('click', () => {
                const isDropdownOpen = !mobileProgramsDropdown.classList.contains('hidden');
                const arrow = mobileProgramsToggle.querySelector('svg');

                if (isDropdownOpen) {
                    mobileProgramsDropdown.classList.add('hidden');
                    arrow.style.transform = 'rotate(0deg)';
                } else {
                    mobileProgramsDropdown.classList.remove('hidden');
                    arrow.style.transform = 'rotate(180deg)';
                }
            });
        }

        // Close menu when clicking on a link (except dropdown toggle)
        const mobileLinks = mobileMenu.querySelectorAll('a:not([href="#"])');
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMenu();
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
