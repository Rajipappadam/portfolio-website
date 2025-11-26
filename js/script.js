// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initSkillBars();
    initProjectFilters();
    initContactForm();
    initScrollAnimations();
    initTypeWriter();
});

// Navigation functionality
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip preventDefault if link goes to another page or external site
            if (href.startsWith('http') || href.includes('.html')) {
                return; // Let the link navigate normally
            }
            
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active navigation link highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    });
}

// Animated skill bars
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.querySelector('.skills');

    // Exit if skills section doesn't exist (e.g., on projects page)
    if (!skillsSection || skillBars.length === 0) return;

    function animateSkillBars() {
        const sectionTop = skillsSection.offsetTop;
        const sectionHeight = skillsSection.offsetHeight;
        const scrollPos = window.scrollY + window.innerHeight;

        if (scrollPos > sectionTop && scrollPos < sectionTop + sectionHeight + 200) {
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            });
        }
    }

    window.addEventListener('scroll', animateSkillBars);
    // Trigger once on load if skills section is visible
    animateSkillBars();
}

// Project filtering functionality
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter projects
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                        card.style.transition = 'all 0.3s ease';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');

    // Exit if contact form doesn't exist (e.g., on projects page)
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Basic validation
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }

        if (!isValidEmail(formData.email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }

        // Simulate form submission (replace with actual form handling)
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        contactForm.reset();
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        background-color: ${type === 'success' ? '#10b981' : '#ef4444'};
    `;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        margin-left: 1rem;
    `;

    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Scroll animations
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.section-title, .project-card, .skill-category, .about-text');

    function checkAnimation() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('fade-in-up');
            }
        });
    }

    window.addEventListener('scroll', checkAnimation);
    checkAnimation(); // Check on load
}

// Typewriter effect for hero section
function initTypeWriter() {
    const typewriterElement = document.querySelector('.hero-content h2');
    // Exit if element doesn't exist
    if (!typewriterElement) return;

    const texts = [
        'Information Technology Student',
        'Future Software Engineer',
        'Problem Solver',
        'Code Enthusiast'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Wait before deleting
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        setTimeout(typeWriter, typeSpeed);
    }

    // Start typewriter effect after a delay
    setTimeout(typeWriter, 1000);
}

// Utility function for smooth scrolling to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
window.addEventListener('scroll', function() {
    let scrollToTopBtn = document.querySelector('.scroll-to-top');
    
    if (!scrollToTopBtn) {
        scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.className = 'scroll-to-top';
        scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        scrollToTopBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--primary-color, #2563eb);
            color: white;
            border: none;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            z-index: 1000;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        `;
        
        scrollToTopBtn.addEventListener('click', scrollToTop);
        scrollToTopBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.4)';
        });
        scrollToTopBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
        });
        
        document.body.appendChild(scrollToTopBtn);
    }

    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add loading styles if not already present
    if (!document.querySelector('#loading-styles')) {
        const loadingStyles = document.createElement('style');
        loadingStyles.id = 'loading-styles';
        loadingStyles.textContent = `
            body:not(.loaded) {
                overflow: hidden;
            }
            body:not(.loaded)::before {
                content: '';
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #ffffff;
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            body:not(.loaded)::after {
                content: '';
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 40px;
                height: 40px;
                border: 4px solid #f3f4f6;
                border-top: 4px solid #2563eb;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                z-index: 10000;
            }
            @keyframes spin {
                0% { transform: translate(-50%, -50%) rotate(0deg); }
                100% { transform: translate(-50%, -50%) rotate(360deg); }
            }
        `;
        document.head.appendChild(loadingStyles);
    }
});

// Performance optimization: Throttle scroll events
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

// Apply throttling to scroll events
const throttledScrollHandler = throttle(function() {
    // Scroll-dependent functions can be called here if needed
}, 100);

window.addEventListener('scroll', throttledScrollHandler);