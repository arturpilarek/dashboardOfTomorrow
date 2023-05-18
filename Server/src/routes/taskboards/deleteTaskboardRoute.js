const TaskboardModel = require("../../models/TaskboardModel");
const UserModel = require("../../models/UserModel")
const TodoModel = require("../../models/TodoModel");

module.exports = async(req,res) => {
    //get id from req.params
    let taskboardId = req.params.taskboardId;

    try {
   

    let taskboardObject = await TaskboardModel.findOne({taskboardID: taskboardId});
        
        // Finder ID fra databasen som matcher med den ID vi søger + sletter
        // Hvis der er fejl
        if (!taskboardObject) {
            return res.status(404).json({msg: 'taskboard not found'})
        }
        //Get User id from todo
        let userId = taskboardObject.userID;
        //find user from userID
        let userObject = await UserModel.findOne({userID: userId});
        //variable to hold users todo array
        let userTodoArray = userObject.taskboards_id;
        //Get the index of wanted todo
        let taskboardIndex = userTodoArray.indexOf(taskboardId);
        //Delete todo from array
        userObject.taskboards_id.splice(taskboardIndex, 1);
        //save User object to MongoDB
        userObject.save();

        //find all todos from taskboard and delete them
        for (let i = 0; i < taskboardObject.taskboardTasksID.length; i++) {
            let currentTodo = await TodoModel.findOneAndDelete({todoID: taskboardObject.taskboardTasksID[i]})
        }

        // //delete the todo from MongoDB
        // let result = await TaskboardModel.deleteOne({taskboardID: taskboardId});


        // respons på 
        res.status(200).json(`taskboard ${taskboardId} deleted`)

    }
    // Hvis det ikke virker...
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }

    // Huske at have routes koblet til!!!

}
