
export const GalleryMarkup = (data, element) => {
  const markup = `
    <div class="photo-card">
  <img src="" alt="" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
    </p>
    <p class="info-item">
      <b>Views</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
</div>`;

  element.innerHTML = '';
  element.insertAdjacentHTML('beforeend', markup);
}
