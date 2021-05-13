import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header/header';
import Map from "./components/Map/Map";

function App() {
  return (
    <Router>
    <Header />
    <Switch>
          <Route exact path="/homepage">
            <Map />
          </Route>
        </Switch>
    </ Router>
  );
}

export default App;
