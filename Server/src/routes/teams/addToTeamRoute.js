const TeamModel = require("../../models/TeamModel");
const UserModel = require("../../models/UserModel");

module.exports = async (req,res) => {
    //Get current teamID from req.params
    let currentTeamID = req.params.teamID;

    //Get UserID from req.body
    let currentUserID = req.body.userID;

    try {
        //Find team model
        let currentTeamObject = await TeamModel.findOne({teamID: currentTeamID});
        console.log(currentTeamObject);
        
        //push the user ID into team member array
        currentTeamObject.teamMember.push(currentUserID);
        console.log(currentTeamObject);

        //Get user object matching user ID
        let currentUserObject = await UserModel.findOne({userID: currentUserID});
        console.log(currentUserObject);
        
        //push teamID into users teams_id array
        currentUserObject.teams_id.push(currentTeamID);
        console.log(currentUserObject);

        //Save both objects
        currentTeamObject.save();
        currentUserObject.save();

        res.status(200).json(`Succesfully added ${currentUserID} to ${currentTeamID}`)

        





    } catch (err) {
        res.status(500).json({error: err.message})
        
    }
}