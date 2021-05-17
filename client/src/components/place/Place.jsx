import React, { useEffect } from 'react'

export default function Place(props) {
    const {desc,location} = props // desc - comment
    useEffect(()=>{
      console.log('ya v use effecte');
    },[])
    return (
        <div className='container'>
            {/* <Map location={location} /> Компонент из гугл карты */}
            <div className='gig-desc'>
            <h4 className='desc-el'>Nazvanie</h4>
            <p className='desc-el'> {desc}</p>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Adress</a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Menu</a>
                </div>
        </div>
    )
}
