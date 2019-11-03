<template>
  <section id="projects" class="hero is-medium projects is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ $t("titles.projects") }}</h1>
        <div class="projects-container">
          <Card v-for="(project, index) in projects" :key="index" :project="project" />
        </div>
      </div>
      <Resume />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { ASSETS_BASE_URL } from "../constants";

const Resume = (): Promise<typeof import("@/components/Resume.vue")> =>
  import(/* webpackChunkName: "Resume" */ "@/components/Resume.vue");
const Card = (): Promise<typeof import("@/components/Card.vue")> =>
  import(/* webpackChunkName: "Card" */ "@/components/Card.vue");
export default Vue.extend({
  components: {
    Resume,
    Card
  },
  data() {
    return {
      // TO DO: Move projects to an api
      projects: [
        {
          title: "pokedexTitle",
          description: "pokedexDescription",
          github: "https://github.com/Alvai/pokedex",
          image: `${ASSETS_BASE_URL}/pokedex-square.webp`,
          stack: ["Javascript", "HTML", "CSS"],
          missions: "pokedexMissions"
        },
        {
          title: "golemAiTitle",
          description: "golemAiDescription",
          website: "https://golem.ai",
          image: `${ASSETS_BASE_URL}/golem-square.webp`,
          stack: ["PHP", "Symfony"],
          missions: "golemAiMissions"
        },
        {
          title: "homepilotTitle",
          description: "homepilotDescription",
          website: "https://estimation-loyer.homepilot.fr",
          image: `${ASSETS_BASE_URL}/homepilot-square.webp`,
          stack: ["react", "node"],
          missions: "homepilotMissions"
        },
        {
          title: "tooShortTitle",
          description: "tooShortDescription",
          github: "https://github.com/Alvai/too-short",
          image: `${ASSETS_BASE_URL}/short-square.webp`,
          stack: ["node"],
          missions: "tooShortMissions"
        },
        {
          title: "deezwebTitle",
          description: "deezwebDescription",
          github: "https://github.com/Alvai/deezweb",
          image: `${ASSETS_BASE_URL}/deezweb-square.webp`,
          stack: ["Vue.js"],
          missions: "deezwebMissions"
        }
      ]
    };
  },
  methods: {
    redirect(url: string): void {
      window.location.href = url;
    }
  }
});
</script>

<style lang="scss">
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  @media screen and (min-width: 1300px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  grid-gap: 2rem;
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
</style>
