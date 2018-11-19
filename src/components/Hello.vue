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
        <a href="https://drive.google.com/file/d/1q-TAN_9JEFHeDMZHz0mDUqjSBlZEwvA0/view?usp=sharing" class="resume-button">Mon CV</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.hello {
  background: linear-gradient(
      rgba(255, 218, 107, 0.6),
      rgba(255, 218, 107, 0.6)
    ),
    url("../assets/killers.png");
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
