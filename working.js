import images from './gallery-items.js';

const selectedByIdGalleryEl = document.querySelector('.js-gallery');
const openModal = document.querySelector('.js-lightbox');
const closeModalBtn = document.querySelector('.lightbox__button');
const bigImg = document.querySelector('.lightbox__content');
const overlayEl = document.querySelector('.lightbox__overlay');
const imgOflitebox = document.querySelector('.lightbox__image');
const imgGallery = document.querySelector('.gallery__image')

selectedByIdGalleryEl.insertAdjacentHTML('beforeend', createsListOfImg(images));

function createsListOfImg (images) {
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

selectedByIdGalleryEl.addEventListener('click', onOpenBigImages);
closeModalBtn.addEventListener('click', onCloseBigImages);
overlayEl.addEventListener('click', onCloseBigImages);

function onOpenBigImages(evt) {
  evt.preventDefault();

  if(!evt.target.classList.contains('gallery__image')){
    return;
  }
  openModal.classList.add('is-open');


  const imgAlt = evt.target.getAttribute("alt");
  const imgBigSrc = evt.target.dataset.source;
  
  


  openModal.classList.add('is-open');
  

  if(openModal.closest('.is-open')){
    imgOflitebox.alt = imgAlt;
    imgOflitebox.src = imgBigSrc;
  }  
}



function onCloseBigImages(evt) { 
  openModal.classList.remove('is-open');
  imgOflitebox.alt = '';
  imgOflitebox.src = '';
}


