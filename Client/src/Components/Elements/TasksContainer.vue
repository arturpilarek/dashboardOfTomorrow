<template>
      <!-- <div class="taskContainer">
    <v-row>
      <v-col cols="4">
        <div
        class="hBox"
        >
        <h2>To Do</h2>
        </div>
        <v-list>
            <v-list-item v-for="todo in todos.filter(todo => todo.todoState === 'todo')" :key="todo.todoID" style="color: black;">
                <v-list-item-content>{{todo.todoName}}</v-list-item-content>
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
            <v-list-item v-for="todo in todos.filter(todo => todo.todoState === 'doing')" :key="todo.todoID" style="color: black;">
                <v-list-item-content>{{todo.todoName}}</v-list-item-content>
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
            <v-list-item v-for="todo in todos.filter(todo => todo.todoState === 'done')" :key="todo.todoID" style="color: black;">
                <v-list-item-content>{{todo.todoName}}</v-list-item-content>
            </v-list-item>
            
        </v-list>
      </v-col>
    </v-row>
  </div> -->
  <div>
    <h2>doing</h2>
      <div v-for="todo in todos" :key="todo.todoID">
        <todoCard :todo="todo"></todoCard>
      </div>
  </div>
  
</template>

<script>
import {fakeTaskboards} from '../../stores/fakeTaskboardsData.js';
import {todoCard} from '../Elements/todoCard.vue'
export default {
    name: 'TaskContainer',
    components: {
      todoCard
    },
    data() {
      return {
        todos: []
      }
  },
  methods: {
    filteredTasks(status) {
      return this.tasks.filter(task => task.status === status)
    },
    fetchTodos() {
      // Loop through the taskboards and extract the todos
      fakeTaskboards.forEach((taskboard) => {
        this.todos.push(...taskboard.taskboardTodos);
      });
    },
    
  },
  mounted() {
    this.fetchTodos();
  }
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