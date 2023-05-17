<template>

<v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
    >
    


      <template v-slot:activator="{ props }">
        <v-btn
          color="#EA698B"
          v-bind="props"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>

    <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col>
        <v-row>
        <v-card-title
            v-for="title in titles"
            :key="title.title"
            class="pr-16"
            >
                {{ title.title }}</v-card-title>
            </v-row>
            
            <v-row
            class="d-flex justify-space-between"
            >
                <v-card-subtitle
            class="p-16 me-16"
            v-for="sub in subtitles"
            :key="sub.text"
            >
                <c-card-text
                >{{ sub.text }}</c-card-text>

            </v-card-subtitle>
        </v-row>
        

                <v-textarea
            id="description"
            style="width:550px"
            class="pt-6"
            label="Description"
            variant="solo"
            rows="10"
            >
            </v-textarea>

            <v-row
            class="d-flex justify-end pr-2" 
            >
            <v-btn id="addBtn">
                    UPDATE TASK
                </v-btn>
            </v-row>

      </v-col>

      <v-divider class="pl-14" vertical color="#E6678B" :thickness="4"></v-divider>
      
      <v-col
      >
      
      <v-card-title class="">Comments</v-card-title>

    
        <div
        style="width:250px"
        id="comments"
        color="#ECECEC"
        >
        <section></section>
        </div>



        <v-text-field  class="pt-4" id="comment" label="Make comment">
        </v-text-field>


      </v-col>
    </v-row>
  </v-container>

        
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="#EA698B"
            variant="text"
            @click="dialog = false"
          >
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
            ]
        }
    }
}
</script>

<style scoped>
/* #updateCard {
    margin-top: 30px;
    width: 100%;
    height: fit-content;
    background: #F6F6F6;
    border-radius: 10px;
} */

#description {
    line-height: 100px;
    border-radius: 10px;
}

#comments{
    background-color: #ececec;
    height: 250px;
}




/* :deep .v-input__details {
    display:none;
} */




</style>