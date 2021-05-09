import moviesRepository from './moviesRepository';
import genresRepository from './genresRepository';
import actorsRepository from './actorsRepository';
import movieGenresRepository from './movieGenresRepository';
import movieActorsRepository from './movieActorsRepository';

const repositories = {
    movies: moviesRepository,
    genres: genresRepository,
    actors: actorsRepository,
    movieGenres: movieGenresRepository,
    movieActors: movieActorsRepository,
};

export default {
    get: (name) => repositories[name],
};
