import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-cf751.firebaseio.com/'
})

export default instance;