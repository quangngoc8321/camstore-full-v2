const jwt = require("jsonwebtoken");

function extractToken (req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
        return req.query.token;
    }
    return null;
}
exports.isUser = async (req,res,next) =>{
    try {
        const token = extractToken(req);
        if(!token){
            return res.status(400).json({
                success: false,
                message: "Invalid Token"
            })
        }
       const user = jwt.verify(token, process.env.APP_SECRET_KEY);
       req.user = user;
       next()
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid Token"
        })
    }
}