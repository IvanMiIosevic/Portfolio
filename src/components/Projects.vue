<template>
  <section id="projects" class="hero is-medium projects is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Projets:
        </h1>
        <div class="projects-container">
          <div @click="redirect(project.project_URL)" v-for="(project, index) of projects" :key="index" class="card">
            <!-- TODO: switch to components -->
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="project.image_URL" alt="Placeholder image">
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
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  grid-gap: 5rem;
  max-width: 1500px;
  margin: 0 auto;
}
.projects {
  background-color: #ffda6b;
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
export default Vue.extend({
  data() {
    return {
      projects: [
        {
          title: "Pokedex",
          description: "Pokédex première génération fait avec JavaScript",
          project_URL: "https://github.com/Alvai/pokedex",
          image_URL: "https://i.imgur.com/EbPjCvX.png"
        },
        {
          title: "Stunning octo goggles",
          description: "Express API avec GraphQL && Typescript",
          project_URL: "https://github.com/Alvai/stunning-octo-goggles",
          image_URL: "https://graphql.org/img/og_image.png"
        },
        {
          title: "Homepilot (stage)",
          description: "Application d'estimations de loyer en Node/React",
          project_URL: "https://estimation-loyer.homepilot.fr",
          image_URL:
            "http://www.jaimelesstartups.fr/wp-content/uploads/2017/01/Homepilot-Facebook-logo.png"
        },
        {
          title: "Snippy Snippets",
          description: "Site de partage de bout de code fait en Vue JS",
          project_URL: "https://github.com/Alvai/snippy-snippets",
          image_URL:
            "https://4.bp.blogspot.com/-W9WLUpGFD_8/WWBKMNZlzgI/AAAAAAABY8o/FqQnOR1Dfi4dmoDXwmhcvST4tHS-xkcXACLcBGAs/s1600/Java%2BCode%2BSnippets.jpg"
        }
      ]
    };
  },
  methods: {
    redirect: function(url: string): void {
      window.location.href = url;
    }
  }
});
</script>
