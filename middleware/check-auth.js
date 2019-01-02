const jwt = require('jsonwebtoken');
const JWT_KEY = "secret";
module.exports =(req,res,next) => {
    try {
        const token = req.headers.authorization;
        console.log(token);
        const decoded = jwt.verify(token, JWT_KEY);
        console.log("Route Authenticated successfully.")
        req.userData = decoded;
        next();
    } catch(error) {
        console.log("Unable to Authenticate User.")
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};