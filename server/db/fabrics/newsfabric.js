const News = require('../models/News-model')
async function newsFabric() {
  const news = [
    {
      title: 'редкое фото',
      text: 'Вадим записывает новую песню',
      image: 'https://sun9-17.userapi.com/impg/1SV_LTVhvWJ4ftv_9hfMpnbbjf06PXR8LPRk0A/k7tn0lGYtR8.jpg?size=1080x810&quality=96&sign=153fdc5e1278df30f0721c8cb0e3cc2d&type=album',
      links: null, //ссылки на сторонние сайты
      tags: ['ЛОГОС', 'мем']

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
  console.log(bandso);
  // return Promise.all(news.map((data) => News.create(data)))
}




module.exports = newsFabric
