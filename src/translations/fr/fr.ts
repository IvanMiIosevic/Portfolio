import titles from "./titles";
import navbar from "./navbar";
import projects from "./projects";
import { ASSETS_BASE_URL } from "../../constants";

export default {
  titles,
  navbar,
  projects,
  job: "Développeur React.js / Vue.js / Node.js",
  programming: "programmation",
  horror_movies: "films d'horreur",
  video_games: "jeux vidéos",
  school: "SUP'Internet",
  greetings: "Salut, Moi c'est Ivan 🖖.",
  hobbies:
    "J'adore la {programming} 👨‍💻, les {horror_movies} 🧟🔪 et les {video_games} 🎮.",
  studies: "Je suis actuellement Étudiant à {school} 🏫",
  resume_button: "mon CV",
  resume_link: `${ASSETS_BASE_URL}/cv.pdf`
};
