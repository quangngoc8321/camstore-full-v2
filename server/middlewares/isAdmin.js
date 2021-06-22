const User = require("../models/User");

exports.isAdmin = async (req,res,next) => {
    try {
        const {role} = req.user;
        if(role !== "ADMIN"){
            return res.status(400).json({
                success: false,
                message: "Unauthorized"
            })
        }
        next()
    } catch (error) {
        
    }
}