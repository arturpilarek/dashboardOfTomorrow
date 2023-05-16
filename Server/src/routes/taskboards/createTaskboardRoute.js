const TaskboardModel = require("../../models/TaskboardModel");
const TeamModel = require("../../models/TeamModel");
const UserModel = require("../../models/UserModel");

module.exports = async (req,res) => {

    //Get variables from req.query and assign to variable
    let {taskboardName, taskboardTasks, teamID, userID} = req.body


    //Get Team ID from req - Not yet implemented
    let TeamID = teamId;



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
        
        if(teamID){
            let teamObject = await TeamModel.findOne({teamID: teamID});
            console.log(teamObject);
            teamObject.teamTaskboardID.push(taskboardID);
            console.log(taskboardID)
            await teamObject.save();
        }
        if(userID){
            let userObject = await UserModel.findOne({userID: userID});
            console.log(userObject);
            //push the taskboard into user taskboard array
            userObject.taskboards_id.push(taskboardID);
            await userObject.save();
        }

        //Create a taskboard
        let newTaskboard = new TaskboardModel({
            taskboardID: taskboardID,
            taskboardName: taskboardName,
            taskboardTasks: taskboardTasks,
            userID: userID,
            teamID: teamID
        });

        

        await newTaskboard.save();
        res.json(newTaskboard);


    } catch (err) {
        res.status(500).json({ error: err.message });

    }


    



}