const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
        trim: true,
        unique: true,
        lowercase: true,
        maxLength: [80, "Name max-length is 80 characters"]
    },
    avatar:{
        public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
    },
      role: {
        type: String,
        trim: true,
        required: true,
        default:"USER",
      }, 
      email: {
        type: String,
        trim: true,
        required: [true,"Email is required"],
        unique: true
      }, 
      password: {
        type: String,
        trim: true,
        required: [true,"Password is required"],
      }, 
}, {
    timestamps: true,
  });

const User =  mongoose.model("User", userSchema);

module.exports = User;