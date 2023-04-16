const mongoose = require('mongoose')
const { Schema } = mongoose

const customerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dateAdded: {
    type: String,
    required: true
  },
  role: String,
  phone: String,
  email: String,
  company: String,
  adresse1: String,
  adresse2: String,
  zipCode: String,
  city: String,
  country: String,
});

module.exports = mongoose.model('Customer', customerSchema)