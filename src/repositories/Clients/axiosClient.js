import * as axios from 'axios';
import { API } from './config';

const baseURL = `${API}`;

export default axios.create({
    baseURL,
    headers: {
        // "Authorization": "Bearer xxxxx"
    },
});
