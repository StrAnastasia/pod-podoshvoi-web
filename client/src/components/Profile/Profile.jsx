import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./profileModule.scss";

function Profile() {
  const [auth, setAuth] = useState(null); // IF WE CHANGE THIS INITIAL VALUE WE GET DIFFERENT PAGES

  useEffect(() => {
    axios
      .get(
        "/https://murmuring-bastion-15989.herokuapp.com/auth/current-session"
      )
      .then(({ data }) => {
        setAuth(data);
      });
  }, []);

  return (
    <header className="">
      <div className="profileBackground" />
      <div className="profileContainer">
        <div className="favorites">favorites</div>
        <div className="wish">a wish</div>
      </div>
    </header>
  );
}

export default Profile;
