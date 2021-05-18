import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import mapStyle from "./map";
import axios from "axios";
import SelectMarkers from "../SelectMarkers/SelectMarkers";
import "./mapModule.scss";
export default function Map() {
  const onMapClick = useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        location: {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        },
        time: new Date().getTime(),
      },
    ]);
  }, []);
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);
  const selectHandler = (e) => {
    const newStr = JSON.parse(e.target.value);
    console.log(newStr);
    panTo(newStr.location);
    setSelected(newStr);
  };
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const containerStyle = {
    width: "40vw",
    height: "50vh",
  };
  const center = {
    lat: 55.70877845296291,
    lng: 37.58536453295382,
  };
  useEffect(() => {
    axios.get("//localhost:8080/gigs").then(({ data }) => {
      setMarkers(data);
    });
  }, []);
  return (
    <div className="mapContainer">
      <div>
        <div className="profileBackground" />
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
          onClick={onMapClick}
          onLoad={onMapLoad}
        >
          {markers.map((el) => {
            return (
              <Marker
                key={el._id}
                position={el.location}
                icon={{
                  url: "/marker.svg",
                  scaledSize: new window.google.maps.Size(30, 30),
                }}
                onClick={() => {
                  console.log(el);
                  setSelected(el);
                }}
              />
            );
          })}
          {selected ? (
            <InfoWindow
              position={{
                lat: selected.location.lat,
                lng: selected.location.lng,
              }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>
                <h2>Auf</h2>
                <p>reeeeeeee</p>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </div>

      <div>
        {markers.length ? (
          markers.map((el, indx) => {
            const newStr = JSON.stringify(el);
            return (
              <SelectMarkers
                key={el._id}
                indx={indx + 1}
                value={newStr}
                num={el._id}
              />
            );
          })
        ) : (
          <SelectMarkers
            value={"as"}
            num={"тут что то будет после нажатия на карту"}
          />
        )}
      </div>
    </div>
  );
}
