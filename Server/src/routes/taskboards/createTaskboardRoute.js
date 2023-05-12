const TaskboardModel = require("../../models/TaskboardModel");

module.exports = async (req,res) => {

    //Get variables from req.query and assign to variable
    let {taskboardName, taskboardTasks} = req.query

    //Get User ID from req - Not yet implemented
    // let userCreatedTaskboardID = req.query.UserID

    //Get taskboard values from req
    // let taskboardId = req.params.id;
    console.log(req.params);



    try {       
        //Create a taskboard
        let newTaskboard = new TaskboardModel({
            taskboardID: "taskboardKapper1",
            taskboardName: taskboardName,
            taskboardTasks: taskboardTasks
        });

        await newTaskboard.save();
        res.json(newTaskboard);


    } catch (err) {
        res.status(500).json({ error: err.message });

    }


    



}