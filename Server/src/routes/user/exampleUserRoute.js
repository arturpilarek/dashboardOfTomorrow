const User = require("../../models/UserModel")

module.exports = async (req, res) => {
    const { username, password } = req.body;
    try {
        // Logik for at oprette en bruger / logge ind

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}