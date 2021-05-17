import React, { useEffect } from 'react'

export default function Gig(props) {
    const { desc, location } = props
    useEffect(() => {
        console.log('ya v use effecte');
    }, [])
    return (
        <div className='container'>
            {/* <Map location={location} /> Компонент из гугл карты */}
            <div className='gig-desc'>
                <h4 className='desc-el'>Opisanie</h4>
                <p className='desc-el'> {desc}</p>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Ssilka na bileti</a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Ssilka na mesto</a>
            </div>

        </div>
    )
}
