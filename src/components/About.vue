<template>
  <section id="about" class="hero about is-medium is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ $t("titles.about") }}</h1>
        <section class="subtitle-container">
          <p>{{ $t("greetings") }}</p>
          <br />
          <p>{{ $t("job") }}. 🖥</p>
          <br />
          <i18n path="hobbies" tag="p">
            <a
              place="programming"
              class="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/watch?v=K7Hn1rPQouU"
            >{{ $t("programming") }}</a>
            <a
              place="horror_movies"
              class="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/watch?v=xHuOtLTQ_1I"
            >{{ $t("horrorMovies") }}</a>
            <a
              place="video_games"
              class="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/watch?v=n12Q2Pj9ESg"
            >{{ $t("videoGames") }}</a>
          </i18n>
          <br />
          <i18n path="studies" tag="p">
            <a
              place="school"
              class="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://supinternet.fr"
            >{{ $t("school") }}</a>
          </i18n>
        </section>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "About"
});
</script>

<style lang="scss">
.about {
  background-color: $alvai-snow;
}
</style>
