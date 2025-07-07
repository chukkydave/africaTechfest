// Mobile Navigation Toggle for indee.html
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const bars = document.querySelectorAll('.bar');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            // Toggle mobile menu
            navMenu.classList.toggle('active');

            // Animate hamburger bars
            bars.forEach((bar, index) => {
                if (index === 0) {
                    bar.style.transform = navMenu.classList.contains('active')
                        ? 'rotate(45deg) translate(5px, 5px)'
                        : 'rotate(0deg) translate(0px, 0px)';
                } else if (index === 1) {
                    bar.style.opacity = navMenu.classList.contains('active') ? '0' : '1';
                } else if (index === 2) {
                    bar.style.transform = navMenu.classList.contains('active')
                        ? 'rotate(-45deg) translate(7px, -6px)'
                        : 'rotate(0deg) translate(0px, 0px)';
                }
            });
        });

        // Close mobile menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                // Reset hamburger animation
                bars.forEach((bar, index) => {
                    if (index === 0) {
                        bar.style.transform = 'rotate(0deg) translate(0px, 0px)';
                    } else if (index === 1) {
                        bar.style.opacity = '1';
                    } else if (index === 2) {
                        bar.style.transform = 'rotate(0deg) translate(0px, 0px)';
                    }
                });
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                // Reset hamburger animation
                bars.forEach((bar, index) => {
                    if (index === 0) {
                        bar.style.transform = 'rotate(0deg) translate(0px, 0px)';
                    } else if (index === 1) {
                        bar.style.opacity = '1';
                    } else if (index === 2) {
                        bar.style.transform = 'rotate(0deg) translate(0px, 0px)';
                    }
                });
            }
        });

        // Close mobile menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                // Reset hamburger animation
                bars.forEach((bar, index) => {
                    if (index === 0) {
                        bar.style.transform = 'rotate(0deg) translate(0px, 0px)';
                    } else if (index === 1) {
                        bar.style.opacity = '1';
                    } else if (index === 2) {
                        bar.style.transform = 'rotate(0deg) translate(0px, 0px)';
                    }
                });
            }
        });
    }
});

// Countdown Timer
function updateCountdown() {
    const eventDate = new Date('November 4, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update countdown elements
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
    if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
    if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
    if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');

    // If countdown is over
    if (distance < 0) {
        if (daysElement) daysElement.textContent = '00';
        if (hoursElement) hoursElement.textContent = '00';
        if (minutesElement) minutesElement.textContent = '00';
        if (secondsElement) secondsElement.textContent = '00';
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('bg-slate-900/95', 'backdrop-blur-sm');
            header.classList.remove('bg-slate-900');
        } else {
            header.classList.remove('bg-slate-900/95', 'backdrop-blur-sm');
            header.classList.add('bg-slate-900');
        }
    }
});

// Intersection Observer for animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.bg-white.rounded-lg, .text-center');

    animatedElements.forEach(el => {
        el.classList.add('opacity-0', 'translate-y-8');
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add fade-in animation class
const style = document.createElement('style');
style.textContent = `
    .animate-fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Form handling for registration buttons
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('button').forEach(button => {
        if (button.textContent.toLowerCase().includes('register')) {
            button.addEventListener('click', function (e) {
                e.preventDefault();
                alert('Registration functionality would be implemented here. This is a demo version.');
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', function () {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add hover effects for cards
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.bg-white.rounded-lg');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function (e) {
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
});

// Performance optimization - debounce scroll events
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

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function () {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('bg-slate-900/95', 'backdrop-blur-sm');
            header.classList.remove('bg-slate-900');
        } else {
            header.classList.remove('bg-slate-900/95', 'backdrop-blur-sm');
            header.classList.add('bg-slate-900');
        }
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add smooth scrolling to the page
document.documentElement.style.scrollBehavior = 'smooth'; 