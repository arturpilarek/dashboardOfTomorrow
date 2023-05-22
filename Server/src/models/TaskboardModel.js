const mongoose = require("mongoose");

const taskboardSchema = new mongoose.Schema({
    userID: { type: String },
    taskboardID: { type: String },
    taskboardName: { type: String, required: true },
    taskboardTasksID: [{ type: String }],
    teamID: { type: String }

},
    { collection: "taskboards" }
);
const taskboardModel = mongoose.model('taskboard', taskboardSchema)
module.exports = taskboardModel;

