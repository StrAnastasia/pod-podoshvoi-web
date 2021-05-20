import "./band.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getgigFunc } from "../../redux/AC/ac";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Band() {
  const band = useSelector((state) => state.band);
  console.log(band);
  const dispatch = useDispatch();

  const [auth, setAuth] = useState(null);

  useEffect(() => {
    axios.get("/auth/current-session").then(({ data }) => {
      setAuth(data);
      console.log(data);
    });
  }, []);
  const favHandler = (e) => {
    // axios.get(`//localhost:8080/favgroup/${adress}/`);
  };
  const gigHandler = (e) => {
    let giginfo = e.target.dataset.value;
    dispatch(getgigFunc(giginfo));
    console.log(giginfo);
  };
  console.log(band);
  return (
    <>
      <div className="homePage">
        <div
          className="band-post"
          style={{ color: "white", "background-color": "black" }}
        >
          <div className="profileBackground" />

          {band?.image ? (
            <img alt="post" src={band?.image} className="homePage-post-img" />
          ) : null}

          <div className="band-desc">
            <div className="d-flex  align-items-center flex-column">
              <div className="band-post-title">{band?.bandName}</div>
              <div className="band-post-class">
                {band?.genre ? band?.genre.map((el) => `${el}. `) : null}
              </div>
              <h4 className="homePage-post-text">{band?.discription} </h4>
            </div>
            <div className="containerGroup">
              <div className="linkContainer">
                <h4 style={{ color: "tomato", fontSize: "3vh" }}>медиа</h4>
                <a className="desc-el" href={band?.media?.vk}>
                  vk
                </a>
                <a className="desc-el" href={band?.media?.insta}>
                  insta
                </a>
              </div>

              <div className="linkContainer">
                <h4 style={{ color: "tomato", fontSize: "3vh" }}>музло</h4>

                <a className="desc-el" href={band?.musicLinks?.vk}>
                  vk
                </a>
                <a className="desc-el" href={band?.musicLinks?.yandex}>
                  yandex
                </a>
                <a className="desc-el" href={band?.musicLinks?.spot}>
                  spotify
                </a>
              </div>

              <div className="linkContainer">
                <h4 style={{ color: "tomato", fontSize: "3vh" }}>гиги</h4>

                {band?.gigs
                  ? band?.gigs.map((gig) => (
                      <Link
                        className="desc-el"
                        onClick={gigHandler}
                        data-value={gig}
                        to={`/gigs/${gig}`}
                      >
                        {gig}
                      </Link>
                    ))
                  : null}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                marginTop: 30,
              }}
            >
              <div className="band-post-date">{band?.years}</div>
              <button onClick={favHandler}>add to fav</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
