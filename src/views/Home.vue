<template>
  <div class="home">
    <About />
    <Projects />
  </div>
</template>

<script>
// @ is an alias to /src
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";

export default {
  name: "home",
  components: {
    About,
    Projects
  }
};
</script>
