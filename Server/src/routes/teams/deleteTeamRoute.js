const TeamModel = require("../../models/TeamModel");

module.exports = async(req,res) => {
    //get id from req.params
    let teamId = req.params.teamId;

    try {
        
        await TeamModel.findOneAndDelete({teamID:teamId});
        res.json("Deleted Team: " + teamId)

    } catch (err) {
        res.status(500).json({error: err.message});
        
    }
}