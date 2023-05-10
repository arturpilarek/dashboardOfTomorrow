const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    //if no token found
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }

    // verify the token
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        //error if wrong token
        return res.status(401).send("Invalid Token");
    }
    return next();
}