import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

// перебираємо масив галлері айтемс та створюємо список розмітки галереї зображень з використанням шаблонних рядків
const galleryItemsHTML = galleryItems.map(item => 
    ` <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"/>
    </a>
  </li>`).join('');
  
//  з використанням методу insertAdjacentHTML - прописуємо створену розмітку в HTML документ
gallery.insertAdjacentHTML('beforeend', galleryItemsHTML);

// створюємо функцію для роботи з нашим зображенням - поміщення більшого варіанту в подальне вікно basicLightbox
// при цьому блокуємо налаштування за замовчуванням та унеможливлюємо еагування поза межами тегу з зображенням
function modal(evt) {
    evt.preventDefault();
  
    if (evt.target.tagName !== 'IMG') {
      return;
    }
  
    const modal = basicLightbox.create(`<img src="${evt.target.dataset.source}">`);
  
    modal.show();
//   закриваємо модальне вікно через натискання ескейп
    function closeOnEscape(escape) {
      if (escape.key === 'Escape') {
        modal.close();
  
        window.removeEventListener('keydown', closeOnEscape);
      }
    }
  
    window.addEventListener('keydown', closeOnEscape);
  }
// додаємо прослуховувача подій на наше спливаюче вікно при кліку на зображення в документі розмітки
gallery.addEventListener('click', modal);






