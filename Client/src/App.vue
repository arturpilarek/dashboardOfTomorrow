<template>
  <main>
    <v-container>
      <section id="main-wrapper">
        <section>
          <router-view name="sidebar"></router-view>
        </section>

        <section id="tbSection">
          <router-view name="topbar"></router-view>
          <router-view></router-view>
        </section>

      </section>

      {{ store }}


    </v-container>
  </main>
</template>

<script>
import { useTaskDataStore } from "./stores/tasksData.store";
import { onMounted, computed } from "vue";
export default {
  app: "app",
  setup() {
    async function fetchAll() {
      const store = useTaskDataStore()
       await store.getAll();
    }
    onMounted(() => {
      fetchAll();
    })

  },


}

</script>


<style lang="scss">
a {
  text-decoration: none;
  color: inherit;
}

#main-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}

#tbSection {
  height: 100%;
  width: 100%;
}
</style>
