const mongoose = require("mongoose");
const TaskboardModel = require("./TaskboardModel")
const TodoModel = require("./TodoModel");


const superSchema = new mongoose.Schema({
    userID: {type: String},
    first_name: {type: String},
    last_name: {type: String},
    email: {type: String},
    taskboards: [{
        userID: {type: String},
        taskboardID: {type: String},
        taskboardName: {type: String, required: true},
        taskboardTodos: [TodoModel.schema]
    }]

})
const SuperModel = mongoose.model("super", superSchema);
module.exports = SuperModel