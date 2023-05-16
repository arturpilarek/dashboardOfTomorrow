const TeamModel = require('../../models/TeamModel')

module.exports = async (req, res) => {
    //Get ID from Params (id er fra)
    const teamId = req.params.id
    

    //Get variables from query
    let {teamName, teamDescription, teamMember} = req.query
    
    try {
        await TeamModel.findOneAndUpdate(
            {teamID: teamId},
            {teamName: teamName}, 
            {teamDescription: teamDescription},
            {teamMember: teamMember});
        
        res.status(200).json('success!')

    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }

}