import axios from "axios";
import React, { useEffect, useState } from "react";
import "./selectModule.scss";

export default function SelectMarkers({
  num,
  adress,
  indx,
  value,
  selectHandler,
  name,
  date,
}) {
  return (
    <>
      <div className="select-post">
        <button
          style={{ width: "19vw" }}
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
