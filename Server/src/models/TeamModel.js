const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    teamId: {
        type: String,   
        unique: true
    },
    teamName: {
        type: String,
        required: true
    },
    teamMember: [{
        userId: {
            type: String,
        },
    }],
    teamDescription:{
        type: String,
    },
    teamTaskboardId: {
        type: String,
        required: true
    }
}, 
//Specify what collection in database to use
{collection: "tasks, user"})

const TeamModel = mongoose.model('teams', teamSchema)

module.exports = TeamModel