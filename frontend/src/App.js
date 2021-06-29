import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./component/Home";
import Commands from "./component/Commands";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Commands" component={Commands} />
    </Router>
  );
}

export default App;
