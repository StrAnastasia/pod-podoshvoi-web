import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Profile({ auth }) {
  return (
    <div className="navbar-nav-app">
     
      <header className="navbar-nav-app-header">
         <div className=" navbar-nav-app-link mx-5 ">
        <Link className="nav-link active" aria-current="page" to="//auth/login">
         Logout
        </Link>
      </div>
        <p>
          You are logged in as {auth && auth.nickname ? auth.nickname : null}
        </p>
      </header>
    </div>
  );
}

export default Profile;
