import client from './Clients/axiosClient';
import movieGenresRepository from './movieGenresRepository';
import movieActorsRepository from './movieActorsRepository';
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
        let url = `${resource}`;
        let query = ``;
        if (term) {
            query += query === `` ? `?` : `&`;
            query += `title_like=${term}`;
        }
        if (genre > 0) {
            const movieGenres = await movieGenresRepository.getMovieGenresByGenreId(genre);
            if (movieGenres) {
                const movieIds = movieGenres.map((mg) => mg.movieId);
                movieIds.map((id) => {
                    query += query === `` ? `?` : `&`;
                    query += `id=${id}`;
                });
            }
        }
        if (actor) {
            const movieActors = await movieActorsRepository.getMovieActorsByActorId(actor);
            if (movieActors) {
                const movieIds = movieActors.map((mg) => mg.movieId);
                movieIds.map((id) => {
                    query += query === `` ? `?` : `&`;
                    query += `id=${id}`;
                });
            }
        }
        url += query;
        return parseList(await client.get(url));
    },
};
