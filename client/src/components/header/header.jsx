import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Header() {

  const [auth, setAuth] = useState(null); // IF WE CHANGE THIS INITIAL VALUE WE GET DIFFERENT PAGES

  useEffect(() => {
    axios.get('/auth/current-session').then(({data}) => {
      setAuth(data);
    })
  }, [])


  return (
    <div style={{position: 'sticky', top: '0',['z-index']: '1'}}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Under theSole
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/homepage"
                >
                  Home
                </Link>
              </li>
            </ul>

            <div className=" navbar-nav mx-5 ">
              {auth ? (
                <>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/profile"
                  >
                    Profile
                  </Link>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/auth/logout"
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="http://localhost:8080/auth/login" 
                  >
                    Sing in
                  </a>
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="http://localhost:8080/auth/login"
                  >
                    Sing up
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
