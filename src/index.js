import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "./home";
import Widget from "./widgets";
import Greeting from "./greet";
import Grow from "./grow";
import Peekaboo from "./peekaboo";
import Align from "./alignMe";
import Clock from "./clock";
import Colors from "./colors";

import "./styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/widgets">Add/Sub Widget</Link>
        <Link to="/greet">Greeting Function</Link>
        <Link to="/grow">Grow Function</Link>
        <Link to="/peekaboo">Peekaboo</Link>
        <Link to="/alignMe">Align Me</Link>
        <Link to="/clock">Clock</Link>
        <Link to="/colors">Colors</Link>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/widgets" component={Widget} />
          <Route path="/greet" component={Greeting} />
          <Route path="/grow" component={Grow} />
          <Route path="/peekaboo" component={Peekaboo} />
          <Route path="/alignMe" component={Align} />
          <Route path="/clock" component={Clock} />
          <Route path="/colors" component={Colors} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
