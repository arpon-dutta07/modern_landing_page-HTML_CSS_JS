document.addEventListener("mousemove", (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    document.querySelectorAll(".parallax").forEach((element) => {
        const speed = element.getAttribute("data-speed");
        element.style.transform = `translate(${x * speed * 20}px, ${y * speed * 20}px)`;
    });
});

const signinButton = document.getElementById('signinButton');
const signinPage = document.getElementById('signinPage');


signinButton.addEventListener('click' , function()
{
    signinPage.classList.remove("cloeSignin")
    signinPage.classList.add("openSignin")
    // here we are adding the openSignin class from CSS File.
    // For the Animation.
})


const closeIcon = document.getElementById('closeIcon'); 

closeIcon.addEventListener("click" , function()
{
    signinPage.classList.remove("openSignin")    
    signinPage.classList.add("cloeSignin")
    // here we are adding the cloeSignin class from CSS File.
    // For the Animation.
})

// Smooth scrolling for navigation links
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

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'transparent';
        header.style.backdropFilter = 'none';
    }
});

// Mobile menu functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileMenuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    const icon = mobileMenuToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x');
    } else {
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    });
});

// Enhanced animation on scroll for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animate feature cards
            if (entry.target.classList.contains('features-section')) {
                const featureCards = entry.target.querySelectorAll('.feature-card');
                featureCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate-in');
                    }, index * 200);
                });
            }
            
            // Animate pricing cards
            if (entry.target.classList.contains('pricing-section')) {
                const pricingCards = entry.target.querySelectorAll('.pricing-card');
                pricingCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate-in');
                    }, index * 300);
                });
            }
            
            // Animate steps
            if (entry.target.classList.contains('how-to-use-section')) {
                const steps = entry.target.querySelectorAll('.step');
                const videoPlaceholder = entry.target.querySelector('.video-placeholder');
                
                steps.forEach((step, index) => {
                    setTimeout(() => {
                        step.classList.add('animate-in');
                    }, index * 200);
                });
                
                setTimeout(() => {
                    if (videoPlaceholder) {
                        videoPlaceholder.classList.add('animate-in');
                    }
                }, steps.length * 200 + 400);
            }
            
            // Animate timeline items
            if (entry.target.classList.contains('roadmap-section')) {
                const timelineItems = entry.target.querySelectorAll('.timeline-item');
                timelineItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animate-in');
                    }, index * 300);
                });
            }
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('.features-section, .pricing-section, .how-to-use-section, .roadmap-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// Add click handlers for pricing buttons
document.querySelectorAll('.pricing-btn').forEach(button => {
    button.addEventListener('click', function() {
        const cardTitle = this.closest('.pricing-card').querySelector('h3').textContent;
        alert(`You selected the ${cardTitle} plan! This would normally redirect to a payment page.`);
    });
});

// Add click handler for demo video
document.querySelector('.video-placeholder').addEventListener('click', function() {
    alert('Demo video would play here! This is a placeholder for the actual video.');
});

// Add floating particles animation
function createFloatingParticles() {
    const sections = document.querySelectorAll('.features-section, .pricing-section, .how-to-use-section, .roadmap-section');
    
    sections.forEach(section => {
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: linear-gradient(45deg, #FB773C, #EB3678);
                border-radius: 50%;
                pointer-events: none;
                opacity: 0.6;
                animation: floatParticle ${8 + Math.random() * 4}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                z-index: 1;
            `;
            section.appendChild(particle);
        }
    });
}

// Add CSS for floating particles
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes floatParticle {
        0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.6;
        }
        25% {
            transform: translateY(-20px) translateX(10px) scale(1.2);
            opacity: 1;
        }
        50% {
            transform: translateY(-10px) translateX(-15px) scale(0.8);
            opacity: 0.4;
        }
        75% {
            transform: translateY(-30px) translateX(5px) scale(1.1);
            opacity: 0.8;
        }
    }
`;
document.head.appendChild(particleStyle);

// Initialize particles when page loads
window.addEventListener('load', createFloatingParticles);

// Add magnetic effect to buttons
document.querySelectorAll('.pricing-btn, .hero button, .video-placeholder').forEach(button => {
    button.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// Add typewriter effect to section titles
function typewriterEffect(element, text, speed = 100) {
    element.textContent = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Apply typewriter effect when sections come into view
const titleObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const originalText = entry.target.textContent;
            typewriterEffect(entry.target, originalText, 150);
            entry.target.dataset.animated = 'true';
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.features-section h2, .pricing-section h2, .how-to-use-section h2, .roadmap-section h2').forEach(title => {
    titleObserver.observe(title);
});