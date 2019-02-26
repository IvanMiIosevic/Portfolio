<template>
  <section id="about" class="hero about is-medium is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          A propos:
        </h1>
        <section class="subtitle-container">
          <p>Salut, Moi c'est Ivan &#x1F596;.</p>
          <br />
          <p>Développeur Full Stack &#x1F5A5;.</p>
          <br />
          <p>Je suis passionné de programmation &#x1F468;&#x200D;&#x1F4BB;, de <a class="link" href="https://www.youtube.com/watch?v=xHuOtLTQ_1I" target="_blank" rel="noopener noreferrer">films d'horreur</a> &#x1F9DF;&#x1F52A; et de jeux vidéos &#x1F3AE;.</p>
          <br />
          <p>Actuellement Étudiant à SUP'Internet &#x1F3EB;.</p>

        </section>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about {
  background-color: $alvai-snow;
}

.link, .link:visited {
  color: $alvai-rose;
}

.link {
  display: inline-block;
  max-width: fit-content;
  font-weight: bolder;
  &::after {
    width: 100%;
    height: 1px;
    background: $alvai-dark;
    content: "";
    display: block;
    transform: scale(0);
    transition:all 0.2s linear 0s;
  }
  &:hover::after {
    transform: scale(1);
  }
}
</style>
