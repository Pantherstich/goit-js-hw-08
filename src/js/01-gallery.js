import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
gallery.addEventListener("click", handleClick);

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
function handleClick(event) {
      event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
    const original = event.target.dataset.source;
    const description = event.target.alt;
    const instance = basicLightbox.create(`<img src="${original}" alt="${description}"/>`,
    {
      onShow: instance => { addEventListener('keydown', closeEscape) },
      onClose: instance => { addEventListener('keydown', closeEscape) }
	}, 
    );
  instance.show();
  // console.log(instance.visible())

  function closeEscape(event) {
    if (event.code === "Escape" && instance.visible()) { instance.close(); }
  // console.log(instance.visible())
}
}
// console.log(instance.visible())