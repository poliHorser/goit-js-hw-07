import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// Імпортуємо бібліотеку basicLightbox
import * as basicLightbox from 'basiclightbox';

// Масив даних для галереї
const galleryItems = [
    {
        src: 'image1-large.jpg',
        alt: 'Image 1',
        description: 'Description 1',
        thumbnail: 'image1-small.jpg',
        source: 'image1-original.jpg',
        id: '1',
        index: 0,
        visible: false,
        fullScreen: false
    }
  // Додайте інші елементи галереї
  // ...
];

// Отримуємо посилання на елемент ul.gallery
const galleryList = document.querySelector('.gallery');

// Генеруємо розмітку галереї на основі масиву даних
const galleryMarkup = galleryItems.map(item => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.src}">
        <img class="gallery__image" src="${item.thumbnail}" data-source="${item.source}" alt="${item.alt}">
      </a>
    </li>
  `;
}).join('');

// Додаємо розмітку до ul.gallery
galleryList.innerHTML = galleryMarkup;

// Додаємо слухача подій для відкриття модального вікна
galleryList.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName === 'IMG') {
    const source = e.target.dataset.source;
    const instance = basicLightbox.create(
      `<img src="${source}" alt="${e.target.alt}" width="800" height="600">`
    );
    instance.show();
  }
});