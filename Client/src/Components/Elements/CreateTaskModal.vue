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
              <v-text-field v-model="task.name" label="Taskname"></v-text-field>
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
              <div style="width: 100px;">
              <v-select density="compact" id="selector" class="custom-select" :items="links" v-model="task.state" theme="light" >
              </v-select>
            </div>

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
            <v-textarea v-model="task.description" id="description" class="pt-6" label="Description" variant="solo" rows="10">
            </v-textarea>

            <!--add task btn-->
            <v-row class="d-flex justify-end pr-3">
              <v-btn id="addBtn" @click="addTask()">
                ADD TASK
              </v-btn>
            </v-row>

          </v-col>

        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import {useTaskDataStore} from '../../stores/tasksData.store';
import {ref} from 'vue';

const dialog = ref(false);

const title = ref('')
const task = ref({
  name: '',
  due: '',
  state: '',
  description: ''
})

const subtitles = ref([
  {
    text: 'STATUS'
  },
  {
    text: 'ASSIGNED TO'
  },
  {
    text: 'PICK DATE'
  }
])

const links = ref([
  "TODO",
  "DOING",
  "DONE"
])

const due = ref(null)

const description = ref('');

const todoState = ref('');

const user = ref({
  initials: "",
  fullName: ""
})

function addTask() {
      const taskStore = useTaskDataStore()
      console.log(taskStore)
      taskStore.createTask(task.value.name, task.value.description, task.value.state, false, 'taskboard3')

      taskStore.scream
      dialog.value = false;
    }

// export default {
//   name: 'CreateTaskModal',
//   emits: ['hideModal'],
//   components: {
//     VueDatePicker
//   },
//   data() {
//     return {
//       dialog: false,
//       title: '',
//       store: useTaskDataStore,
//       subtitles: [
//         {
//           text: 'STATUS'
//         },
//         {
//           text: 'ASSIGNED TO'
//         },
//         {
//           text: 'PICK DATE'
//         }
//       ],
//       links: [
//          "Todo",
//          "Doing",
//          "Done"
//       ],
//       todoState: "",
//       description: "",
//       user: {
//         initials: 'AI',
//         fullName: 'Anna Ipsen',
//       },
//       due: null,
//     }
//   },
//   methods: {

// }
</script>

<style scoped>
.v-input__control{
  width: 20px;
}
</style>

