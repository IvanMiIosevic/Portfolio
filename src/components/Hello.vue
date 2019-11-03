<template>
  <section class="hero hello is-fullheight is-bold">
    <div class="hero-body">
      <div class="container">
        <a class="mlg" :href="`${ASSETS_BASE_URL}/mlg.html`">oof</a>
        <h1 class="hello-title slide-in-top">Ivan Milosevic</h1>
        <h2 class="subtitle">aka Alvai</h2>
        <h2 class="subtitle">{{ $t("job") }}</h2>
        <Resume />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { ASSETS_BASE_URL } from "../constants";
import Vue from "vue";
const Resume = (): Promise<typeof import("@/components/Resume.vue")> =>
  import(/* webpackChunkName: "Resume" */ "@/components/Resume.vue");
export default Vue.extend({
  name: "Hello",
  components: {
    Resume
  },
  data: function() {
    return {
      ASSETS_BASE_URL
    };
  }
});
</script>

<style lang="scss">
@keyframes slideInFromTop {
  0% {
    transform: translateY(-1000%);
  }
  100% {
    transform: translateY(0);
  }
}

.hello {
  background: url(../assets/killers.webp) no-repeat, $alvai-yellow;
  background-size: 31.25em;
  background-position: center;
  background-position-y: 100%;
  @media screen and (max-width: $desktop) {
    background-size: 90vw;
  }
}

.hello-title {
  font-size: 5vw;
  font-weight: bold;
  @media screen and (max-width: 700px) {
    font-size: 10vw;
  }
}

.slide-in-top {
  animation: 0.5s ease-out 0s 1 slideInFromTop;
}

.subtitle {
  font-family: "IBM Plex Mono Italic";
}

.mlg {
  color: $alvai-yellow;
  position: absolute;
  left: 5%;
  top: -75%;
  &:hover {
    color: $alvai-dark;
  }
}
</style>
