const News = require('../models/News-model')
async function newsFabric() {
  const news = [

    {
      title: 'Итоги подводить не будем',
      text: 'Через все сложности этого года вы прошли вместе с нами и остались. Это заставляет нас верить и не сдаваться. Спасибо Вам. За то, что приходили на концерты, обнимали нас после них, слушали наш альбом, поддерживали в каждом нашем поражении и радовались нашим победам, писали комментарии под неотёсанными постами в этом паблике, рассказывали о наших удачах друзьям. Критиковали нас, болели за нас, переживали с нами каждый наш шаг. Этот сумасшедший год подходит к концу, и мы счастливы, что вы провели его с нами. Просто спасибо. С наступающим, дорогие. Обнимаем каждого, верим в лучшее и желаем счастья каждому, кто читает этот пост. Любим вас сильно-сильно, очень-очень. Всегда ваши шеймы. 🍍2020, АНАНАСИК!🍍',
      image: 'https://sun9-7.userapi.com/impg/nNYl182NCEX94d_rKsLS1fqpX7qmYqEoCUbx5Q/RIEN5Hd-rcc.jpg?size=1054x1080&quality=96&sign=6b61df8bfc5015abfa67c2f1fdccafa3&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['Шейм', 'нг']

    },
    {
      title: 'Вчера мы...',
      text: 'Снова Грузински синхронизировались с Сашей, радовались выступлению с Лешей, прятали за собой Арзу и поздравляли Даню. А еще вы вчера читали стихи под наш аккомпанемент и это было волшебно! Дорогие друзья, на этом мы не заканчиваем! Новая часть аудио-интерактивного проекта "Письма друзьям" должна выйти в последний день Мая, этого года, а значит - уже совсем скоро!',
      image: 'https://sun9-65.userapi.com/impg/ouE_b1OMPa5tSMtDu2LIh5ugp0-hc2W0Lcz3-w/fuZ4cB12bwk.jpg?size=489x718&quality=96&sign=3396ec2616edd3db5f502efe60f5a025&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['Arziani', 'концерт']

    },
    {
      title: '⛔А это точно тот концерт?⛔',
      text: 'Нет! Но он всё равно шикарнейший, потому что мы сделаем море драйва и позитива😌 Мы - это две молодые андерграундные группы с огненной новой программой. Есть, на что посмотреть, это точно😉',
      image: 'https://sun9-3.userapi.com/impg/Rwrp_UAi9xcnLM-ZvYYeILO3SOT93UvXHCyjUA/q87XUpBWobg.jpg?size=1280x1600&quality=96&sign=42820e010cf53674bd99dd9e7fd97e89&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['Шейм', 'концерт']

    },
    {
      title: 'редкое фото',
      text: 'Вадим записывает новую песню',
      image: 'https://sun9-17.userapi.com/impg/1SV_LTVhvWJ4ftv_9hfMpnbbjf06PXR8LPRk0A/k7tn0lGYtR8.jpg?size=1080x810&quality=96&sign=153fdc5e1278df30f0721c8cb0e3cc2d&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['ЛОГОС', 'мем']

    },
    {
      title: 'Тррррроррроорро (типа барабанная дробь)',
      text: 'Господа! Сегодня у нашей замечательной, любимой и неповторимой Даши день рождения! 🔥💦🥰🥰😍🤩🤗🤗🥳🥳🤩 Давайте пожелаем ей крепкой психики, вдохновения, хорошей дешевой водки и побольше ярких концертов! P.S.: она вас всех очень любит💚',
      image: 'https://sun9-43.userapi.com/impg/1CySmxARyUtc3oGHV3XPszY3V7VvhzAh_MEXuA/tWSyIGb0sPU.jpg?size=1648x2160&quality=96&sign=5740375b9061e0b2714205b404410a2a&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['Шейм', 'др']

    },
    {
      title: 'Оправданий не будет!',
      text: 'Концерт завтра в 20:30, у нас всего полчаса на выступление, так что не опаздывайте если хотите все послушать. вся инфа по месту и билетам тут https://vk.com/parkulturi?w=wall-154441065_210 Если чо они еще остались)',
      image: 'https://sun9-23.userapi.com/impg/zZPXlzZREq9kueyOfzaG-vtOlq_5o8ecf2wh_w/_FNWCHKrvNU.jpg?size=2560x1697&quality=96&sign=192220d132413fbff49962b36f3bb704&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['Пар_Культуры', 'концерт']

    },
    {
      title: 'Возможно, кто-то задается вопросом:',
      text: 'Когда новый альбом? или почему в группе так долго нет постов? отвечает Александр Друзь',
      image: 'https://sun9-75.userapi.com/impg/J5fEL1kwNXXzIayO0fw0kW6W0pEksPrEzdWKcw/k3uu1Ay29l8.jpg?size=1600x800&quality=96&sign=b392cac13f3f7fa12abb981ffa5732db&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['Пар_Культуры', 'концерт']

    },
    {
      title: 'Мы вот тут в поле стоим.',
      text: 'А вы где стоите?',
      image: 'https://sun9-55.userapi.com/impg/5g4uhDvY4EsjJkK4BNJW370t1023JC2laWMlyg/BwiQ9-FhP_s.jpg?size=2560x1707&quality=96&sign=ef953cf77b4597b661f151aaf0d070f1&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['Пар_Культуры']

    },
    {
      title: 'Дорогие мои!',
      text: 'Уже совсем скоро я пойду записывать вторую часть "Письма друзьям". Я постараюсь записать как можно больше "писем", так как на этот раз вас особенно много. Для меня ценно ваше участие и я надеюсь ответить вам взаимностью! С любовью, ваш Антоша',
      image: 'https://sun9-30.userapi.com/impg/pG-eDKHYMjlclM688Z5iITyFJrQX54AK1Y-eFg/LjsfyJoAu-0.jpg?size=1472x1472&quality=96&sign=e885cf9360d29610f305bec7500fc582&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['Arziani', 'альбом']

    },
    {
      title: 'катарсис',
      text: 'путём прослушивания песен логос',
      image: 'https://sun9-65.userapi.com/impg/NZUsyUCsUIpP9YQJxfNQThosp85SBwt_C9S_TQ/cY-9pTqlN0U.jpg?size=749x772&quality=96&sign=6046211ed23569a3bab0e67549703816&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['ЛОГОC', 'концерт']
    },
    {
      title: 'Поц и фикус - парни, которые играют песни на русском языке.',
      text: 'Они относят себя к жанру инди, хотя друзья говорят, что это зажигательная смесь фанка, рока, инди, хип-хопа, блюза и всего что только можно представить. Ребята играют живые, яркие и душевные песни, пишут альбом и готовы показать себя',
      image: 'https://sun9-67.userapi.com/impg/4j3lNEqSdH0ekbLSQVWk28nv-0ZIqjSh50ktow/VHO9EIMUqYQ.jpg?size=2000x2000&quality=96&sign=ceeceafd1b258f086a8d7b938ef0e1e4&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['Поц_и_Фикус', 'концерт']

    },
    {
      title: 'Поц и Фикус верщают',
      text: 'Нашего гитариста Саню нарисовала его чудо-девочка Ксюша)))',
      image: 'https://sun9-44.userapi.com/impg/pkPI3nHbtdRsBihbdM8O38_-s3R-jfJ0AFB1Gw/oNmV-WU8Jwg.jpg?size=1424x2160&quality=96&sign=b829e74479009d2414573a3ca3c8b546&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['Поц_и_Фикус', 'концерт']

    },
    {
      title: 'МирМоре в здании',
      text: 'Ребят, лайв какой песни с альбома выложить сегодня вечером? (кроме Самодура и Тортуги, их уже можно посмотреть здесь, в тиктоке или в инсте)',
      image: 'https://sun9-47.userapi.com/impg/wL8f609onabBewxuWJbN70q849gSywynsl4bWA/54nouxVbznc.jpg?size=828x549&quality=96&sign=ac35ad8f9fb19025b6e757d6d9d6710b&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['Миролюбивое_Море', 'концерт']

    },
    {
      title: 'Вчера у самого очаровательного басиста состоялся юбилей – целых 20 лет!',
      text: 'Даня, ты отличный друг, и очень чуткий музыкант, который никогда не останавливается на достигнутом. Пусть слэп всегда будет чётким, а пентарь никогда не подводит￼￼￼🤟Мы все тебя очень любим! С прошедшим, брат!',
      image: '',
      links: null, //ссылки на сторонние сайты
      tags: ['Миролюбивое_Море', 'концерт']

    },
    {
      title: 'А вот и фото от sawaflow! 📷',
      text: 'Вспомни, как это было круто! Ищи себя и отмечай друзей. 😉',
      image: 'https://sun9-16.userapi.com/impg/EprKmZH-36VRrCqRCzF8jTzXMbLzHavYIdzNkA/G4wJVSvpBVI.jpg?size=1920x1280&quality=96&sign=fe4ffbcd4b9768debe114e19eb1e2453&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['Шейм', 'концерт']

    },
    {
      title: 'НОВЫЙ ТРЕК!!!',
      text: 'Вы наверняка уже заждались?! А вот и первый трек из нашего нового альбома. ЛАЙК! РЕПОСТ! ПОДПИСКА! Надеемся, что следующие треки будут выходить чаще. А пока, слушаем и наслаждаемся! Штаны Зелёного Оттенка - Человек-пазл (2021)',
      image: 'https://sun9-32.userapi.com/impg/YrjzaH7FiqAIwSNmuSnMN6TmgyoVjQKz7lfxdg/FaJ3bW6oEmQ.jpg?size=1600x1200&quality=96&sign=5651335425c552b8fe9d6c4d4e2f0766&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['Штаны_Зелёного_Оттенка', 'трек']

    },
    {
      title: 'ШиЗО на квартирнике!',
      text: 'А вот и фотографии с мероприятия!',
      image: 'https://sun9-33.userapi.com/impg/dD0S5nGAIgS4GlMggFrPc6O10jAQ5Etub__aKw/RK-FlrEfBgw.jpg?size=604x400&quality=96&sign=c10b38fff29b3c179524747babea66ec&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['Штаны_Зелёного_Оттенка', 'концерт']

    },
    {
      title: '44X на Урале',
      text: 'Летом планируется интересный движ в Екб, глупо пропускать шанс на участие🤘 #uralmusicnight2021',
      image: 'https://sun9-2.userapi.com/impg/WmIVuIE-Kbc1wjS3Df_QNFjzxNObq7sGMdfcGQ/4Zcy0DoIxgE.jpg?size=2560x1440&quality=96&sign=7682225351bc8f231f644894ffdbedc0&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['44X', 'концерт']

    },
    {
      title: 'Новый участник',
      text: 'К нашей команде присоединился новый участник - Денис! Теперь он отвечает за звуки ударных, которые будут в ваших ушах на всех грядущих концертах! Поприветствуйте Дениса, друзья Денатурации!',
      image: 'https://sun9-8.userapi.com/impg/tUx83I3UI8E5ZRNJ39sbDOMZj1-fmBTJrFXb0w/E8DYFBLXPMQ.jpg?size=1276x1276&quality=96&sign=a19dd0767bb19faf13d3b18423a45061&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['ДЕНАТУРАЦИЯ_БЕЛКА', 'концерт']

    },
    {
      title: 'Гиг в Панкфикшне',
      text: 'Партия фото с прошедшего концерта',
      image: 'https://sun9-31.userapi.com/impg/HhvhWMVmeknjEQ41tttgQAZxy1c1i7g-pxHDhQ/5zNuPCgh6xQ.jpg?size=828x552&quality=96&sign=4a148d178748cbb80cce6563e9c4f262&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['ДЕНАТУРАЦИЯ_БЕЛКА', 'концерт']

    },
    {
      title: 'Скоро новый трек!',
      text: 'В мае рожаем сингл, твой любимый бойз-бэнд💗',
      image: 'https://sun9-34.userapi.com/impg/YBxBSYPhUXzIHXrLXyii7vaGrMpj1hCtbrlykA/8JJ5w057rI0.jpg?size=1440x1920&quality=96&sign=30e2f66f84128850465ab6f0bde5914e&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['ДЕНАТУРАЦИЯ_БЕЛКА', 'концерт']

    },
    {
      title: 'ДЕНАТУРАЦИЯ БЕЛКА снова покоряет сцену',
      text: 'Обращаем ваше внимание, что все песни будут исполнены в инструментальной аранжировке 🎸🥁🎺 СКАЖИ НЕТ БИТАМ НА КОНЦЕРТАХ!!111!!',
      image: 'https://sun9-54.userapi.com/impg/qc7dAC74IGzzP2MIlhXF56MddSZ5diOdEpOOlw/ZBVaXElVNcE.jpg?size=2551x1977&quality=96&sign=d59ecfde682ecd10e98687930bda2cf5&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['ДЕНАТУРАЦИЯ_БЕЛКА', 'концерт']

    },
    {
      title: 'До премьеры нового сингла «Гербарий» осталось 4 часа!!!',
      text: 'Встречаемся здесь в полночь, покажите актив ❤',
      image: 'https://sun9-64.userapi.com/impg/t6c8oXlaJVuJHeZK8ON8nCajfBf7-7VIVNmdZQ/xzvLf2hBHjI.jpg?size=1600x1060&quality=96&sign=0057003545851ab28eb1840bd8f62146&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['ДЕНАТУРАЦИЯ_БЕЛКА', 'концерт']

    },
    {
      title: "Господа и дамы!",
      text: "Сегодня свой день рождения празднует наш единственный, неповторимый, классный, замечательный и самый белобрысый гитараст всея Руси Никитонька!\nДавайте пожелаем ему счастья, крепкого здоровья, вдохновения, много новых гитар и чтобы его никогда не коснулась «Охота Крепкое»)\n💚💚💚\nНик шикарен, будь, как Ник.",
      image: 'https://sun9-14.userapi.com/impg/ADBoTaTb8dm2lFxxMhzVrMsUb-vDQ7DeEYU8QQ/vs3RV2QUTg0.jpg?size=912x1196&quality=96&sign=e8e09c9558b1fe83af4327755cfba4b2&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['Шейм', 'др']

    },
    {
      title: 'Arziani выпустил новый трек!',
      text: "Если вы ещё не видели, то Тоша выпустил вчера сингл – и это из разряда тех песен, которые хочется заслушать до дыр.\nВсе мы обречены, но выбор каждого – на что именно!\nArziani – Обречён",
      image: "https://sun9-58.userapi.com/impg/SRfJ2aMfG0oLBc5dKNO-aGLmoHmfgueijvb2NA/B9XFx9kplLw.jpg?size=2160x2160&quality=96&sign=8ecadba7484621b45547d379d2424b66&type=album",
      links: null, //ссылки на сторонние сайты
      tags: ['Arziani', "ноывый трек"]

    },
    {
      title: "Че, как взрослые, типа интревью после выступления даём?",
      text: "По традиции сидим в баре( да, в вечер понедельника. А что поделаешь) после концерта!) Отыграли Fizika Rock Battle Ждём результаты голосования...",
      image: "https://sun9-54.userapi.com/impg/PVDK_Ki7r8ilefQHPvgr9SiTA7Qx4k4RQShGsw/orAFDiBgCvw.jpg?size=1600x1201&quality=96&sign=cd84200dda468945373c9bbd0cb7947b&type=album",
      links: null, //ссылки на сторонние сайты
      tags: ["Пар_Культуры", 'мем', "попьюларити", "яселеба"]

    },
    {
      title: "Внимание!",
      text: `Хэй! У нас тут грядет куча новостей, и завесу тайны мы начнем открывать прямо сейчас. Группа "Пар Культуры" отправляет заявку на Ural Music Night 2021. Да-да, вы не ослышались. В наших планах теперь покорение Урала. Мы, конечно, далеки от достижений Ермака, но вдруг наша музыка зайдет нашим согражданам, живущим ТАМ) Надеемся таки попасть туда и сыграть наши треки в ЕКБ 25 июня) Ждем и надеемся! #uralmusicnight2021`,
      image: null,
      links: null, //ссылки на сторонние сайты
      tags: ["Пар_Культуры", 'uralmusicnight2021']
    },
  ]
  console.log('news here');
  await News.deleteMany()
  const bandso = await News.create(news)
  // console.log(bandso);
  // return Promise.all(news.map((data) => News.create(data)))
}




module.exports = newsFabric
