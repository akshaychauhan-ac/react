import React, { useState } from "react";
import Header from "./components/Header";
import Campaign from "./components/Campaign";
import { locale } from "./localisation";

const App = () => {
  const [language, setLanguage] = useState("en");

  locale.setLanguage(language);

  return (
    <>
      <Header setLanguage={setLanguage} />
      <Campaign locale={locale} />
    </>
  );
};

export default App;
