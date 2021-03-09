import images from "../js/gallery-items.js";
import {variables} from "../js/variables.js";

variables.selectedByIdGalleryEl.insertAdjacentHTML("beforeend", createsListOfImg(images));

function createsListOfImg(images) {
  return images
    .map(
      (imag) => `<li class="gallery__item">
<a
  class="gallery__link"
  href="${imag.original}"
>
  <img
    class="gallery__image"
    src="${imag.preview}"
    data-source="${imag.original}"
    alt="${imag.description}"
  />
</a>
</li>`
    )
    .join("");
}

