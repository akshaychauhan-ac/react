import React from "react";
import { Button } from "@material-ui/core";

const ToolbarButtons = props => {
  const groupStyles = {
    float: "right",
    marginRight: "1rem",
    height: "3rem",
    display: "flex"
  };

  return (
    <div style={groupStyles}>
      {props.buttons.map(button => <Button key={button.key} color="primary">{button.text}</Button>)}
    </div>
  );
};

export default ToolbarButtons;