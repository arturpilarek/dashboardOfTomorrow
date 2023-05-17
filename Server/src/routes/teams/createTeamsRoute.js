const TeamModel = require("../../models/TeamModel");
const UserModel = require("../../models/UserModel")

module.exports = async(req,res) => {
    //Assign team variables from req.query
    let {teamName, teamDescription, teamTaskboardID, userID} = req.body;
    console.log(req.query)
    
    //UserID should come from the person sending the createTeams request
        
    //Generate an ID
     //Search database for objects matching TodoModel
     const teamArray = await TeamModel.find({TeamModel});
     
     //Get the last element from array
     let lastTeamObject = teamArray.slice(-1);
 
     //Regex to get number from end of String
     let numberRegex = /\d+$/;
 
     //Use regex and convert string to Int
     let teamIdFromDB = parseInt(lastTeamObject[0].teamID.match(numberRegex));
 
     //Increment the ID
     teamIdFromDB++;
     let teamId = `team${teamIdFromDB}`;
     console.log("TeamID: " + teamId);


    try {

        if(userID){
            let userObject = await UserModel.findOne({userID: userID});
            console.log(userObject);
            //push the taskboard into user taskboard array
            userObject.teams_id.push(teamId);
            await userObject.save();
        }
        
        //Create a new TeamModel using query variables
        let teamModel = new TeamModel({
            teamID: teamId,
            teamName: teamName,
            teamDescription: teamDescription,
            teamTaskboardID: teamTaskboardID         
        });

        teamModel.teamMember.push(userID);
        
        await teamModel.save();
        res.json(teamModel);

    } catch (err) {
        res.status(500).json({error: err.message})
        
    }



}