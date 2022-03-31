import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apitestmyapp.herokuapp.com/'
});

export default api;
