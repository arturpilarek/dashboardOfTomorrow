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
          <router-link to="/"><img :src="dotLogo" /></router-link>
        </v-list-item-content>
      </v-list-item>

      <!-- Private -->
      <v-list v-if="taskDataStore.boards[0]" v-model="open">
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
            v-for="project in taskDataStore.boards"
            :key="project.taskboardID"
            :title="project.taskboardName"
            :value="project.taskboardName"
          ></v-list-item>
        </v-list-group>

        <!-- Teams -->
        <v-list-group value="teams">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-account-group"
              title="Teams"
            ></v-list-item>
          </template>
          <v-list-group
            v-for="team in taskDataStore.teams"
            :value="team.teamName"
            :key="team.teamID"
          >
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" :title="team.teamName"></v-list-item>
            </template>
            <v-list-item
              v-for="taskboard in team.teamTaskboards"
              prepend-icon="mdi-circle"
              :title="taskboard.taskboardName"
              :value="taskboard.taskboardName"
              :key="taskboard.taskboardID"
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
    </v-navigation-drawer>

    <v-main> </v-main>
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
import { useTaskDataStore } from "../../stores/tasksData.store";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const taskDataStore = useTaskDataStore();

const drawer = ref(null);
const open = ref(["Users"]);
const user = ref({
  initials: "AI",
  fullName: "Anna Ipsen",
  email: "anna@anna.dk",
});
onMounted(() => {
  setTimeout(() => {
    setRandomColors();
  }, 1500);
});

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