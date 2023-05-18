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
        console.log(currentUserObject);

        //Assign all user variabels to Super
        superObject = {
            userID: currentUserObject.userID,
            first_name: currentUserObject.first_name,
            last_name: currentUserObject.last_name,
            email: currentUserObject.email
        }
        console.log("Super Object: ")
        console.log(superObject);

        // //Variable to hold Array
        // let todoArray = currentUserObject.todos_id;
    
        // //From User object, load all the taskboards and teams
        // for (let i = 0; i < todoArray.length; i++) {
        //     let currentTodo = await         
        // }
    
        //Taskboards - Load all tasks on taskboard
    
        //Teams - Load all taskboards on teams
    
        //Team Taskboard - Load all tasks on Team taskboard

    } catch (error) {
        
    }

}