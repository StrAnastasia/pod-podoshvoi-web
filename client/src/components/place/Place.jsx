import { useSelector } from "react-redux"

export default function Place() {
  const place = useSelector(state => state.place)

  return (


    <div className='homePage' >
      <div className='homePage-post' style={{ 'color': 'white' }, { 'background-color': 'gray' }} >
        {place?.image ? <img alt='post' src={place?.image} className="homePage-post-img" /> : <img alt='post' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fmap-point-location-pin-vector-icon-mapping-satellite-allocation-map-point-location-pin-vector-icon-mapping-image156917586&psig=AOvVaw0jRkoI8fPoEqs41MQrEWSG&ust=1621326164941000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjM7uKk0PACFQAAAAAdAAAAABAD' className="homePage-post-img" />}
        <div className='d-flex'>
          <div className='band-desc'>
            <div className="d-flex  align-items-center flex-column">
              <h1 className='homePage-post-title' >{place?.name}</h1></div>
            <h4 className="homePage-post-text">{place?.comment ? place?.comment : null}</h4>
            <h4 className='desc-el homePage-post-text'>{place?.adress}</h4>

            <h4>{place?.menu ? place?.menu : null}</h4>
            <h4>Афиша:</h4>
              
            {place?.afisha ? <h3>{place?.afusha}</h3> : 'кина не будет'}
            

          </div>
        </div>

      </div>
    </div>

  )
}
