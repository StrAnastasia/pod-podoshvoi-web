import './game.css'
import Pers1 from '../../images/person.png'
import BlackMap from '../../images/blackmap.png'
import { useEffect, useState } from 'react'
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

  useEffect((e) => {
    console.log('ya tut', fromTop);
    const gamediv = document.querySelector('.gamediv')
    if (gamediv) document.addEventListener('keydown', walkHandler)
    return null
  }, [fromTop])

  const walkHandler = async (e) => {
    switch (e.keyCode) {
      case 65:
        console.log('go vlevo');
        break;
      case 87:
        console.log('go vverh');

        break;
      case 68:
        // console.log('go vpravo');
        // console.log(fromLeft);
        await setLeft(prev => prev++)
        // console.log(fromLeft);

        break;
      case 83:
       await setFromTop(prev => prev + 1)
        break;

      default:
        break;
    }
    console.log(fromTop);
  }





  return (
    <>
    <h1 style={{color: 'white', marginLeft: '37%'}}>настя плакоет</h1>
      <div className='gamediv' style={styleofallthegame, { marginTop: "1%" }}>
        <div className='camera' style={camerastyle}  >
          <div className='map' style={mapstyle} >
            <div className='character' style={charstyle}>
              <div className="character_spritesheet pixel-art" style={characterspritesheet}>
                {/* разные классы на разный поворот (к камере, вправо, влево, от камеры) */}
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
