const User = require("../../models/UserModel")
const bcrypt = require("bcrypt")

module.exports = async (req, res) => {
  // variables
  let { first_name, last_name, email, password } = req.body
  try {
    // Find todo with id
    let userUpdate = await User.findOne({ email })

    // Check if user's password is correct
    // if (
    //   password &&
    //   userUpdate &&
    //   (await bcrypt.compare(password, userUpdate.password))
    // ) {
    //   const confirmedPassword = password
    // } else {
    //   if (password) {
    //     console.log("Password is incorrect")
    //   }
    // }

    //Add this data to new model
    const updateUserModel = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    }
    //Update sendes til mongoDB
    const result = await User.updateOne(userUpdate, updateUserModel)

    res.status(200).json("User updated")
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
