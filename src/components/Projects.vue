<template>
  <section class="hero is-medium is-warning is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Projets:
        </h1>
        <div v-for="project of projects" :key="project.id">
          <h4><a :href="project.link">{{ project.title }}</a></h4>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "filers",
          link: "https://google.fr",
          imageUrl: "https://google.fr",
          description: "Google file clone"
        }
      ]
    };
  }
});
</script>
