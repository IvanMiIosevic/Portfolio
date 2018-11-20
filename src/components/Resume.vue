<template>
  <a :href="link" class="resume-button margin-top">Mon CV</a>
</template>

<style lang="scss" scoped>
// Switch resume button to component
.resume-button {
  font-weight: bold;
  font-size: 25px;
  color: #31393c;
  border: 2px solid #31393c;
  border-radius: 10px;
  padding: 10px;
  &:hover {
    color: #ffda6b;
    background-color: #31393c;
  }
  &.margin-top {
    display: block;
    width: fit-content;
    margin: auto;
    margin-top: 40px;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      link: "https://ouch.alvai.io/cv_IvanMilosevic.pdf"
    };
  },
  name: "Resume"
});
</script>
