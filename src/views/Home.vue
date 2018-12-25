<template>
  <div class="home">
    <Hello />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// @ is an alias to /src
const Hello = () =>
  import(/* webpackChunkName: "home" */ "@/components/Hello.vue");
const About = () =>
  import(/* webpackChunkName: "About" */ "@/components/About.vue");
const Projects = () =>
  import(/* webpackChunkName: "Projects" */ "@/components/Projects.vue");
const Contact = () =>
  import(/* webpackChunkName: "Contact" */ "@/components/Contact.vue");
const Footer = () =>
  import(/* webpackChunkName: "Footer" */ "@/components/Footer.vue");
export default Vue.extend({
  name: "Home",
  components: {
    Hello,
    About,
    Projects,
    Contact,
    Footer
  }
});
</script>
