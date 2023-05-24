const TodoModel = require('../../models/TodoModel');
const taskboardModel = require('../../models/TaskboardModel')
const UserModel = require("../../models/UserModel");
const TeamModel = require('../../models/TeamModel');

module.exports = async (req, res) => {
    //Taking all properties from query and assign to value
    let {todoName, todoDescription,
         todoState, todoCompleted, taskboardID, userID, teamID } = req.body

    //Get the last element in todo Tasks and get the id from it
    //Search database for objects matching TodoModel
    const todoCounter = await TodoModel.find({TodoModel});

    //Get the last element from array
    let lastTodoObject = todoCounter.slice(-1);

    //Regex to get number from end of String
    let numberRegex = /\d+$/;

    //Use regex and convert string to Int
    let todoIdFromDB = parseInt(lastTodoObject[0].todoID.match(numberRegex));

    //Increment the ID
    todoIdFromDB++;
    let taskTodoID = `todoTask${todoIdFromDB}`;
    
    try {
    //Append date
    let dateAdded;
    
    // Change dateformat from crazy shit to normal
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    dateAdded = `${year}-${month}-${day}`;

        if(userID){
            let userObject = await UserModel.findOne({userID: userID});
            //push the taskboard into user taskboard array
            userObject.todos_id.push(taskTodoID);
            await userObject.save();
        }

        if(teamID | !teamID == null | !teamID === ""){
            let teamObject = await TeamModel.findOne({teamID: teamID});
            //push the taskboard into user taskboard array
            teamObject.teamTasks.push(taskTodoID);
            await teamObject.save();
        }
        
        //If there's an taskboardId, than do if loop
        if(taskboardID){
            //Fetch the taskboard matching ID
            let taskboardObject = await taskboardModel.findOne({taskboardID: taskboardID})
            //Push task into taskboard.Tasks Array
            taskboardObject.taskboardTasksID.push(taskTodoID)
            //Save the changes
            await taskboardObject.save();
        }

        
        
        //Create todoTask using values from req.query
        let todoTask = new TodoModel({
            todoID: taskTodoID,
            todoName: todoName,
            todoDescription: todoDescription,
            todoState: todoState,
            todoCompleted: todoCompleted,
            taskboardID: taskboardID,
            userID: userID,
            dateAdded: dateAdded

        });
        
        await todoTask.save();
        res.json(todoTask);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}