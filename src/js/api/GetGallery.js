import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

const key = '3982359-4f0751044cce2a32843cdd214'

export const GetGallery = (query) => {
    const { data } = await.axios.get(`${BASE_URL}?key=${key}&${query}&image_type&orientation&safesearch`)
        .then(response => {

            data.hits.json();
            console.log(data.hits);
        })
}