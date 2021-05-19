import axios from "axios";
import React, { useEffect } from "react";
import imgPost3 from "../../images/concert2.jpg";
import "./selectModule.scss";

export default function SelectMarkers({
  value,
  num,
  adress,
  indx,
  selectHandler,
  name,
  date,
}) {
  // https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyCtPbYjq1VPSnTlsfvfNs3pexwlEAYjDmk`
  useEffect(() => {
    axios
      .get(`//localhost:8080/place/${adress}`)
      .then(console.log)
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("---------->", num.length);
  return (
    <>
      <div className="select-post">
        <button
          style={{ marginLeft: 50, width: 300 }}
          className="btn btn-dark"
          onClick={() => selectHandler(value)}
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
