<template>
  <div>
    <h2>Starting page</h2>
    <p v-for="(taskboard, index) in boards" :key="index">
      {{ taskboard.taskboardID }}
    </p>
  </div>
</template>

<script setup>
import { useTaskDataStore } from "../stores/tasksData.store";

const { boards } = useTaskDataStore();

console.log(boards);
</script>
  