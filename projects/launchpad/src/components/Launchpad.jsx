import React from "react";
import Header from "./Header";
import Tiles from "./Tiles";

const Launchpad = () => {
  const launchpadStyle = { backgroundColor: "#e6e9ea" };
  const headerTitle = "Home";

  return (
    <div style={launchpadStyle}>
      <Header title={headerTitle}></Header>
      <Tiles></Tiles>
    </div>
  );
};

export default Launchpad;
