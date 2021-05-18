import React, { useState, useEffect } from "react";
import axios from "axios";
import "./headerStyle.scss";
import hederLogo from "../../images/pngegg.png";
import profile from "../../images/pofile.png";
import { Link } from "react-router-dom";
import { fetchAllNews } from "../../redux/AC/ac";
import { useDispatch } from "react-redux";
import Dropdown from "../dropdown/Dropdown";

export default function Header() {
  const [auth, setAuth] = useState(null); // IF WE CHANGE THIS INITIAL VALUE WE GET DIFFERENT PAGES

  const dispatch = useDispatch();

  const allnewsHandler = async () => {
    dispatch(fetchAllNews()); //-- thunk
  };

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
          <img className="logo" src={hederLogo} />

          <Link
            onClick={allnewsHandler}
            className="textHeader"
            aria-current="page"
            to="/homepage"
          >
            под подошвой
          </Link>
        </div>

        <div className="centerDiv">
          <Link
            style={{ marginRight: 20 }}
            className="textHeader"
            aria-current="page"
            to="/homepage"
            onClick={allnewsHandler}
          >
            новости
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
          <div style={{ color: "white" }}>|</div>

          {auth ? (
            <>
              <Link
                className="textHeader"
                style={{ marginRight: 20 }}
                aria-current="page"
              >
                <img className="logoProfile" src={profile} />
                {auth && auth.nickname ? (
                  <Dropdown name={auth.nickname} />
                ) : null}
              </Link>
              <a
                className="textHeader"
                style={{ marginRight: 20 }}
                aria-current="page"
                href="http://localhost:8080/auth/logout"
              >
                выход
              </a>
            </>
          ) : (
              <>
                <a
                  className="textHeader"
                  style={{ marginLeft: 20 }}
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
