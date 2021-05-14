import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header/header';
import Homepage from "./components/homepage/Homepage";
import Map from "./components/Map/Map";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/homepage'>
          <Map />
          <Homepage />
        </Route>
      </Switch>
    </ Router>
  );
}

export default App;