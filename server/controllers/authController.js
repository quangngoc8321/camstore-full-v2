const User = require('../models/User');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cloudinary = require("../configs/cloudinaryConfig");

// GET CURRENT USER
exports.getCurrentUser = async (req,res,next) =>{
    try {
        const {_id} = req.user;
        const user = await User.findById(_id).select("-password");
        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        next(error)
    }
}

// LOGIN

exports.login = async (req,res) =>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success: false,
                message:"Email is not correct"
            })
        } 

        if(!bcrypt.compareSync(password, user.password)){
            return res.status(400).json({
                success: false,
                message:"Password is not correct"
            })
        }  

        const {_id, role, avatar,name} = user;
        const token = jwt.sign({_id, role},process.env.APP_SECRET_KEY);
        res.status(200).json({
            success: true,
            user:{_id, role, avatar,email,name} ,
            token
        })
    } catch (error) {
        console.log(error);
    }
}

// REGISTER
exports.register = async (req,res,next) =>{
    try {
       const { password, avatar:avatarBase64} = req.body;
       if(password.length < 6){
           return res.status(400).json({
               success: false,
               message: "Password must be at least 6 characters long"
           })
       }
    //    Upload avatarBase64 to cloudinary to get url
       const result = await cloudinary.v2.uploader.upload(avatarBase64, {
        folder: "cameraStoreV2/user",
      });
      req.body.avatar = { public_id: result.public_id, url: result.secure_url };

    //   Hash password
       req.body.password = bcrypt.hashSync(password,10);
        const user = await User.create(req.body);
        const {_id, role, avatar,email,name} = user;
    // Sign token
        const token = jwt.sign({_id, role},process.env.APP_SECRET_KEY);
        res.status(200).json({
            success: true,
            user: {_id, role, avatar,email,name},
            token
        })
    } catch (error) {
        next(error);
    }
}