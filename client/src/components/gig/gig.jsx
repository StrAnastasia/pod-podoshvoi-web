import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import map from "../../images/map.jpg";
import "./gigModule.scss";

import { getinfoFunc, getplaceFunc } from "../../redux/AC/ac";

export default function Gig(props) {
  const gig = useSelector((state) => state.gigs);
  console.log("gigggggggg", gig);

  const dispatch = useDispatch();

  const findHandler = (e) => {
    let info = e.target.dataset.value;
    dispatch(getinfoFunc(info));
  };

  const place = useSelector((state) => state.place);

  const findplaceHandler = (e) => {
    console.log(e.target);
    let place = e.target.dataset.value;
    console.log(place);
    dispatch(getplaceFunc(place));
  };

  return (
    <div className="homePage">
      <div className="profileBackground" />
      <div className="gig-card">
        {/* {gig?.image ? <img alt='post' src={gig?.image} className="homePage-post-img" /> : <img alt='post' src={map} className="gig-img" />} */}

        <iframe
          width="1100vw"
          height="500vh"
          style={{ border: 0 }}
          loading="lazy"
          allowfullscreen
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFwsh8v8RW0GuXexKljW22Hak3vM2uQtY&q=${gig?.adress}`}
        ></iframe>
        <div className="cards-conteiner">
        <Link to={`/`} style={{display: 'flex', justifyContent: 'flex-end', 'textDecoration': 'none'}}> <span >✖️</span></Link>

          <div className="d-flex  align-items-center flex-column">
            <h1 className="gig-card-title">{gig?.name}</h1>
          </div>

          <Link className="card-adress" to={`/place/${gig?.adress}`}>
            <h5 onClick={findplaceHandler} data-value={gig?.adress}>
              {gig?.adress}
            </h5>
          </Link>

          <h4 className="card-adress"> тут, возможно, будет описание</h4>

          <h5 className="card-lineup">Лайн-ап:</h5>

          {gig?.bands
            ? gig?.bands.map((band) => {
                return (
                  <Link className="card-adress" to={`/band/${band}`}>
                    <div className="" onClick={findHandler} data-value={band}>
                      {band}
                    </div>
                  </Link>
                );
              })
            : null}

          <h4 className="card-data">{gig?.date}</h4>
        </div>
      </div>
    </div>
  );
}
