<template>
    <v-card
    id="createCard"
    
    >
        <v-card-title> {{ title }} </v-card-title>

        <v-row 
        no-gutters
        class="d-flex justify-space-between"
        >
        <v-card-subtitle
        v-for="sub in subtitles"
        :key="sub.text"
        >
            <c-card-text>{{ sub.text }}</c-card-text>

        </v-card-subtitle>
        </v-row>

    <v-textarea
    class="pa-6"
    id="textarea"
    label="Description"
    >

    </v-textarea>

    <template
    class="d-flex justify-end pr-6"
    >
    <v-btn
    id="addBtn"
    >
    ADD TASK
    </v-btn>
    </template>

    </v-card>


  
</template>

<script>
export default {
    data() {
        return {
            title: 'Taskname',
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

<style>
#createCard {
    margin-top: 30px;
    width: 700px;
    height: 450px;
    background: #F6F6F6;
    border-radius: 10px;
}

#textarea {
    line-height: 45px;
}

</style>