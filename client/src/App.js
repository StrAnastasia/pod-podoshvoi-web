// import './App.css';
import { LoadScript } from "@react-google-maps/api";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Band from "./components/band/Band";
import Chat from "./components/Chat/Chat";
import ErrorBoundary from "./components/errorComponent/ErrorComponent";
import Game from "./components/game/Game";
import Gig from "./components/gig/gig";
import Header from "./components/header/header";
import Homepage from "./components/homepage/Homepage";
import Map from "./components/Map/Map";
import Place from "./components/place/Place";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/allgigsmap">
          <LoadScript
            googleMapsApiKey={"AIzaSyCtPbYjq1VPSnTlsfvfNs3pexwlEAYjDmk"}
            libraries={["places"]}
          >
            <Map />
          </LoadScript>
        </Route>
        <Route exact path="/chat">
          <Chat />
        </Route>
        <Route exact path="/band/:id">
          <Band />
        </Route>
        <Route exact path="/gigs/:id">
          <Gig />
        </Route>
        <Route exact path="/place/:id">
          <Place />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/game">
          <ErrorBoundary>
            <Game />
          </ErrorBoundary>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
