import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-burger-5fbd7.firebaseio.com/'
});

export default instance;