const mongoose = require('mongoose')
const { Schema } = mongoose;

const userDetails = new Schema({
  firstName: String,
  lastName: String,
  email:{type:String},
  phoneNumber: {type:Number, required: true}, 
  password: String,
});

const User = mongoose.model('User', userDetails);
module.exports = User
