import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import ListView from "./components/list/ListView";

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/:id" component={ListView} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
