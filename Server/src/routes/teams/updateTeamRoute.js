const TeamModel = require('../../models/TeamModel')

module.exports = async (req, res) => {
    //Get todo ID from Params
    const teamId = req.params.id
    

    //Get variables from query
    let {teamName, teamDescription, teamMember} = req.query
    
    try {
        await TeamModel.findOneAndUpdate(
            {teamID: teamId},
            {teamName: teamName}, 
            {teamDescription: teamDescription},
            {teamMember: teamMember});
        
        // Find todo with id
        // let teamObject = await TeamModel.findOne({teamID: teamId})
        
        //Add this data to new model
        //const updateModel = {
        //    teamName: teamName,
        //    teamDescription: teamDescription,
        //    teamMember: teamMember
        //};
        //Update the model on MongoDB
        //const result = await TeamModel.updateOne(teamObject, updateModel);
        
        res.status(200).json('success!')

    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }

}