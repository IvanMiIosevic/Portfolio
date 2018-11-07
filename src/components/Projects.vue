<template>
  <section class="hero is-medium projects is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Projets:
        </h1>
        <div v-for="(project, index) of projects" :key="index">
          <h4><a :href="project.link">{{ project.title }}</a></h4>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.projects {
  background-color: #f5f5f5;
}
</style>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      projects: [
        {
          title: "filers",
          link: "https://google.fr",
          imageUrl: "https://google.fr",
          description: "Google file clone"
        },
        {
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
