// Add users to TeamID: 
// Eksempel på Route: localhost: 8081 / teams /: teamID < - id til at update
// 1. I body / params skal du sende et userID med, som skal tilføjes til et team
// 2. teamObject = await TeamModel.findone({ teamID: teamID })
// 3. få adgang til teamMember array'et og push userID - teamObject.teamMember.push(userID)
// 4. teamObject.save()

const TeamModel = require("../../models/TeamModel");

module.exports = async (req, res) => {
    let userId = req.body.userID;
    let teamId = req.params.teamId;

    try {
        let teamObject = await TeamModel.findOne({ teamID: teamId });

        console.log(teamObject)

        teamObject.teamMember.push(userId);
        teamObject.save();
        res.status(200).json("Added user to team")

    } catch (err) {
        res.status(500).json({ error: err.message });

    }
}