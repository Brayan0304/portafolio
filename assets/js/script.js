// ===============================================
// Elementos DOM
// ===============================================
const loader = document.getElementById('loader');
const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const backToTopBtn = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');
const navLinks = document.querySelectorAll('.nav-link');

// ===============================================
// Loader
// ===============================================
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1000);
});

// ===============================================
// Navigation
// ===============================================

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Header scroll effect
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Add scrolled class for background effect
    if (currentScrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScrollY = currentScrollY;
});

// ===============================================
// Active Navigation Link
// ===============================================
const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ===============================================
// Smooth Scrolling
// ===============================================
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Handle navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        smoothScroll(target);
    });
});

// ===============================================
// Theme Toggle
// ===============================================
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else if (systemPrefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    }
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Initialize theme on load
initializeTheme();

// ===============================================
// Back to Top Button
// ===============================================
function toggleBackToTopButton() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', toggleBackToTopButton);

// ===============================================
// Intersection Observer for Animations
// ===============================================
function createIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate in
    const animateElements = document.querySelectorAll(`
        .section-header,
        .about-text,
        .about-skills,
        .stats,
        .tech-category,
        .project-card,
        .timeline-item,
        .contact-info,
        .contact-form
    `);
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// ===============================================
// Tech Items Hover Effect
// ===============================================
function initializeTechItems() {
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const tech = item.dataset.tech;
            item.style.transform = 'translateY(-10px) scale(1.05)';
            
            // Add glow effect
            item.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
            item.style.boxShadow = '';
        });
    });
}

// ===============================================
// Floating Elements Animation
// ===============================================
function initializeFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((element, index) => {
        // Random floating animation
        setInterval(() => {
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            element.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, 3000 + (index * 500));
    });
}

// ===============================================
// Contact Form (Handled by Formspree)
// ===============================================

// ===============================================
// Notification System
// ===============================================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">×</button>
    `;
    
    // Styles for notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px 20px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        minWidth: '300px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease'
    });
    
    // Set background color based on type
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    notification.style.background = colors[type] || colors.info;
    
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
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
    `;
    
    function closeNotification() {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }
    
    closeBtn.addEventListener('click', closeNotification);
    
    // Auto close after 5 seconds
    setTimeout(closeNotification, 5000);
}

// ===============================================
// Typing Effect for Hero Section
// ===============================================
function initializeTypingEffect() {
    const typedElement = document.querySelector('.hero-subtitle');
    if (!typedElement) return;
    
    const texts = [
        'Desarrollador Web Full Stack',
        'Especialista en PHP & Laravel',
        'Experto en React & TypeScript',
        'Creador de Soluciones Digitales'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeText() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typedElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before next text
        }
        
        setTimeout(typeText, typeSpeed);
    }
    
    // Start typing effect after page load
    setTimeout(typeText, 2000);
}

// ===============================================
// Skills Animation
// ===============================================
function initializeSkillsAnimation() {
    const skillItems = document.querySelectorAll('.skill-item, .stat-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.2 });
    
    skillItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}

// ===============================================
// Project Cards Animation
// ===============================================
function initializeProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Scale up the card slightly
            card.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ===============================================
// Scroll Progress Indicator
// ===============================================
function initializeScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        z-index: 10000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// ===============================================
// Parallax Effect
// ===============================================
function initializeParallax() {
    const parallaxElements = document.querySelectorAll('.floating-element');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach((element, index) => {
            const rate = scrolled * -0.5;
            element.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
    });
}

// ===============================================
// Initialize All Functions
// ===============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all interactive features
    createIntersectionObserver();
    initializeTechItems();
    initializeFloatingElements();
    initializeTypingEffect();
    initializeSkillsAnimation();
    initializeProjectCards();
    initializeScrollProgress();
    initializeParallax();
    
    // Performance optimization: Throttle scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                // Any scroll-based functions that need throttling
                scrollTimeout = null;
            }, 10);
        }
    });
});

// ===============================================
// Resize Handler
// ===============================================
window.addEventListener('resize', () => {
    // Close mobile menu on resize
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// ===============================================
// Error Handling
// ===============================================
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// ===============================================
// Service Worker Registration (for PWA capabilities)
// ===============================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('Service Worker registered'))
            .catch(() => console.log('Service Worker registration failed'));
    });
}

// ===============================================
// Keyboard Navigation
// ===============================================
document.addEventListener('keydown', (e) => {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Tab navigation enhancement
    if (e.key === 'Tab') {
        document.body.classList.add('using-keyboard');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('using-keyboard');
});

// ===============================================
// Copy to Clipboard Functionality
// ===============================================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('¡Copiado al portapapeles!', 'success');
    }).catch(() => {
        showNotification('Error al copiar', 'error');
    });
}

// Add copy functionality to email links
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const email = link.href.replace('mailto:', '');
        copyToClipboard(email);
    });
});

// ===============================================
// Console Easter Egg
// ===============================================
console.log(`
%c🚀 ¡Hola Desarrollador!
%cSi estás viendo esto, ¡significa que te interesa el código!
%cEste portafolio fue desarrollado con:
%c• HTML5 & CSS3
%c• JavaScript Vanilla
%c• Responsive Design
%c• Optimización SEO
%c• Accesibilidad Web

%c¿Te gustaría trabajar conmigo? ¡Contactame!
`, 
'color: #667eea; font-size: 20px; font-weight: bold;',
'color: #764ba2; font-size: 14px;',
'color: #2d3748; font-size: 12px; font-weight: bold;',
'color: #667eea; font-size: 11px;',
'color: #667eea; font-size: 11px;',
'color: #667eea; font-size: 11px;',
'color: #667eea; font-size: 11px;',
'color: #667eea; font-size: 11px;',
'color: #f093fb; font-size: 14px; font-weight: bold;'
);

// ===============================================
// EmailJS Configuration
// ===============================================

// Manejar envío del formulario con Formspree (servicio gratuito)
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submit-btn');
        const formMessages = document.getElementById('form-messages');
        const originalText = submitBtn.innerHTML;
        
        // Mostrar loading
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        // Obtener datos del formulario
        const formData = new FormData(this);
        
        // Crear enlace mailto como fallback confiable
        const name = formData.get('name');
        const email = formData.get('_replyto');
        const subject = formData.get('_subject');
        const message = formData.get('message');
        
        // Crear el enlace mailto
        const mailtoLink = `mailto:riverosb34@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`
Nombre: ${name}
Email: ${email}
Asunto: ${subject}

Mensaje:
${message}
        `)}`;
        
        // Abrir el cliente de correo del usuario
        window.location.href = mailtoLink;
        
        // Mostrar mensaje de éxito
        formMessages.innerHTML = '<div class="success-message"><i class="fas fa-check-circle"></i> Se abrió tu cliente de correo. Por favor, envía el mensaje desde allí.</div>';
        contactForm.reset();
        
        // Restaurar botón
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            formMessages.innerHTML = '';
        }, 5000);
    });
}