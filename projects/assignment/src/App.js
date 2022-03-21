import React, { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { localeString } from "./config/localisation";
import "./App.css";

const App = () => {
  const [language, setLanguage] = useState("en");

  localeString.setLanguage(language);

  return (
    <div className="container">
      <Header setLanguage={setLanguage} />
      <Dashboard localeString={localeString} />
    </div>
  );
};

export default App;
