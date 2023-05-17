<script>
// import { onMounted, provide, ref } from "vue";
import { useCounterStore } from "./stores/counter";
import { useExpressRoute } from "./stores/apiData";
import axios from "axios";
import SideBarNav from "./Components/Layout/SideBarNav.vue";
import LoginView from "./views/loginView.vue";
import SignupView from "./views/signupView.vue";

export default {
  components: {
    SideBarNav,
    LoginView,
    SignupView
  }
}

</script>

<template>
  <!--
  <side-bar-nav>

  </side-bar-nav>
  <login-view/>
  -->
  <signup-view/>


</template>


<style lang="scss">


</style>
