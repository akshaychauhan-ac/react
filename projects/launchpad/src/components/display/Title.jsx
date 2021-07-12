import React from "react";

const Title = props => {
  const styles = {
    float: "left",
    marginLeft: "1rem",
    height: "3rem",
    lineHeight: "2.8rem",
    fontSize: "1rem",
    fontWeight: "bold",
    margin: "auto 1rem"
  };

  return (
    <h1 style={styles}>{props.text}</h1>
  );
};

export default Title;