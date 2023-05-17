const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    teamID: {
        type: String
    },
    teamName: {
        type: String,
        required: true
    },
    teamMember: [{
         type: String,
    }],
    teamDescription:{
        type: String,
    },
    teamTaskboardID: [{
        type: String,
    }],
    teamTasks: [{type: String}],
    userID: {type: String}
}, 
//Specify what collection in database to use
{collection: "teams"})

const TeamModel = mongoose.model('teams', teamSchema)

module.exports = TeamModel