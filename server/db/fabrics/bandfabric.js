const Band = require('../models/Band-model')
async function bandFabric() {
  const bands = [
    {
      bandName: "Шейм",
      genre: ["Альтернатива", "Русский рэп"],
      discription: "У нас всё ещё есть скрипка и юношеский максимализм",
      years: "2018-2021",
      media: { vk: 'https://vk.com/shamenshame', insta: 'https://www.instagram.com/shame.n.shame/' },
      musicLinks: { vk: 'https://vk.com/artist/541909091171370338', yandex: 'https://music.yandex.ru/artist/7319042', spot: 'https://open.spotify.com/artist/4hvjbIXsJkHR3dzMCcFc1u' },
      gigs: ['Гулять!', 'Kaiju party 2020', 'Время Расти'],
      news: [],
      reviews: []
    },
    {
      bandName: "ЛОГОС",
      genre: ["Альтернативный рок", 'Электроника', 'Танцевальная музыка', 'Соул'],
      discription: "убийственно удручающие ребята",
      years: "???-2020, 2021",
      media: { vk: 'https://vk.com/logos_band', insta: 'https://www.instagram.com/logos_band/' },
      musicLinks: { vk: 'https://vk.com/artist/logos_mtu2mjewmzcwnw', yandex: 'https://music.yandex.ru/artist/7579517', spot: 'https://open.spotify.com/artist/44vgY1bSu3oaSqGwJjUYqY' },
      gigs: ['Гулять!'],
      news: [],
      reviews: []
    },
    {
      bandName: "RED HIZE",
      genre: ["Альтернативный рок"],
      discription: `Red Hize была основана Сергеем Винокуровым, Александром Мироновым, Романом Цветковым в 2007 году в Москве. Чуть позже к проекту присоединился и Роман Морозов. Первые треки музыкантов по жанру были ближе к готик-металу и были лихи и отважны, как вся гаражная музыка тех лет. В конце 2008 года по обоюдному согласию музыканты взяли перерыв по личным причинам. Группа воссоединилась в 2018 году. После долгих поисков вокала к Red Hize присоединилась Маша Морр. Название группы предложил Александр Миронов (ака Самурай). Легенда гласит, что он забыл название аниме, которое смотрел в то время, и исказил его до "Red Hize". Другие музыканты сочли получившийся каламбур забавным и, обнаружив в нём отсылки к "красной мгле" и испанскому "хизэ", решили остановить свой выбор на нём. 11 марта 2021 года, после внёсшей в планы музыкантов неразбериху пандемии, вышел первый сингл ребят, который они ласково называют "Cоль".`,
      years: "2007-2008, 2018-2021",
      media: { vk: 'https://vk.com/redhize', insta: 'https://www.instagram.com/redhize/' },
      musicLinks: { vk: 'https://vk.com/artist/redhize', yandex: 'https://music.yandex.ru/artist/11042251', spot: 'https://open.spotify.com/artist/70NAgyIMXaceQIR9wfp8aM' },
      gigs: ['Гулять!'],
      news: [],
      reviews: []
    },
    {
      bandName: "44X",
      genre: ["Альтернативный рок", 'Русский Рок', 'Иностранный Рэп', 'Хип-хоп'],
      discription: "Сжигаем стереотипы и танцуем у огня. Теперь ты знаешь свои любимые цифры.",
      years: "2019-2021",
      media: { vk: 'https://vk.com/weare44x', insta: 'https://www.instagram.com/weare44x/' },
      musicLinks: { vk: 'https://vk.com/artist/44x', yandex: 'https://music.yandex.ru/artist/8548870', spot: 'https://open.spotify.com/artist/4hvjbIXsJkHR3dzMCcFc1u' },
      gigs: ['Kaiju party 2020'],
      news: [],
      reviews: []
    },
    {
      bandName: "Миролюбивое Море",
      genre: ["Альтернатива", "Русский Рэп", "Рэгги"],
      discription: "Здесь были, есть и будут: песенки, удачные и не совсем эксперименты, приветы родным и знакомым, и иногда мысли вслух\n«Сделанное лучше идеального»",
      years: "2018-2021",
      media: { vk: 'https://vk.com/mirolubivoemore', insta: 'https://www.instagram.com/mirolubivoemore/' },
      musicLinks: { vk: 'https://vk.com/artist/mirolyubivoemore', yandex: 'https://music.yandex.ru/artist/9320396', spot: 'https://open.spotify.com/artist/0GKO37O60jw63rD7nweBZn' },
      gigs: ['Плохой человек?', 'МИРОЛЮБИВОЕ МОРЕ Х НЕ ШУМИ', 'Бык на крыше х Миролюбивое Море'],
      news: [],
      reviews: []
    },
    {
      bandName: "ДЕНАТУРАЦИЯ БЕЛКА",
      genre: ["Альтернативный рок", "Русский рэп", "Хип-хоп", "Панк"],
      discription: "Альтернативный хип-хоп панк для любителей русского слова",
      years: "2014-2021",
      media: { vk: 'https://vk.com/wearedop', insta: 'https://www.instagram.com/we_are_dop/' },
      musicLinks: { vk: 'https://vk.com/artist/denaturatsiabelka', yandex: 'https://music.yandex.ru/artist/7644408', spot: 'https://open.spotify.com/artist/44Uf96zyeh1g7Huw95vXqv' },
      gigs: ['Плохой человек?'],
      news: [],
      reviews: []
    },
    {
      bandName: "Пар Культуры",
      genre: ["Альтернативный рок"],
      discription: "У нас всё ещё есть скрипка и юношеский максимализм",
      years: "2018-2021",
      media: { vk: 'https://vk.com/parkulturi', insta: 'https://www.instagram.com/par_kultury/' },
      musicLinks: { vk: 'https://vk.com/artist/parkultury', yandex: 'https://music.yandex.ru/artist/7458304', spot: 'https://open.spotify.com/artist/5kVbi2CW7ETNbMRd0awxFY' },
      gigs: ['FIZICA: Rock Battle', 'комбинатор'],
      news: [],
      reviews: []
    },
    {
      bandName: "Штаны Зелёного Оттенка",
      genre: ["Альтернативный рок", "Инди-рок"],
      discription: "Молодые. Дерзкие. Добрые.",
      years: "2014-2021",
      media: { vk: 'https://vk.com/shamhttps://vk.com/zelyonyeshtany?from=quick_searchenshame', insta: 'https://www.instagram.com/zelyonye_shtany/' },
      musicLinks: { vk: 'https://vk.com/artist/3840510631758560231', yandex: 'https://music.yandex.ru/artist/5130621', spot: 'https://open.spotify.com/artist/0Xh6BSEl2pQv2KSPZdcPlH' },
      gigs: ['Время Расти'],
      news: [],
      reviews: []
    },
    {
      bandName: "Arziani",
      genre: ["Инди-фолк"],
      discription: "Инди-фолк для тех, кто верит в будущее и магию",
      years: "2020-2021",
      media: { vk: 'https://vk.com/antonarziani', insta: 'https://www.instagram.com/aivenfo/' },
      musicLinks: { vk: 'https://vk.com/artist/arziani', yandex: 'https://music.yandex.ru/artist/10494328', spot: 'https://open.spotify.com/artist/50WdmUuX9TNMrBZGn2Z1jB' },
      gigs: ['Плохой человек?', 'МИРОЛЮБИВОЕ МОРЕ Х НЕ ШУМИ', 'Бык на крыше х Миролюбивое Море'],
      news: [],
      reviews: []
    },
    {
      bandName: "Поц и Фикус",
      genre: ["Инди-рок"],
      discription: "-",
      years: "2021",
      media: { vk: 'https://vk.com/potsificus', insta: 'https://www.instagram.com/potsificusgroup/' },
      musicLinks: { vk: 'Скоро!', yandex: 'Скоро!', spot: 'Скоро!' },
      gigs: ["МИРОЛЮБИВОЕ МОРЕ Х НЕ ШУМИ"],
      news: [],
      reviews: []
    }
  ]
  // console.log(Band);
  const delbandso = await Band.deleteMany()
  const bandso = await Band.create(bands)
  console.log('bands here');
  // console.log(bandso);
  // return Promise.all(bands.map((data) => Band.create(data)))
}




module.exports = bandFabric
