<script>
// import SideBarNav from "./Components/Layout/SideBarNav.vue";

// export default {
//   components: {
//     SideBarNav
//   }
// }
</script>

<template>
  <main class="app">
    <router-view name="sidebar" />
    <section className="app_view">
      <router-view name="top-bar" />
      <router-view />
    </section>
  </main>
  <!-- 
  <side-bar-nav>

  </side-bar-nav> -->
</template>


<style lang="scss">
</style>
