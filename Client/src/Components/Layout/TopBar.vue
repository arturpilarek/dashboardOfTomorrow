<template v-slot:extension>
  <v-container id="topbarContainer" class="ma-3">
    <h1 class="text-h4 mb-3">App</h1>
    <div id="" class="d-flex justify-space-between">
      <v-tabs v-model="tab" align-with-title>
        <v-tab value="board">BOARD</v-tab>
        <v-tab value="calendar">CALENDAR</v-tab>
        <v-tab value="table">TABLE</v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <v-window-item value="board"> One </v-window-item>

        <v-window-item value="calendar"> Two </v-window-item>

        <v-window-item value="table"> Three </v-window-item>
      </v-window>

      <p>{{ this.tabChosen }}</p>
      <v-spacer></v-spacer>

      <div>
        <v-btn id="addBtn" @click="showModal = true">
          + ADD TASK
        </v-btn>
      </div>
      <createModal v-if="showModal" @click="showModal = false"></createModal>
    </div>
  </v-container>
</template>

<script>
import createModal from '../Elements/CreateTaskModal.vue'
import { ref } from 'vue';

export default {
  name: "Topbar",
  data() {
    return {
      tab: null,
      drawer: null,
      tabs: [
        { tab: 'BOARD', to: '/Client/src/views/Startingpage.vue' },
        { tab: 'CALENDAR', to: '/Client/src/views/Startingpage.vue' },
        { tab: 'TABLE', to: '/Client/src/views/Startingpage.vue' }
      ]
    }
  },
  setup() {
    const showModal = ref(false);

    return {
      showModal
    };
  },
  components: {
    createModal
  }

};
</script>

<style>
#addBtn {
  width: 113px;
  height: 32px;
  background: #ea698b;
  color: white;
  border-radius: 10px;
}
</style>