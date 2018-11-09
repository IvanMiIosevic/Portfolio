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
  color: #2c3e50;
}
.is-marged-right {
  margin-right: 0.5rem;
}
</style>

<script lang="ts">
import Vue from "vue";
import "bulma/css/bulma.css";
import Home from "@/views/Home.vue";
import Navbar from "@/components/Navbar.vue";
export default Vue.extend({
  data() {
    return {
      showNav: false
    };
  },
  components: {
    Home,
    Navbar
  }
});
</script>
