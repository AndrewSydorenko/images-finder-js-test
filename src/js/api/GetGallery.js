import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const inputEl = document.querySelector('.input')

const key = '3982359-4f0751044cce2a32843cdd214'

export const GetGallery = (params) => {
    const data = await.axios.get(`${BASE_URL}?key=${key}&q&image_type&orientation&safesearch`)
        .then(response => {

            return response.json();
        })
}