import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryItemsHTML = galleryItems.map(item => 
    ` <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"/>
    </a>
  </li>`).join('');

gallery.insertAdjacentHTML('beforeend', galleryItemsHTML);

function modal(evt) {
  evt.preventDefault();

  if (evt.target.tagName !== 'IMG') {
    return;
  }
 
  const modal = basicLightbox.create(`<img src="${evt.target.dataset.source}">`);

  modal.show();
}

gallery.addEventListener('click', modal);



