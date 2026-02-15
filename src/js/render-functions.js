import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;

export function createGallery(images) {
   
const gallery = document.querySelector('ul.gallery');

    const markup = images.map(img =>
      `<li class="gallery-item">
        <a class="gallery-link" href="${img.largeImageURL}">
          <img class="gallery-image" src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
        </a>
      </li>`
    ).join('');
    
   
    gallery.innerHTML = markup;
    if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  }
lightbox.refresh();

}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  if (gallery) {
    gallery.innerHTML = '';
  }
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.remove('is-hidden');
  }
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('is-hidden');
  }
}

