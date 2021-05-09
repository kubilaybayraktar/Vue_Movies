<template>
  <div id="app">
    <HeaderBar />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from "@/components/header-bar";

export default {
  name: "App",
  components: {
    HeaderBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style lang="scss">
@import "@/design/index.scss";
</style>