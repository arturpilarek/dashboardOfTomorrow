<script setup>
import { onMounted } from "vue";
import { useCounterStore } from "./stores/counter";
import { useExpressRoute } from "./stores/apiData";
import axios from "axios";

const counterStore = useCounterStore();

function incrementCounter() {
  counterStore.increment();
}

const expressRoute = useExpressRoute();

async function getData() {
  await expressRoute.getData();
}

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <v-switch label="Switch"></v-switch>
    <div class="sass-test">
      <p>Sass testing</p>
    </div>
    <div>
      <p>Pinia testing</p>
      <p>pinia counter: {{ counterStore.counter }}</p>
      <button @click="incrementCounter">Increment counter</button>
    </div>
    <div>
      <p>Express route testing</p>
      <button @click="getData">get data</button>
      <p>apiData: {{ expressRoute.apiData }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.sass-test {
  p {
    color: red;
  }
}
</style>
