<template>
    <footer id="footer" class="footer">
        <div class="content has-text-centered">
            <p class="love">Made with <font-awesome-icon icon="heart" /> By Alvai</p>
            <p>2018</p>
        </div>
    </footer>
</template>

<style lang="scss">
.footer {
  background-color: #95b8d1;
}
</style>

<script>
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
