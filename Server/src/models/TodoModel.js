const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    //Der mangler ID til taskboard, og taskboard som skal kobles til User
    todoID: {
        type: String,   
        unique: true
    },
    todoName: {
        type: String,
        required: true
    },
    todoDescription: {
        type:String,
        required: true
    },
    //How should state be handled? String or number?
    todoState:{
        type: String,
        required: true
    },
    todoCompleted: {
        type:Boolean
    },
    userId: {
        type: String
    },
    teamId: {
        type: String
    }
    //Fields missing:
    //Taskboard ID, User ID, SubTasks(Save for later)
}, 
//Specify what collection in database to use
{collection: "tasks"})

const TodoModel = mongoose.model('todo', todoSchema)

module.exports = TodoModel
