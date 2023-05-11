const User = require("../../models/UserModel")

module.exports = async (req, res) => {
    // variables
    let { first_name, last_name, email, password } = req.body;
    console.log("i am here")
    try {
        // Find todo with id
        let userUpdate = await User.findOne({email})
        console.log("HEllo")


        //Add this data to new model
        const updateUserModel = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
        };
        //Update sendes til mongoDB
        const result = await User.updateOne(userUpdate, updateUserModel);
        
        res.status(200).json(updateUserModel)
    } 
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}