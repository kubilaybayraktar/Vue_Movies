<template>
  <div class="navbar-brand">
    <a
      class="navbar-item"
      href="https://vuejs.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fab js-logo fa-vuejs fa-2x" aria-hidden="true" />
    </a>
    <div class="navbar-item nav-home">
      <span class="tour">LIST</span>
      <span class="of">OF</span>
      <span class="movies">MOVIES</span>
    </div>
    <button
      class="link navbar-burger burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </button>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/movies" class="navbar-item menu">Movies</router-link>
        <router-link to="/populars" class="navbar-item menu"
          >Populars</router-link
        >
        <router-link to="/about" class="navbar-item menu">About</router-link>
      </div>
    </div>
  </div>
</template>
