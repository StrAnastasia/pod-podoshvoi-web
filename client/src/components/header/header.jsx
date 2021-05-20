import React, { useState, useEffect } from "react";
import axios from "axios";
import "./headerStyle.scss";
import hederLogo from "../../images/pngegg.png";
import profile from "../../images/pofile.png";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";

export default function Header() {
  const [auth, setAuth] = useState(null); // IF WE CHANGE THIS INITIAL VALUE WE GET DIFFERENT PAGES

  useEffect(() => {
    axios.get("/auth/current-session").then(({ data }) => {
      setAuth(data);
    });
  }, []);

  return (
    <>
      <div
        className="backGround"
        style={{ position: "sticky", top: "0", zIndex: "1" }}
      >
        <div className="logoContainer">
          <Link className="textHeader" aria-current="page" to="/">
            <img className="logo" src={hederLogo} />
          </Link>
        </div>

        <div className="centerDiv">

          {auth ? (
            <>

              <Link
                style={{ marginRight: 20 }}
                className="textHeader"
                aria-current="page"
                to="/"
              >
                новости
          </Link>
              <Link
                style={{ marginRight: 20 }}
                className="textHeader"
                aria-current="page"
                to="/chat"
              >
                чатик
          </Link>
              <Link
                style={{ marginRight: 20 }}
                className="textHeader"
                aria-current="page"
                to="/allgigsmap"
              >
                концерты
          </Link>
              <Link
                style={{ marginRight: 20 }}
                className="textHeader"
                aria-current="page"
                to="/game"
              >
                игруля
          </Link>
            </>

          ) : (<Link
            style={{ marginRight: 20 }}
            className="textHeader"
            aria-current="page"
            to="/"
          >
            новости
          </Link>)}


          < div style={{ color: "white" }}>|</div>

          <img className="logoProfile" src={profile} />
          {auth ? (
            <>
              <Link
                className="textHeader"
                style={{ marginRight: 20 }}
                aria-current="page"
              >
                {auth && auth.nickname ? (
                  <Dropdown name={auth.nickname} />
                ) : null}
              </Link>
            </>
          ) : (
            <>
              <a
                className="textHeader"
                style={{}}
                aria-current="page"
                href="http://localhost:8080/auth/login"
              >
                вход/регистрация
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
}
