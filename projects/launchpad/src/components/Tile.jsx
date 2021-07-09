import React from "react";

const Tile = props => {
  const tileStyle = {
    background: "#ffffff",
    border: "none",
    color: "#6a6d70",
    margin: "0 0.4375rem 0.4375rem 0",
    borderRadius: "0.25rem",
    height: "11rem",
    width: "11rem"
  };
  const tileTitleStyle = {
    fontFamily: '"72","72full",Arial,Helvetica,sans-serif',
    color: "#32363a",
    fontSize: "1.1rem"
  };

  return (
    <div style={tileStyle}>
      <div
        style={{
          marginTop: "0.625rem",
          marginLeft: "0.94rem",
          marginRight: "0.94rem"
        }}
      >
        <span style={tileTitleStyle}>{props.title}</span>
      </div>
      <div></div>
    </div>
  );
};

export default Tile;
