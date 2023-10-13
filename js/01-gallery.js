import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const gallery = document.querySelector(".gallery")
const item = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link"  href="${original}">
        <img
        loading="lazy"
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
}).join("");
gallery.insertAdjacentHTML("beforeend", item)
gallery.addEventListener("click", imageClick)
function onImageClick(event) {
     event.preventDefault();
     const target = event.target;
     if (target.classList.contains('gallery__image')) {
         const originalImageUrl = target.dataset.source;
         modal = basicLightbox.create(`
         <img src="${originalImageUrl}" width="800" height="600">
         `);
         modal.show();
         modalIsOpen = true;
     }
     document.addEventListener('keydown', keyDown);
 }
