<template v-slot:extension>
    <v-container
    id="topbarContainer"
    class="ma-3"
    >
    <h1 class="text-h4 mb-3">App</h1>
    <div
    id=""
    class="d-flex justify-space-between"
    >  
    <v-tabs
    align-with-title
    >
        <v-tab
        v-for="tab in tabs"
        :key="tab.tab"
        >{{ tab.tab }}</v-tab>
        <!-- <v-tab :value="Board">Board</v-tab>
        <v-tab :value="Calendar">Calendar</v-tab>
        <v-tab :value="Table">Table</v-tab> -->


    </v-tabs>
    <v-spacer></v-spacer>

    
    <div>
    <v-btn
    id="addBtn"
    
    >
    + ADD TASK
</v-btn>
</div>
</div>
</v-container>



</template>

<script>
export default {
data() {
    return {
        tabs: [
            {tab: 'BOARD', to:'/Client/src/views/Startingpage.vue'},
            {tab: 'CALENDAR', to:'/Client/src/views/Startingpage.vue'},
            {tab: 'TABLE', to:'/Client/src/views/Startingpage.vue'}
        ]
    }
}
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