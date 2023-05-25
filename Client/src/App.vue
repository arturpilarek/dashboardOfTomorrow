<script setup>
import { useTaskDataStore } from "./stores/tasksData.store";
import { onMounted } from "vue";

onMounted(() => {
  const taskDataStore = useTaskDataStore();
  const { boards } = taskDataStore;
  boards.length === 0 ? taskDataStore.getAll() : null;
});
</script>

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
    </v-container>
  </main>
</template>


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
