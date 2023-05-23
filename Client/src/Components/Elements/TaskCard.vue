<template>
  <v-card color="#ECECEC" class="taskCard">

    <v-card-title class="d-flex justify-space-between">
      {{ title }}


      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn flat v-bind="props" append-icon="mdi-menu-down" color="#EA698B" class="text-white">
            <span>To Do</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in links" :key="link.text">
            <v-list-item-title class="text-black">{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-title>


    <v-card-subtitle v-for="date in duedate" :key="date.text">
      {{ date.text }}
    </v-card-subtitle>

    <v-card-text append-icon="mdi-menu-right">
      content
    </v-card-text>



  </v-card>
</template>

<script>

export default {
  data: () => ({
    title: 'Taskname',
    duedate: [
      { text: 'due date' }
    ],
    links: [
      { text: 'TO DO' },
      { text: 'DOING' },
      { text: 'DONE' },
    ],
  }),
  // setup() {
  //   const taskStore = useTaskStore();

  //   // Access tasks from the store
  //   const tasks = taskStore.tasks;

  //   return {
  //     tasks,
  //   };
  // },

}
</script>

<style>
.taskCard {
  width: 385px;
  height: 147px;
  background: #ECECEC;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
</style>