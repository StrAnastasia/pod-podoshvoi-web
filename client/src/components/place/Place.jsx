import { useSelector } from "react-redux"
import map from '../../images/map.jpg'



export default function Place() {
  const place = useSelector(state => state.place)

  return (


    <div className='homePage' >
      <div className="profileBackground" />


      <div className='gig-card'  >


        {place?.image ? <img alt='post' src={place?.image} className="homePage-post-img" /> : <img alt='post' src={map} className="gig-img"/>}
        
        <div className='cards-conteiner'>


          


           
              <div className='gig-card-title' >{place?.name}</div>
            <h4 className="homePage-post-text">{place?.comment ? place?.comment : null}</h4>
            <h4 className='desc-el homePage-post-text'>{place?.adress}</h4>

            <h4 className='card-adress'>{place?.menu ? place?.menu : null}</h4>

            <h4 className='card-lineup'>Афиша:</h4>
            <div className='desc-el homePage-post-text'>
            {place?.afisha ? place?.afusha : 'кина не будет'}

            </div>
            

          
        </div>

      </div>
    </div>

  )
}
