<template>
  <div class="home">
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
// @ is an alias to /src
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  name: "Home",
  components: {
    About,
    Projects,
    Contact,
    Footer
  }
});
</script>
