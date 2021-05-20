import axios from "axios";
import React, { useEffect, useState } from "react";
import "./selectModule.scss";

export default function SelectMarkers({
  num,
  adress,
  indx,
  selectHandler,
  name,
  date,
}) {
  let locdata = {};
  const [location, setLocation] = useState({});
  // https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyCtPbYjq1VPSnTlsfvfNs3pexwlEAYjDmk`
  useEffect(() => {
    axios
      .get(`//localhost:8080/place/${adress}`)
      .then((data) => {
        setLocation(data.data.location);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("---------->", location);
  return (
    <>
      <div className="select-post">
        <button
          style={{ marginLeft: 50, width: 300 }}
          className="btn btn-dark"
          onClick={() => selectHandler(location)}
        >
          <div className="buttonConteiner">
            <div className="buttonText">{name}</div>
            <div className="buttoDate">{date}</div>
          </div>
        </button>
      </div>
    </>
  );
}
