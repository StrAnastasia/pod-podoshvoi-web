const database = {
  bands: [
    {
      bandName: "Шейм",
      genre: ["Альтернатива", "Русский рэп"],
      description: "У нас всё ещё есть скрипка и юношеский максимализм",
      years: "2018-2021",
      media: { vk: 'https://vk.com/shamenshame', insta: 'https://www.instagram.com/shame.n.shame/' },
      musicLinks: { vk: 'https://vk.com/artist/541909091171370338', yandex: 'https://music.yandex.ru/artist/7319042', spot: 'https://open.spotify.com/artist/4hvjbIXsJkHR3dzMCcFc1u' },
      gigs: ['Гулять!', 'Kaiju party 2020', 'Время Расти']
    },
    {
      bandName: "ЛОГОС",
      genre: ["Альтернативный рок", 'Электроника', 'Танцевальная музыка', 'Соул'],
      description: "убийственно удручающие ребята",
      years: "???-2020, 2021",
      media: { vk: 'https://vk.com/logos_band', insta: 'https://www.instagram.com/logos_band/' },
      musicLinks: { vk: 'https://vk.com/artist/logos_mtu2mjewmzcwnw', yandex: 'https://music.yandex.ru/artist/7579517', spot: 'https://open.spotify.com/artist/44vgY1bSu3oaSqGwJjUYqY' },
      gigs: ['Гулять!']
    },
    {
      bandName: "RED HIZE",
      genre: ["Альтернативный рок"],
      description: `Red Hize была основана Сергеем Винокуровым, Александром Мироновым, Романом Цветковым в 2007 году в Москве. Чуть позже к проекту присоединился и Роман Морозов. Первые треки музыкантов по жанру были ближе к готик-металу и были лихи и отважны, как вся гаражная музыка тех лет. В конце 2008 года по обоюдному согласию музыканты взяли перерыв по личным причинам. Группа воссоединилась в 2018 году. После долгих поисков вокала к Red Hize присоединилась Маша Морр. Название группы предложил Александр Миронов (ака Самурай). Легенда гласит, что он забыл название аниме, которое смотрел в то время, и исказил его до "Red Hize". Другие музыканты сочли получившийся каламбур забавным и, обнаружив в нём отсылки к "красной мгле" и испанскому "хизэ", решили остановить свой выбор на нём. 11 марта 2021 года, после внёсшей в планы музыкантов неразбериху пандемии, вышел первый сингл ребят, который они ласково называют "Cоль".`,
      years: "2007-2008, 2018-2021",
      media: { vk: 'https://vk.com/redhize', insta: 'https://www.instagram.com/redhize/' },
      musicLinks: { vk: 'https://vk.com/artist/redhize', yandex: 'https://music.yandex.ru/artist/11042251', spot: 'https://open.spotify.com/artist/70NAgyIMXaceQIR9wfp8aM' },
      gigs: ['Гулять!']
    },
    {
      bandName: "44X",
      genre: ["Альтернативный рок", 'Русский Рок', 'Иностранный Рэп', 'Хип-хоп'],
      description: "Сжигаем стереотипы и танцуем у огня. Теперь ты знаешь свои любимые цифры.",
      years: "2019-2021",
      media: { vk: 'https://vk.com/weare44x', insta: 'https://www.instagram.com/weare44x/' },
      musicLinks: { vk: 'https://vk.com/artist/44x', yandex: 'https://music.yandex.ru/artist/8548870', spot: 'https://open.spotify.com/artist/4hvjbIXsJkHR3dzMCcFc1u' },
      gigs: ['Kaiju party 2020']
    },
    {
      bandName: "Миролюбивое Море",
      genre: ["Альтернатива", "Русский Рэп", "Рэгги"],
      description: "Здесь были, есть и будут: песенки, удачные и не совсем эксперименты, приветы родным и знакомым, и иногда мысли вслух\n«Сделанное лучше идеального»",
      years: "2018-2021",
      media: { vk: 'https://vk.com/mirolubivoemore', insta: 'https://www.instagram.com/mirolubivoemore/' },
      musicLinks: { vk: 'https://vk.com/artist/mirolyubivoemore', yandex: 'https://music.yandex.ru/artist/9320396', spot: 'https://open.spotify.com/artist/0GKO37O60jw63rD7nweBZn' },
      gigs: ['Плохой человек?', 'МИРОЛЮБИВОЕ МОРЕ Х НЕ ШУМИ', 'Бык на крыше х Миролюбивое Море']
    },
    {
      bandName: "ДЕНАТУРАЦИЯ БЕЛКА",
      genre: ["Альтернативный рок", "Русский рэп", "Хип-хоп", "Панк"],
      description: "Альтернативный хип-хоп панк для любителей русского слова",
      years: "2014-2021",
      media: { vk: 'https://vk.com/wearedop', insta: 'https://www.instagram.com/we_are_dop/' },
      musicLinks: { vk: 'https://vk.com/artist/denaturatsiabelka', yandex: 'https://music.yandex.ru/artist/7644408', spot: 'https://open.spotify.com/artist/44Uf96zyeh1g7Huw95vXqv' },
      gigs: ['Плохой человек?']
    },
    {
      bandName: "Пар Культуры",
      genre: ["Альтернативный рок"],
      description: "У нас всё ещё есть скрипка и юношеский максимализм",
      years: "2018-2021",
      media: { vk: 'https://vk.com/parkulturi', insta: 'https://www.instagram.com/par_kultury/' },
      musicLinks: { vk: 'https://vk.com/artist/parkultury', yandex: 'https://music.yandex.ru/artist/7458304', spot: 'https://open.spotify.com/artist/5kVbi2CW7ETNbMRd0awxFY' },
      gigs: ['FIZICA: Rock Battle', 'комбинатор']
    },
    {
      bandName: "Штаны Зелёного Оттенка",
      genre: ["Альтернативный рок", "Инди-рок"],
      description: "Молодые. Дерзкие. Добрые.",
      years: "2014-2021",
      media: { vk: 'https://vk.com/shamhttps://vk.com/zelyonyeshtany?from=quick_searchenshame', insta: 'https://www.instagram.com/zelyonye_shtany/' },
      musicLinks: { vk: 'https://vk.com/artist/3840510631758560231', yandex: 'https://music.yandex.ru/artist/5130621', spot: 'https://open.spotify.com/artist/0Xh6BSEl2pQv2KSPZdcPlH' },
      gigs: ['Время Расти']
    },
    {
      bandName: "Arziani",
      genre: ["Инди-фолк"],
      description: "Инди-фолк для тех, кто верит в будущее и магию",
      years: "2020-2021",
      media: { vk: 'https://vk.com/antonarziani', insta: 'https://www.instagram.com/aivenfo/' },
      musicLinks: { vk: 'https://vk.com/artist/arziani', yandex: 'https://music.yandex.ru/artist/10494328', spot: 'https://open.spotify.com/artist/50WdmUuX9TNMrBZGn2Z1jB' },
      gigs: ['Плохой человек?', 'МИРОЛЮБИВОЕ МОРЕ Х НЕ ШУМИ', 'Бык на крыше х Миролюбивое Море']
    },
    {
      bandName: "Поц и Фикус",
      genre: ["Инди-рок"],
      description: "-",
      years: "2021",
      media: { vk: 'https://vk.com/potsificus', insta: 'https://www.instagram.com/potsificusgroup/' },
      musicLinks: { vk: 'Скоро!', yandex: 'Скоро!', spot: 'Скоро!' },
      gigs: ["МИРОЛЮБИВОЕ МОРЕ Х НЕ ШУМИ"]
    }
  ],
  genres: [
    {
      title: "Альтернатива",
      bands: ['Шейм', "Миролюбивое Море"],
    },    {
      title: "Русский рэп",
      bands: ['Шейм', "Миролюбивое Море", "ДЕНАТУРАЦИЯ БЕЛКА"],
    },    {
      title: "Альтернативный рок",
      bands: ['ЛОГОС', 'RED HIZE', '44X', "ДЕНАТУРАЦИЯ БЕЛКА"],
    },    {
      title: "Электроника",
      bands: ['ЛОГОС'],
    },    {
      title: "Танцевальная музыка",
      bands: ['ЛОГОС'],
    },    {
      title: "Соул",
      bands: ['ЛОГОС'],
    },    {
      title: "Русский Рок",
      bands: ['44X'],
    },    {
      title: "Иностранный Рэп",
      bands: ['44X'],
    },    {
      title: "Хип-хоп",
      bands: ['44X', "ДЕНАТУРАЦИЯ БЕЛКА"],
    },    {
      title: "Рэгги",
      bands: ["Миролюбивое Море"],
    },    {
      title: "Панк",
      bands: ["ДЕНАТУРАЦИЯ БЕЛКА"],
    },    {
      title: "Инди-рок",
      bands: ["Штаны Зелёного Оттенка", 'Поц и Фикус'],
    },    {
      title: "Инди-фолк",
      bands: ["Arziani"],
    }
  ],
  gigs: [
    {
      name: 'Гулять!',
      bands: ['Шейм', 'ЛОГОС', 'Red Hize'],
      adress: "Бункер 47",
      date: "2021-05-23, 18:30"
    },
    {
      name: 'Kaiju party 2020',
      bands: ['Шейм', '44X'],
      adress: "Клуб GLASTONBERRY",
      date: "2020-08-31, 19:30"
    },
    {
      name: 'Плохой человек?',
      bands: ['Миролюбивое Море', 'ДЕНАТУРАЦИЯ БЕЛКА'],
      adress: "Бар Punk Fiction",
      date: "2021-04-18, 17:00"
    },
    {
      name: 'Время Расти',
      bands: ['Шейм', 'Пар Культуры', 'Штаны Зелёного Оттенка'],
      adress: "Бункер 47",
      date: "2020-08-28, 20:00"
    },
    {
      name: 'МИРОЛЮБИВОЕ МОРЕ Х НЕ ШУМИ',
      bands: ['Миролюбивое Море', 'Arziani'],
      adress: `Пространство "ВСПЫШКА"`,
      date: "2021-03-13, 18:00"
    },
    {
      name: 'Бык на крыше х Миролюбивое Море',
      bands: ['Миролюбивое Море', "Arziani", "Поц и Фикус", "Veresk", 'Гарцующий Пони', 'Диана Никифорова', 'Елизавета Щедрина', 'Колокол', "Леся Ковальчук", "Юлия Насретдинова"],
      adress: `Библиотека "Маяк"`,
      date: '2021-04-24, 19:00'
    },
    {
      name: 'FIZICA: Rock Battle',
      bands: ['Пар Культуры', "Nastya Q", "Richter Scales", 'Ложновербы', ' Фатумь', 'Корабль Тесея', 'Rusted Nail', "Пьеро", "Why no", "the Subtle Due", 'Крем и Карамель'],
      adress: `Bolivar bar"`,
      date: '2021-04-05, 19:00'
    },
    {
      name: 'комбинатор',
      bands: ['Пар Культуры', "и пр."],
      adress: `Торговый центр "Clever"`,
      date: '2021-03-28, 19:00'
    }
  ],
  places: [
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
  ],
  news: [
    {
      title: 'редкое фото',
      text: 'Вадим записывает новую песню',
      image: 'https://sun9-17.userapi.com/impg/1SV_LTVhvWJ4ftv_9hfMpnbbjf06PXR8LPRk0A/k7tn0lGYtR8.jpg?size=1080x810&quality=96&sign=153fdc5e1278df30f0721c8cb0e3cc2d&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['логос', 'мем']

    },
    {
      title: "Господа и дамы!",
      text: "Сегодня свой день рождения празднует наш единственный, неповторимый, классный, замечательный и самый белобрысый гитараст всея Руси Никитонька!\nДавайте пожелаем ему счастья, крепкого здоровья, вдохновения, много новых гитар и чтобы его никогда не коснулась «Охота Крепкое»)\n💚💚💚\nНик шикарен, будь, как Ник.",
      image: 'https://sun9-14.userapi.com/impg/ADBoTaTb8dm2lFxxMhzVrMsUb-vDQ7DeEYU8QQ/vs3RV2QUTg0.jpg?size=912x1196&quality=96&sign=e8e09c9558b1fe83af4327755cfba4b2&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['шейм', 'др']

    },
    {
      title: 'Arziani выпустил новый трек!',
      text: "Если вы ещё не видели, то Тоша выпустил вчера сингл – и это из разряда тех песен, которые хочется заслушать до дыр.\nВсе мы обречены, но выбор каждого – на что именно!\nArziani – Обречён",
      image: "https://sun9-70.userapi.com/impg/YOuFYZ9bNRgXJ4U60m3WYOR1HpIUuTgKlTjVZw/EpIAzguEb-w.jpg?size=1334x1334&quality=96&sign=4af078994bb49d151d8ac1a82f458fe6&type=album",
      links: null, //ссылки на сторонние сайты
      tags: ['арзиани', "ноывый трек"]

    },
    {
      title: "Че, как взрослые, типа интревью после выступления даём?",
      text: "По традиции сидим в баре( да, в вечер понедельника. А что поделаешь) после концерта!) Отыграли Fizika Rock Battle Ждём результаты голосования...",
      image: "https://sun9-54.userapi.com/impg/PVDK_Ki7r8ilefQHPvgr9SiTA7Qx4k4RQShGsw/orAFDiBgCvw.jpg?size=1600x1201&quality=96&sign=cd84200dda468945373c9bbd0cb7947b&type=album",
      links: null, //ссылки на сторонние сайты
      tags: ["паркультуры", 'мем', "попьюларити", "яселеба"]

    },
    {
      title: "Внимание!",
      text: `Хэй! У нас тут грядет куча новостей, и завесу тайны мы начнем открывать прямо сейчас. Группа "Пар Культуры" отправляет заявку на Ural Music Night 2021. Да-да, вы не ослышались. В наших планах теперь покорение Урала. Мы, конечно, далеки от достижений Ермака, но вдруг наша музыка зайдет нашим согражданам, живущим ТАМ) Надеемся таки попасть туда и сыграть наши треки в ЕКБ 25 июня) Ждем и надеемся! #uralmusicnight2021`,
      image: null,
      links: null, //ссылки на сторонние сайты
      tags: ["паркультуры", 'uralmusicnight2021']

    },
  ]
}
module.exports = { database }
