import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageGallery = document.querySelector('.gallery');

function createImageCardMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('')
}

const imageMarkup = createImageCardMarkup(galleryItems);
imageGallery.insertAdjacentHTML('beforeend', imageMarkup);

imageGallery.addEventListener('click', openImageClick);

function openImageClick(evt) {
    evt.prevntDefault();

    const instance = basicLightbox.create(
        `<img src="${evt.target.dataset.source}" width="800" heigth="600">`,
        {
            onShow: () => window.addEventListener("keydown", onEscapeClick),
            onClose: () => window.removeEventListener("keydown", onEscapeClick),
        }
    );
    instance.show();
    function onEscapeClick(evt) {
        if (evt.code === "Escape") {
            instance.close();
        }
       
}
}