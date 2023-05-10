const mongoose = require("mongoose");
const TodoModel = require("../models/TodoModel")

const taskboardSchema = new mongoose.Schema({
    userID: {type: String},
    taskboardID: {type: String, required: true},
    taskboardName: {type: String, required:true},
    taskboardTasks: [{type: TodoModel}]

},
    {collection: "taskboards"}
);
module.exports = TaskBoard = mongoose.model("taskboard", taskboardSchema);