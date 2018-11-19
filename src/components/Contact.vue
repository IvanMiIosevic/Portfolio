<template>
  <section id="contact" class="hero contact is-medium is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Contact:
        </h1>
        <a class="contact-link" href="mailto:contact.ivanmilosevic@gmail.com"><font-awesome-icon class="contact-icon" icon="envelope" /></a>
        <a class="contact-link" href="https://github.com/Alvai"><font-awesome-icon class="contact-icon" :icon="['fab', 'github']" /></a>
        <a class="contact-link" href="https://twitter.com/Alvai__"><font-awesome-icon class="contact-icon" :icon="['fab', 'twitter']" /></a>
        <a class="contact-link" href="https://stackoverflow.com/users/9940385/ivan-milosevic"><font-awesome-icon class="contact-icon" :icon="['fab', 'stack-overflow']" /></a>
        <a class="contact-link" href="https://www.linkedin.com/in/ivan-milosevic"><font-awesome-icon class="contact-icon" :icon="['fab', 'linkedin']" /></a>
      </div>
      <a href="https://drive.google.com/file/d/1q-TAN_9JEFHeDMZHz0mDUqjSBlZEwvA0/view?usp=sharing" class="resume-button margin-top">Mon CV</a>
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
  color: #ffd779;
  :hover {
    color: #333c3e;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
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
  name: "Contact"
});
</script>
