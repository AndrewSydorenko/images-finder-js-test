import '../css/styles.css';
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import { GetGallery } from "./api/GetGallery";
import { GalleryMarkup } from "./markup/markCountries";

const inputEl = document.querySelector('.input')

inputEl.addEventListener('input', serchInputHandler)

function serchInputHandler(event) {
    const searchRequest = event.target.value;
    if (!searchRequest) {
        return
    }
    GetGallery(searchRequest)

        .then(data => {
            console.log(data.status);
            if (data.status === 404) {
                Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
                return;
            }
            if (data.length === 1) {
                countryMarkup(data[0], container)
                return;
            } if (data.length > 10) {
                Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
                return;
            }
            GalleryMarkup(data, container)

        }
        )

        .catch(error => container.textContent = error.message);
}