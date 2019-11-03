import Vue, { VNode, CreateElement } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "@/plugins/i18n";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: (h: CreateElement): VNode => h(App)
}).$mount("#app");
