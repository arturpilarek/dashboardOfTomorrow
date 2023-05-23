const TeamModel = require("../../models/TeamModel");
const UserModel = require("../../models/UserModel");

module.exports = async(req,res) => {
    //get id from req.params
    let teamId = req.params.teamId;

    try {

        //Find team matching id
        let teamObject = await TeamModel.findOne({teamID: teamId});
        console.log("Team Object: ");
        console.log(teamObject)
        
        //find all users with that team id
        let usersFromTeamArray = teamObject.teamMember;
        
        //delete teamid from users
        for (let i = 0; i < usersFromTeamArray.length; i++) {
            let currentUserObject = await UserModel.findOne({userID: usersFromTeamArray[i]});

            console.log("Current User Object");
            console.log(currentUserObject)
            
            //variable to hold users userTeams array      
            let userTeamArray = currentUserObject.teams_id;
            //Get the index of wanted team
            let teamIndex = userTeamArray.indexOf(teamId);
            //Delete team from array
            userTeamArray.splice(teamIndex, 1);
            
            console.log("User object after Delete: ")
            console.log(currentUserObject)
            
            currentUserObject.save();

        }
        
        //Delete team from database
        await TeamModel.findOneAndDelete({teamID: teamId});

        
        res.json("Deleted Team: " + teamId)

    } catch (err) {
        res.status(500).json({error: err.message});
        
    }
}