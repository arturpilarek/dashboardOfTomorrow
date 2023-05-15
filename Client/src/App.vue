<script>
// import { onMounted, provide, ref } from "vue";
import { useCounterStore } from "./stores/counter";
import { useExpressRoute } from "./stores/apiData";
import axios from "axios";
import SideBarNav from "./Components/Layout/SideBarNav.vue";
import LoginView from "./views/loginView.vue";

export default {
  components: {
    SideBarNav,
    LoginView
  }
}

</script>

<template>
  <!--
  <side-bar-nav>

  </side-bar-nav>
  -->

  <login-view/>
</template>


<style lang="scss">


</style>
