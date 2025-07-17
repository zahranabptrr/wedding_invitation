// Audio Player Controls
const audio = document.getElementById('bgMusic');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.querySelector('.play-icon');
const pauseIcon = document.querySelector('.pause-icon');

// Auto-play music (with user interaction)
document.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
    }
}, { once: true });

playPauseBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
    } else {
        audio.pause();
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
    }
});

// Countdown Timer
function updateCountdown() {
    const weddingDate = new Date('August 8, 2025 18:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Smooth Scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Navigation active state
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Gallery Images (placeholder images if no images in folder)
const galleryImages = [
    'https://via.placeholder.com/400x300/f5e6d3/8B4513?text=Photo+1',
    'https://via.placeholder.com/400x300/f5e6d3/8B4513?text=Photo+2',
    'https://via.placeholder.com/400x300/f5e6d3/8B4513?text=Photo+3',
    'https://via.placeholder.com/400x300/f5e6d3/8B4513?text=Photo+4',
    'https://via.placeholder.com/400x300/f5e6d3/8B4513?text=Photo+5',
    'https://via.placeholder.com/400x300/f5e6d3/8B4513?text=Photo+6'
];

function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (galleryGrid) {
        galleryImages.forEach(imageSrc => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = 'Wedding Photo';
            img.loading = 'lazy';
            
            galleryItem.appendChild(img);
            galleryGrid.appendChild(galleryItem);
        });
    }
}

// Load gallery when page loads
document.addEventListener('DOMContentLoaded', loadGallery);

// RSVP Form Handling
const rsvpForm = document.getElementById('rsvpForm');
if (rsvpForm) {
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(rsvpForm);
        const data = {
            nama: formData.get('nama'),
            jumlah: formData.get('jumlah'),
            kehadiran: formData.get('kehadiran'),
            waktu: new Date().toISOString()
        };
        
        // For static site, we'll just show a success message
        // In a real implementation, you'd send this to a server
        alert('Terima kasih! RSVP Anda telah diterima.');
        rsvpForm.reset();
        
        // You could also store in localStorage for demo purposes
        const rsvpData = JSON.parse(localStorage.getItem('rsvpData') || '[]');
        rsvpData.push(data);
        localStorage.setItem('rsvpData', JSON.stringify(rsvpData));
    });
}

// Wish Form Handling
const wishForm = document.getElementById('wishForm');
if (wishForm) {
    wishForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(wishForm);
        const data = {
            nama: formData.get('nama'),
            pesan: formData.get('pesan'),
            waktu: new Date().toISOString()
        };
        
        // For static site, we'll just show a success message
        alert('Terima kasih! Ucapan Anda telah diterima.');
        wishForm.reset();
        
        // Store in localStorage for demo purposes
        const wishData = JSON.parse(localStorage.getItem('wishData') || '[]');
        wishData.push(data);
        localStorage.setItem('wishData', JSON.stringify(wishData));
    });
}

// Copy to Clipboard Function
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Nomor rekening berhasil disalin!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
            fallbackCopyTextToClipboard(text);
        });
    } else {
        fallbackCopyTextToClipboard(text);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        alert('Nomor rekening berhasil disalin!');
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
        alert('Gagal menyalin nomor rekening. Silakan salin manual: ' + text);
    }
    
    document.body.removeChild(textArea);
}

// Add some animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Preload audio
window.addEventListener('load', function() {
    audio.load();
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Set initial body opacity
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease'; 