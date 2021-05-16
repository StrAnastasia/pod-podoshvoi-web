const { Schema, model } = require('mongoose')

const reviewSchema = new Schema({
  bandName: { type: String, required: true },
  genre: { type: String, required: true },
  theme: String, //азвание альбома, трека, ещё что
  text: String,
  links: String //ссылки на сторонние сайты
})
const Review = model('Review', reviewSchema)

module.exports = Review
