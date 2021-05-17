import { useEffect, useState } from "react";

// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Band from "./components/band/Band";
import Gig from "./components/gig/gig";
import Header from './components/header/header';
import Homepage from "./components/homepage/Homepage";
import Map from "./components/Map/Map";
import Place from "./components/place/Place";
import Profile from "./components/Profile/Profile";







function App() {



  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/homepage'>
          <Homepage />
        </Route>
        <Route path='/allgigsmap'>
          <Map />
        </Route>
        <Route path='/band'>
          <Band />
        </Route>
        <Route path='/gig'>
          <Gig />
        </Route>
        <Route path='/place'>
          <Place />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>

      </Switch>
    </ Router>
  );
}

export default App;
