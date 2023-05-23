import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    updateTask(taskIndex, updatedTask) {
      this.tasks[taskIndex] = updatedTask;
    },
    deleteTask(taskIndex) {
      this.tasks.splice(taskIndex, 1);
    },
  },
});