import React from 'react'
import imgPost1 from '../../images/concert3.jpg'
import imgPost2 from '../../images/concert.jpg'
import imgPost3 from '../../images/concert2.jpg'
import './homePageModule.scss'
import { useEffect } from 'react'
import { useState } from 'react'


export default function Homepage() {

    const [offsetYPost, setOffsetYPost] = useState(0);

    const [offsetYImg, setOffsetYImg] = useState(1)

    const [offsetYHeader, setOffsetYHeader] = useState(0.8)


    const handleScrollPost = () => {
        setOffsetYPost(window.pageYOffset * 0.004);
    }

    const handleScrollHome = () => {
        const opas = 1 - window.pageYOffset * 0.004
        setOffsetYImg(prev => opas > 0.2 ? opas : 0.2);
    }

    const handleScrollHeader = () => {
        const opas = offsetYHeader- window.pageYOffset * 0.010
        setOffsetYHeader(opas);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPost);
        return () => window.removeEventListener('scroll', handleScrollPost);
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScrollHome);
        return () => window.removeEventListener('scroll', handleScrollHome);
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScrollHeader);
        return () => window.removeEventListener('scroll', handleScrollHeader);
    }, [])





    return (

        <div className='homePage' >
            <div className='newBackground' style={{ opacity: offsetYImg }} />

            <div className='banner' style={{ opacity: offsetYHeader }}>
                ПОД ПОДОШВОЙ
            </div>





            <div className="nullDiv" ></div>

            <div className='homePage-post' style={{ opacity: offsetYPost }}>

                <div>

                    <img alt='post' src={imgPost2} className="homePage-post-img" />
                </div>



                <div className="d-flex  align-items-center flex-column">
                    <h1 className='homePage-post-title'>Земля в кишках</h1>

                </div>

                <p class="homePage-post-text">

                    Есть у меня один товарищ, назовем его Миша Петров. Нормальный чел, работает, все хорошо. Но есть у него один минус, периодически Мишаня любит плотно подружить с различными психоактивными веществами, входящими в реестр запрещенных препаратов. Он не наркоман в полном смысле этого слова, но вполне может, раз в месяц, плотно закинуться кислотой и, на пару дней, покинуть пределы вселенной.

                    Ну и собственно, в прошлую пятницу, сидим мы с коллегами в баре, вкушаем пивко, общаемся, все шикарно. Время часа два ночи примерно. Неожиданно мой старый-верный орехокол начинает активно дребезжать, демонстрируя мне входящий вызов с неизвестного номера. После некоторых раздумий трубочку я взял и произошел следующий диалог.
                    - Да?
                    - Здравствуйте, Саша?
                    - Да...
                    - Это мама Миши Петрова, я из Красноуфимска звоню.
                    - Эм... Добрый вечер...
                   

                        </p>

            </div>

            <div className='homePage-post' >

                <img alt='post' src={imgPost1} className="homePage-post-img" />
                <div className="d-flex  align-items-center flex-column">
                    <h1 className='homePage-post-title'>Полет шмеля</h1>

                </div>

                <p class="homePage-post-text">

                    Есть у меня один товарищ, назовем его Миша Петров. Нормальный чел, работает, все хорошо. Но есть у него один минус, периодически Мишаня любит плотно подружить с различными психоактивными веществами, входящими в реестр запрещенных препаратов. Он не наркоман в полном смысле этого слова, но вполне может, раз в месяц, плотно закинуться кислотой и, на пару дней, покинуть пределы вселенной.

                    Ну и собственно, в прошлую пятницу, сидим мы с коллегами в баре, вкушаем пивко, общаемся, все шикарно. Время часа два ночи примерно. Неожиданно мой старый-верный орехокол начинает активно дребезжать, демонстрируя мне входящий вызов с неизвестного номера. После некоторых раздумий трубочку я взял и произошел следующий диалог.
                    - Да?
                    - Здравствуйте, Саша?
                    - Да...
                    - Это мама Миши Петрова, я из Красноуфимска звоню.
                    - Эм... Добрый вечер...
                    - Простите за беспокойство, я вас не разбудила? (вопрос, надо сказать, риторический, так как в трубке прекрасно слышно крики окружающих и гремящий в баре рок-н-ролл.)
                    - Да не очень, что то случилось?
                    - Понимаете, мне очень не удобно, но... Нам только что звонили из милиции, у них Миша, и они говорят, что кто-то должен его забрать, а мы дома и из Мишиных друзей у нас есть только Ваш номер.
                    - Бээ... кхм, блин... А из какого отдела звонили?
                    - Октябрьский, Вы знаете где это?
                    - Нууу, примерно.
                    - Вы не могли бы забрать его? Я Вас очень прошу!
                    - Хорошо, сейчас машину вызову и поеду.
                    - Спасибо большое! Наберите нам, пожалуйста, как только что-то решится.
                    - Хорошо, до свидания.
                    Положив трубку и глотнув пива. дабы привести в порядок разбегающиеся мысли, я несколько задумался. И на прикол не похоже и на реальность не очень... В вкратце изложив ситуацию коллегам я получил несколько предположений типа:
                    - А может это менты так бухих заманивают? Типа хули их ловить, пусть сами на такси приезжают, а мы встретим!
                    Мои раздумья прервал очередной звонок, на этот раз с городского номера.
                    - Здравствуйте, Александр?

                        </p>

            </div>

            <div className='homePage-post' >

                <img alt='post' src={imgPost3} className="homePage-post-img" />
                <div className="d-flex  align-items-center flex-column">
                    <h1 className='homePage-post-title'>Мертвая обезьяна</h1>

                </div>

                <p class="homePage-post-text">

                    Есть у меня один товарищ, назовем его Миша Петров. Нормальный чел, работает, все хорошо. Но есть у него один минус, периодически Мишаня любит плотно подружить с различными психоактивными веществами, входящими в реестр запрещенных препаратов. Он не наркоман в полном смысле этого слова, но вполне может, раз в месяц, плотно закинуться кислотой и, на пару дней, покинуть пределы вселенной.

                    Ну и собственно, в прошлую пятницу, сидим мы с коллегами в баре, вкушаем пивко, общаемся, все шикарно. Время часа два ночи примерно. Неожиданно мой старый-верный орехокол начинает активно дребезжать, демонстрируя мне входящий вызов с неизвестного номера. После некоторых раздумий трубочку я взял и произошел следующий диалог.
                    - Да?
                    - Здравствуйте, Саша?
                    - Да...
                    - Это мама Миши Петрова, я из Красноуфимска звоню.
                    - Эм... Добрый вечер...
                    - Простите за беспокойство, я вас не разбудила? (вопрос, надо сказать, риторический, так как в трубке прекрасно слышно крики окружающих и гремящий в баре рок-н-ролл.)
                    - Да не очень, что то случилось?
                    - Понимаете, мне очень не удобно, но... Нам только что звонили из милиции, у них Миша, и они говорят, что кто-то должен его забрать, а мы дома и из Мишиных друзей у нас есть только Ваш номер.
                    - Бээ... кхм, блин... А из какого отдела звонили?
                    - Октябрьский, Вы знаете где это?
                    - Нууу, примерно.
                    - Вы не могли бы забрать его? Я Вас очень прошу!
                    - Хорошо, сейчас машину вызову и поеду.
                    - Спасибо большое! Наберите нам, пожалуйста, как только что-то решится.
                    - Хорошо, до свидания.
                    Положив трубку и глотнув пива. дабы привести в порядок разбегающиеся мысли, я несколько задумался. И на прикол не похоже и на реальность не очень... В вкратце изложив ситуацию коллегам я получил несколько предположений типа:
                    - А может это менты так бухих заманивают? Типа хули их ловить, пусть сами на такси приезжают, а мы встретим!
                    Мои раздумья прервал очередной звонок, на этот раз с городского номера.
                    - Здравствуйте, Александр?

        </p>

            </div>

        </div>

    )
}
