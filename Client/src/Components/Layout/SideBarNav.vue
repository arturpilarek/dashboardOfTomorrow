<template>
    <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      id="navBar"
      expand-on-hover
      rail
      width="350"
    >
      <v-list-item>
        <v-list-item-content>
          <router-link to="/"><img :src="dotLogo"/></router-link>
        </v-list-item-content>
      </v-list-item>


    <!-- Private -->
    <v-list v-model:opened="open">
        <v-list-group value="private">
          <template v-slot:activator="{ props }">
            <v-list-item
                v-bind="props"
                prepend-icon="mdi-account"
                title="Private"
            ></v-list-item>
          </template>
          <v-list-item
              prepend-icon="mdi-circle"
              v-for="project in privateUserNew"
              :key="project.taskboardId"
              :title="project.taskboardName"
              :value="project.taskboardName"
          ></v-list-item>
        </v-list-group>
    
      <!--
        <v-list-group value="teams">
          <template v-slot:activator="{ props }">
            <v-list-item
                v-bind="props"
                prepend-icon="mdi-account-group"
                title="Teams"
            ></v-list-item>
          </template>
            <v-list-item
                prepend-icon="mdi-circle"
                v-for="project in teamsUserNew"
                :key="project.taskboardId"
                :title="project.taskboardName"
                :value="project.taskboardName"
            ></v-list-item>
            
          </v-list-group>
        -->
          <!-- Ny teams her -->
          <!-- Notes: 
          1. taskboard må ikke have samme navn, kan være det ændre -->
          
            <v-list-group value="teams">
            <template v-slot:activator="{ props }">
              <v-list-item
                  v-bind="props"
                  prepend-icon="mdi-account-group"
                  title="Teams"
              ></v-list-item>
            </template>
            <v-list-group v-for="team in teams" :value="team.teamName" :key="team.teamID">
                <template v-slot:activator="{ props }">
                  <v-list-item
                  v-bind="props"
                  :title="team.teamName"
                  ></v-list-item>
                </template>
                <v-list-item id="team-items"
                  v-for="taskboard in team.teamTaskboards"
                  
                  v-bind="props"
                  prepend-icon="mdi-circle"
                  :title="taskboard.taskboardName"
                  :value="taskboard.taskboardName"
                  :key="taskboard.taskboardId"
              ></v-list-item>
                
            </v-list-group>
          </v-list-group>
        </v-list>

      <v-spacer></v-spacer>

      <v-container class="avatarContainer pa-7" fluid>
        <v-row>
          <v-menu rounded>
            <template v-slot:activator="{ props }">
              <v-btn icon v-bind="props">
                <v-avatar color="pink" size="large">
                  <span class="text-h5">{{ user.initials }}</span>
                </v-avatar>
              </v-btn>
            </template>
            <v-card>
              <v-card-text>
                <div class="mx-auto">
                  <v-avatar color="pink">
                    <span class="text-h5">{{ user.initials }}</span>
                  </v-avatar>
                  <h3>{{ user.fullName }}</h3>
                  <p class="text-caption mt-1">
                    {{ user.email }}
                  </p>
                  <v-divider class="my-3"></v-divider>
                  <v-btn rounded variant="text">
                    <router-link to="/edit-user"> Edit Account </router-link>
                  </v-btn>
                  <v-divider class="my-3"></v-divider>
                  <v-btn rounded variant="text" @click="authStore.logout">
                    Disconnect
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-menu>
        </v-row>
      </v-container>

      <!-- <v-container class="bottom-container pa-7">
      <v-menu bottom min-width="200px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar color="pink" size="48">
              <span class="white--text text-h5">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
      </v-menu>
    </v-container> -->
    </v-navigation-drawer>

    <v-main>

      <!--  -->
    </v-main>
  </v-app>
</template>

<script setup>
import dotLogo from "../../assets/LogoSvg/dot.svg";
import TaskCard from "../Elements/TaskCard.vue";
import CreateTask from "../Elements/CreateTaskModal.vue";
import CreateTaskModal from "../Elements/CreateTaskModal.vue";
import UpdateTaskModal from "../Elements/UpdateTaskModal.vue";
import { ref, onMounted } from "vue";
import { useAuthStore } from "../../stores/auth.store";

const authStore = useAuthStore();

const drawer = ref(null);
const open = ref(["Users"]);
const user = ref({
  initials: "AI",
  fullName: "Anna Ipsen",
  email: "anna@anna.dk",
});

const privateUser = ref([
  ["Project 1", "mdi-circle"],
  ["Project 2", "mdi-circle"],
]);

const teamsUser = ref([
  ["Project 1", "mdi-circle"],
  ["Project 2", "mdi-circle"],
]);

const privateUserNew = ref([
    {
        taskboardId: "todo3",
        taskboardName: "Awesome mormor",
        prependIcon: "mdi-circle"
      },
      {
        taskboardId: "todo4",
        taskboardName: "Awesome farfar",
        prependIcon: "mdi-circle"
      },
    ])

 const teams = ref([
      {
        teamName: "team123",
        teamID: "tante30",
        teamTaskboards: [
          {
            taskboardId: "ID number 1",
            taskboardName: "taskboard Name 1",
            prependIcon: "mdi-circle"
          },
          {
            taskboardId: "ID number 2",
            taskboardName: "taskboard Name 2",
            prependIcon: "mdi-circle"
          },
          {
            taskboardId: "ID number 3",
            taskboardName: "taskboard Name 3",
            prependIcon: "mdi-circle"
          },
        ],

      },
      {
        teamName: "team321",
        teamID: "onkel15",
        teamTaskboards: [
          {
            taskboardId: "ID number banana 32",
            taskboardName: "taskboard Name xx",
            prependIcon: "mdi-circle"
          },
          {
            taskboardId: "hitler taskboard",
            taskboardName: "taskboard Name hello",
            prependIcon: "mdi-circle"
          },
          {
            taskboardId: "hjelm",
            taskboardName: "zzzZZZZz",
            prependIcon: "mdi-circle"
          },
        ],

      },
    ])   

    onMounted(() => {
      setRandomColors()
    })

    function setRandomColors() {
      const mdiCircles = document.getElementsByClassName("mdi-circle");
      for (let i = 0; i < mdiCircles.length; i++) {
        let color = localStorage.getItem(`color-${i}`);
        if (!color) {
          color = randomColor();
          localStorage.setItem(`color-${i}`, color);
        }
        mdiCircles[i].style.color = color;
      }
    }

    function randomColor() {
      const hue = Math.floor(Math.random() * 360);
      const saturation = Math.floor(Math.random() * 100);
      const lightness = Math.floor(Math.random() * 100);
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }
</script>

<style lang="scss">
  #navBar {
    background: linear-gradient(180deg, #47126b 0%, #ea698b 100%);
    position: relative;
  }

  .v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line {
    color: white;
  }


  .avatarContainer {
    position: absolute;
    bottom: 0;
  }

  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;

  }

  .v-list-items #team-item {
    margin-left: -50px;
  }
</style>