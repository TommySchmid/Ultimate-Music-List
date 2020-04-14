import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ultimate-music-list.firebaseio.com/'
});

export default instance;