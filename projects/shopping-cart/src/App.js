import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Details from "./components/Details";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
      </Switch>
    </>
  );
}

export default App;
