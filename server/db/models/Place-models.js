const { Schema, model } = require('mongoose')

const placeSchema = new Schema({
  name: { type: String, unique: true, required: true },
  adress: { type: String, unique: true, required: true },
  comment: String,
  menu: String,
  afisha: String //ссылка на паблос с афишей, потом мб массив с объектами
})
const Place = model('Place', placeSchema)

module.exports = Place
