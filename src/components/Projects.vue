<template>
  <section class="hero is-medium projects is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Projets:
        </h1>
        <div class="projects-container">
          <div v-for="(project, index) of projects" :key="index" class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="project.imageUrl" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content has-text-left">
              <h4 class="has-text-weight-bold is-uppercase">{{ project.title }}</h4>
              <p>{{ project.description }}</p>
            </div>
          <footer class="card-footer">
            <span v-for="(tag, index) of project.tags" :key="index" class="tag is-marged-right is-light">
              #{{tag}}
            </span>
          </footer>
          </div>
          </div>
        </div>
    </div>
  </section>
</template>

<style lang="scss">
.projects-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(25rem, auto));
  grid-gap: 5rem;
  max-width: 1500px;
  margin: 0 auto;
}
.projects {
  background-color: #ef767a;
  .card {
    border-radius: 25px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
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
}
</style>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      projects: [
        {
          title: "filer",
          link: "https://google.fr",
          imageUrl: "data:image/png;base64,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",
          description: "Google file clone",
          tags: ["php", "javascript"]
        },
        {
          title: "filer 2 ",
          link: "https://google.fr",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDIUijllqLktiizv7reDP4jKgquIqn7eweuZZ4furkV1r3AmlD",
          description: "Google file clone"
        },
                {
          title: "filer 2 ",
          link: "https://google.fr",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDIUijllqLktiizv7reDP4jKgquIqn7eweuZZ4furkV1r3AmlD",
          description: "Google file clone"
        },
                {
          title: "filer 2 ",
          link: "https://google.fr",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDIUijllqLktiizv7reDP4jKgquIqn7eweuZZ4furkV1r3AmlD",
          description: "Google file clone"
        },
                {
          title: "filer 2 ",
          link: "https://google.fr",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDIUijllqLktiizv7reDP4jKgquIqn7eweuZZ4furkV1r3AmlD",
          description: "Google file clone"
        },
                {
          title: "filer 2 ",
          link: "https://google.fr",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDIUijllqLktiizv7reDP4jKgquIqn7eweuZZ4furkV1r3AmlD",
          description: "Google file clone"
        },
                {
          title: "filer 2 ",
          link: "https://google.fr",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDIUijllqLktiizv7reDP4jKgquIqn7eweuZZ4furkV1r3AmlD",
          description: "Google file clone"
        },
                {
          title: "filer 2 ",
          link: "https://google.fr",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDIUijllqLktiizv7reDP4jKgquIqn7eweuZZ4furkV1r3AmlD",
          description: "Google file clone"
        },
                {
          title: "filer 2 ",
          link: "https://google.fr",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDIUijllqLktiizv7reDP4jKgquIqn7eweuZZ4furkV1r3AmlD",
          description: "Google file clone"
        }
      ]
    };
  }
});
</script>
