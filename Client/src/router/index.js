import { createRouter, createWebHistory } from "vue-router"
import Login from "../views/Login.vue"
import Signup from "../views/Signup.vue"
import StartingPage from "../views/StartingPage.vue"

const routes = [
  {
    path: "/",
    name: "Starting page",
    components: {
      //   sidebar: Sidebar,
      //   topbar: Topbar,
      default: StartingPage,
    },
  },
  {
    path: "/login",
    name: "Login page",
    components: {
      default: Login,
    },
  },
  {
    path: "/signup",
    name: "Signup page",
    components: {
      default: Signup,
    },
  },
]

// Eksemplet på hvordan man kan skabe en route guard: https://github.com/arturpilarek/Asentrum/blob/main/src/router/index.js

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
