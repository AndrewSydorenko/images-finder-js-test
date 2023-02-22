const BASE_URL = 'https://restcountries.com/v2/';

export const fetchCountries = (countryName) => {
    return fetch(`${BASE_URL}/name/${countryName}?fields=name,flags,capital,population,languages`)
        .then(response => {

            return response.json();
        })
}