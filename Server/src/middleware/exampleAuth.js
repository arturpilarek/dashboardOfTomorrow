const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {

        // Auth logik her

        //If verified allow next function
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}