<template v-slot:extension>
        <v-container
        class="ma-3"
        >
        <h1 class="text-h4 mb-3">App</h1>
        <div
        class="d-flex justify-space-between align-center"
        >  
        <v-tabs
        align-with-title
        >
            <v-tab>Board</v-tab>
            <v-tab>Calendar</v-tab>
            <v-tab>Table</v-tab>


        </v-tabs>
        
        
        <v-btn
        id="addBtn"
        >
            + ADD TASK
        </v-btn>
    </div>
    </v-container>



</template>

<script>
export default {

}
</script>

<style>
#addBtn {
width: 113px;
height: 32px;
background: #EA698B;
color: white;
border-radius: 10px;
}

</style>