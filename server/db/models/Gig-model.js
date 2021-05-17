const {Schema, model} = require('mongoose')

const gigSchema = new Schema({
  name: {type: String, unique: true, required: true},
  bands: Object, // названия конкретных групп
  adress: { type: Schema.Types.String, ref: 'Place' }, // название бара
  date: String 
})
const Gig = model('Gig', gigSchema)

module.exports = Gig
