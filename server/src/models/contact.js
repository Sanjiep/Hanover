const mongoose = require('mongoose')
const { Schema } = mongoose;

const contactSchema = new Schema({
  userId: String,
  firstName: String,
  lastName: String,
  country: String,
  address: String,
  email: String,
  phoneNumber: String
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact