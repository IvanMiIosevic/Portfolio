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
            <select v-model="$i18n.locale">
              <option
                v-for="(lang, i) in langs"
                :key="`Lang${i}`"
                class="emojiValue"
                :selected="$i18n.locale === lang.name ? 'selected' : ''"
                :value="lang.name"
                >{{ lang.emoji }}</option
              >
            </select>
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

select {
  font-size: 20px;
  background: $alvai-snow;
  border-color: $alvai-dark;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Navbar",
  data() {
    return {
      showNav: false,
      langs: [
        {
          name: "fr",
          emoji: "🇫🇷"
        },
        {
          name: "en",
          emoji: "🇬🇧"
        }
      ]
    };
  }
});
</script>
