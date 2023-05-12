const TaskboardModel = require("../../models/TaskboardModel");

module.exports = async (req,res) => {

    //Get variables from req.query and assign to variable
    let {taskboardName, taskboardTasks} = req.query

    //Get User ID from req - Not yet implemented
    // let userCreatedTaskboardID = req.query.UserID

    //Search database for objects matching TodoModel
    const taskboardCounter = await TaskboardModel.find({TaskboardModel});

    //Get the last element from array
    let lastTaskboardObject = taskboardCounter.slice(-1);

    //Regex to get number from end of String
    let numberRegex = /\d+$/;

    //Use regex and convert string to Int
    let taskboardIdFromDB = parseInt(lastTaskboardObject[0].taskboardID.match(numberRegex));

    //Increment the ID
    taskboardIdFromDB++;
    let taskboardID = `taskboard${taskboardIdFromDB}`;




    try {       
        //Create a taskboard
        let newTaskboard = new TaskboardModel({
            taskboardID: taskboardID,
            taskboardName: taskboardName,
            taskboardTasks: taskboardTasks
        });

        await newTaskboard.save();
        res.json(newTaskboard);


    } catch (err) {
        res.status(500).json({ error: err.message });

    }


    



}