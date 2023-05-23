const mongoose = require("mongoose");


const superSchema = new mongoose.Schema({
    userID: {type: String},
    first_name: {type: String},
    last_name: {type: String},
    email: {type: String},
    taskboards: [{
        userID: {type: String},
        taskboardID: {type: String},
        taskboardName: {type: String, required: true},
        taskboardTodos: [{type: Object}]
    }],
    teams:[{
        teamID: {type: String},
        teamName: {type: String},
        teamDescription: {type: String},
        teamMember: [{type: String}],
        teamTaskboards: [{
            taskboardID: {type: String},
            taskboardName: {type: String},
            taskboardTodos: [{type: Object}]

        }]
    }]

})
const SuperModel = mongoose.model("super", superSchema);
module.exports = SuperModel