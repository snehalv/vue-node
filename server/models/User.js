const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { roles } = require('../utils/constants');

const userSchema = new Schema({
  email: {
    unique: true,
    type: String,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  confirmPassword: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: [roles.admin, roles.user],
    default: roles.user
  }
})

const User = mongoose.model('User', userSchema);
module.exports = User;