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
          <v-btn id="addBtn"> + ADD TASK </v-btn>
        </div>
      </div>
    </v-container>

    <v-container>
      <v-window v-model="tab">
        <v-window-item value="board">
          <boardView />
        </v-window-item>

        <v-window-item value="calendar">
          <calendarView />
        </v-window-item>

        <v-window-item value="table">
          <tableView />
        </v-window-item>
      </v-window>
      
    </v-container>

  </section>
</template>

<script>
import calendarView from "../../views/calendarView.vue";
import tableView from "../../views/tableView.vue";
import boardView from "../../views/boardView.vue";

export default {
  name: "Topbar",
  components: {
    calendarView,
    tableView,
    boardView,
  },
  data() {
    return {
      tab: null,
    };
  },
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