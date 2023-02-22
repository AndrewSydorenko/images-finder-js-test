import '../css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from "./api/fetchCountries";
import { countriesMarkup, countryMarkup } from "./markup/markCountries";

const container = document.querySelector('.country-info')
const finder = document.querySelector('#search-box')

const DEBOUNCE_DELAY = 300;

finder.addEventListener('input', debounce(serchInputHandler, DEBOUNCE_DELAY))

function serchInputHandler(event) {
    const searchRequest = event.target.value;
    if (!searchRequest) {
        return
    }
    fetchCountries(searchRequest)

        .then(data => {
            console.log(data.status);
            if (data.status === 404) {
                Notiflix.Notify.failure("Oops, there is no country with that name");
                return;
            }
            if (data.length === 1) {
                countryMarkup(data[0], container)
                return;
            } if (data.length > 10) {
                Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
                return;
            }
            countriesMarkup(data, container)

        }
        )

        .catch(error => container.textContent = error.message);
}