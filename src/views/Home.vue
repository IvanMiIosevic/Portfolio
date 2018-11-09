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
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
import Hello from "@/components/Hello.vue";

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
