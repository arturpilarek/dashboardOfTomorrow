<template>
    <v-card class="todoCard" @click="openModal">
      <v-card-title>{{ todo.todoName }}</v-card-title>
      <v-card-text>{{ todo.todoDescription }}</v-card-text>
      
    </v-card>
   
  </template>
  
  <script>
  export default {
    props: ['todo'],
    methods: {
    openModal() {
      this.$emit('open-modal', this.todo);
    }
  }
    
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