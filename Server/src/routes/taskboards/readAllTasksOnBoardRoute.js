const TodoModel = require("../../models/TodoModel")
const TaskboardModel = require("../../models/TaskboardModel");

module.exports = async (req, res) => {
    console.log(req.params);
    console.log(req.query);

    let taskboardID = req.params.boardID

    try {
        //Get taskboard matching ID
        let taskboardObject = await TaskboardModel.findOne({taskboardID: taskboardID});
        console.log(taskboardObject);

        //Loop through task array and get them all
        for (let i = 0; i < taskboardObject.taskboardTasksID.length; i++) {
            console.log(`This is task ${i}: `)
            console.log(taskboardObject.taskboardTasksID[i]);
            //fetch todo matching id
            let currentTodo = await TodoModel.findOne({todoID: taskboardObject.taskboardTasksID[i]})
            console.log(currentTodo)
            
        }


        res.json(taskboardObject)
    } catch (err) {
        res.status(500).json({error: err.message})
        
    }
}