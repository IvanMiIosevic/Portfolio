<template>
  <section class="hero hello is-fullheight is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Ivan Milosevic
        </h1>
        <h2 class="subtitle">
          aka Alvai
        </h2>
        <h2 class="subtitle">
          Full-Stack Web developer
        </h2>
        <Resume />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.hello {
  background: url(../assets/killers.webp) no-repeat, $alvai-yellow;
  background-size: 31.25em;
  background-position: center;
  background-position-y: 100%;
  @media screen and (max-width: $desktop) {
    background-size: 90vw;
  }
  .title {
    font-size: 5vw;
    @media screen and (max-width: 700px) {
      font-size: 10vw;
    }
  }
}
</style>
<script lang="ts">
import Vue from "vue";
const Resume = () =>
  import(/* webpackChunkName: "Resume" */ "@/components/Resume.vue");
export default Vue.extend({
  name: "Hello",
  components: {
    Resume
  }
});
</script>
