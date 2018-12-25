module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/../node_modules/bulma/sass/utilities/initial-variables.sass";
            @import "@/assets/styles/_variables.scss";
        `
      }
    }
  }
};
