<script>
// import { onMounted, provide, ref } from "vue";
import { useCounterStore } from "./stores/counter";
import { useExpressRoute } from "./stores/apiData";
import axios from "axios";
import SideBarNav from "./Components/Layout/SideBarNav.vue";

export default {
  components: {
    SideBarNav
  }
}

</script>

<template>

  <side-bar-nav>

  </side-bar-nav>


</template>


<style lang="scss">


</style>
