import React from "react";
import search from "../search.svg";

const Header = () => {
  const headerStyle = {
    height: "2.75rem",
    backgroundColor: "#354a5f",
    padding: "0 2.25rem"
  };
  const headerContentWidth = {
    height: "100%",
    width: "50%",
    float: "left"
  };
  const headerTitleStyle = {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#ffffff",
    lineHeight: "1.6rem",
    margin: "auto",
    float: "left"
  };
  return (
    <div className="Header">
      <header style={headerStyle}>
        <div style={headerContentWidth}>
          <div style={{ padding: "0.55rem 0" }}>
            <a style={{ float: "left", margin: "0 1.35rem 0 0" }}>
              <img src="https://sapui5.hana.ondemand.com/1.71.19/resources/sap/ushell/themes/base/img/sap_55x27.png"></img>
            </a>
            <h1 style={headerTitleStyle}>Home</h1>
          </div>
        </div>
        <div style={headerContentWidth}>
          <div style={{ padding: "0.65rem 0" }}>
            <a
              style={{
                margin: "0 1.35rem 0 0",
                float: "right",
                cursor: "pointer"
              }}
            >
              <img style={{ height: "20px", width: "20px" }} src={search}></img>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
