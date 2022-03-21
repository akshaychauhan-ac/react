import React, { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { locale } from "./localisation";
import "./App.css";

const App = () => {
  const [language, setLanguage] = useState("en");

  locale.setLanguage(language);

  return (
    <div className="container">
      <Header setLanguage={setLanguage} />
      <Dashboard locale={locale} />
    </div>
  );
};

export default App;
