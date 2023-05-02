const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }
    // Add more fields here
});
module.exports = User = mongoose.model("user", userSchema);