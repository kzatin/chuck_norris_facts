import React from "react";
import Home from "./components/home";
import Favourite from "./components/favourites";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favourites" component={Favourite} />
        </Switch>
      </Router>
    );
  }
}

export default App;
