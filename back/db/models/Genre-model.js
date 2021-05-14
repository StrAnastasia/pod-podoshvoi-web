const {Schema, model} = require('mongoose')

const genreSchema = new Schema({
  title: {type: String, unique: true, required: true},
  bands: [Object], // названия конкретных групп
})
const Genre = model('Genre', genreSchema)

module.exports = Genre
