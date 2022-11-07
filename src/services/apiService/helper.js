import Axios from 'axios';

export function createAxiosInstance() {
    const axios = Axios.create();

    axios.defaults.baseURL = process.env.VUE_APP_API_URL;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('Token')}`;
    axios.defaults.timeout = process.env.VUE_APP_API_TIMEOUT;

    return axios;
}