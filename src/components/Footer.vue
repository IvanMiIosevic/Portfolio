<template>
    <footer id="footer" class="footer">
        <div class="content has-text-centered">
            <p>Cover Art by <a rel="nofollow" href="https://www.deviantart.com/nrjin" norel><span class="username">NRjin</span></a></p>
            <p class="love">Made with <font-awesome-icon class="heart-icon" icon="heart" /> By <span class="username">Alvai</span></p>
            <p>{{ new Date().getFullYear() }}</p>   
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $alvai-dark;
}
p {
  color: white;
}
.heart-icon {
  color: $alvai-rose;
}
.username {
  color: $alvai-yellow;
}
</style>

<script lang="ts">
import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHeart);

Vue.component("font-awesome-icon", FontAwesomeIcon);

export default Vue.extend({
  name: "Footer"
});
</script>
