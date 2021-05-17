import React from 'react'
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api'
import mapStyle from './map'
export default function Map() {
  const locArr =[
    {
      lat:55.7326111637768, 
      lng: 37.587939453508504
    },
    {
      lat:55.70877845296291,  
      lng: 37.58536453295382
    },
    {
      lat:55.72202601455856,  
      lng: 37.64398689091568
    }
  ]
    const containerStyle = {
        width: '400px',
        height: '400px'
      };
      const center = {
        lat: 55.70877845296291,
        lng: 37.58536453295382
      };
      console.log(process.env.REACT_APP_GOOGLE_API_KEY);
    return (
        <>
        <LoadScript
        googleMapsApiKey={'AIzaSyCtPbYjq1VPSnTlsfvfNs3pexwlEAYjDmk'} 
        >
       <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          options={{
            styles: mapStyle,
            streetViewControl: false,
            disableDefaultUI: true,
            zoomControl: true,
          }}
        >
            {locArr.map((el)=>{
              return(
              <Marker
              position={el}
            />)
            })}
        </GoogleMap>
      </LoadScript>
       </>
    )
}
