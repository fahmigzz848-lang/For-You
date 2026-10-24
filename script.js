// Mengambil elemen DOM
const envelopeBtn = document.getElementById('envelopeBtn');
const letterModal = document.getElementById('letterModal');
const closeBtn = document.getElementById('closeBtn');

// Fungsi untuk membuka surat
function openLetter() {
    letterModal.classList.add('active');
}

// Fungsi untuk menutup surat
function closeLetter() {
    letterModal.classList.remove('active');
}

// Event listener saat amplop diklik
envelopeBtn.addEventListener('click', openLetter);

// Event listener saat tombol close (x) diklik
closeBtn.addEventListener('click', closeLetter);

// Menutup modal secara otomatis jika pengguna mengklik area luar kertas surat
window.addEventListener('click', function(event) {
    if (event.target === letterModal) {
        closeLetter();
    }
});
