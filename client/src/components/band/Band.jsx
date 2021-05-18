import './band.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getgigFunc } from '../../redux/AC/ac'
export default function Band() {

  const band = useSelector(state => state.band)
  const dispatch = useDispatch()

  const gigHandler = (e) => {
    let giginfo = e.target.dataset.value
    dispatch(getgigFunc(giginfo))
  }

  return (
    <>
      <div className='homePage' >
        <div className='homePage-post' style={{ 'color': 'white', 'background-color': 'gray' }} >
          {band?.image ? <img alt='post' src={band?.image} className="homePage-post-img" /> : null}
          <div className='d-flex'>
            <div className='band-desc'>
              <div className="d-flex  align-items-center flex-column">
                <h1 className='homePage-post-title' >{band?.bandName}</h1></div>
              <h3 style={{ 'color': 'white' }}>{band?.genre? band?.genre.map(el => `${el}. `) : null}</h3>
              <h4 style={{ 'color': 'white' }}>{band?.years}</h4>

              <h4 className="homePage-post-text">{band?.description}</h4>
              {/* <p className='desc-el'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus deserunt voluptatibus molestias, possimus omnis laborum illum adipisci, similique nostrum commodi totam error laudantium vel at! Itaque ipsam fugit veniam!</p> */}
              <h4 className='desc-el homePage-post-text'>медиа</h4>
              <ul className='desc-el homePage-post-text'>
                <li className='desc-el homePage-post-text'><a href={band?.media?.vk}>vk</a></li>
                <li className='desc-el homePage-post-text'><a href={band?.media?.insta}>insta</a></li>
              </ul>
              <h4 className='desc-el homePage-post-text'>музло</h4>
              <ul className='desc-el homePage-post-text'>
                <li className='desc-el homePage-post-text'><a href={band?.musicLinks?.vk}>vk</a></li>
                <li className='desc-el homePage-post-text'><a href={band?.musicLinks?.yandex}>yandex</a></li>
                <li className='desc-el homePage-post-text'><a href={band?.musicLinks?.spot}>spotify</a></li>
              </ul>
              <h4 className='desc-el homePage-post-text'>гиги</h4>
              <ul className='desc-el homePage-post-text'>
                {band?.gigs ? band?.gigs.map((gig) =>
                      <Link onClick={gigHandler} to={`/gigs/${gig}`}><li data-value={gig} className='desc-el homePage-post-text'>{gig}</li></Link>
                  ) : null}
              </ul>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
