import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://127.0.0.1:55000/',
    timeout: 0
});

