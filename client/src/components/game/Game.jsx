import "./game.css";
import Pers1 from "../../images/SPRITESHEET_1.png";
import Pers5 from "../../images/SPRITESHEET_5.png";
import Pers9 from "../../images/SPRITESHEET_9.png";
import Pers13 from "../../images/SPRITESHEET_13.png";
import BlackMap from "../../images/MAP.png";
import mirmore from "../../images/mirmore.png";
import bubble1 from "../../images/bubble_1.png";
import bubble2 from "../../images/bubble_2.png";
import bubble3 from "../../images/bubble_3.png";
import bubble4 from "../../images/bubble_4.png";
import bubble5 from "../../images/bubble_5.png";
import buttonpng from "../../images/BUTTON.png";
import perspet from "../../images/SPRITESHEET_1_pet.png";
import mirmoreput from "../../images/mirmore_put.png";
import ment from "../../images/ment.png";

import { useEffect, useState } from "react";
export default function Game() {
  let pixelsize = 2;
  let speed = 7;

  const [map_fromTop, setmapFromTop] = useState(0);
  const [map_fromLeft, setmapLeft] = useState(0);
  const [fromTop, setFromTop] = useState(170);
  const [fromLeft, setLeft] = useState(260);
  const [backgroundcrowdplacetop, setbackgroundcrowdplacetop] = useState(210);
  const [backgroundcrowdplaceleft, setbackgroundcrowdplaceleft] = useState(850);

  const [spriteState, setSprite] = useState(Pers1);
  const [mirmorestate, setmirmorestate] = useState(mirmore);
  const [mentstate, setMentstate] = useState("-1000");

  const [vis, setVis] = useState("hidden");
  const [vismay, setVismay] = useState("hidden");
  const [visili, setVisili] = useState("hidden");
  const [vispivo, setVispivo] = useState("hidden");
  const [vissneg, setvissneg] = useState("");

  const styleofallthegame = {
    "--pixel-size": `${pixelsize}px`,
    "--grid-cell": `${pixelsize * 16}px`,
    "--bg": "black",
  };
  // const pixelart = { 'image-rendering': 'pixelated' }
  const camerastyle = {
    imageRendering: "pixelated",
    width: `${pixelsize * 320}px`,
    height: `${pixelsize * 288}px`,
    overflow: "hidden",
    background: "lightgray",
    position: "relative",
  };
  const mapstyle = {
    top: `${map_fromTop}px`,
    left: `${map_fromLeft}px`,
    imageRendering: "pixelated",
    backgroundImage: `url(${BlackMap})`,
    backgroundSize: "100%",
    width: `${pixelsize * 16 * 39}px`,
    height: `${pixelsize * 10.67 * 30}px`,
    position: "relative",
  };
  const charstyle = {
    "z-index": "1",
    width: `${pixelsize * 30}px`,
    height: `${pixelsize * 30}px`,
    position: "absolute",
  };
  //перерисовать картинку из 16 в 30
  const characterspritesheet = {
    position: "absolute",
    backgroundImage: `url(${spriteState})`,
    backgroundSize: "100%",
    width: `${pixelsize * 30}px`,
    height: `77px`,
    top: `${fromTop}px`,
    left: `${fromLeft}px`,
  };
  const bubble2style = {
    backgroundSize: "100%",
    backgroundImage: `url(${bubble2})`,
    visibility: `${vis}`,
    position: "absolute",
    width: `${pixelsize * 60}px`,
    height: `${pixelsize * 50}px`,
    top: `${fromTop + 80}px`,
    left: `${fromLeft - 30}px`,
    fontSize: "12px",
  };

  const crowdstyle = {
    position: "absolute",
    width: `${pixelsize * 118}px`,
    height: `${pixelsize * 66}px`,
    top: `${backgroundcrowdplacetop}px`,
    left: `${backgroundcrowdplaceleft}px`,
    backgroundImage: `url(${mirmorestate})`,
    backgroundSize: "100%",
  };
  const bubble1style = {
    "z-index": "2",
    backgroundSize: "100%",
    visibility: `${vissneg}`,
    backgroundImage: `url(${bubble1})`,
    position: "absolute",
    width: `${pixelsize * 60}px`,
    height: `${pixelsize * 36}px`,
    top: `${backgroundcrowdplacetop - 70}px`,
    left: `${backgroundcrowdplaceleft + 90}px`,
    fontSize: "12px",
  };
  const maystyle = {
    backgroundSize: "100%",
    width: `${pixelsize * 60}px`,
    height: `${pixelsize * 35}px`,
    top: `${fromTop - 70}px`,
    left: `${fromLeft - 100}px`,
    position: "absolute",
    visibility: `${vismay}`,
    backgroundImage: `url(${bubble3})`,
  };

  const mentment = {
    position: "absolute",
    backgroundImage: `url(${ment})`,
    backgroundSize: "100%",
    width: `${pixelsize * 30}px`,
    height: `77px`,
    top: `${fromTop}px`,
    left: `${mentstate}px`,
  };

  function chooseaction() {
    if (vis === "") {
      setVisili("hidden");
      setVispivo("hidden");
      setVis("hidden");
      setVismay("hidden");
    } else {
      setVis("");
      setVisili("hidden");
      setVispivo("hidden");
      setVismay("hidden");
      setTimeout(() => {
        setVisili("");
      }, 2000);
      setTimeout(() => {
        setVispivo(" ");
      }, 3000);
    }
  }

  function mayvisible() {
    if (vismay === "") {
      setVismay("hidden");
    } else {
      setVismay("");
      setVisili("hidden");
      setVispivo("hidden");
      setVis("hidden");
    }
  }
  const [moneyvis, setMoneyvis] = useState("hidden");
  const moneystyle = {
    visibility: `${moneyvis}`,
    "z-index": "3",
    backgroundSize: "100%",
    backgroundImage: `url(${bubble5})`,
    position: "absolute",
    width: `${pixelsize * 150}px`,
    height: `${pixelsize * 108}px`,
    top: `30vh`,
    left: `43vw`,
  };
  function moneyfunc() {
    if (moneyvis === "") {
      setMoneyvis("hidden");
      setSprite(Pers1);
      setmirmorestate(mirmore);
      setvissneg(" ");
    } else {
      setMoneyvis("");
      setVismay("hidden");
      setVisili("hidden");
      setVispivo("hidden");
      setVis("hidden");
      setmodalvis("hidden");
    }
  }

  const [modalvis, setmodalvis] = useState("hidden");
  const modalstyle = {
    visibility: `${modalvis}`,
    "z-index": "3",
    backgroundSize: "100%",
    backgroundImage: `url(${bubble5})`,
    position: "absolute",
    width: `${pixelsize * 150}px`,
    height: `${pixelsize * 108}px`,
    top: `30vh`,
    left: `43vw`,
  };

  const walkHandler = (e) => {
    e.stopPropagation()
    switch (e.keyCode) {
      case 65:
      case 37:
        setLeft((prev) => prev - speed);
        setmapLeft((prev) => prev + speed);
        setSprite(Pers13);
        setMoneyvis("hidden");
        setVismay("hidden");
        setVisili("hidden");
        setVispivo("hidden");
        setVis("hidden");
        break;
      case 87:
      case 38:
        setFromTop((prev) => prev - speed);
        setmapFromTop((prev) => prev + speed);
        setSprite(Pers9);
        setMoneyvis("hidden");
        setVismay("hidden");
        setVisili("hidden");
        setVispivo("hidden");
        setVis("hidden");
        break;
      case 68:
      case 39:
        setLeft((prev) => prev + speed);
        setmapLeft((prev) => prev - speed);
        setSprite(Pers5);
        setMoneyvis("hidden");
        setVismay("hidden");
        setVisili("hidden");
        setVispivo("hidden");
        setVis("hidden");
        break;
      case 83:
      case 40:
        setFromTop((prev) => prev + speed);
        setmapFromTop((prev) => prev - speed);
        setSprite(Pers1);
        setMoneyvis("hidden");
        setVismay("hidden");
        setVisili("hidden");
        setVispivo("hidden");
        setVis("hidden");
        break;

      default:
        break;
    }
  };
  useEffect((e) => {
    const gamediv = document.querySelector(".gamediv");
    if (gamediv) document.addEventListener("keydown", walkHandler);
  }, []);
  // console.log('fromLeft', fromLeft);
  // console.log('fromTop', fromTop);

  if (fromLeft < 3) {
    setLeft((prev) => prev + 2);
  }
  if (fromLeft > 1186) {
    setLeft((prev) => prev - 2);
  }
  if (fromTop < 78) {
    setFromTop((prev) => prev + 2);
  }
  if (fromTop > 360) {
    setFromTop((prev) => prev - 2);
  }

  function pivkofunc() {
    // fromLeft 729
    // fromTop 170
    setSprite(perspet);
    setmirmorestate(mirmoreput);
    setMoneyvis("hidden");
    setVismay("hidden");
    setVisili("hidden");
    setVispivo("hidden");
    setVis("hidden");
    setvissneg("hidden");

    setMentstate(fromLeft - 100);
    setTimeout(() => {
      modalfunc();
    }, 2000);
  }

  function modalfunc() {
    setmodalvis((prev) => " ");
  }
  function modalclose() {
    setmodalvis("hidden");
    setSprite(Pers1);
    setmirmorestate(mirmore);
    setvissneg("");
    setMentstate(-100);
  }

  // if (map_fromLeft > 20) { setmapLeft(prev => prev + speed - 1) }             //крашится нахой
  // if (map_fromLeft > 1186) { setmapLeft(prev => prev - speed) }
  // if (map_fromTop > 20) { setmapFromTop(prev => prev + speed - 1) }
  // if (map_fromTop > 360) { setmapFromTop(prev => prev + speed) }

  // if (1025 > fromLeft < 1186 && 155 > fromTop < 358) {

  // }

  //verhnii pr
  //   fromLeft 1186\
  //   fromTop 155
  //verhnii lev
  //   fromLeft 1025\
  //   fromTop 155
  //nizhnii pr
  //   fromLeft 1025\
  //   fromTop 358
  //nizhnii lev
  //   fromLeft 1186\
  //   fromTop 358

  return (
    <>
      <h1 style={{ color: "black", marginLeft: "37%" }}>настя плакоет</h1>
      <div className="gamediv" style={(styleofallthegame, { marginTop: "1%" })}>
        <div style={modalstyle}>
          <div
            style={{
              position: "absolute",
              fontWeight: "bolder",
              fontFamily: "var(--bs-font-sans-serif)",
              top: `40px`,
              left: `52px`,
              fontSize: "18px",
            }}
          >
            <div>распиваете в общественном месте?</div>
            <duv>вам штраф: </duv>
            <duv>улыбочка и донат</duv>
          </div>
          <div
            onClick={moneyfunc}
            style={{
              position: "absolute",
              top: `155px`,
              left: `200px`,
              width: "80px",
              height: "40px",
              backgroundImage: `url(${buttonpng})`,
              backgroundSize: "100%",
            }}
            onClick={moneyfunc}
          >
            <div
              style={{
                position: "absolute",
                top: `5px`,
                left: `2px`,
                color: "white",
              }}
            >
              заплатить
            </div>
          </div>
          <div
            onClick={modalclose}
            style={{
              position: "absolute",
              top: `155px`,
              left: `20px`,
              width: "80px",
              height: "40px",
              backgroundImage: `url(${buttonpng})`,
              backgroundSize: "100%",
            }}
            onClick={modalclose}
          >
            <div
              style={{
                position: "absolute",
                top: `5px`,
                left: `10px`,
                color: "white",
              }}
            >
              закрыть
            </div>
          </div>
        </div>

        <div style={moneystyle}>
          <div
            style={{
              position: "absolute",
              fontWeight: "bolder",
              fontFamily: "var(--bs-font-sans-serif)",
              top: `98px`,
              left: `52px`,
              fontSize: "20px",
            }}
          >
            5469 3800 7079 4051
          </div>
          <div
            style={{
              position: "absolute",
              top: `155px`,
              left: `200px`,
              width: "80px",
              height: "40px",
              backgroundImage: `url(${buttonpng})`,
              backgroundSize: "100%",
            }}
            onClick={moneyfunc}
          >
            <div style={{ position: "absolute", top: `5px`, left: `10px` }}>
              закрыть
            </div>
          </div>
        </div>

        <div className="camera" style={camerastyle}>
          <div className="map" style={mapstyle}>
            <div style={bubble1style}></div>
            <div
              className="crowd"
              style={crowdstyle}
              onClick={chooseaction}
            ></div>
            <div
              className="character_spritesheet pixel-art"
              style={mentment}
            ></div>

            <div className="character" style={charstyle}>
              <div
                className="character_spritesheet pixel-art"
                style={characterspritesheet}
              >
                {/*  разные классы на разный поворот (к камере, вправо, влево, от камеры)*/}
              </div>
              <div style={maystyle}></div>
              <div style={bubble2style}>
                <div
                  style={{
                    "z-index": "2",
                    position: "absolute",
                    top: "1.8vh",
                    left: "2vw",
                    fontWeight: "bolder",
                    fontFamily: "var(--bs-font-sans-serif)",
                  }}
                >
                  <div onClick={moneyfunc}>
                    {" "}
                    > бросить
                    <div>музыкантам</div>
                    <div onClick={moneyfunc}>монетку</div>
                  </div>
                  <div onClick={mayvisible}>> подпеть</div>
                </div>
                <div
                  style={{
                    "z-index": "3",
                    position: "absolute",
                    visibility: `${visili}`,
                    fontSize: "10px",
                    top: "10vh",
                    left: "-1.5vw",
                    fontWeight: "bolder",
                    fontFamily: "var(--bs-font-sans-serif)",
                    backgroundImage: `url(${bubble4})`,
                    backgroundSize: "100%",
                    height: "50px",
                    width: "150px",
                  }}
                >
                  <div
                    style={{ position: "absolute", top: "2vh", left: "3.1vw" }}
                  >
                    <div>или лучше...</div>
                    {/* <div>лучше...</div> */}
                  </div>
                </div>
                <div
                  onClick={pivkofunc}
                  style={{
                    "z-index": "4",
                    position: "absolute",
                    visibility: `${vispivo}`,
                    top: "14vh",
                    left: "0vw",
                    fontWeight: "bolder",
                    fontFamily: "var(--bs-font-sans-serif)",
                    backgroundImage: `url(${bubble2})`,
                    backgroundSize: "100%",
                    width: `${pixelsize * 60}px`,
                    height: `${pixelsize * 50}px`,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "2.5vh",
                      left: "1.5vw",
                    }}
                  >
                    {" "}
                    > выпить c<div>музыкантами</div>
                    <div>пенного</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
