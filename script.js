// 1. Entrance Logic
window.addEventListener('load', function() {
    setTimeout(function() {
        const entrance = document.getElementById('entrance');
        entrance.style.opacity = '0';
        setTimeout(() => {
            entrance.style.visibility = 'hidden';
        }, 1000); // Tunggu transisi opacity selesai
    }, 1500); // Tahan entrance selama 1.5 detik
});

// 2. Data Benefit untuk Modal
const serviceData = {
    tugas: {
        basic: {
            title: "Tugas Pelajaran - Basic",
            benefits: ["Pencarian referensi/jurnal yang valid", "Pengetikan rapi format standar kampus", "Revisi minor 1x", "Kenapa pilih ini? Cocok buat lu yang lagi mepet deadline tapi butuh hasil rapi."]
        },
        menengah: {
            title: "Tugas Pelajaran - Menengah",
            benefits: ["Semua fitur Basic", "Desain PPT estetik & interaktif", "Cek Turnitin (Plagiasi)", "Revisi 2x", "Kenapa pilih ini? Bikin dosen/guru lu terkesima waktu presentasi."]
        },
        premium: {
            title: "Tugas Pelajaran - Premium",
            benefits: ["Konsultasi intensif", "Pengerjaan Bab per Bab terstruktur", "Bebas Revisi", "Kenapa pilih ini? Lu terima beres, tinggal fokus siapin mental sidang."]
        }
    },
    desain: {
        basic: {
            title: "Desain Konten - Basic",
            benefits: ["1 Desain resolusi tinggi", "Format JPG/PNG/PDF", "Kenapa pilih ini? Solusi cepat buat sekadar update sosmed biar tetep aktif."]
        },
        menengah: {
            title: "Desain Konten - Menengah",
            benefits: ["Carousel 5 slide nyambung", "Riset elemen visual", "Kenapa pilih ini? Bikin audiens betah nge-swipe konten lu sampe abis."]
        },
        premium: {
            title: "Desain Konten - Premium",
            benefits: ["15 Desain selama sebulan", "Konsep grid rapi", "Free animasi ringan", "Kenapa pilih ini? Serahin urusan visual brand lu sepenuhnya ke gua."]
        }
    },
    copy: {
        basic: {
            title: "Copywriting - Basic",
            benefits: ["Caption pendek max 150 kata", "Hashtag tertarget", "Kenapa pilih ini? Kata-kata persuasif bikin audiens langsung klik 'Like'."]
        },
        menengah: {
            title: "Copywriting - Menengah",
            benefits: ["Script durasi 1 menit", "Hook & Call to Action kuat", "Kenapa pilih ini? Rahasia FYP ada di penulisan naskah yang bikin orang gak skip."]
        },
        premium: {
            title: "Copywriting - Premium",
            benefits: ["Landing/Sales page panjang", "SEO Friendly", "Kenapa pilih ini? Konversi jualan lu dijamin ningkat pakai teknik tulisan hipnotis."]
        }
    }
};

// 3. Modal Logic
const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");

function openModal(category, tier) {
    const data = serviceData[category][tier];
    modalTitle.innerText = data.title;
    
    // Generate List Benefit
    let listHTML = "<ul>";
    data.benefits.forEach(point => {
        listHTML += `<li><i class="fas fa-star"></i> ${point}</li>`;
    });
    listHTML += "</ul>";
    
    modalBody.innerHTML = listHTML;

    // BIKIN TEKS OTOMATIS WHATSAPP SESUAI PAKET
    const nomorWA = "6281234567890"; // Ganti dengan nomor lu
    const pesanAwal = `Halo Jarrss Studio! Gua tertarik sama paket *${data.title}*. Boleh minta info lebih lanjut atau cara ordernya bree?`;
    
    // encodeURIComponent berfungsi mengubah spasi menjadi format link (%20)
    const linkWA = `https://wa.me/+6289659356276?text=${encodeURIComponent(pesanAwal)}`;
    
    // Cari tombol WA di dalam modal dan ubah link-nya
    const btnModalWA = document.querySelector("#serviceModal .btn-cta");
    btnModalWA.href = linkWA;

    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

// Tutup modal jika klik di luar kotak
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form Submit Alert (Mock)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pesan lu berhasil dikirim bree! Ditunggu balesannya via email ya.');
    this.reset();
});