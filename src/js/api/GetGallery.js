import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const key = '33982359-4f0751044cce2a32843cdd214'


export async function GetImages(serchQuery, page) {
    const response = await axios.get(`?key=${key}&q=${serchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`);
    return response.data

};

