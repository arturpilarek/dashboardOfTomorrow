import { createRouter, createWebHistory } from "vue-router"
import Sidebar from "../Components/Layout/SideBarNav.vue"
import Topbar from "../Components/Layout/TopBar.vue"
import StartingPage from "../views/StartingPage.vue"
import EditUser from "../views/editUserView.vue"
import Login from '../views/loginView.vue'
import Signup from "../views/signupView.vue"

const routes = [
  {
    path: "/",
    name: "Starting page",
    components: {
      sidebar: Sidebar,
      topbar: Topbar,
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
  {
    path: "/edit-user",
    name: "Edit user",
    components: {
      sidebar: Sidebar,
      topbar: Topbar,
      default: EditUser,
    },
  },
]

// Eksemplet på hvordan man kan skabe en route guard: https://github.com/arturpilarek/Asentrum/blob/main/src/router/index.js

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
