import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');

// Створюємо галерею
const galleryLigthBoxitems = galleryItems.map((item) =>
    `<li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    </li>`).join('');

    gallery.insertAdjacentHTML('beforeend', galleryLigthBoxitems);

// додаємо лайтбокс одним із методів офіційного сайту
const lightbox = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.9,
  captionsData: 'alt',
  captionDelay: 250,
  preloading: true,
  animationSpeed: 250,
  fadeSpeed: 300,
});
