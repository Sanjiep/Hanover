const mongoose = require('mongoose')
const { Schema } = mongoose;

const userDetails = new Schema({
  firstName: String,
  lastName: String,
  email:String,
  phoneNumber: Number,
  password: String,
});

const User = mongoose.model('User', userDetails);
module.exports = User
