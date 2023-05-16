const TodoModel = require('../../models/TodoModel');
const taskboardModel = require('../../models/TaskboardModel')
const UserModel = require("../../models/UserModel");
const TeamModel = require('../../models/TeamModel');

module.exports = async (req, res) => {
    //Taking all properties from query and assign to value
    let {taskboardId, todoName, todoDescription,
         todoState, todoCompleted, taskboardID, userEmail,teamId } = req.query
    console.log("this is query:");
    console.log(req.query)

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

        if(userEmail){
            let userObject = await UserModel.findOne({email: userEmail});
            console.log("User Object: ")
            console.log(userObject);
            //push the taskboard into user taskboard array
            userObject.todos_id.push(taskTodoID);
            await userObject.save();
        }

        if(teamId){
            let teamObject = await TeamModel.findOne({teamID: teamId});
            console.log("Team Object: ")
            console.log(teamObject);
            //push the taskboard into user taskboard array
            teamObject.teamTasks.push(taskTodoID);
            await teamObject.save();
        }

        //If there's an taskboardId, than do if loop
        if(taskboardId){
            //Fetch the taskboard matching ID
            let taskboardObject = await taskboardModel.findOne({taskboardId: taskboardID})
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
            taskboardId: taskboardId,
            userId: userEmail

        });
        
        await todoTask.save();
        res.json(todoTask);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}