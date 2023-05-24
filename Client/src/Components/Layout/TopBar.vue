<template v-slot:extension>
  <section>
    <v-container id="topbarContainer" class="ma-3">
      <h1 class="text-h4 mb-3">App</h1>
      <div id="" class="d-flex justify-space-between">
        <v-tabs v-model="tab" align-with-title>
          <v-tab value="board">BOARD</v-tab>
          <v-tab value="calendar">CALENDAR</v-tab>
          <v-tab value="table">TABLE</v-tab>
        </v-tabs>

        <v-spacer></v-spacer>

        <div>
          <create-task-modal></create-task-modal>
        </div>
      </div>
    </v-container>

    <v-container>
      <v-window v-model="tab">
        <v-window-item value="board">
          <BoardView />
        </v-window-item>

        <v-window-item value="calendar">
          <CalendarView />
        </v-window-item>

        <v-window-item value="table">
          <TableView />
        </v-window-item>
      </v-window>


    </v-container>

    <p>{{ this.tabChosen }}</p>
    <v-spacer></v-spacer>
    <v-container>

    <div>
      <createModal @click="showModal = false" @hide-modal="hideModal" class="d-flex justify-end"></createModal>
      <!-- <v-btn
    id="addBtn"
    @click="showModal = true"
    
    >
    + ADD TASK
</v-btn> -->
    </div>
    
  </v-container>
</section>
</template>

<script>
import calendarView from "../../views/calendarView.vue";
import tableView from "../../views/tableView.vue";
import boardView from "../../views/boardView.vue";
import createModal from '../Elements/CreateTaskModal.vue'
import { ref } from 'vue';
import BoardView from "../../views/boardView.vue";
import CalendarView from "../../views/calendarView.vue";
import TableView from "../../views/tableView.vue";

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
  components: {
    calendarView,
    tableView,
    boardView,
  },
  setup() {
    const showModal = ref(false);

    return {
      showModal
    };
  },
  components: {
    createModal,
    BoardView,
    CalendarView,
    TableView
},
  methods: {
    hideModal() {
      emit('hideModal')
    }
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