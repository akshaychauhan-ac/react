import React from "react";
import { render } from "react-dom";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

render(
  <ErrorBoundary>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        {/* <Route path="*">
          <Redirect to="/" />
        </Route> */}
      </Routes>
    </Router>
  </ErrorBoundary>,
  document.getElementById("root")
);
