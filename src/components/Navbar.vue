<template>
  <nav class="navbar is-fixed-top">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item logo-item" href="#">Alvai</a>
        <div
          class="navbar-burger"
          :class="{ 'is-active': showNav }"
          @click="showNav = !showNav"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-end">
          <a class="navbar-item" href="#about">{{ $t("navbar.about") }}</a>
          <a class="navbar-item" href="#projects">{{
            $t("navbar.projects")
          }}</a>
          <a class="navbar-item" href="#contact">{{ $t("navbar.contact") }}</a>
          <div class="locale-changer navbar-item">
            <v-select v-model="$i18n.locale" class="style-chooser" :clearable="false" :options="langs" :reduce="lang => lang.name"></v-select>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  a.navbar-item:hover {
    background-color: inherit;
    color: inherit;
    text-decoration: underline;
  }
}
a.logo-item {
  height: 50px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.5rem;
}
.navbar.is-fixed-top {
  background-color: $alvai-yellow;
}

  .style-chooser .vs__search::placeholder,
  .style-chooser .vs__dropdown-toggle,
  .style-chooser .vs__dropdown-menu {
    font-size: 1em;
    background: $alvai-snow;
    border-color: $alvai-dark;
    color: $alvai-yellow;
  }

  .style-chooser, .style-chooser .vs__dropdown-menu {
    max-width: 75px;
    min-width: 75px;
  }

  .locale-changer {
    display: flex;
    justify-content: center;
  }

  .style-chooser .vs__selected-options {
    padding: 0;
  }

  .style-chooser .vs__clear,
  .style-chooser .vs__open-indicator {
    fill: $alvai-dark;
  }
</style>

<script lang="ts">
import Vue from "vue";
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

Vue.component('v-select', vSelect)

export default Vue.extend({
  name: "Navbar",
  data() {
    return {
      showNav: false,
      langs: [
        {
          name: "fr",
          label: "🇫🇷"
        },
        {
          name: "en",
          label: "🇬🇧"
        }
      ]
    };
  }
});
</script>
