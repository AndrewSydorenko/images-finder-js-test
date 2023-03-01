import '../css/styles.css';
import Notiflix from 'notiflix';
import { GetImages } from "./api/GetGallery";
import { GalleryMarkup, galleryClear } from "./markup/markupGallery";
import { throttle } from 'lodash';

const serchForm = document.querySelector('.search-form')
const loadMoreBtn = document.querySelector('.load-more')

serchForm.addEventListener('submit', serchInputHandler)
loadMoreBtn.addEventListener('click', loadMoreHandler)


function showButton() {
    loadMoreBtn.style.display = "flex";
    loadMoreBtn.disabled = false;
}

function hibeButton() {
    loadMoreBtn.style.display = "none";
    loadMoreBtn.disabled = true;
}
hibeButton()

let page = 1;
let searchRequest = '';

async function serchInputHandler(event) {
    event.preventDefault();
    hibeButton()
    searchRequest = event.target.searchQuery.value.trim();
    if (!searchRequest) {
        return
    }
    page = 1;
    const data = await GetImages(searchRequest, page)
    galleryClear()
    if (data.hits.length > 0) {
        Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
    }
    if (data.hits.length === 0) {
        Notiflix.Notify.failure(`Sorry, there are no images matching your search query. Please try again.`);
        return
    }
    showButton()
    GalleryMarkup(data)
    event.target.reset()
}
async function loadMoreHandler(event) {
    hibeButton()
    page += 1;
    const data = await GetImages(searchRequest, page)
    GalleryMarkup(data)
    if (pageCheck(data.totalHits)) {
        Notiflix.Notify.info("We're sorry, but you've reached the end of search results.")
        event.target.disabled = true;
    } else {
        showButton()
    }

}

function pageCheck(totalHits) {
    const allPages = Math.ceil(totalHits / 40);
    return allPages === page;
}

