import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getinfoFunc } from '../../redux/AC/ac'

export default function Gig(props) {
  // const { desc, location } = props

  // const gig = {
  //   name: 'Гулять!',
  //   bands: ['Шейм', 'ЛОГОС', 'Red Hize'],
  //   adress: "Бункер 47",
  //   date: "2021-05-23, 18:30"
  // }

  const gig = useSelector(state => state.gigs)
  console.log('gigggggggg', gig);


  const dispatch = useDispatch()

  const findHandler = (e) => {
    console.log(e.target);
    console.log(e.target.dataset.value, 'findHandler 2');
    let info = e.target.dataset.value
    dispatch(getinfoFunc(info))
  }


  return (
    <>
      <div className='homePage' >
        <div className='homePage-post' style={{ 'color': 'white' }, { 'background-color': 'gray' }} >
          {gig?.image ? <img alt='post' src={gig?.image} className="homePage-post-img" /> : <img alt='post' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fmap-point-location-pin-vector-icon-mapping-satellite-allocation-map-point-location-pin-vector-icon-mapping-image156917586&psig=AOvVaw0jRkoI8fPoEqs41MQrEWSG&ust=1621326164941000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjM7uKk0PACFQAAAAAdAAAAABAD' className="homePage-post-img" />}
          <div className='d-flex'>
            <div className='band-desc'>
              <div className="d-flex  align-items-center flex-column">
                <h1 className='homePage-post-title' >{gig?.name}</h1></div>
              <h4 style={{ 'color': 'white' }}>{gig?.date}</h4>
              <h5 style={{ 'color': 'white' }}>{gig?.adress}</h5>

              <h4 className="homePage-post-text"> тут, возможно, будет описание</h4>
              {/* <p className='desc-el'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus deserunt voluptatibus molestias, possimus omnis laborum illum adipisci, similique nostrum commodi totam error laudantium vel at! Itaque ipsam fugit veniam!</p> */}
              <h5 className='desc-el homePage-post-text'>Лайн-ап:</h5>
              <ul className='desc-el homePage-post-text'>
                {gig?.bands ? gig?.bands.map(band => {
                    console.log(band);
                 return <Link to={`/band/${band}`}>
                    <li className='desc-el homePage-post-text' onClick={findHandler} data-value={band} ><a>{band}</a></li>
                  </Link>
                })
                  : null}
              </ul>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}
