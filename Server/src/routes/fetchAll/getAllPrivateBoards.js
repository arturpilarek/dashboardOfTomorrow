const TaskboardModel = require("../../models/TaskboardModel");
const TodoModel = require("../../models/TodoModel");
const UserModel = require("../../models/UserModel");


module.exports = async(req,res) => {
    let userID = req.params.userID;

    let taskboardArray = {
        taskboards: []
    }

    try {
        let currentUserObject = await UserModel.findOne({userID: userID});
        console.log(currentUserObject)

        //Taskboards - Load all tasks on taskboard
        let taskboardIDArray = await currentUserObject.taskboards_id;
        
        for (let i = 0; i < taskboardIDArray.length; i++) {
            //current taskboard
            let currentTaskboard = await TaskboardModel.findOne({taskboardID: taskboardIDArray[i]});
            if(currentTaskboard.teamID){
                //If there's a teamID, we don't want the model
                continue;
            }else{

                
                //New taskboard
                let newTaskboard = {
                    userID: currentTaskboard.userID,
                    taskboardID: currentTaskboard.taskboardID,
                    taskboardName: currentTaskboard.taskboardName,
                    taskboardTodos: [],
                    teamID: currentTaskboard.teamID
                    
                };
                
                //variable for Todo Array 
                let todoArray = currentTaskboard.taskboardTasksID;
                
                //for every todo on taskboard, loop through and push to new taskboard
                for (let j = 0; j < todoArray.length; j++) {                
                    //get current Todo
                    let currentTodo = await TodoModel.findOne({todoID: todoArray[j]})    
                    newTaskboard.taskboardTodos.push(currentTodo);        
                }
                
                
                //Push the new Taskboard to SuperObject
                taskboardArray.taskboards.push(newTaskboard);  
                
            }
            
        }
        res.status(200).json(taskboardArray)
        
    } catch (err) {
        res.status(500).json({error: err.message})
        
    }


}