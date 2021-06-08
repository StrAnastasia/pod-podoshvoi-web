import React, { useState, useEffect } from "react";
import "./headerStyle.scss";
import hederLogo from "../../images/pngegg.png";
import profile from "../../images/pofile.png";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

export default function Header() {
  const scrollToBottom = () => {
    scroll.scrollTo(600);
  };

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
          <>
            <Link
              style={{ marginRight: 20 }}
              className="textHeader"
              aria-current="page"
              to="/"
              onClick={scrollToBottom}
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

          <div style={{ color: "white" }}>|</div>

          <img className="logoProfile" src={profile} />
          {/* {auth ? (
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
                href="http://murmuring-bastion-15989.herokuapp.com/auth/login"
              >
                вход/регистрация
              </a>
            </>
          )} */}
        </div>
      </div>
    </>
  );
}
