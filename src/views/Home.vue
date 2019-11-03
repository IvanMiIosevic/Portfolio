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
const Hello = (): Promise<typeof import("@/components/Hello.vue")> =>
  import(/* webpackChunkName: "home" */ "@/components/Hello.vue");
const About = (): Promise<typeof import("@/components/About.vue")> =>
  import(/* webpackChunkName: "About" */ "@/components/About.vue");
const Projects = (): Promise<typeof import("@/components/Projects.vue")> =>
  import(/* webpackChunkName: "Projects" */ "@/components/Projects.vue");
const Contact = (): Promise<typeof import("@/components/Contact.vue")> =>
  import(/* webpackChunkName: "Contact" */ "@/components/Contact.vue");
const Footer = (): Promise<typeof import("@/components/Footer.vue")> =>
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
