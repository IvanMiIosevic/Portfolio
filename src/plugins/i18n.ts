import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from "@/translations/messages";
Vue.use(VueI18n)

export default new VueI18n({
  locale: "fr",
  fallbackLocale: "fr",
  messages
});
