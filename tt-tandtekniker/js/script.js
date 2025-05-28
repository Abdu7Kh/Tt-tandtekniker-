// js/script.js

// This script handles mobile menu toggling (if present) and loading additional gallery images.
document.addEventListener('DOMContentLoaded', function() {
  // --- Mobile menu toggle (optional) ---
  const menuBtn = document.getElementById('mobile-menu-toggle');
  const mainNav = document.getElementById('mainNav');
  const dropdowns = mainNav ? mainNav.querySelectorAll('.dropdown') : [];

  // Toggle mobile menu
  if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', () => {
      document.body.classList.toggle('mobile-menu-open');
      const open = document.body.classList.contains('mobile-menu-open');
      menuBtn.classList.toggle('is-active');
      menuBtn.setAttribute('aria-expanded', open);
      if (!open) closeAllDropdowns();
    });
  }

  // Handle dropdown click (mobile & desktop)
  dropdowns.forEach(dd => {
    const link = dd.querySelector('a');
    if (!link) return;
    link.addEventListener('click', e => {
      e.preventDefault();
      closeOther(dd);
      dd.classList.toggle('open');
    });
  });

  // Close menu if click outside header
  document.addEventListener('click', e => {
    if (document.body.classList.contains('mobile-menu-open') &&
        !e.target.closest('.main-header')) {
      document.body.classList.remove('mobile-menu-open');
      if (menuBtn) {
        menuBtn.classList.remove('is-active');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
      closeAllDropdowns();
    }
  });

  function closeOther(current) {
    dropdowns.forEach(d => {
      if (d !== current) d.classList.remove('open');
    });
  }
  function closeAllDropdowns() {
    dropdowns.forEach(d => d.classList.remove('open'));
  }

  // --- Load more gallery images ---
  const loadMoreBtn = document.getElementById('load-more');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      const galleryRow = document.querySelector('.gallery-row');
      if (!galleryRow) return;

      // List of WhatsApp images to load
      const imageFilenames = [
        'WhatsApp Image 2025-05-24 at 11.34.31_2dbaa957.jpg',
        'WhatsApp Image 2025-05-24 at 11.34.31_8b4704cd.jpg',
        'WhatsApp Image 2025-05-24 at 11.34.31_fc177e7b.jpg',
        'WhatsApp Image 2025-05-24 at 11.35.12_08e9e41f.jpg',
        'WhatsApp Image 2025-05-24 at 11.35.14_2cefb9f1.jpg',
        'WhatsApp Image 2025-05-24 at 11.35.14_59e56b5c.jpg',
        'WhatsApp Image 2025-05-24 at 11.35.37_8b9b0315.jpg',
        'WhatsApp Image 2025-05-24 at 11.35.37_9e9bad64.jpg',
        'WhatsApp Image 2025-05-24 at 11.35.37_63a2784c.jpg',
        'WhatsApp Image 2025-05-24 at 11.35.37_517abf9b.jpg',
        'WhatsApp Image 2025-05-24 at 11.35.37_ede85c56.jpg',
        'WhatsApp Image 2025-05-24 at 11.35.38_3e428c2f.jpg',
        'WhatsApp Image 2025-05-24 at 11.36.25_38b1ae47.jpg',
        'WhatsApp Image 2025-05-24 at 11.36.25_8167dac1.jpg',
        'WhatsApp Image 2025-05-24 at 11.36.25_a75f4659.jpg',
        'WhatsApp Image 2025-05-24 at 11.36.25_ed89dcc5.jpg',
        'WhatsApp Image 2025-05-24 at 11.36.52_4dd4807d.jpg',
        'WhatsApp Image 2025-05-24 at 11.36.52_9fc6fd5e.jpg',
        'WhatsApp Image 2025-05-24 at 11.36.52_1343890f.jpg',
        'WhatsApp Image 2025-05-24 at 11.37.14_22ebfb17.jpg',
        'WhatsApp Image 2025-05-24 at 11.37.15_7b3d5e10.jpg',
        'WhatsApp Image 2025-05-24 at 11.37.15_68f586c2.jpg'
      ];

      imageFilenames.forEach((filename, index) => {
        const col = document.createElement('div');
        col.className = 'col-6 col-md-3';
        col.setAttribute('data-aos', 'fade-up');
        col.setAttribute('data-aos-delay', String(100 * (index + 5))); // incremental delay

        const img = document.createElement('img');
        img.src = `assets/images/${filename}`;
        img.alt = `Galleri Bild extra ${index + 1}`;
        img.className = 'img-fluid rounded shadow-sm';

        col.appendChild(img);
        galleryRow.appendChild(col);
      });

      // Hide the button after loading
      loadMoreBtn.style.display = 'none';
    });
  }
});
