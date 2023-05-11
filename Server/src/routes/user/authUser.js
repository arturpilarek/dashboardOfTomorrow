const User = require("../../models/UserModel")
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

//logic for login
module.exports = async (req, res) => {
    try {
        //get user input
        const { email, password } = req.body;

        //look if user exists in db
        const user = await User.findOne({ email });

        //if user exist and compare password is correct
        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                {user_id: user._id, email},
                process.env.JWT_SECRET,
                {
                    expiresIn: "2h",
                }
            );

            user.token = token
            // user
            return res.status(200).json(user);
        }

        //error message if input is incorrect
        res.status(400).send("Invalid Credentials");

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}