<template>
    <nav class="navbar is-fixed-top">
      <div class="container">
        <div class="navbar-brand">
            <a class="navbar-item logo-item" href="#"><img class="logo" alt="Alvai's logo" src="../assets/logo.svg" width="112" height="28"></a>
            <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>
        <div class="navbar-menu" :class="{ 'is-active': showNav }">
            <div class="navbar-end">
            <a class="navbar-item" href="#about">A propos</a>
            <a class="navbar-item" href="#projects">Projets</a>
            <a class="navbar-item" href="#contact">Contact</a>
            </div>
        </div>
      </div>
    </nav>
</template>

<style lang="scss">
.navbar {
  background-color: transparent;
  a.navbar-item:hover {
    background-color: transparent;
  }
}
.navbar.is-fixed-top {
  background-color: #fdfffc;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      showNav: false
    };
  },
  name: "Navbar"
});
</script>
