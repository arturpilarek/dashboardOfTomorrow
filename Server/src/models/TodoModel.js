const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    text: {
        type:String,
        required: true
    },
    completed: {
        type:Boolean
    }
    // Add more fields here
})

const TodoModel = mongoose.model('todo', todoSchema)

module.exports = TodoModel
