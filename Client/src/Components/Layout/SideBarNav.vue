<template>
      <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
        dark
        id="navBar"
        expand-on-hover
        rail
      
      >

      <v-list-item>
          <v-list-item-content>
          <img :src="dotLogo" alt="" class="logo">
          </v-list-item-content>
        </v-list-item>


      <v-list

      >
        <v-list-group
        >
            <template 
            v-slot:activator="{ props }">
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


      </v-navigation-drawer>


<v-main>


<!-- <update-task-modal>

</update-task-modal> -->

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
  components: { TaskCard, CreateTaskModal, UpdateTaskModal},
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
  background: linear-gradient(180deg, #47126B 0%, #EA698B 100%);
}


#addBtn {
width: 113px;
height: 32px;
background: #EA698B;
color: white;
border-radius: 10px;
}


</style>