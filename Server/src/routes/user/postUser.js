const UserModel = require("../../models/UserModel")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


// Logic for sign up
module.exports = async (req, res) => {
    try {
        // Get user input
        const { first_name, last_name, email, password } = req.body;
        
        //Count all users in database
        let UserModelArray = await UserModel.find({UserModel})

        //Get the last one from array
        let lastUserObject = UserModelArray.splice(-1);

        //Regex to get number from end of String
        let numberRegex = /\d+$/;
 
        //Use regex and convert string to Int
        let userIdFromDB = parseInt(lastUserObject[0].userID.match(numberRegex));
        userIdFromDB++
        

        // Validate user input
        if (!(email && password && first_name && last_name)) {
            res.status(400).send("All input is required");
        }

        // check if user already exist
        const oldUser = await UserModel.findOne({ email });

        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }

        //Encrypt user password
        const encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        const user = await UserModel.create({
            userID: `user${userIdFromDB}`,
            first_name,
            last_name,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
        });

        // Create token
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.JWT_SECRET,
            {
                expiresIn: "2h",
            }
        );
        // save user token
        user.token = token;

        // return new user
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
    }
}