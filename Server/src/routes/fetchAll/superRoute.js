const UserModel = require("../../models/UserModel")
const TodoModel = require("../../models/TodoModel");
const TaskboardModel = require("../../models/TaskboardModel");
const TeamModel = require("../../models/TeamModel");
const SuperModel = require("../../models/SuperModel");

module.exports = async (req,res) => {
    //Get user ID from req.body
    let userID = req.params.userid;
    try {

        let superObject = new SuperModel({});
        
        //Get the User Object
        let currentUserObject = await UserModel.findOne({userID: userID})

        //#region User Section
        superObject.userID = currentUserObject.userID;
        superObject.first_name = currentUserObject.first_name;
        superObject.last_name = currentUserObject.last_name;
        superObject.email = currentUserObject.email;

        //#endregion
        
        //#region Taskboard Section
        //Taskboards - Load all tasks on taskboard
        let taskboardIDArray = await currentUserObject.taskboards_id;
        
        for (let i = 0; i < taskboardIDArray.length; i++) {
            //current taskboard
            let currentTaskboard = await TaskboardModel.findOne({taskboardID: taskboardIDArray[i]});
            
            //New taskboard
            let newTaskboard = new TaskboardModel({
                userID: currentTaskboard.userID,
                taskboardID: currentTaskboard.taskboardID,
                taskboardName: currentTaskboard.taskboardName,
                taskboardTasksID: [],
                teamID: currentTaskboard.teamID
                
            });

            //variable for Todo Array 
            let todoArray = currentTaskboard.taskboardTasksID;
            
            //for every todo on taskboard, loop through and push to new taskboard
            for (let j = 0; j < todoArray.length; j++) {                
                //get current Todo
                let currentTodo = await TodoModel.findOne({todoID: todoArray[j]})    
                newTaskboard.taskboardTasksID.push(currentTodo);        
            }
          
        
            //Push the new Taskboard to SuperObject
            superObject.taskboards.push(newTaskboard);            

        }
        //#endregion

        //#region Teams Section

        //Get current users team id's
        let teamIdArray = currentUserObject.teams_id;

        //loop trough array and get every object
        for (let i = 0; i < teamIdArray.length; i++) {
            
            let currentTeamObject = await TeamModel.findOne({teamID: teamIdArray[i]});
     
            //Create a new team model
            let newTeamObject = {
                teamID: currentTeamObject.teamID,
                teamName: currentTeamObject.teamName,
                teamMember: currentTeamObject.teamMember,
                teamTaskboards: []
            }
            
            //Variable to hold team taskboard array
            let teamTaskboardArray = currentTeamObject.teamTaskboardID;
           

            //For every taskboard in team array, find matching id
            for (let j = 0; j < teamTaskboardArray.length; j++) {

                
                let currentTeamTaskboardObject = await TaskboardModel.findOne({taskboardID: teamTaskboardArray[j]})
                
                //create a new taskboard Object with todo Array
                let newTaskboardObject = {
                    userID: currentTeamTaskboardObject.userID,
                    taskboardID: currentTeamTaskboardObject.taskboardID,
                    taskboardName: currentTeamTaskboardObject.taskboardName,
                    taskboardTodos: [],
                    teamID: currentTeamTaskboardObject.teamID

                }
                //variable to hold todo array from team taskboard
                let teamBoardTodoArray = currentTeamTaskboardObject.taskboardTasksID

                //For every todo on taskboard, load every todo
                for (let k = 0; k < teamBoardTodoArray.length; k++) {
                    let currentTeamTodoObject = await TodoModel.findOne({todoID: teamBoardTodoArray[k]})
                    
                    //push current todo object into newTaskboardObject todo Array
                    newTaskboardObject.taskboardTodos.push(currentTeamTodoObject);

                }        
                //push the new taskboard with new todos into the new Team Object
                newTeamObject.teamTaskboards.push(newTaskboardObject)                
            }

            //Push the new Team object into super Object

            superObject.teams.push(newTeamObject)
            
        }
        

        

        //#endregion
            
        
        console.log("Super Object: ")
        console.log(superObject);

        res.status(200).json(superObject)

        } catch (err) {
            res.status(500).json({error: err.message})
            
        }

}