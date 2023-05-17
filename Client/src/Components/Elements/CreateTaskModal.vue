<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="700">



      <template v-slot:activator="{ props }">
        <v-btn color="#EA698B" v-bind="props">
          Open Dialog
        </v-btn>
      </template>
      <v-card>

        <v-container class="bg-surface-variant">
          <v-row no-gutters>
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

                <v-menu
                >
      <template  v-slot:activator="{ props }">
        <v-btn
          color="pink"
          v-bind="props"
        >
          Activator slot
        </v-btn>
      </template>
      <v-list
      >
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      </v-menu>

    <v-col
    style="width: 30px;"
      cols="9"
      sm="6"
    >
      <v-date-picker
        v-model="dates"
        multiple
      ></v-date-picker>
    </v-col>

      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="dates"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-combobox
            v-model="dates"
            multiple
            chips
            small-chips
            label="Multiple picker in menu"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-combobox>
        </template>
        <v-date-picker
          v-model="dates"
          multiple
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(dates)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>




              </v-row>


              <v-textarea id="description" style="width:600px" class="pt-6" label="Description" variant="solo" rows="10">
              </v-textarea>

              <v-row class="d-flex justify-end pr-13">
                <v-btn id="addBtn">
                  ADD TASK
                </v-btn>
              </v-row>

            </v-col>


          </v-row>
        </v-container>


        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#EA698B" variant="text" @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
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
          text: 'DATES'
        }
      ],
      dates: ['2018-09-15', '2018-09-20'],
      menu: false,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }
  }
}
</script>

<style>

/* #createCard {
    margin-top: 30px;
    width: 700px;
    height: 450px;
    background: #F6F6F6;
    border-radius: 10px;
}

#textarea {
    line-height: 40px;
} */
</style>