<template>
  <section id="projects" class="hero is-medium projects is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Projets:
        </h1>
        <div class="projects-container">
          <div v-for="(project, index) of projects" :key="index" class="card">
            <!-- TODO: switch to components -->
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="project.imageUrl" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content has-text-left">
              <h4 class="has-text-weight-bold is-uppercase">{{ project.title }}</h4>
              <p>{{ project.description }}</p>
            </div>
          </div>
          </div>
        </div>
    </div>
  </section>
</template>

<style lang="scss">
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  @media screen and (min-width: 1087px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  grid-gap: 5rem;
  max-width: 1500px;
  margin: 0 auto;
}
.projects {
  background-color: #ffda6b;
  .card {
    border-radius: 25px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
}
.projects .card-image img {
  object-fit: cover;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}
.card-footer {
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 15px;
  overflow: hidden;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      projects: []
    };
  }
});
</script>
