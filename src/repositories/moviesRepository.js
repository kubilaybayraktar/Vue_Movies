import client from './Clients/axiosClient';
import { parseList, parseItem } from './helpers/parseHelper';

const resource = '/movies';

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
    async search(term, genre, actor) {
        let url = `${resource}/search`;
        let query = ``;
        if (term) {
            query += query === `` ? `?` : `&`;
            query += `term=${term}`;
        }
        if (genre > 0) {
            query += query === `` ? `?` : `&`;
            query += `genreId=${genre}`;
        }
        if (actor > 0) {
            query += query === `` ? `?` : `&`;
            query += `actorId=${actor}`;
        }
        url += query;
        return parseList(await client.get(url));
    },
};
