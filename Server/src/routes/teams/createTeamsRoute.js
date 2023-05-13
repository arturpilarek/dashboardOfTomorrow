const TeamModel = require("../../models/TeamModel");

module.exports = async(req,res) => {
    //Assign team variables from req.query
    let {teamName, teamDescription } = req.query;
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
        
        //Create a new TeamModel using query variables
        let teamModel = new TeamModel({
            teamID: teamId,
            teamName: teamName,
            teamDescription: teamDescription
            
        });

        await teamModel.save();
        res.json(teamModel);

    } catch (err) {
        res.status(500).json({error: err.message})
        
    }



}