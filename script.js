document.addEventListener('DOMContentLoaded', function() {
    // 1. Inisialisasi AOS (Animate On Scroll)
    AOS.init({
        duration: 800, // Durasi animasi (ms)
        once: true,    // Hanya animasikan sekali saat elemen muncul
        mirror: false  // Animasi hanya saat scroll ke bawah
    });

    // 2. Efek Ketik (Typing Effect)
    const typingElement = document.getElementById('typing-effect');
    const textToType = "Halo, Saya Viona Kusapy !"; 
    let i = 0;
    let deleting = false;
    let delay = 100; // Waktu tunggu antar karakter (ms)

    function typeWriter() {
        if (!deleting && i < textToType.length) {
            typingElement.innerHTML += textToType.charAt(i);
            i++;
            delay = 100; // Kecepatan mengetik
        } else if (deleting && i > 0) {
            typingElement.innerHTML = textToType.substring(0, i - 1);
            i--;
            delay = 50; // Kecepatan menghapus
        } else if (i === textToType.length) {
            deleting = true;
            delay = 2000; // Jeda sebelum mulai menghapus
        } else if (i === 0) {
            deleting = false;
            delay = 500; // Jeda sebelum mulai mengetik lagi
        }
        setTimeout(typeWriter, delay);
    }

    // Hanya jalankan efek ketik jika elemen ada
    if (typingElement) {
        typeWriter();
    }

    // 3. Smooth Scroll untuk Navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Mencegah perilaku default tautan

            const targetId = this.getAttribute('href');
            // Dapatkan elemen target
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Hitung posisi scroll dengan offset untuk navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - 20; // Tambah offset 20px agar tidak terlalu mepet

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth' // Membuat scroll menjadi halus
                });

                // Opsional: Tutup navbar collapse di perangkat mobile setelah klik
                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            }
        });
    });

    // Animasi Progress Bar saat masuk ke viewport (opsional, jika ingin lebih dinamis)
    // const progressBars = document.querySelectorAll('.progress-bar-custom');

    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             const bar = entry.target;
    //             const width = bar.getAttribute('aria-valuenow');
    //             bar.style.width = width + '%';
    //             observer.unobserve(bar); // Hentikan observasi setelah dianimasikan
    //         }
    //     });
    // }, {
    //     threshold: 0.8 // Saat 80% dari elemen terlihat
    // });

    // progressBars.forEach(bar => {
    //     observer.observe(bar);
    // });
});

const video = document.getElementById('backgroundVideo');
video.volume = 0.5;  // Set volume 50%
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('backgroundVideo');
    document.body.addEventListener('click', () => {
        video.muted = false;
        video.play();
    });
});
