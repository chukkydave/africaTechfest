// Countdown Timer Functionality (Keep as is)
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

// Global reference for onScroll function, so we can call it from anywhere
let handleNavbarScroll;

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
    const navbar = document.getElementById('main-navbar'); // Assuming your main navbar element has this ID

    if (mobileMenuButton && mobileMenu && mobileMenuOverlay && mobileMenuClose && navbar) {
        let isMenuOpen = false;

        function openMenu() {
            isMenuOpen = true;
            mobileMenu.classList.remove('translate-x-full');
            mobileMenuOverlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent scrolling on body

            // Force navbar to solid white when mobile menu is open
            navbar.classList.remove('bg-transparent', 'bg-black', 'bg-opacity-80', 'backdrop-blur-md', 'text-white');
            navbar.classList.add('bg-white', 'text-slate-900');

            // Hide the register link in the main navbar when mobile menu is open
            const registerLink = document.getElementById('navbar-register-link');
            if (registerLink) registerLink.classList.add('hidden');


            // Animate hamburger to X
            if (hamburgerLine1 && hamburgerLine2 && hamburgerLine3) {
                hamburgerLine1.style.transform = 'rotate(45deg) translate(5px, 5px)';
                hamburgerLine2.style.opacity = '0';
                hamburgerLine3.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            }
        }

        function closeMenu() {
            isMenuOpen = false;
            mobileMenu.classList.add('translate-x-full');
            mobileMenuOverlay.classList.add('hidden');
            document.body.style.overflow = ''; // Restore body scrolling

            // Restore navbar state based on current scroll position
            // We call the scroll effect function directly
            if (typeof handleNavbarScroll === 'function') {
                handleNavbarScroll();
            }

            // Show the register link in the main navbar if the scroll position dictates it
            // (handleNavbarScroll will manage this, but ensure it's not permanently hidden)
            // No explicit action here, handleNavbarScroll will take care of it.


            // Reset hamburger animation
            if (hamburgerLine1 && hamburgerLine2 && hamburgerLine3) {
                hamburgerLine1.style.transform = 'rotate(0) translate(0, 0)';
                hamburgerLine2.style.opacity = '1';
                hamburgerLine3.style.transform = 'rotate(0) translate(0, 0)';
            }
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
                    if (arrow) arrow.style.transform = 'rotate(0deg)';
                } else {
                    mobileProgramsDropdown.classList.remove('hidden');
                    if (arrow) arrow.style.transform = 'rotate(180deg)';
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

// Smooth Scrolling for Anchor Links (Keep as is)
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

// Button Click Handlers (Keep as is)
function initButtonHandlers() {
    const registerButtons = document.querySelectorAll('button');

    registerButtons.forEach(button => {
        if (button.textContent?.includes('Register now')) { // Changed 'Register Now' to 'Register now' based on your HTML
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
    const registerLink = document.getElementById('navbar-register-link'); // Assuming this is the desktop register link
    const heroSection = document.getElementById('hero'); // Assuming your hero section has this ID

    if (!navbar || !heroSection) {
        console.warn('Navbar or Hero section not found for scroll effect.');
        return;
    }

    // Assign the function to the global variable
    handleNavbarScroll = function() {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        // Check if mobile menu is currently open
        const mobileMenu = document.getElementById('mobile-menu');
        const isMobileMenuOpen = mobileMenu && !mobileMenu.classList.contains('translate-x-full');

        // If mobile menu is open, let its logic control the navbar styling
        if (isMobileMenuOpen) {
            return; // Exit, as mobile menu open takes precedence
        }

        // Apply scroll-based styling
        if (heroBottom <= 80) { // Scrolled past hero
            navbar.classList.remove('bg-transparent', 'text-white');
            navbar.classList.add('bg-black', 'bg-opacity-80', 'backdrop-blur-md', 'text-white'); // Ensure text is white here
            if (registerLink) registerLink.classList.remove('hidden');
        } else { // At top/hero
            navbar.classList.add('bg-transparent', 'text-white'); // Keep text white on transparent
            navbar.classList.remove('bg-black', 'bg-opacity-80', 'backdrop-blur-md');
            if (registerLink) registerLink.classList.add('hidden');
        }
    };

    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // Run on load to set initial state
}

// Social Activities/Training Programs Tabs Logic (Keep as is)
function initTabBar() {
    const tabContainer = document.getElementById('tab-scroll-container');
    const leftBtn = document.getElementById('tab-scroll-left');
    const rightBtn = document.getElementById('tab-scroll-right');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (!tabContainer || !tabBtns.length || !tabContents.length) return;

    // Tab switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            tabBtns.forEach(b => b.classList.remove('text-[#801825]', 'active-tab'));
            tabBtns.forEach(b => b.classList.add('text-gray-700', 'bg-transparent'));
            this.classList.remove('text-gray-700', 'bg-transparent');
            this.classList.add('text-[#801825]', 'active-tab');
            tabContents.forEach(tc => tc.classList.add('hidden'));
            const tabId = 'tab-' + this.dataset.tab;
            const tabContent = document.getElementById(tabId);
            if (tabContent) tabContent.classList.remove('hidden');
        });
    });

    // Tab scroll arrow logic
    function updateArrowVisibility() {
        if (!leftBtn || !rightBtn) return;
        leftBtn.style.display = tabContainer.scrollLeft > 0 ? 'block' : 'none';
        rightBtn.style.display = (tabContainer.scrollLeft + tabContainer.offsetWidth < tabContainer.scrollWidth) ? 'block' : 'none';
    }
    if (leftBtn && rightBtn) {
        leftBtn.addEventListener('click', () => {
            tabContainer.scrollBy({ left: -200, behavior: 'smooth' });
        });
        rightBtn.addEventListener('click', () => {
            tabContainer.scrollBy({ left: 200, behavior: 'smooth' });
        });
        tabContainer.addEventListener('scroll', updateArrowVisibility);
        window.addEventListener('resize', updateArrowVisibility);
        updateArrowVisibility();
    }
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
    initNavbarScrollEffect(); // This should be initialized after initMobileMenu
    initTabBar();
});

// Add some animations on scroll (Keep as is)
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