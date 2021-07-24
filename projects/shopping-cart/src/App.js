import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={ProductList} />
      </Switch>
    </>
  );
}

export default App;
