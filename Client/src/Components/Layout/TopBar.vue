<template v-slot:extension>
<<<<<<< HEAD
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
=======
    <v-container
    id="topbarContainer"
    class="ma-3"
    >
    <h1 class="text-h4 mb-3"><v-icon @click="drawer = !drawer">mdi-menu</v-icon> App</h1>
    <div
    id=""
    class="d-flex justify-space-between"
    >  
    <v-tabs
    align-with-title
    >
        <v-tab
        v-for="tab in tabs"
        :key="tab.tab"
        >{{ tab.tab }}</v-tab>

    </v-tabs>
    <v-spacer></v-spacer>

    
    <div>
    <v-btn
    id="addBtn"
    @click="showModal = true"
    
    >
    + ADD TASK
</v-btn>
</div>
</div>

<createModal v-if="showModal" @click="showModal = false"></createModal>
</v-container>
>>>>>>> 3990873 (added clickevents)

        <v-window-item value="table"> Three </v-window-item>
      </v-window>

      <p>{{ this.tabChosen }}</p>
      <v-spacer></v-spacer>

<<<<<<< HEAD
      <div>
        <v-btn id="addBtn"> + ADD TASK </v-btn>
      </div>
    </div>
  </v-container>
=======


>>>>>>> 3990873 (added clickevents)
</template>

<script>
import createModal from '../Elements/CreateTaskModal.vue'
import { ref } from 'vue';

export default {
<<<<<<< HEAD
  name: "Topbar",
  data() {
    return {
      tab: null,
    };
  },
};
=======
data() {
  return {
      drawer: null,
        tabs: [
            {tab: 'BOARD', to:'/Client/src/views/Startingpage.vue'},
            {tab: 'CALENDAR', to:'/Client/src/views/Startingpage.vue'},
            {tab: 'TABLE', to:'/Client/src/views/Startingpage.vue'}
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
}
>>>>>>> 3990873 (added clickevents)
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