<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><img class="logo" alt="Another vue logo attempt" src="./assets/anotherVueLogoAttempt.png"></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  .logo {
    height: auto;
    width: 10vw;
    margin: auto;
  }
}
</style>
