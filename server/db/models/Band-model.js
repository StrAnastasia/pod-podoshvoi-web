const { Schema, model } = require('mongoose')
const bandSchema = new Schema({
  bandName: { type: String, unique: true, required: true },
  genre: [{ type: String, required: true }],
  discription: String,
  years: String,
  media: Object,
  musicLinks: Object,
  gigs: [{
    type: Schema.Types.String,
    ref: 'Gigs'
  }],
  news: [{
    type: Schema.Types.ObjectId,
    ref: 'News'
  }],
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Reviews'
  }]
})
const Band = model('Band', bandSchema)

module.exports = Band
