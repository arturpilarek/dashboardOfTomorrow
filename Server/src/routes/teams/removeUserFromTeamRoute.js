const TeamModel = require("../../models/TeamModel");
const UserModel = require("../../models/UserModel");

module.exports = async (req,res) => {
    //Get current teamID from req.params
    let currentTeamID = req.params.teamID;

    //Get UserID from req.body
    let currentUserID = req.body.UserID;


    try {

        //Get team object matching ID
        let currentTeamObject = await TeamModel.findOne({teamID: currentTeamID});
        console.log("Team Before Delete: ")
        console.log(currentTeamObject);
        
        //variable to hold team members array
        let teamMembersArray = currentTeamObject.teamMember;
        //Get the index of wanted user
        let userIndex = teamMembersArray.indexOf(currentUserID);
        //Delete user from array
        teamMembersArray.splice(userIndex, 1);
        
        //Get user object matching ID
        let currentUserObject = await UserModel.findOne({userID: currentUserID});
        console.log("User Before Delete: ")
        console.log(currentUserObject);
        
        //variable to hold users userTeams array      
        let userTeamArray = currentUserObject.teams_id;
        //Get the index of wanted team
        let teamIndex = userTeamArray.indexOf(currentTeamID);
        //Delete team from array
        userTeamArray.splice(teamIndex, 1);
        
        console.log("After Delete: ")
        
        console.log(currentUserObject);
        console.log(currentTeamObject);
        
        
        //Save both objects
        currentTeamObject.save();
        currentUserObject.save();

        res.status(200).json(`Succesfully remove ${currentUserID} from ${currentTeamID}`)





    } catch (err) {
        res.status(500).json({error: err.message})
        
    }

}