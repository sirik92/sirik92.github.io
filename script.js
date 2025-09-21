document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode Toggle
    const darkModeCheck = document.getElementById('darkModeCheck');
    const body = document.body;
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        if (darkModeCheck) darkModeCheck.checked = true;
    }
    if (darkModeCheck) {
        darkModeCheck.addEventListener('change', () => {
            if (darkModeCheck.checked) {
                body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'enabled');
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    if (hamburger) hamburger.classList.remove('active');
                }
            }
        });
    });

    // Back to Top
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Hide navbar on scroll (Mobile Only)
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            // Only apply auto-hide on mobile (≤ 768px)
            if (window.innerWidth <= 768) {
                const currentScroll = window.pageYOffset;
                if (currentScroll <= 0) {
                    navbar.classList.remove('hide');
                    return;
                }
                if (currentScroll > lastScroll && !navbar.classList.contains('hide')) {
                    navbar.classList.add('hide');
                } else if (currentScroll < lastScroll && navbar.classList.contains('hide')) {
                    navbar.classList.remove('hide');
                }
                lastScroll = currentScroll;
            }
        });
    }
});
