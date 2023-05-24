<template>
    <v-card class="todoCard">
      <v-card-title>{{ todo.todoName }}</v-card-title>
      <v-card-text>{{ todo.todoDescription }}</v-card-text>
      
    </v-card>
    <v-dialog>
        <v-card>
            <v-card-title>{{ selectedTodo.todoName }}</v-card-title>
            <v-card-text> {{ selectedTodo.todoDescription }}</v-card-text>
        </v-card>

        <v-card-actions>
          <v-btn @click="closeModal">Close</v-btn>
        </v-card-actions>
    </v-dialog>
  </template>
  
  <script>
  export default {
    props: ['todo'],
    
  }
  </script>
  
  <style scoped>
  .todoCard{
    margin-top: 10px;
    margin-bottom: 10px;
  }
   .todoCard:hover{
    background-color: grey;

  }
    
  </style>