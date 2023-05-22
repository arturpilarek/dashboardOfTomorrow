<script>
// import { onMounted, provide, ref } from "vue";
import { useCounterStore } from "./stores/counter";
import { useExpressRoute } from "./stores/apiData";
import axios from "axios";
import SideBarNav from "./Components/Layout/SideBarNav.vue";
import TopBar from '../src/Components/Layout/TopBar.vue';
import TasksContainer from "./Components/Elements/TasksContainer.vue";
import LoginView from "./views/loginView.vue";
import SignupView from "./views/signupView.vue";

export default {
  components: {
    SideBarNav, TopBar, TasksContainer,
    LoginView,
    SignupView
  }
}

</script>

<template>
  <main>
    <section id="main-wrapper">
      <section>
        <router-view name="sidebar"></router-view>
      </section>

      <section id="tbSection">
        <router-view name="topbar"></router-view>
        <router-view></router-view>
      </section>
    </section>
    <!-- <tasks-container
    class="ml-16"
    ></tasks-container>
     -->
<!-- 
     <tasks-container></tasks-container> -->
  </main>
</template>


<style lang="scss">
a {
  text-decoration: none;
  color: inherit;
}

#main-wrapper{
  display: flex;
}
#tbSection{
  height: 100%;
  width: 100%;
}

</style>
