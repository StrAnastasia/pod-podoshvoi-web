import { useSelector } from "react-redux"
import map from '../../images/map.jpg'



export default function Place() {
  const place = useSelector(state => state.place)
 console.log(place?.adress);
  return (


    <div className='homePage' >
      <div className="profileBackground" />


      <div className='gig-card'  >


      <iframe
          width="1100vw"
          height="500vh"
          style={{ border: 0 }}
          loading="lazy"
          allowfullscreen
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFwsh8v8RW0GuXexKljW22Hak3vM2uQtY&q=${place?.adress}`}
        ></iframe>
        
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
