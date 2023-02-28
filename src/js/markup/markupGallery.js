import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.photo-card a');

export const GalleryMarkup = (data) => {
  const images = data.hits
  const markup = images.map(img => `
    <div class="photo-card">
      <a href="${img.largeImageURL}"><img src="${img.webformatURL}" alt="${img.tags}" loading="lazy"/>
      <div class="info">
        <p class="info-item">
          <b>Likes: <br>${img.likes}</b>
        </p>
        <p class="info-item">
          <b>Views: <br>${img.views}</b>
        </p>
        <p class="info-item">
          <b>Comments: <br>${img.comments}</b>
        </p>
        <p class="info-item">
          <b>Downloads: <br>${img.downloads}</b>
        </p>
      </div>
    </a>
  </div>`).join('');
  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function galleryClear() {
  galleryEl.innerHTML = '';

}
