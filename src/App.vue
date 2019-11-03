<template>
  <div id="app">
    <Navbar />
    <Home />
  </div>
</template>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
}
#app {
  font-family: "IBM Plex Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $alvai-dark;
}
.is-marged-right {
  margin-right: 0.5rem;
}
</style>

<script lang="ts">
import Vue from "vue";
import "bulma/css/bulma.css";
const Home = (): Promise<typeof import("@/views/Home.vue")> =>
  import(/* webpackChunkName: "home" */ "@/views/Home.vue");
const Navbar = (): Promise<typeof import("@/components/Navbar.vue")> =>
  import(/* webpackChunkName: "navbar" */ "@/components/Navbar.vue");
export default Vue.extend({
  components: {
    Home,
    Navbar
  },
  data() {
    return {
      showNav: false
    };
  }
});
</script>
