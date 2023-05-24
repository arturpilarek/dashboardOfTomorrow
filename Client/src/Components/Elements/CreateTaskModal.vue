<template>
  <v-row justify="center" v-model="dialog">
    <v-dialog v-model="dialog" persistent width="700">

      <template v-slot:activator="{ props }">
        <v-btn color="#EA698B" v-bind="props" class="text-white">
          + ADD TASK
        </v-btn>
      </template>

      <v-card color="#ECECEC">

        <v-container class="flex justify-center">
          <v-col class="pl-6">
            <!--taskname + close btn-->
            <v-row class="d-flex justify-space-between">
              <v-text-field label="Taskname"></v-text-field>
              <v-btn @click="dialog = false" icon="mdi-close" variant="plain"></v-btn>
            </v-row>

            <!--subtitles-->
            <v-row class="d-flex justify-space-between">
              <v-card-subtitle class="p-16 me-16" v-for="sub in subtitles" :key="sub.text">
                <c-card-text>{{ sub.text }}</c-card-text>
              </v-card-subtitle>
            </v-row>

            <v-row class="d-flex justify-space-between">
              <!--dropdown-->
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn class="text-white" flat v-bind="props" append-icon="mdi-menu-down" color="#EA698B">
                    <span>To Do</span>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="link in links" :key="link.text">
                    <v-list-item-title class="text-black">{{ link.text }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

              <!--avatar-->
              <div class="pl-16">
                <v-avatar color="#EA698B" size="small" class="text-white">
                  <span class="text-h7">{{ user.initials }}</span>
                </v-avatar>
              </div>

              <!--date-->
              <div>

                <VueDatePicker id="datePicker" :enable-time-picker="false" v-model="due"></VueDatePicker>

              </div>
            </v-row>

            <!--description-->
            <v-textarea id="description" class="pt-6" label="Description" variant="solo" rows="10">
            </v-textarea>

            <!--add task btn-->
            <v-row class="d-flex justify-end pr-3">
              <v-btn id="addBtn" @click="showModal = false">
                ADD TASK
              </v-btn>
            </v-row>

          </v-col>

        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';



export default {
  name: 'CreateTaskModal',
  emits: ['hideModal'],
  components: {
    VueDatePicker
  },
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

<style scoped></style>

