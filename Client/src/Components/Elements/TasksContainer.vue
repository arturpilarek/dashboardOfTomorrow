<template>
  <div class="taskContainer">
    <v-row>
      <v-col cols="4" >
        <div class="hBox">
          <h2>To Do</h2>
        </div>
        <div>
          <div v-for="todo in todos.filter(todo => todo.todoState === 'todo')" :key="todo.todoID" >
            <todo-card :todo="todo" @open-modal="openModal"></todo-card>
          </div>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="hBox" id="doing">
          <h2>Doing</h2>
        </div>
        <div>
          <div v-for="todo in todos.filter(todo => todo.todoState === 'doing')" :key="todo.todoID">
            <todo-card :todo="todo" @open-modal="openModal"></todo-card>
          </div>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="hBox" id="done">
          <h2>Done</h2>
        </div>
        <div>
          <div v-for="todo in todos.filter(todo => todo.todoState === 'done')" :key="todo.todoID">
            <todo-card :todo="todo" @open-modal="openModal"></todo-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
  <UpdateTaskModal ref="modalComponent"></UpdateTaskModal>
  
</template>

<script>
import { fakeTaskboards } from '../../stores/fakeTaskboardsData.js';
import TodoCard from '../Elements/todoCard.vue'
import UpdateTaskModal from './UpdateTaskModal.vue';
export default {
  name: 'TaskContainer',

  data() {
    return {
      todos: [],
      modalOpen: false,
      selectedTodo: null
    }
  },
  components: {
    TodoCard,
    UpdateTaskModal
  },
  methods: {
    openModal(object) {
      this.$refs.modalComponent.openModal(object);
    },
    closeModal() {
      this.$refs.modalComponent.closeModal();
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