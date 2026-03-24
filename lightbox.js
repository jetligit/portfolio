function initLightbox() {
    document.querySelectorAll('.fp-row').forEach(row => {
        row.addEventListener('click', () => {
            const img = row.querySelector('.fp-img');
            document.getElementById('lightbox-img').src = img.src;
            document.getElementById('lightbox').classList.add('active');
        });
    });

    document.getElementById('lightbox').addEventListener('click', function(e) {
        if (e.target === this) closeLightbox();
    });
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', initLightbox);