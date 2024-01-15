const mongoose = require('mongoose')
const { Schema } = mongoose;

const userDetails = new Schema({
  phoneNumber: {type:Number, required: true}, 
  fullName: String,
  password: String
});

const User = mongoose.model('User', userDetails);
module.exports = User
