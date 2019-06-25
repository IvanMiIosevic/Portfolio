<template>
  <section id="projects" class="hero is-medium projects is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ $t("titles.projects")}}
        </h1>
        <div class="projects-container">
          <div @click="redirect(project.project_URL)" v-for="(project, index) of projects" :key="index" class="card">
            <!-- TODO: switch to components -->
            <div class="card-image">
              <figure class="image is-4by3">
                <img loading="lazy" :src="project.image_URL" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content has-text-left">
              <h4 class="has-text-weight-bold is-uppercase">{{ $t(`projects.${project.title}`) }}</h4>
              <p>{{ $t(`projects.${project.description}`) }}</p>
            </div>
          </div>
          </div>
        </div>
        <Resume />
    </div>
  </section>
</template>

<style lang="scss">
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  @media screen and (min-width: 1087px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  grid-gap: 5rem;
  max-width: 1500px;
  margin: 0 auto;
}
.projects {
  background-color: $alvai-yellow;
  .card {
    border-radius: 25px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    transition: box-shadow 0.3s ease-in-out;
    &:hover {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }
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
const Resume = () =>
  import(/* webpackChunkName: "Resume" */ "@/components/Resume.vue");
export default Vue.extend({
  data() {
    return {
      // TO DO: Move projects to an api
      projects: [
        {
          title: "pokedex_title",
          description: "pokedex_description",
          project_URL: "https://github.com/Alvai/pokedex",
          image_URL: "https://ouch.alvai.dev/pokedex.webp"
        },
        {
          title: "golem_ai_title",
          description: "golem_ai_description",
          project_URL: "https://golem.ai",
          image_URL: "https://ouch.alvai.dev/golem.webp"
        },
        {
          title: "homepilot_title",
          description: "homepilot_description",
          project_URL: "https://estimation-loyer.homepilot.fr",
          image_URL: "https://ouch.alvai.dev/homepilot_logo.webp"
        },
        {
          title: "too_short_title",
          description: "too_short_description",
          project_URL: "https://github.com/Alvai/too-short",
          image_URL: "https://ouch.alvai.dev/url-shortener.webp"
        },
        {
          title: "deezweb_title",
          description: "deezweb_description",
          project_URL: "https://github.com/Alvai/deezweb",
          image_URL: "https://ouch.alvai.dev/deezweb.webp"
        }
      ]
    };
  },
  methods: {
    redirect: function(url: string): void {
      window.location.href = url;
    }
  },
  components: {
    Resume
  }
});
</script>
