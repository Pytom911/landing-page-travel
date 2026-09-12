document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = mobileMenuBtn.querySelector('i');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Ubah icon hamburger ke X saat menu terbuka
        if (navLinks.classList.contains('active')) {
            menuIcon.classList.remove('bi-list');
            menuIcon.classList.add('bi-x-lg');
        } else {
            menuIcon.classList.remove('bi-x-lg');
            menuIcon.classList.add('bi-list');
        }
    });

    // Tutup menu mobile ketika salah satu link diklik
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuIcon.classList.remove('bi-x-lg');
                menuIcon.classList.add('bi-list');
            }
        });
    });

    // 2. Navbar Scroll Effect (Tambahkan border bottom halus saat di-scroll)
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });
});