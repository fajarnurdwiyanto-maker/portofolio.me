// Remove Entrance after 3 seconds
window.addEventListener('load', () => {
    setTimeout(() => {
        const entrance = document.getElementById('entrance');
        entrance.style.opacity = '0';
        setTimeout(() => {
            entrance.style.display = 'none';
        }, 1000);
    }, 2500);
});

// Polling Logic
function vote(option) {
    const resultDiv = document.getElementById('poll-result');
    resultDiv.innerHTML = `<p style="color: #d4af37; margin-top: 20px;">Thanks! Lo milih: <strong>${option}</strong>. Suara lo sangat berarti buat Fajar!</p>`;
}

// Simple Form Alert
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Pesan lo udah terkirim ke sistem Fajar! Thank you, Bree!');
});