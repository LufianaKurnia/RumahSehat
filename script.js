// Mengambil elemen
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

// Menambahkan event listener ke tombol burger
burger.addEventListener('click', () => {
    // Toggle kelas 'active' pada nav-menu
    navMenu.classList.toggle('active');

    // (Opsional) Animasi ikon burger
    // Ganti ikon bars menjadi X
    if (burger.innerHTML === '<i class="fas fa-bars"></i>') {
        burger.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        burger.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// (Opsional) Menutup menu saat link di-klik (untuk Single Page App)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        burger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});