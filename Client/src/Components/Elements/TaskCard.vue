<template>
  <v-card
  class="taskCard"
  >

    <v-card-title
    class="d-flex justify-space-between"
    >
        {{ title }}


        <v-menu
        activator="#menu-activator"
        offset-y
        class="dropdown"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              id="menu-activator"
              color="pink"
              dark
              v-bind="attrs"
              v-on="on"
            >
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="title in tasks"
              :key="title.title"
            >
              <v-list-item-title>{{ title.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
    </v-card-title>


    <v-card-subtitle>
        Due date
    </v-card-subtitle>

    <v-card-text>
        description
    </v-card-text>



  </v-card>
</template>

<script>
  export default {
    data: () => ({
      title: 'Taskname',  
      tasks: [
        { title: 'To Do' },
        { title: 'Doing' },
        { title: 'Done' },

      ],
    }),
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