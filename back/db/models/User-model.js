const { Schema, model } = require('mongoose')
const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: Boolean,
  usersBands: Array,
  achievements: Array

})
const User = model('User', userSchema)

module.exports = User
