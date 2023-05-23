<template>
  <v-row justify="center" v-model="dialog">
    <!-- <v-dialog v-model="dialog" persistent width="700"> -->



    <v-card color="#ECECEC">

      <v-container class="flex justify-center">
        <v-col class="pl-6">
          <v-row>
            <v-card-title v-for="title in titles" :key="title.title" class="pr-16">
              {{ title.title }}</v-card-title>
          </v-row>

          <v-row class="d-flex justify-space-between">
            <v-card-subtitle class="p-16 me-16" v-for="sub in subtitles" :key="sub.text">
              <c-card-text>{{ sub.text }}</c-card-text>

            </v-card-subtitle>
          </v-row>

          <v-row class="d-flex justify-space-between">
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn class="text-white" flat v-bind="props" append-icon="mdi-menu-down" color="#EA698B">
                  <span>To Do</span>
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="link in links" :key="link.text" @click="selectedStatus = link.text">
                  <v-list-item-title class="text-black">{{ link.text }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-avatar color="#EA698B" size="small" class="text-white">
              <span class="text-h7">{{ user.initials }}</span>
            </v-avatar>

            <v-btn color="#EA698B" class="flex-grow">
              <v-menu min-width="auto">
                <template v-slot:activator="{ on }">
                  <v-text-field class="text-white" type="date" v-on="on" v-model="due" density="compact"></v-text-field>
                </template>
              </v-menu>
            </v-btn>
          </v-row>





          <v-textarea id="description" class="pt-6" label="Description" variant="solo" rows="10">
          </v-textarea>

          <v-row class="d-flex justify-end pr-3">
            <v-btn id="addBtn">
              ADD TASK
            </v-btn>
          </v-row>

        </v-col>



      </v-container>
    </v-card>
    <!-- </v-dialog> -->
  </v-row>
</template>

<script>
import format from 'date-fns/format'


export default {
  data() {
    return {
      dialog: false,
      titles: [
        {
          title: 'Taskname'
        }
      ],
      subtitles: [
        {
          text: 'STATUS'
        },
        {
          text: 'ASSIGNED TO'
        },
        {
          text: 'PICK DATE'
        }
      ],
      links: [
        { text: 'TO DO' },
        { text: 'DOING' },
        { text: 'DONE' },
      ],
      user: {
        initials: 'AI',
        fullName: 'Anna Ipsen',
        email: 'anna@anna.dk',
      },
      due: null
    }
  },
}
</script>

<style>

</style>

