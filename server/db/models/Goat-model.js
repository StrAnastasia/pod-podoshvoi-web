const { Schema, model } = require('mongoose')

const goatSchema = new Schema({
  image: String
})
const Goat = model('Goat', goatSchema)

module.exports = Goat
