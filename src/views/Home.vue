<template>
  <div class="home">
    <About />
    <Projects />
    <Contact />
  </div>
</template>

<script>
import Vue from "vue";
// @ is an alias to /src
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";

export default Vue.extend({
  name: "Home",
  components: {
    About,
    Projects,
    Contact
  }
});
</script>
