<template>
  <div class="box">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{{ movie.title }}</p>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="columns">
            <div class="column is-2">
              <img :src="movie.thumbnail" style="width: '400px'" />
            </div>
            <div class="column is-3" align="left">
              <div class="field">
                <label class="label">Genre: {{ genres }}</label>
              </div>
              <div class="field">
                <label class="label">Actors: {{ actors }}</label>
              </div>
              <div class="field">
                <label class="label">Is Series: {{ movie.is_Series }}</label>
              </div>
              <div class="field">
                <label class="label"
                  >Release Date: {{ movie.releaseDate | formatDate }}</label
                >
              </div>
              <button class="button is-info" @click="cancelMovie()">
                Back
              </button>
            </div>
            <div class="column"></div>
          </div>
        </div>
      </div>
      <footer class="card-footer"></footer>
    </div>
  </div>
</template>

<script>
import Repository from "../repositories/repositoryFactory";
const MoviesRepository = Repository.get("movies");

export default {
  name: "MovieDetail",
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      movie: {},
    };
  },
  async created() {
    this.movie = await MoviesRepository.getMovie(this.id);
    console.log("moviex", this.movie);
  },
  methods: {
    cancelMovie() {
      this.$router.push({ name: "movies" });
    },
  },
  computed: {
    genres() {
      let genres = "";
      if (this.movie && this.movie.genres) {
        this.movie.genres.map((g) => {
          genres += g.title + ",";
        });
      }
      return genres.slice(0, -1);
    },
    actors() {
      let actors = "";
      if (this.movie && this.movie.actors) {
        this.movie.actors.map((g) => {
          actors += g.name + ",";
        });
      }
      return actors.slice(0, -1);
    },
  },
};
</script>
