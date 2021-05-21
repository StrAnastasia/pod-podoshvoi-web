
const Gig = require('../models/Gig-model')
async function gigFabric() {
  const gigs = [
    {
      name: 'Гулять!',
      bands: ['Шейм', 'ЛОГОС', 'Red Hize'],
      adress: "Бункер 47",
      location:{lat: 55.79897169520551, lng:37.53109252753651,},
      date: "2021-06-23, 18:30"
    },
    {
      name: 'не тот гиг',
      bands: ['Шейм', 'Red Hize'],
      adress: "Бункер 47",
      location:{lat: 55.79897169520551, lng:37.53109252753651,},
      date: "2021-05-23, 18:30"
    },
    {
      name: 'Kaiju party 2020',
      bands: ['Шейм', '44X'],
      adress: "Клуб GLASTONBERRY",
      location:{lat: 55.72269536456216,lng:37.67365586878619},
      date: "2020-08-31, 19:30"
    },
    {
      name: 'Плохой человек',
      bands: ['Миролюбивое Море', 'ДЕНАТУРАЦИЯ БЕЛКА'],
      adress: "Бар Punk Fiction",
      location:{lat: 55.72269536456216,lng:37.67365586878619},
      date: "2021-04-18, 17:00"
    },
    {
      name: 'Время Расти',
      bands: ['Шейм', 'Пар Культуры', 'Штаны Зелёного Оттенка'],
      adress: "Бункер 47",
      location:{lat: 55.79897169520551, lng:37.53109252753651,},
      date: "2020-08-28, 20:00"
    },
    {
      name: 'МИРОЛЮБИВОЕ МОРЕ Х НЕ ШУМИ',
      bands: ['Миролюбивое Море', 'Arziani'],
      adress: `Пространство "ВСПЫШКА"`,
      location:{lat: 55.77957789195386, lng:37.67219299769397},
      date: "2021-03-13, 18:00"
    },
    {
      name: 'Бык на крыше х Миролюбивое Море',
      bands: ['Миролюбивое Море', "Arziani", "Поц и Фикус", "Veresk", 'Гарцующий Пони', 'Диана Никифорова', 'Елизавета Щедрина', 'Колокол', "Леся Ковальчук", "Юлия Насретдинова"],
      adress: `Библиотека "Маяк"`,
      location:{lat: 55.742016905729834, lng:37.870414153967396},
      date: '2021-04-24, 19:00'
    },
    {
      name: 'FIZICA: Rock Battle',
      bands: ['Пар Культуры', "Nastya Q", "Richter Scales", 'Ложновербы', ' Фатумь', 'Корабль Тесея', 'Rusted Nail', "Пьеро", "Why no", "the Subtle Due", 'Крем и Карамель'],
      adress: `Bolivar bar"`,
      location:{lat: 55.76160255124571, lng:37.64063877710852},
      date: '2021-04-05, 19:00'
    },
    {
      name: 'комбинатрт',
      bands: ['Пар Культуры', "и пр."],
      adress: `Торговый центр "Clever"`,
      location:{lat: 55.75437256786336, lng:37.75253315637098},
      date: '2021-03-28, 19:00'
    }
  ]
  const delgig = await Gig.deleteMany()
  const gig = await Gig.create(gigs)
  console.log('gigs here');
  
  // console.log(gig);

  // return Promise.all(gigs.map((data) => Gig.create(data)))
}

module.exports = gigFabric
