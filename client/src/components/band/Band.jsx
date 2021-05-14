import React, { useEffect } from 'react'
import './band.css'
import {useSelector} from 'react-redux'
export default function Band() {
    const gigs = useSelector(state => state.gigs)
    useEffect(()=>{
      console.log(gigs);
    },[])
    return (
        <div class='container'>
            <img class='band-logo' src='https://i.pinimg.com/originals/2c/2c/6b/2c2c6b3e32b54057893f59056107d817.jpg' width='250'height='150'/>
            <div class='band-desc'>
            <h3 class='desc-el'>Grupa</h3>
            <h4 class='desc-el'>Opisanie</h4>
            <p class='desc-el'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus deserunt voluptatibus molestias, possimus omnis laborum illum adipisci, similique nostrum commodi totam error laudantium vel at! Itaque ipsam fugit veniam!</p>
            <span>2018-..</span>
            <h5 class='desc-el'>Spisok pisok</h5>
            <ul class='desc-el'>
                <li class='desc-el'><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">vk</a></li>
            </ul>
                </div>
        </div>
    )
}
