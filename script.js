// Mobile Navigation Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const navLinks = document.querySelectorAll('.mobile-nav a');

mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenuBtn.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    document.body.style.overflow = 'auto';
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinksDesktop = document.querySelectorAll('.nav-desktop a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksDesktop.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Floating contact button toggle
const floatingBtn = document.getElementById('floatingBtn');
const contactOptions = document.getElementById('contactOptions');

floatingBtn.addEventListener('click', () => {
    contactOptions.classList.toggle('active');
    floatingBtn.classList.toggle('pulse');
});

// Close floating options when clicking outside
document.addEventListener('click', (e) => {
    if (!floatingBtn.contains(e.target) && !contactOptions.contains(e.target)) {
        contactOptions.classList.remove('active');
        floatingBtn.classList.add('pulse');
    }
});

// Service details modals
const serviceDetailBtns = document.querySelectorAll('.service-details-btn');
const serviceModalOverlay = document.getElementById('serviceModalOverlay');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalContent = document.getElementById('modalContent');

// Service details data
const serviceDetails = {
    1: {
        title: "AC Repair & Service",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Our expert technicians provide comprehensive AC repair services for all brands and types of air conditioners. We use genuine spare parts and follow industry best practices to ensure your AC works like new.",
        features: [
            "Same-day service in most areas of Mumbai",
            "Expert technicians with 5+ years experience",
            "Genuine spare parts with 6 months warranty",
            "Transparent pricing with no hidden charges",
            "All brands: Daikin, LG, Samsung, Voltas, Blue Star, Hitachi, etc.",
            "All types: Split AC, Window AC, Cassette AC, Tower AC"
        ],
        contactInfo: "Call us at +91 703 727 2027 for immediate AC repair service"
    },
    2: {
        title: "AC Maintenance",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Regular AC maintenance is essential for optimal performance, energy efficiency, and longevity of your air conditioner. Our comprehensive maintenance services include deep cleaning, performance checks, and preventive maintenance.",
        features: [
            "Deep cleaning of indoor & outdoor units",
            "Coil cleaning with chemical wash",
            "Gas pressure check & optimization",
            "Filter cleaning & replacement",
            "Drain pipe cleaning & unclogging",
            "Performance efficiency testing",
            "Annual Maintenance Contracts (AMC) available"
        ],
        contactInfo: "Schedule regular maintenance by calling +91 703 727 2027"
    },
    3: {
        title: "Buy Old AC",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "We purchase old, used, and non-working ACs at the best market prices. Our team evaluates your AC based on brand, age, condition, and capacity to offer you the highest possible price.",
        features: [
            "Best price guarantee in Mumbai",
            "Free pickup from your location",
            "Instant cash payment",
            "All brands and capacities",
            "Working and non-working ACs",
            "10+ years of experience in AC buying",
            "Safe and transparent process"
        ],
        contactInfo: "Call +91 703 727 2027 for free evaluation and instant quote"
    }
};

// Open modal with service details
serviceDetailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const serviceId = btn.getAttribute('data-service');
        const service = serviceDetails[serviceId];
        
        modalContent.innerHTML = `
            <h2 style="color: var(--primary); margin-bottom: 20px;">${service.title}</h2>
            <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 30px; margin-bottom: 30px;">
                <div>
                    <img src="${service.image}" alt="${service.title}" style="width: 100%; border-radius: 12px; box-shadow: var(--shadow);">
                </div>
                <div>
                    <p style="margin-bottom: 20px; font-size: 1.1rem;">${service.description}</p>
                    <div style="background: var(--light); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                        <h4 style="color: var(--primary); margin-bottom: 15px;">Key Features:</h4>
                        <ul style="columns: 2; list-style: none;">
                            ${service.features.map(feature => `<li style="margin-bottom: 10px; padding-left: 25px; position: relative;">
                                <i class="fas fa-check" style="color: var(--accent); position: absolute; left: 0;"></i> ${feature}
                            </li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
            
            <div style="margin-bottom: 30px;">
                <h4 style="color: var(--primary); margin-bottom: 15px;">Contact For This Service:</h4>
                <div style="background: linear-gradient(135deg, var(--primary), var(--primary-dark)); color: white; border-radius: 10px; padding: 25px; text-align: center;">
                    <p style="margin-bottom: 20px; font-size: 1.1rem;">${service.contactInfo}</p>
                    <a href="tel:+917037272027" style="display: inline-block; background: white; color: var(--primary); padding: 12px 25px; border-radius: 50px; text-decoration: none; font-weight: 700; transition: var(--transition);">
                        <i class="fas fa-phone-alt"></i> Call Now
                    </a>
                </div>
            </div>
        `;
        
        serviceModalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
modalCloseBtn.addEventListener('click', () => {
    serviceModalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

serviceModalOverlay.addEventListener('click', (e) => {
    if (e.target === serviceModalOverlay) {
        serviceModalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate__animated');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate__fadeInUp');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Initialize animations on load
window.addEventListener('load', () => {
    // Add animation classes to specific elements
    document.querySelectorAll('.service-card, .area-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Trigger scroll to check initial positions
    animateOnScroll();
});