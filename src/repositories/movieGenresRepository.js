import client from './Clients/axiosClient';
import { parseList, parseItem } from './helpers/parseHelper';

const resource = '/movieGenres';

export default {
    async get() {
        return parseList(await client.get(`${resource}`));
    },
    async getMovieGenre(id) {
        return parseItem(await client.get(`${resource}/${id}`), 200);
    },
    async getMovieGenresByGenreId(genreId) {
        return parseItem(await client.get(`${resource}?genreId=${genreId}`), 200);
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
