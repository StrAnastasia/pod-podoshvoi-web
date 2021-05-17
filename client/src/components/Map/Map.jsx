import React, { useCallback, useRef, useState } from 'react'
import { GoogleMap, InfoWindow, LoadScript,Marker } from '@react-google-maps/api'
import mapStyle from './map'
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import "@reach/combobox/styles.css";
import { formatRelative } from "date-fns";
export default function Map() {
  const onMapClick = useCallback( (event)=>{
    setMarkers((current)=>[...current,
      {
        location:{
          lat:event.latLng.lat(),
          lng:event.latLng.lng()
        },
        time: new Date().getTime()
      }
    ])
  },[])
  const mapRef = useRef()
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  const [markers,setMarkers] = useState([])
  const [selected,setSelected] = useState(null)
    const containerStyle = {
        width: '100vw',
        height: '85vh'
      };
      const center = {
        lat: 55.70877845296291,
        lng: 37.58536453295382
      };
    return (
        <>
        <LoadScript
        googleMapsApiKey={'AIzaSyCtPbYjq1VPSnTlsfvfNs3pexwlEAYjDmk'}
        libraries = {["places"]}
        >
           <Search panTo={panTo} />
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
          onClick={
           onMapClick
          }
          onLoad={onMapLoad}
        >
            {markers.map((el)=>{
              return(
              <Marker
              key={el.time}
              position={el.location}
              icon={{
                url:'/marker.svg',
                scaledSize: new window.google.maps.Size(30,30),
              }}
              onClick={() =>{
                setSelected(el)
              }}
            />)
            })}
            {selected? <InfoWindow position={{ lat: selected.location.lat, lng: selected.location.lng }} 
            onCloseClick={() =>{
                setSelected(null)
              }}>
              <div>
              <h2>Auf</h2>
              <p>reeeeeeee</p>
              </div>
            </InfoWindow>:null}
        </GoogleMap>
      </LoadScript>
       </>
    )
}
function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
