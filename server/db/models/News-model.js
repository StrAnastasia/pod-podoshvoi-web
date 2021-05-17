const { Schema, model } = require('mongoose')

const newsSchema = new Schema({
  title: { type: String, required: true },
  text: String,
  image: String,
  links: String, //ссылки на сторонние сайты
  tags: Array
  //количество лайков(коз)?????????????????
})
const News = model('News', newsSchema)

module.exports = News
