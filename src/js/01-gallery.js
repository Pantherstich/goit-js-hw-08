// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
// gallery.addEventListener("click", handleClick);

function createMarkup(arr) {
    return arr.map(
        ({ preview, original, description }) =>  `
        <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join(""); 
}
gallery.style.listStyleType = "none";
const lightbox = new SimpleLightbox('.gallery a',{captionData: 'alt', captionDelay: 250});