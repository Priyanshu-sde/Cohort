const jwt = require("jsonwebtoken");
const JWT_SECRET = "Secret";

function auth(req,res,next) {
    const token  = req.header.authorization;

    const response = jwt.verify(token, JWT_SECRET);

    if (response) {
        req.userId = token.userId;
        next();
    }
    else{
        res.status(403).json({
            message:"Incorrect Credentials"
        })
    }
}

module.exports = {
    auth,
    JWT_SECRET
}