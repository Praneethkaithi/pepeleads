// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navigation dots functionality
    initDotNavigation();
    
    // Scroll controls
    initScrollControls();
    
    // Menu button toggle
    initMenuButton();
    
    // Button hover effects
    initButtonEffects();
    
    // Section animations on scroll
    initScrollAnimations();
});

// Initialize dot navigation
function initDotNavigation() {
    const dots = document.querySelectorAll('.dots-nav .dot');
    const sections = ['#hero-section', '#advertise-section', '#monetize-section'];
    
    // Set active dot based on scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        sections.forEach((section, index) => {
            const element = document.querySelector(section);
            if (!element) return;
            
            const rect = element.getBoundingClientRect();
            
            // If section is in view
            if (rect.top <= 100 && rect.bottom >= 100) {
                // Remove active class from all dots
                dots.forEach(dot => dot.classList.remove('active'));
                // Add active class to current dot
                if (dots[index]) dots[index].classList.add('active');
            }
        });
    });
    
    // Make dots clickable
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            const targetSection = document.querySelector(sections[index]);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize scroll controls
function initScrollControls() {
    // Hero section scroll controls
    const scrollUp = document.querySelector('.scroll-up');
    const scrollDown = document.querySelector('.scroll-down');
    
    if (scrollUp) {
        scrollUp.addEventListener('click', function() {
            window.scrollBy({
                top: -window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
    
    if (scrollDown) {
        scrollDown.addEventListener('click', function() {
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
    
    // Brands section scroll controls
    const brandScrollUp = document.querySelector('.scroll-up-btn');
    const brandScrollDown = document.querySelector('.scroll-down-btn');
    
    if (brandScrollUp) {
        brandScrollUp.addEventListener('click', function() {
            window.scrollBy({
                top: -300,
                behavior: 'smooth'
            });
        });
    }
    
    if (brandScrollDown) {
        brandScrollDown.addEventListener('click', function() {
            window.scrollBy({
                top: 300,
                behavior: 'smooth'
            });
        });
    }
}

// Initialize menu button
function initMenuButton() {
    const menuBtn = document.querySelector('.menu-btn');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            // Toggle a class for menu open state
            this.classList.toggle('open');
            
            // Create mobile menu if it doesn't exist
            let mobileMenu = document.querySelector('.mobile-menu');
            
            if (!mobileMenu) {
                mobileMenu = document.createElement('div');
                mobileMenu.className = 'mobile-menu';
                mobileMenu.innerHTML = `
                    <div class="mobile-menu-inner">
                        <div class="close-btn">&times;</div>
                        <ul>
                            <li><a href="#hero-section">Home</a></li>
                            <li><a href="#advertise-section">Advertise</a></li>
                            <li><a href="#monetize-section">Monetize</a></li>
                            <li><a href="#brands-section">Brands</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                `;
                document.body.appendChild(mobileMenu);
                
                // Add styles
                mobileMenu.style.position = 'fixed';
                mobileMenu.style.top = '0';
                mobileMenu.style.right = '0';
                mobileMenu.style.width = '0';
                mobileMenu.style.height = '100vh';
                mobileMenu.style.backgroundColor = '#101010';
                mobileMenu.style.zIndex = '1000';
                mobileMenu.style.transition = 'width 0.3s ease';
                mobileMenu.style.overflow = 'hidden';
                
                const menuInner = mobileMenu.querySelector('.mobile-menu-inner');
                menuInner.style.padding = '50px 30px';
                menuInner.style.color = 'white';
                
                const closeBtn = mobileMenu.querySelector('.close-btn');
                closeBtn.style.position = 'absolute';
                closeBtn.style.right = '20px';
                closeBtn.style.top = '20px';
                closeBtn.style.fontSize = '30px';
                closeBtn.style.cursor = 'pointer';
                
                const menuLinks = mobileMenu.querySelectorAll('ul li');
                menuLinks.forEach(link => {
                    link.style.margin = '15px 0';
                    link.style.listStyleType = 'none';
                });
                
                const menuAnchors = mobileMenu.querySelectorAll('ul li a');
                menuAnchors.forEach(anchor => {
                    anchor.style.color = 'white';
                    anchor.style.textDecoration = 'none';
                    anchor.style.fontSize = '18px';
                    
                    // Close menu when link is clicked
                    anchor.addEventListener('click', function() {
                        mobileMenu.style.width = '0';
                        menuBtn.classList.remove('open');
                    });
                });
                
                // Close button functionality
                closeBtn.addEventListener('click', function() {
                    mobileMenu.style.width = '0';
                    menuBtn.classList.remove('open');
                });
            }
            
            // Toggle menu visibility
            if (this.classList.contains('open')) {
                mobileMenu.style.width = '250px';
            } else {
                mobileMenu.style.width = '0';
            }
        });
    }
}

// Initialize button effects
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        btn.addEventListener('click', function() {
            // Get the button text to determine which section to navigate to
            const buttonText = this.textContent.trim().toLowerCase();
            let targetSection;
            
            if (buttonText.includes('publisher')) {
                targetSection = document.querySelector('#monetize-section');
            } else if (buttonText.includes('advertise')) {
                targetSection = document.querySelector('#advertise-section');
            }
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize scroll animations
function initScrollAnimations() {
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Elements to animate
    const elementsToAnimate = [
        ...document.querySelectorAll('.feature-card'),
        ...document.querySelectorAll('.option-card'),
        document.querySelector('.brand-diagram'),
        ...document.querySelectorAll('.link-column')
    ].filter(Boolean); // Filter out null elements
    
    // Add animation classes
    elementsToAnimate.forEach(element => {
        element.classList.add('animate-on-scroll');
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check elements on scroll
    function checkAnimations() {
        elementsToAnimate.forEach(element => {
            if (isInViewport(element) && element.style.opacity === '0') {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initial check
    checkAnimations();
    
    // Check on scroll
    window.addEventListener('scroll', checkAnimations);
}

// Add parallax effect to the illustration
window.addEventListener('mousemove', function(e) {
    const illustration = document.querySelector('.illustration');
    if (!illustration) return;
    
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    illustration.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Handle form submissions (if forms are added later)
document.addEventListener('submit', function(event) {
    const form = event.target;
    
    // Check if it's a form with class 'contact-form' or similar
    if (form.classList.contains('contact-form')) {
        event.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const formObject = {};
        
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) {
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Thank you! Your message has been sent.';
                successMessage.style.color = '#4ECCA3';
                successMessage.style.marginTop = '10px';
                
                form.appendChild(successMessage);
                form.reset();
                
                // Reset button
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                
                // Remove success message after 3 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
            }, 1500);
        }
    }
});

// Add sticky header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    if (window.scrollY > 50) {
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.left = '0';
        header.style.width = '100%';
        header.style.backgroundColor = 'rgba(16, 16, 16, 0.9)';
        header.style.zIndex = '100';
        header.style.padding = '10px 20px';
        header.style.transition = 'all 0.3s ease';
    } else {
        header.style.position = 'relative';
        header.style.backgroundColor = 'transparent';
        header.style.padding = '10px 0';
    }
});

// Pagination functionality for the Brands section
function initBrandsPagination() {
    const dots = document.querySelectorAll('.pagination-dots .dot');
    let currentSlide = 2; // Starting with the third slide (index 2)
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            // Remove active class from all dots
            dots.forEach(d => d.classList.remove('active'));
            // Add active class to clicked dot
            this.classList.add('active');
            
            // Update current slide
            currentSlide = index;
            
            // You would update the content here based on the slide index
            // For demo purposes, just change some text
            const heading = document.querySelector('#brands-section h2');
            if (heading) {
                const titles = [
                    "Leading <span class='highlight'>Affiliate</span> Partners",
                    "Growing <span class='highlight'>Network</span> of Partners",
                    "Trusted by <span class='highlight'>Affiliate</span> 100s of Brand Worldwide"
                ];
                
                heading.innerHTML = titles[currentSlide];
            }
        });
    });
}

// Call the brands pagination initialization
initBrandsPagination();
