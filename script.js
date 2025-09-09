document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Search Pane
 const searchIcon = document.querySelector('.search-icon');
 const searchPane = document.getElementById('searchPane');
 const closeSearch = document.querySelector('.close-search');

 searchIcon.addEventListener('click', () => {
     searchPane.classList.add('active');
 });
 closeSearch.addEventListener('click', () => {
     searchPane.classList.remove('active');
 });

 // Map Initialization
 const map = L.map('map').setView([51.505, -0.09], 13);
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '© OpenStreetMap contributors'
 }).addTo(map);
 L.marker([51.5, -0.09]).addTo(map)
     .bindPopup('VAL-Construction')
     .openPopup();

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });


    // video section
    const videoItems = document.querySelectorAll('.video-item');

videoItems.forEach(item => {
    const video = item.querySelector('.video-player');
    const playButton = item.querySelector('.play-button');

    // Show play button if video is paused
    video.addEventListener('pause', () => {
        playButton.style.opacity = '1';
    });

    // Hide play button if video is playing
    video.addEventListener('play', () => {
        playButton.style.opacity = '0';
    });

    // Toggle play/pause on play button click
    playButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});


    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Scroll animations
    const elements = document.querySelectorAll('.service-card, .portfolio-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });

    // Add animation classes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .fade-in {
            animation: fadeIn 0.6s ease-out forwards;
        }
        .service-card, .portfolio-item {
            opacity: 0;
        }
    `;
    document.head.appendChild(style);
});
