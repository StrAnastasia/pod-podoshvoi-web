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
import NewGig from "./components/newgig/NewGig";
import Place from "./components/place/Place";
import { LoadScript } from '@react-google-maps/api';
import PlacesAutocomplete from "./components/newgig/NewGig";






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
      </Switch>
    </ Router>
  );
}

export default App;
