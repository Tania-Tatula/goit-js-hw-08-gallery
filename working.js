import images from "./gallery-items.js";

const selectedByIdGalleryEl = document.querySelector(".js-gallery");
const openModal = document.querySelector(".js-lightbox");
const closeModalBtn = document.querySelector(".lightbox__button");
const bigImg = document.querySelector(".lightbox__content");
const overlayEl = document.querySelector(".lightbox__overlay");
const imgOflitebox = document.querySelector(".lightbox__image");
const imgGallery = document.querySelector(".gallery__image");

selectedByIdGalleryEl.insertAdjacentHTML("beforeend", createsListOfImg(images));

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

selectedByIdGalleryEl.addEventListener("click", onOpenBigImages);
closeModalBtn.addEventListener("click", onCloseBigImages);
overlayEl.addEventListener("click", onBackdropClick);

function onOpenBigImages(evt) {
  window.addEventListener("keydown", onEscKeyPress);
  window.addEventListener("keydown", onFlipsImage);

  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  openModal.classList.add("is-open");

  const imgAlt = evt.target.getAttribute("alt");
  const imgBigSrc = evt.target.dataset.source;

  if (openModal.closest(".is-open")) {
    imgOflitebox.alt = imgAlt;
    imgOflitebox.src = imgBigSrc;
  }
}

function onCloseBigImages() {
  window.removeEventListener("keydown", onEscKeyPress);
  window.removeEventListener("keydown", onFlipsImage);
  openModal.classList.remove("is-open");
  imgOflitebox.alt = "";
  imgOflitebox.src = "";
}

function onBackdropClick(evt) {
  if (evt.target === evt.currentTarget) {
    onCloseBigImages();
  }
}

function onEscKeyPress(evt) {
  const ESC_KEY_CODE = "Escape";

  if (evt.code === ESC_KEY_CODE) {
    onCloseBigImages();
  }
}

function onFlipsImage(evt) {
  const IMAGE_FORWARD_CODE = "ArrowRight";
  const IMAGE_BACK_CODE = "ArrowLeft";
  console.log(evt);

  if (evt.code === IMAGE_BACK_CODE) {
    let backEl =
      evt.target.parentNode.previousSibling.firstElementChild.firstElementChild;
    const imgAlt = backEl.getAttribute("alt");
    const imgBigSrc = backEl.dataset.source;

    imgOflitebox.alt = imgAlt;
    imgOflitebox.src = imgBigSrc;

    console.log(backEl);
  }

  if (evt.code === IMAGE_FORWARD_CODE) {
    let backEl =
      evt.target.parentNode.nextElementSibling.firstElementChild
        .firstElementChild;

    const imgAlt = backEl.getAttribute("alt");
    const imgBigSrc = backEl.dataset.source;

    imgOflitebox.alt = imgAlt;
    imgOflitebox.src = imgBigSrc;
    return backEl.parentNode;
  }
}
