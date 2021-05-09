import client from './Clients/axiosClient';
import { parseList, parseItem } from './helpers/parseHelper';

const resource = '/genres';

export default {
    async get() {
        return parseList(await client.get(`${resource}`));
    },
    async getMovie(id) {
        return parseItem(await client.get(`${resource}/${id}`), 200);
    },
    create(payload) {
        return client.post(`${resource}`, payload);
    },
    update(payload, id) {
        return client.put(`${resource}/${id}`, payload);
    },
    delete(id) {
        return client.delete(`${resource}/${id}`);
    },
};
