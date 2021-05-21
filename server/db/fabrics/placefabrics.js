const Place = require('../models/Place-models')
async function placeFabrics() {
  const places = [
    {
      name: 'Бункер 47',
      adress: 'Москва, Ленинградский пр-т., 47/3',
      comment: null,
      afisha: "https://vk.com/thebunker47"
    },
    {
      name: 'Клуб GLASTONBERRY',
      adress: 'Москва, ул. 1-я Дубровская 13а, стр. 1',
      comment: null,
      afisha: "https://vk.com/glastonberryclub"
    },
    {
      name: 'Бар Punk Fiction',
      adress: 'Москва, Ольховская ул., 14с1',
      comment: null,
      afisha: "https://vk.com/punkfiction"
    },
    {
      name: `Пространство "ВСПЫШКА"`,
      adress: 'Москва, Нижняя Красносельская ул., 35/2',
      comment: null,
      afisha: "https://vk.com/nonoisepls"
    },
    {
      name: `Библиотека "Маяк"`,
      adress: 'Москва, ул. Новокосинская д.38, к. 2.',
      comment: null,
      afisha: "https://vk.com/byknakryshe"
    },
    {
      name: `Bolivar bar`,
      adress: 'Москва, Потаповский переулок дом 5 стр.2',
      comment: null,
      afisha: "https://vk.com/bolivarbar"
    },
    {
      name: `Торговый центр "Clever"`,
      adress: 'Москва, Электродная улица, 2 с32',
      comment: null,
      afisha: "https://vk.com/combinart_2"
    },
  ]
  const place = await Place.deleteMany()
  const placeы = await Place.create(places)

  console.log('places here');
  // console.log(place);

  // return Promise.all(places.map((data) => Place.create(data)))
}




module.exports = placeFabrics
