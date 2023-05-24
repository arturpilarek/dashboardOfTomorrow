<template>
  <v-row justify="center">
    <!-- <v-dialog
      v-model="dialog"
      persistent
      width="1024"
    > -->


    <v-card>

      <v-container>
        <v-row no-gutters>
          <v-col>
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
              <!--dropdown-->
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

            <v-textarea id="description" style="width:550px" class="pt-6" label="Description" variant="solo" rows="10">
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
    <!-- </v-dialog> -->
  </v-row>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';


export default {
  components: { VueDatePicker },
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
          text: 'DATES'
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
  }

}
</script>

<style scoped>
#description {
  line-height: 100px;
  border-radius: 10px;
}

#comments {
  background-color: #ececec;
  height: 250px;
}
</style>