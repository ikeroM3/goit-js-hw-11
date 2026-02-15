import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';



export function AddGallery(images) {
    const gallery = document.querySelector('.gallery');
    const markup = images.map(({largeImageURL, webformatURL, tags}) => {
        return `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
      </li>`;
    }).join('');
    gallery.insertAdjacentHTML('beforeend', markup);
    const lightbox = new SimpleLightbox('.gallery a');
lightbox.refresh();
}
