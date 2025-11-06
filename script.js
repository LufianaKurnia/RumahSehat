// 1. Interaktivitas Menu Burger
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
    // Toggle kelas 'active' pada menu
    navMenu.classList.toggle('active');

    // Ganti ikon burger (bars <-> X)
    const icon = burger.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// 2. Efek Fade-in on Scroll (Intersection Observer API)

// Pilih semua elemen yang ingin dianimasikan
const hiddenElements = document.querySelectorAll('.hidden-element');

// Buat observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Jika elemen terlihat di layar
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        // Opsional: hapus 'show' jika ingin animasi berulang saat scroll ke atas
        // else {
        //     entry.target.classList.remove('show');
        // }
    });
}, {
    threshold: 0.1 // Muncul saat 10% elemen terlihat
});

// Terapkan observer ke setiap elemen
hiddenElements.forEach((el) => observer.observe(el));