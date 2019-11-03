<template>
  <div class="col m4">
    <div class="card hoverable">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="card-img" :src="project.image" @click="reveal" />
      </div>
      <div class="card-content">
        <div>
          <div v-for="lang in project.stack" :key="lang" class="icon">
            <span :class="lang.toLowerCase().replace('.', '-')">
              {{
              lang
              }}
            </span>
          </div>
        </div>
        <span class="card-title">
          <strong>{{ $t(`projects.${project.title}`) }}</strong>
        </span>
        <div>
          <span v-if="project.website">
            <a class="link" :href="project.website">
              {{
              $t("projects.websiteButton")
              }}
            </a>
          </span>
          <span v-if="project.github">
            <a class="link" :href="project.github">Github</a>
          </span>
        </div>
        <button @click="reveal">{{ $t("projects.readMore") }}</button>
      </div>
      <div class="card-reveal">
        <button class="close-btn" @click="reveal">{{ $t("projects.closeFlipSide") }}</button>
        <p class="card-title">
          <strong>{{ $t(`projects.${project.title}`) }}</strong>
        </p>
        <p>{{ $t(`projects.${project.description}`) }}</p>
        <p class="needs">
          <strong>{{ $t("projects.missions") }}</strong>
        </p>
        <p>{{ $t(`projects.${project.missions}`) }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    project: {
      default: {
        title: "Placeholder",
        description: "Placeholder",
        github: "Placeholder",
        image: "Placeholder",
        stack: ["Placeholder"],
        missions: "Placeholder"
      },
      type: Object as () => {
        title: string;
        description: string;
        github?: string;
        website?: string;
        image: string;
        stack?: Array<string>;
        missions: string;
      }
    }
  },
  methods: {
    reveal(event: Event): void {
      let currentElement = (event.target as HTMLElement).parentElement;

      if (!currentElement) return;

      while (
        currentElement &&
        !currentElement.classList.contains("card") &&
        !currentElement.classList.contains("hoverable")
      ) {
        currentElement = currentElement.parentElement;
      }

      if (!currentElement) return;

      const cardReveal = currentElement.querySelector(".card-reveal");

      if (!cardReveal) return;

      if (!cardReveal.classList.contains("flip-card-visible")) {
        console.log("it doesn't have the visible class");

        cardReveal.classList.add("flip-card-visible");
        cardReveal.classList.remove("flip-card-visible-move-out");
        setTimeout(() => {
          cardReveal.classList.add("flip-card-visible-move-in");
        }, 100);
      } else {
        console.log("it does have the visible class");
        cardReveal.classList.remove("flip-card-visible-move-in");
        cardReveal.classList.add("flip-card-visible-move-out");
        setTimeout(() => {
          cardReveal.classList.remove("flip-card-visible");
          cardReveal.classList.remove("flip-card-visible-move-out");
        }, 100);
      }
    }
  }
});
</script>

<style lang="scss">
.close-btn {
  right: 20px;
  position: absolute;
  top: 5px;
}
.projects .card {
  transition: transform 0.3s ease-out;
  overflow-y: hidden;
}

#title {
  font-size: 1.5rem;
  font-weight: 300;
}

.icon {
  font-size: 0.9rem;
  display: inline;
  background: #d8d8d8;
  border-radius: 3px;
  margin-right: 5px;
  span {
    color: black;
    border-radius: 5px;
    padding: 3px 5px;
  }
}

.react {
  background: #60dafb;
}

.javascript {
  background: #f1d91e;
}

.node {
  background: #8cc03d;
}

.php {
  color: white;
  background: #767bb3;
}

.icon span.vue-js {
  color: white;
  background: #34495d;
}

.icon span.symfony {
  color: white;
  background: #19161b;
}

.html {
  background: #e75d26;
}

.css {
  background: #178aca;
}

.card-reveal {
  padding: 24px;
  position: absolute;
  background-color: #fff;
  width: 100%;
  overflow-y: auto;
  left: 0;
  top: 100%;
  height: 100%;
  z-index: 3;
  display: none;
  transition: transform 0.3s ease-out;
}

.github {
  color: #24292e;
}

.status {
  color: #7699c2;
}

.flip-card-visible {
  display: block;
  transition: transform 0.3s ease-out;
}

.flip-card-visible-move-in {
  transform: translateY(-100%);
}

.flip-card-visible-move-out {
  transform: translateY(0%);
}

.needs {
  margin-top: 10px;
}
</style>
