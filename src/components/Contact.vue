<template>
  <section id="contact" class="hero contact is-medium is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ $t("titles.contact") }}
        </h1>
        <a class="contact-link" target="_blank" rel="noopener noreferrer" href="mailto:contact.ivanmilosevic@gmail.com" aria-label="Email Link"><font-awesome-icon class="contact-icon" icon="envelope" title="email icon"/></a>
        <a class="contact-link" target="_blank" rel="noopener noreferrer" href="https://github.com/Alvai" aria-label="Github link"><font-awesome-icon class="contact-icon" :icon="['fab', 'github']" title="github icon"/></a>
        <a class="contact-link" target="_blank" rel="noopener noreferrer" href="https://twitter.com/Alvai__" aria-label="twitter link"><font-awesome-icon class="contact-icon" :icon="['fab', 'twitter']" title="twitter icon"/></a>
        <a class="contact-link" target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/9940385/ivan-milosevic" aria-label="stackoverflow link"><font-awesome-icon class="contact-icon" :icon="['fab', 'stack-overflow']" title="stack overflow icon" /></a>
        <a class="contact-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ivan-milosevic" aria-label="linkedin link"><font-awesome-icon class="contact-icon" :icon="['fab', 'linkedin']" title="linkedin icon"/></a>
      </div>
      <Resume />
    </div>
  </section>
</template>

<style lang="scss">
.contact {
  background-color: #fdfffc;
}
svg.svg-inline--fa.contact-icon {
  font-size: 50px;
  margin: 5px;
  color: $alvai-yellow;
  :hover {
    color: $alvai-dark;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
const Resume = () =>
  import(/* webpackChunkName: "Resume" */ "@/components/Resume.vue");
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faStackOverflow,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faLinkedin, faGithub, faEnvelope, faTwitter, faStackOverflow);

Vue.component("font-awesome-icon", FontAwesomeIcon);

export default Vue.extend({
  name: "Contact",
  components: {
    Resume
  },
  methods: {
    toto: () => {
      let name = "toto";
    }
  }
});
</script>
