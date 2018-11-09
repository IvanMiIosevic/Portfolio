declare module "*.vue" { // declare vue module so that typescript can find vue files
    import Vue from "vue";
    export default Vue;
}
declare module '@fortawesome/vue-fontawesome';