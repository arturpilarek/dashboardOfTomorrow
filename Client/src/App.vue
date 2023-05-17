<script>
// import { onMounted, provide, ref } from "vue";
import { useCounterStore } from "./stores/counter";
import { useExpressRoute } from "./stores/apiData";
import axios from "axios";
import SideBarNav from "./Components/Layout/SideBarNav.vue";
import TopBarTaps from '../src/Components/Layout/TopBarTaps.vue';
import TopBar from '../src/Components/Layout/TopBar.vue';
import LoginView from "./views/loginView.vue";
import SignupView from "./views/signupView.vue";

export default {
  components: {
    SideBarNav, TopBar, TopBarTaps,
    LoginView,
    SignupView
  }
}

</script>

<template>

  <side-bar-nav>

  </side-bar-nav>


</template>


<style lang="scss">

#main-wrapper{
  display: flex;
}

</style>
