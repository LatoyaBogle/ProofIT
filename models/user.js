const mongoose = require("mongoose");
const Schema = mongoose.Schema;





const userSchema = new Schema({
  username: {type: String, trim:true, unique: true, required:"Username is required"},
  password: { type: String, trim: true, required: "Password is required", validate: [
    function(input) {
      return input.length >= 2;
    },
    
  ]},
  email: { type: String, unique:true, required: "Email is required"},
  bio: String,
  profile_image: String,
}, {timestamps:true});





const User = mongoose.model("User", userSchema);

module.exports = User;
