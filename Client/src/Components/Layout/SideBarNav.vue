
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
          <img :src="dotLogo" alt="" class="logo" />
        </v-list-item-content>
      </v-list-item>

      <v-list>
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-account"
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
        <v-list-group no-action sub-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-account-group"
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
                  <v-btn rounded variant="text"> Disconnect </v-btn>
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
      <create-task-modal></create-task-modal>
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
  name: "Sidebar",
  components: { TaskCard, CreateTaskModal, UpdateTaskModal },
  data: () => ({
    dotLogo,
    drawer: null,
    open: ["Users"],
    user: {
      initials: "AI",
      fullName: "Anna Ipsen",
      email: "anna@anna.dk",
    },
    privateUser: [
      ["Project 1", "mdi-circle"],
      ["Project 2", "mdi-circle"],
    ],
    teamsUser: [
      ['Project 1', 'mdi-circle'],
      ['Project 2', 'mdi-circle'],
    ]
  }),
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
</style>