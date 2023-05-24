<template>
    <section>
        <h2>Board</h2>
    </section>
    <section>
    <tasks-container></tasks-container>
  </section>
</template>
<script>
import tasksContainer from "../Components/Elements/TasksContainer.vue"
export default({
  components: {
    tasksContainer
  }
})
</script>