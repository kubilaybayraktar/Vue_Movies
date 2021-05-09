<template>
  <div class="box bg">
    <div class="content-container">
      <div class="section content-title-group">
        <h2 class="title">Movies</h2>
      </div>
      <div class="columns">
        <div class="column is-2">
          <input
            class="input is-primary is-rounded"
            type="text"
            placeholder="Search keywords"
            v-model="searchTerm"
          />
        </div>
        <div class="column is-2">
          <div class="select is-rounded is-success">
            <select @change="selectGenre($event)" v-model="selectedGenre">
              <option value="0" :selected="true">Choose genre</option>
              <option :value="genre.id" v-for="genre in genres" :key="genre.id">
                {{ genre.title }}
              </option>
            </select>
          </div>
        </div>
        <div class="column is-2">
          <div class="select is-rounded is-success">
            <select @change="selectActor($event)" v-model="selectedActor">
              <option value="0" :selected="true">Choose actor</option>
              <option :value="actor.id" v-for="actor in actors" :key="actor.id">
                {{ actor.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="column is-1">
          <div class="buttons">
            <button @click="search" class="button is-primary is-rounded">
              Search
            </button>
          </div>
        </div>
        <div class="column is-1">
          <div class="buttons">
            <button @click="reset" class="button is-secondary is-rounded">
              Reset
            </button>
          </div>
        </div>
      </div>
      <div class="columns is-multiline">
        <div v-for="movie in movies" :key="movie.id" class="column is-2">
          <MovieCard :movie="movie" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "../components/movie-card";
import Repository from "../repositories/repositoryFactory";
const MoviesRepository = Repository.get("movies");
const GenresRepository = Repository.get("genres");
const ActorsRepository = Repository.get("actors");

export default {
  name: "Movies",
  data() {
    return {
      searchTerm: "",
      selectedGenre: "",
      selectedActor: "",
      movies: [],
      genres: [],
      actors: [],
      message: "",
    };
  },
  components: { MovieCard },
  async created() {
    await this.loadMovies();
    await this.loadGenres();
    await this.loadActors();
    this.selectedGenre = "0";
    this.selectedActor = "0";
    this.searchTerm = "";
  },
  methods: {
    async loadMovies() {
      this.movies = [];
      this.message = "Getting movies..";
      this.movies = await MoviesRepository.get();
      this.message = "";
    },
    async loadGenres() {
      this.genres = await GenresRepository.get();
    },
    async loadActors() {
      this.actors = await ActorsRepository.get();
    },
    async search() {
      this.movies = [];
      this.message = "Searching movies..";
      this.movies = await MoviesRepository.search(
        this.searchTerm,
        this.selectedGenre,
        this.selectedActor
      );
      this.message = "";
    },
    async reset() {
      this.searchTerm = "";
      this.selectedGenre = 0;
      this.selectedActor = 0;
      this.message = "Getting movies..";
      this.movies = await MoviesRepository.get();
      this.message = "";
    },
    selectGenre(e) {
      this.selectedGenre = e.target.value;
    },
    selectActor(e) {
      this.selectedActor = e.target.value;
    },
  },
};
</script>
