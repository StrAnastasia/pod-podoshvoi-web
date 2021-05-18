const Genre = require('../models/Genre-model')
async function genreFabric() {
  const genres = [
    {
      title: "Альтернатива",
      bands: ['Шейм', "Миролюбивое Море"],
    },
    {
      title: "Русский рэп",
      bands: ['Шейм', "Миролюбивое Море", "ДЕНАТУРАЦИЯ БЕЛКА"],
    },
    {
      title: "Альтернативный рок",
      bands: ['ЛОГОС', 'RED HIZE', '44X', "ДЕНАТУРАЦИЯ БЕЛКА"],
    },
    {
      title: "Электроника",
      bands: ['ЛОГОС'],
    },
    {
      title: "Танцевальная музыка",
      bands: ['ЛОГОС'],
    },
    {
      title: "Соул",
      bands: ['ЛОГОС'],
    },
    {
      title: "Русский Рок",
      bands: ['44X'],
    },
    {
      title: "Иностранный Рэп",
      bands: ['44X'],
    },
    {
      title: "Хип-хоп",
      bands: ['44X', "ДЕНАТУРАЦИЯ БЕЛКА"],
    },
    {
      title: "Рэгги",
      bands: ["Миролюбивое Море"],
    },
    {
      title: "Панк",
      bands: ["ДЕНАТУРАЦИЯ БЕЛКА"],
    },
    {
      title: "Инди-рок",
      bands: ["Штаны Зелёного Оттенка", 'Поц и Фикус'],
    },
    {
      title: "Инди-фолк",
      bands: ["Arziani"],
    },

  ]
  console.log('genres here');
  const genre = await Genre.find()
  console.log(genre);
  // return Promise.all(genres.map((data) => Genre.create(data)))
}




module.exports = genreFabric
