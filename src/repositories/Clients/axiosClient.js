import * as axios from 'axios';
//import { API } from './config';

const baseURL = `http://moviesapi.kubilaybayraktar.com/`;

export default axios.create({
    baseURL,
    headers: {
        // "Authorization": "Bearer xxxxx"
    },
});
