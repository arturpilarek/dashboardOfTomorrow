<template>
      <div class="taskContainer">
    <v-row>
      <v-col cols="4">
        <div
        class="hBox"
        >
        <h2>To Do</h2>
        </div>
        <v-list>
          <v-list-item v-for="task in tasks.filter(task => task.status === 'todo')" :key="task.id">
            <v-list-item-content>{{ task.title }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="4">
        <div
        class="hBox"
        id="doing"
        >
        <h2>Doing</h2>
        </div>
        <v-list>
          <v-list-item v-for="task in tasks.filter(task => task.status === 'doing')" :key="task.id">
            <v-list-item-content>{{ task.title }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="4">
        <div
        class="hBox"
        id="done"
        >
        <h2>Done</h2>
        </div>
        <v-list>
          <v-list-item v-for="task in tasks.filter(task => task.status === 'done')" :key="task.id">
            <v-list-item-content>{{ task.title }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </div>
  
</template>

<script>
export default {
    name: 'TaskContainer',
    data() {
    return {
      tasks: []
    }
  },
  methods: {
    filteredTasks(status) {
      return this.tasks.filter(task => task.status === status)
    }
  },
//   created() {
//     const store = useStore()
//     this.tasks = store.state.tasks
//   }
}

</script>

<style>

.hBox {
    display: flex;
    justify-content: center;
    width: 393px;
    height: 64px;
    background: #EA698B;
    border-radius: 10px;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 35px;
    line-height: 60px;
    color: #FFFFFF;
}

#doing {
    background: #C05299;
}

#done {
    background: #822FAF;
}

</style>