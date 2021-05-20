import React, { useCallback, useEffect, useRef, useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import mapStyle from "./map";
import axios from "axios";
import SelectMarkers from "../SelectMarkers/SelectMarkers";
import "./mapModule.scss";
import { useDispatch } from "react-redux";
import { getgigFunc } from "../../redux/AC/ac";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Map() {
  const dispatch = useDispatch();
  const history = useHistory();
  const gigHandler = (e) => {
    let giginfo = selected.name;
    dispatch(getgigFunc(giginfo));
    history.push(`/gigs/${giginfo}`);
  };
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);
  const selectHandler = (e) => {
    console.log(e);
    panTo(e);
    setSelected(e);
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
                lat: selected.lat,
                lng: selected.lng,
              }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>
                <Link onClick={gigHandler} to={`/gigs/${selected.name}`}>
                  {selected.adress}
                </Link>
                <p>{JSON.stringify(selected.bands)}</p>
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
                adress={el.adress}
                value={newStr}
                num={el._id}
                name={el.name}
                date={el.date}
                selectHandler={selectHandler}
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
