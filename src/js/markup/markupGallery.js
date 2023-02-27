
export const GalleryMarkup = (data, img) => {
  const images = data.hits
  const markup = images.map(img => `
    <div class="photo-card">
  <img src="${img.previewURL}" alt="" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes${img.likes}</b>
    </p>
    <p class="info-item">
      <b>Views${img.views}</b>
    </p>
    <p class="info-item">
      <b>Comments${img.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads${img.downloads}</b>
    </p>
  </div>
</div>`).join();

  element.innerHTML = '';
  element.insertAdjacentHTML('beforeend', markup);
}
