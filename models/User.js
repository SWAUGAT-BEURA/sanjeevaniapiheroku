const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  // verified:{
  //     type: Boolean,
  //     default: false
  // },
  // token:{
  //     type: String
  // },
  // resetToken:{
  //     type: String
  // }
  
}, {
    timestamps: true 
});

module.exports = mongoose.model("User", UserSchema);