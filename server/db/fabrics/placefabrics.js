const Place = require('../models/Place-models')
async function placeFabrics() {
  const places = [
    {
      name: 'Бункер 47',
      adress: 'Москва, Ленинградский пр-т., 47/3',
      comment: null,
      menu: "Классное пиво, паршивые шоты",
      afisha: null
    },
    {
      name: 'Клуб GLASTONBERRY',
      adress: 'Москва, ул. 1-я Дубровская 13а, стр. 1',
      comment: null,
      menu: "Неоч",
      afisha: null
    },
    {
      name: 'Бар Punk Fiction',
      adress: 'Москва, Ольховская ул., 14с1',
      comment: null,
      menu: "Класснецкое пиво, шикарная шавуха",
      afisha: null
    },
    {
      name: `Пространство "ВСПЫШКА"`,
      adress: 'Москва, Нижняя Красносельская ул., 35/2',
      comment: null,
      menu: 'Кофи - дорого\nМодный кофи - ещё дороже',
      afisha: null
    },
    {
      name: `Библиотека "Маяк"`,
      adress: 'Москва, ул. Новокосинская д.38, к. 2.',
      comment: null,
      menu: null,
      afisha: null
    },
    {
      name: `Bolivar bar"`,
      adress: 'Москва, Потаповский переулок дом 5 стр.2',
      comment: null,
      menu: null,
      afisha: null
    },
    {
      name: `Торговый центр "Clever"`,
      adress: 'Москва, Электродная улица, 2 с32',
      comment: null,
      menu: null,
      afisha: null
    },
  ]
  const place = await Place.find()
  console.log('places here');
  console.log(place);

  // return Promise.all(places.map((data) => Place.create(data)))
}




module.exports = placeFabrics
