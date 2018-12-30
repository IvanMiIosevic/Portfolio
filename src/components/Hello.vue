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
        <div>
          <input type="text" :placeholder="helpers[Math.floor(Math.random() * (helpers.length + 1))]" v-model="question">
          <button @click="askGolem">Ask me Anything</button>
        </div>
        <div  v-if="documents.length > 0 && interactions.length > 0 && categories.length > 0">
          <p>{{ catchPhrase[interactions[0].expression][categories[0]]}} <a rel="noopener noreferrer"  target="_blank" :href="urls[categories[0]]" download>{{ categories[0] }}</a></p>
        </div>
        <Resume />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.hello {
  background: url(../assets/killers.webp) no-repeat, $primary-color;
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
import axios from "axios";
const Resume = () =>
  import(/* webpackChunkName: "Resume" */ "@/components/Resume.vue");
export default Vue.extend({
  name: "Hello",
  components: {
    Resume
  },
  data() {
    return {
      urls: {
        cv: "https://ouch.alvai.io/cv_IvanMilosevic.pdf",
        email: "mailto:contact.ivanmilosevic@gmail.com",
        numero: "tel:+33679406527"
      },
      catchPhrase: {
        "voir": {
          cv: "Voici mon ",
          numero: "Voici mon ",
          email: "Voici mon ",
        },
        "télécharger": {
          cv: "Voici mon CV, vous pouvez le télécharger ici: ",
          numero: "c'est compliqué de le télécharger mais tu peux m'appeler ici: ",
          email: "tu auras du mal à le télécharger mais tu peux me contacter ici: ",
        },
      },
      question: '',
      interactions: [],
      documents: [],
      categories: [],
      documentActive: false,
      helpers: [
        "Je peux voir ton cv ?",
        "je cherche ton email",
        "Je peux trouver ou ton 06 ?",
        "Je peux voir ton cv ?",
        "comment télécharger ton cv ?"
      ]
    }
  },
  methods: {
    askGolem(): void {
      if (this.question === "") return;
      axios
      .post('http://localhost:3001/ask', { question: this.question })
      .then(response => {
        this.$set(this.$data, 'documents', response.data.documents);
        this.$set(this.$data, 'interactions', response.data.interactions);
        this.$set(this.$data, 'categories', response.data.categories);
      });
    }
  }
});
</script>
