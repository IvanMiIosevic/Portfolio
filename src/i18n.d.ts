// 1. Make sure to import 'vue' before declaring augmented types
import Vue from "vue";
import VueI18n, { IVueI18n } from "vue-i18n";

// 2. Specify a file with the types you want to augment
//    Vue has the constructor type in types/vue.d.ts
declare module "vue/types/vue" {
  // 3. Declare augmentation for Vue
  interface VueConstructor {
    $i18n: VueI18n & IVueI18n;
  }
}
