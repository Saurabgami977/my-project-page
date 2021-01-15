import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://saurab-gami-projects-default-rtdb.firebaseio.com/'
})

export default instance;