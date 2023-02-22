export const countriesMarkup = (data, element) => {
    const markup = data.map(el => `
    <h3><img src = '${el.flags.svg}' width = '60px' height = '40px'/> ${el.name}</h3>
    `).join('');

    element.innerHTML = '';
    element.insertAdjacentHTML('beforeend', markup);
}

export const countryMarkup = (data, element) => {
    const markup = `
    <div>
    
    <h2><img src = '${data.flags.svg}' width = '60px' height = '40px'/> ${data.name}</h2>
    <p>Capital: <span>${data.capital}</span></p>
    <p>Population: <span>${data.population}</span></p>
    <p>Languages: <span>${data.languages.map(({ name }) => name).join(', ')}</span></p></div>`;

    element.innerHTML = '';
    element.insertAdjacentHTML('beforeend', markup);
}