document.addEventListener('DOMContentLoaded', () => {
    /* =========================================
       MOBİL MENÜ İŞLEVİ
    ========================================= */
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    const navClose = document.getElementById('navClose');
    const navLinks = document.querySelectorAll('.nav-link');

    // Menüyü Aç
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show');
        });
    }

    // Menüyü Kapat (X butonu ile)
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    }

    // Menüyü Kapat (Linke tıklanınca)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });

    /* =========================================
       SCROLL NAVBAR EFEKTİ
    ========================================= */
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        // Sayfa 50px'den fazla kaydırılırsa 'scrolled' sınıfını ekle
        if (window.scrollY >= 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* =========================================
       GLITCH EFEKTİ İÇİN RASTGELELİK (Opsiyonel)
    ========================================= */
    // Glitch efektinin daha doğal durması için animasyon sürelerini rastgele değiştirir.
    const glitchText = document.querySelector('.glitch');
    if (glitchText) {
        setInterval(() => {
            const duration = Math.random() * (3 - 2) + 2; // 2 ile 3 saniye arası
            glitchText.style.setProperty('--after-duration', `${duration}s`);
            glitchText.style.setProperty('--before-duration', `${duration + 0.5}s`);
        }, 1000);
    }
});