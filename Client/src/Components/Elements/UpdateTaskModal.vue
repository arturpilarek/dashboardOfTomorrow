<template>
    <v-card
    id="createCard"
    
    >
        <v-card-title> {{ title }} </v-card-title>

        <v-row 
        no-gutters
        >
        <v-card-subtitle
        class="pe-16 me-16"
        v-for="sub in subtitles"
        :key="sub.text"
        >
            <c-card-text>{{ sub.text }}</c-card-text>

        </v-card-subtitle>

        </v-row>

    <v-row>
    <v-textarea
    style="width:550px;"
    class="pa-6"
    id="description"
    label="Description"
    >
    </v-textarea>


    <v-col
    class="pa-10"
    >
    <div
    id="comments"
    color="#ECECEC"
    >
        <section></section>
    </div>

    <v-textarea
    class=""
    id="comment"
    label="Make comment"
    >
    </v-textarea>
    </v-col>
    </v-row>

    <template
    class="d-flex justify-center pl-16 ml-16"
    >
    <v-btn
    id="addBtn"
    >
    UPDATE TASK
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
    width: 1000px;
    height: 450px;
    background: #F6F6F6;
    border-radius: 10px;
}

#description {
    line-height: 40px;
    border-radius: 10px;
}

#comment {
    line-height: 1px;
    border-radius: 10px;
}

#comments {
    width: 200px;
    height: 200px;
    background: #ECECEC;
}



</style>