<template>
  <a :href="link" target="_blank" rel="noopener noreferrer" class="resume-button margin-top">Mon CV</a>
</template>

<style lang="scss" scoped>
// Switch resume button to component
.resume-button {
  font-weight: bold;
  font-size: 25px;
  color: $alvai-dark;
  border: 2px solid $alvai-dark;
  border-radius: 10px;
  padding: 10px;
  &:hover {
    color: $alvai-yellow;
    background-color: $alvai-dark;
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
      link: "https://ouch.alvai.io/cv"
    };
  },
  name: "Resume"
});
</script>
