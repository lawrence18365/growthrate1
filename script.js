document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('header nav');

    mobileMenuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu after clicking a link
            nav.classList.remove('active');
        });
    });

    // Adjust scroll padding for fixed header
    const header = document.querySelector('header');
    document.documentElement.style.setProperty('--scroll-padding', header.offsetHeight + 'px');
});
