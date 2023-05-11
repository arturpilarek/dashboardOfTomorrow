<script>
// import { onMounted, provide, ref } from "vue";
import { useCounterStore } from "./stores/counter";
import { useExpressRoute } from "./stores/apiData";
import axios from "axios";
import SideBarNav from "./Components/Layout/SideBarNav.vue";
import TopBarTaps from '../src/Components/Layout/TopBarTaps.vue';
import TopBar from '../src/Components/Layout/TopBar.vue';

export default {
  components: {
    SideBarNav, TopBar, TopBarTaps
  }
}

</script>

<template>



  
  <main>
    <div id="main-wrapper">
      <div>
        
        <router-view name="sidebar"></router-view>
      </div>
        <router-view name="topbar"></router-view>
  
    <div>

  </div>
    </div>
    </main>



</template>


<style lang="scss">

#main-wrapper{
  display: flex;
}

</style>
