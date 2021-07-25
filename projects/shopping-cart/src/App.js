import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Modal from "./components/Modal";
import Default from "./components/Default";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </>
  );
}

export default App;
