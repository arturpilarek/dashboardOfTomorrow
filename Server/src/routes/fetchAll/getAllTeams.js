const taskboardModel = require("../../models/TaskboardModel");
const TeamModel = require("../../models/TeamModel");
const TodoModel = require("../../models/TodoModel");
const UserModel = require("../../models/UserModel");
module.exports = async (req,res) => {

    let userID = req.params.userID;
    try {
        let teamsObject = {
            teams: []
        }
        let currentUserObject = await UserModel.findOne({userID: userID});
        console.log(currentUserObject)

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

                
                let currentTeamTaskboardObject = await taskboardModel.findOne({taskboardID: teamTaskboardArray[j]})
                
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

            teamsObject.teams.push(newTeamObject)
            
        }

        res.status(200).json(teamsObject)

        
    } catch (err) {
        res.status(500).json({error: err.message})
        
    }
}