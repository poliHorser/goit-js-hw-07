import { galleryItems } from './gallery-items.js';
// Change code below this line

const listEl = document.querySelector(".gallery")
const markUp = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
}).join("")

listEl.insertAdjacentHTML("beforeend", markUp)

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true, // Поправлено опцію на "captions"
  captionDelay: 250,
  fadeSpeed: 250,
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
});

