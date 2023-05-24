<template>
  <v-row justify="center">
    <v-dialog v-model="modalOpen" class="vdialog">
    <v-card>

      <v-container>
        <v-row no-gutters>
          <v-col>
            <v-row>
              <v-card-title class="pr-16">
                {{ todoName }}</v-card-title>
            </v-row>

            <v-row class="d-flex justify-space-between">
              <v-card-subtitle class="p-16 me-16">
                <c-card-text>This is just a placeholder</c-card-text>

              </v-card-subtitle>
            </v-row>

            <v-row class="d-flex justify-space-between">
              <!--dropdown-->
              <!-- <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn class="text-white" flat v-bind="props" append-icon="mdi-menu-down" color="#EA698B">
                    <span>To Do</span>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="link in links" value="link.text" :key="link.text" @click="selectedStatus = link.text">
                    <v-list-item-title class="text-black">{{ link.text }}</v-list-item-title>
                  </v-list-item>
                </v-list>
                
              </v-menu> -->
              <v-select class="custom-select" :items="links" v-model="todoState" theme="light" >

              </v-select>

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

            <v-textarea v-model="todoDescription" id="description" style="width:550px" class="pt-6" label="Description" variant="solo" rows="10">
            </v-textarea>

            <v-row class="d-flex justify-end pr-2">
              <v-btn id="addBtn">
                UPDATE TASK
              </v-btn>
            </v-row>

          </v-col>

          <v-divider class="pa-4" vertical color="#E6678B" :thickness="4"></v-divider>

          <!--Comments section-->
          <v-col class="pt-3 pl-8">
            <v-row class="d-flex justify-space-between pb-5">
              <!--Comments headtext-->
              <v-card-title class="">Comments</v-card-title>

              <!--Close modal btn-->
              <v-btn @click="dialog = false" icon="mdi-close" variant="plain"></v-btn>
            </v-row>

            <!--section to hold comments-->
            <div style="width:250px" id="comments" color="#ECECEC">
              <section></section>
            </div>


            <!--Add comments-->
            <v-text-field class="pt-4" id="comment" label="Make comment">
            </v-text-field>


          </v-col>
        </v-row>
      </v-container>
    </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';


export default {
  components: { VueDatePicker },
  data() {
    return {
      modalOpen: false,
      todoName: '',
      todoDescription: '',
      subtitles: [
        {
          text: 'STATUS'
        },
        {
          text: 'ASSIGNED TO'
        },
        {
          text: 'DATES'
        }
      ],
      links: [
         "Todo",
         "Doing",
         "Done"
      ],
      todoState: "",
      user: {
        initials: 'AI',
        fullName: 'Anna Ipsen',
        email: 'anna@anna.dk',
      },
      due: null
    }
  },
  methods: {
    openModal(object) {
      console.log("this is title")
      console.log(object)
      this.todoName = object.todoName;
      this.todoDescription = object.todoDescription;
      this.todoState = object.todoState;
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    }
  },

}
</script>

<style scoped>
.vdialog{
  width: 1000px
}
.custom-select .v-select__selection--comma-list .v-select__selection-item {
  color: red;



}
#description {
  line-height: 100px;
  border-radius: 10px;
}

#comments {
  background-color: #ececec;
  height: 250px;
}
</style>