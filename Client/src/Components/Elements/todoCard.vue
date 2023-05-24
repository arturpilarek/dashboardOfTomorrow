<template>
    <v-card>
      <v-card-title>{{ todo.todoName }}</v-card-title>
      <v-card-text>{{ todo.todoDescription }}</v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="completeTodo">Complete</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    props: ['todo'],
    methods: {
      completeTodo() {
        // Handle the logic to mark the todo as completed
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your custom card styling here */
  </style>