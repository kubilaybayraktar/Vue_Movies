 <template>
  <div class="card-container">
    <router-link :to="{ name: 'movie-detail', params: { id: movie.id } }">
      <div class="card zoom">
        <div class="card-content">
          <figure class="image image is-3by4">
            <img :src="movie.thumbnail" />
          </figure>
        </div>
        <footer class="card-footer">
          <router-link
            :to="{ name: 'movie-detail', params: { id: movie.id } }"
            tag="button"
            class="link card-footer-item title"
            :title="movie.title"
          >
            <span>{{ movie.title }}</span>
          </router-link>
        </footer>
      </div>
    </router-link>
  </div>
</template>


<script>
export default {
  name: "MovieCard",
  props: {
    movie: {
      type: Object,
    },
  },
};
</script>
