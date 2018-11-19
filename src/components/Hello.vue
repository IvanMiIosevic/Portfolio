<template>
  <section class="hero hello is-fullheight is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Ivan Milosevic
        </h1>
        <h2 class="subtitle">
          Full-Stack Web developer
        </h2>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.hello {
    background: linear-gradient(
      rgba(255, 218, 107, 0.60), 
      rgba(255, 218, 107, 0.60)
    )
    ,url('../assets/killers.png');
    background-position: center;
    background-repeat: no-repeat;
    background-position-y: 100%;
    @media screen and (max-width: 700px) {
      background-size: 150%;
    }
  .title {
    font-size: 5vw;    
    @media screen and (max-width: 700px) {
      font-size: 10vw;
    }
  }

}
</style>
