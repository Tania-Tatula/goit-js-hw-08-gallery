import images from './gallery-items.js';

const selectedByIdGalleryEl = document.querySelector('.js-gallery');
selectedByIdGalleryEl.insertAdjacentHTML('beforeend', createsListOfImg(images));



function createsListOfImg (images) {
// const liItems = images.reduce((imegeList, imag) => imegeList + `<li class="gallery__item">
// <a
//   class="gallery__link"
//   href="${imag.original}"
// >
//   <img
//     class="gallery__image"
//     src="${imag.preview}"
//     data-source="${imag.original}"
//     alt="${imag.description}"
//   />
// </a>
// </li>`, '');
return images.map(imag => `<li class="gallery__item">
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
</li>`).join('');

};
