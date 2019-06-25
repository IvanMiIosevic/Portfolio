import Vue from "vue";
import Router from "vue-router";
import { langs } from "@/constants";
import i18n from "@/plugins/i18n";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/en"
    },
    {
      path: "/:lang",
      children: [
        {
          path: "/",
          component: () =>
            import(/* webpackChunkName: "home" */ "./views/Home.vue")
        }
      ]
    }
  ]
});

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {
  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language || !langs.includes(language)) {
    return next("/en");
  }
  i18n.locale = language;
  next();
});

export default router;
