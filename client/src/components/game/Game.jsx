import './game.css'
import Pers1 from '../../images/person.png'
import BlackMap from '../../images/blackmap.png'
import { useEffect, useState } from 'react'
// import application from './gameapplication.js'
// import bubble from '../../images/bubble.png '
export default function Game() {
  let pixelsize = 2
  let speed = 10
  const styleofallthegame = { '--pixel-size': `${pixelsize}px`, '--grid-cell': `${pixelsize * 16}px`, '--bg': 'black' }
  // const pixelart = { 'image-rendering': 'pixelated' }
  const camerastyle = { 'imageRendering': 'pixelated', 'width': `${pixelsize * 320}px`, 'height': `${pixelsize * 288}px`, 'overflow': 'hidden', 'background': 'lightgray', 'position': 'relative' }
  const mapstyle = { 'imageRendering': 'pixelated', 'backgroundImage': `url(${BlackMap})`, 'backgroundSize': '100%', 'width': `${pixelsize * 16 * 39}px`, 'height': `${pixelsize * 16 * 30}px`, 'position': 'relative' }
  const charstyle = { 'width': `${pixelsize * 30}px`, 'height': `${pixelsize * 30}px`, 'position': 'absolute' }
  //перерисовать картинку из 16 в 30
  const [fromTop, setFromTop] = useState(120)
  const [fromLeft, setLeft] = useState(360)
  const [backgroundcrowdplacetop, setbackgroundcrowdplacetop] = useState(150)
  const [backgroundcrowdplaceleft, setbackgroundcrowdplaceleft] = useState(100)
  const characterspritesheet = { 'position': 'absolute', 'backgroundImage': `url(${Pers1})`, 'backgroundSize': '100%', 'width': `${pixelsize * 30}px`, 'height': `60px`, 'top': `${fromTop}px`, 'left': `${fromLeft}px` }
  const crowdstyle = {'position': 'absolute', 'width': `${pixelsize * 100}px`, 'height': `90px`, 'top': `${backgroundcrowdplacetop}px`, 'left': `${backgroundcrowdplaceleft}px`, 'backgroundColor': 'yellow'}
  const bubblestyle = {visibility: '', 'position': 'absolute', 'width': `${pixelsize * 70}px`, 'height': `20px`, 'top': `${fromTop + 30}px`, 'left': `${fromLeft + 10}px`}
  // 'backgroundImage': `url(${bubble})`



  // //варик юли
  // const walkHandler = async (e) => {
  //   switch (e.keyCode) {                            // wasd
  //     case 65:
  //       console.log('go vlevo');
  //       break;
  //     case 87:
  //       console.log('go vverh');

  //       break;
  //     case 68:
  //       await setLeft(prev => prev++)

  //       break;
  //     case 83:
  //       await setFromTop(prev => prev + 1)
  //       break;

  //     default:
  //       break;
  //   }
  //   console.log(fromTop);
  // }

  // useEffect((e) => {
  //   console.log('ya tut', fromTop);
  //   const gamediv = document.querySelector('.gamediv')
  //   if (gamediv) document.addEventListener('keydown', walkHandler)
  //   // return null
  // }, [fromTop])







  // //варик индуса с ютуба
  //   function useKey(key, cb) {
  //     console.log('usekey');
  //     const callbackRef = useRef(cb)
  //     useEffect(() => {
  //       function handle(event) {
  //         console.log(event);
  //         if (event.code === key) {
  //           callbackRef.current(event)
  //         }
  //       }
  //       // const gamediv = document.querySelector('.gamediv')
  //       // if (gamediv) 
  //       document.addEventListener('keypress', handle)
  //       return document.removeEventListener('keypress', handle)
  //     }, [key])
  //   }

  //   function handleEnter() {
  //     console.log('enter is pressed');                         //enter и a
  //   }
  //   function handleA() {
  //     console.log('a is pressed');
  //   }

  //   useKey('Enter', handleEnter)
  //   useKey('a', handleA)







  //варик с кнопками на экране
  function goleft() {
    console.log('лево вы нажали на стрелку, вам забита стрелка');
    setLeft(prev => prev - speed)
  }
  function goright() {
    console.log('право вы нажали на стрелку, вам забита стрелка');
    setLeft(prev => prev + speed)
  }
  function goup() {
    console.log('вверх вы нажали на стрелку, вам забита стрелка');
    setFromTop(prev => prev - speed)
  }
  function godown() {
    console.log('вниз вы нажали на стрелку, вам забита стрелка');
    setFromTop(prev => prev + speed)
  }

  function chooseaction() {

  }

  return (
    <>
      <h1 style={{ color: 'white', marginLeft: '37%' }}>настя плакоет</h1>
      <div className='gamediv' style={styleofallthegame, { marginTop: "1%" }} >
        <div className='camera' style={camerastyle}  >
          <div className='map' style={mapstyle} >
            <div className='crowd' style={crowdstyle} onClick={chooseaction}>  
              {/* <div className=''></div> */}
            </div>
            <div className='character' style={charstyle}>
              <div className="character_spritesheet pixel-art" style={characterspritesheet}>
                <div style={bubblestyle}></div>
                {/* разные классы на разный поворот (к камере, вправо, влево, от камеры) */}
              </div>
            </div>
          </div>
        </div>


        <div style={{ position: 'absolute' }}>
          <button onClick={goleft} className="dpad-button dpad-left" style={{ 'height': "8vh", 'width': '4.5vw', position: 'absolute', 'top': "15.5vh", 'left': '4vw' }}>
            <div className='triangle-left'></div>
          </button>
          <button onClick={goup} className="dpad-button dpad-up" style={{ 'height': "8vh", 'width': '4.5vw', position: 'absolute', 'top': "7vh", 'left': '9vw' }}>
            <div className='triangle-up'></div>
          </button>
          <button onClick={godown} className="dpad-button dpad-down" style={{ 'height': "8vh", 'width': '4.5vw', position: 'absolute', 'top': "24vh", 'left': '9vw' }}>
            <div className='triangle-down'></div>
          </button>
          <button onClick={goright} className="dpad-button dpad-right" style={{ 'height': "8vh", 'width': '4.5vw', position: 'absolute', 'top': "15.4vh", 'left': '13.8vw' }}>
            <div className='triangle-right'></div>
          </button>
        </div>
      </div>
      {/* <script src={application}></script> */}
    </>
  )
}
