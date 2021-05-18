import './game.css'
import Pers1 from '../../images/person.png'
import BlackMap from '../../images/blackmap.png'
import { useEffect, useRef, useState } from 'react'
// import application from './gameapplication.js'

export default function Game() {
  let pixelsize = 2
  let speed = 1
  const styleofallthegame = { '--pixel-size': `${pixelsize}px`, '--grid-cell': `${pixelsize * 16}px`, '--bg': 'black' }
  // const pixelart = { 'image-rendering': 'pixelated' }
  const camerastyle = { 'imageRendering': 'pixelated', 'width': `${pixelsize * 320}px`, 'height': `${pixelsize * 288}px`, 'overflow': 'hidden', 'background': 'lightgray', 'position': 'relative' }
  const mapstyle = { 'imageRendering': 'pixelated', 'backgroundImage': `url(${BlackMap})`, 'backgroundSize': '100%', 'width': `${pixelsize * 16 * 39}px`, 'height': `${pixelsize * 16 * 30}px`, 'position': 'relative' }
  const charstyle = { 'width': `${pixelsize * 30}px`, 'height': `${pixelsize * 30}px`, 'position': 'absolute' }
  //перерисовать картинку из 16 в 30
  const [fromTop, setFromTop] = useState(120)
  const [fromLeft, setLeft] = useState(360)
  const characterspritesheet = { 'position': 'absolute', 'backgroundImage': `url(${Pers1})`, 'backgroundSize': '100%', 'width': `${pixelsize * 30}px`, 'height': `60px`, 'top': `${fromTop}px`, 'left': `${fromLeft}px` }

  function useKey(key, cb) {
    console.log('usekey');
    const callbackRef = useRef(cb)
    useEffect(() => {
      function handle(event) {
        console.log(event);
        if (event.code === key) {
          callbackRef.current(event)
        }
      }
      // const gamediv = document.querySelector('.gamediv')
      // if (gamediv) 
      document.addEventListener('keypress', handle)
      return document.removeEventListener('keypress', handle)
    }, [key])
  }

  function handleEnter() {
    console.log('enter is pressed');
  }
  function handleA() {
    console.log('a is pressed');
  }
  
  useKey('Enter', handleEnter)
  useKey('a', handleA)


  
  function godown() {
    return 'hi'
  }
  
  
    return (
      <>
        <h1 style={{ color: 'white', marginLeft: '37%' }}>настя плакоет</h1>
        <div className='gamediv' style={styleofallthegame, { marginTop: "1%" }} >
          <div className='camera' style={camerastyle}  >
            <div className='map' style={mapstyle} >
              <div className='character' style={charstyle}>
                <div className="character_spritesheet pixel-art" style={characterspritesheet}>
                  {/* разные классы на разный поворот (к камере, вправо, влево, от камеры) */}
                </div>
              </div>
            </div>
          </div>
  
  
          <div style={{ position: 'absolute' }}>
            <button onClick={godown} className="dpad-button dpad-left" style={{ 'height': "8vh", 'width': '7vw', position: 'absolute', 'top': "15vh", 'left': '6vw' }}>
              <div className='triangle-left'></div>
            </button>
            <button className="dpad-button dpad-up" style={{ 'height': "8vh", 'width': '7vw', position: 'absolute', 'top': "6vh", 'left': '14vw' }}>
              <div className='triangle-up'></div>
            </button>
            <button className="dpad-button dpad-down" style={{ 'height': "8vh", 'width': '7vw', position: 'absolute', 'top': "24vh", 'left': '14vw' }}>
              <div className='triangle-down'></div>
            </button>
            <button className="dpad-button dpad-right" style={{ 'height': "8vh", 'width': '7vw', position: 'absolute', 'top': "15vh", 'left': '22vw' }}>
              <div className='triangle-right'></div>
            </button>      </div>
        </div>
  
  
      </>
    )
  }
  