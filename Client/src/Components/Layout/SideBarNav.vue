<template>
    <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      id="navBar"
      
    >

    <v-list-item>
        <v-list-item-content>
        <img :src="dotLogo" alt="" class="logo">

        </v-list-item-content>
      </v-list-item>


    <v-card
    class="mx-auto"
    id="vCard"
    width="300"
    >
    <v-list>
      <v-list-group
      value="Admin"
      
      >
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="PRIVATE"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in privateUser"
            :key="i"
            :title="title"
            :prepend-icon="icon"
            :value="title"
          ></v-list-item>
        </v-list-group>
    </v-list>

    <v-list>
      <v-list-group 
      no-action
        sub-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="TEAMS"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in teamsUser"
            :key="i"
            :title="title"
            :prepend-icon="icon"
            :value="title"
          ></v-list-item>
        </v-list-group>
    </v-list>

    </v-card>


      <!--  -->
    </v-navigation-drawer>


<v-app-bar app>
  <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

  <v-toolbar-title>Application</v-toolbar-title>

  <template v-slot:extension>
    <v-tabs align-with-title>
      <v-tab>Board</v-tab>
      <v-tab>Calendar</v-tab>
      <v-tab>Table</v-tab>
    </v-tabs>
    <v-spacer></v-spacer>
    
    <v-btn
    id="addBtn"
    >
    + ADD TASK
    </v-btn>
  </template>

</v-app-bar>

<v-main>

<update-task-modal>
  
</update-task-modal>

  <!--  -->
</v-main>


</v-app>
    
  
</template>

<script>
import dotLogo from '../../assets/LogoSvg/dot.png'
import TaskCard from '../Elements/TaskCard.vue';
import CreateTask from '../Elements/CreateTaskModal.vue'
import CreateTaskModal from '../Elements/CreateTaskModal.vue';
import UpdateTaskModal from '../Elements/UpdateTaskModal.vue';

export default {
  components: { TaskCard, CreateTaskModal, UpdateTaskModal },
    data: () => ({
      dotLogo,
      drawer: null,
      open: ['Users'],
      privateUser: [
        ['Project 1', 'mdi-account-multiple-outline'],
        ['Project 2', 'mdi-cog-outline'],
      ],
      teamsUser: [
      ['Project 1', 'mdi-account-multiple-outline'],
        ['Project 2', 'mdi-cog-outline'],
      ]
    })
}
</script>

<style lang="scss">
#navBar {
  background: linear-gradient(to left, #47126B, #EA698B)
}

#vCard {
  background: transparent;
  color: white;
  border: none;
}

#addBtn {
width: 113px;
height: 32px;
background: #EA698B;
color: white;
border-radius: 10px;
}
</style>