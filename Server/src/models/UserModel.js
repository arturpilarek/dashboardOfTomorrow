const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userID: {type: String, unique: true},
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String },
    token: { type: String },
    todos_id: [{type: String}],
    taskboards_id: [{type: String}],
    teams_id: [{type: String}]
},
    {collection: "User"}
);
let UserModel = mongoose.model("user", userSchema)
module.exports = UserModel;