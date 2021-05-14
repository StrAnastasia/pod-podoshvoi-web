import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header/header';
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/homepage'>
          <Homepage />
        </Route>
      </Switch>
    </ Router>
  );
}

export default App;
