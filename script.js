document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode Toggle
    const darkModeCheck = document.getElementById('darkModeCheck');
    const body = document.body;
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeCheck.checked = true;
    }
    darkModeCheck.addEventListener('change', () => {
        if (darkModeCheck.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Portfolio Pane
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const portfolioPane = document.getElementById('portfolioPane');
    const closePane = document.querySelector('.close-pane');
    const paneTitle = document.getElementById('paneTitle');
    const paneDescription = document.getElementById('paneDescription');
    const paneImage = document.getElementById('paneImage');
    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.getAttribute('data-title');
            const description = item.getAttribute('data-description');
            const image = item.querySelector('img').src;
            paneTitle.textContent = title;
            paneDescription.textContent = description;
            paneImage.src = image;
            portfolioPane.classList.add('active');
        });
    });
    closePane.addEventListener('click', () => {
        portfolioPane.classList.remove('active');
    });

    // Back to Top
    const backToTop = document.getElementById('backToTop');
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

    // Close Mobile Menu
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});

// Hide navbar on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
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
});
