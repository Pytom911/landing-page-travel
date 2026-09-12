document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Sidebar Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.getElementById('nav-overlay');
    const menuIcon = mobileMenuBtn.querySelector('i');

    const setMenuState = (open) => {
        navLinks.classList.toggle('active', open);
        navOverlay.classList.toggle('active', open);
        document.body.style.overflow = open ? 'hidden' : '';

        if (open) {
            menuIcon.classList.remove('bi-list');
            menuIcon.classList.add('bi-x-lg');
        } else {
            menuIcon.classList.remove('bi-x-lg');
            menuIcon.classList.add('bi-list');
        }
    };

    mobileMenuBtn.addEventListener('click', () => {
        setMenuState(!navLinks.classList.contains('active'));
    });

    // Tutup sidebar ketika salah satu link diklik
    document.querySelectorAll('.nav-links a').forEach(item => {
        item.addEventListener('click', () => setMenuState(false));
    });

    // Tutup sidebar ketika overlay diklik
    navOverlay.addEventListener('click', () => setMenuState(false));

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