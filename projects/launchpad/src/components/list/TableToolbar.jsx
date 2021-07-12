import React from "react";
import Title from "../display/Title";
import ToolbarButtons from "./ToolbarButtons"

const TableToolbar = props => {

  return (
    <div style={{height: "3rem"}}>
      <Title text={props.title}></Title>
      <ToolbarButtons buttons={props.buttons}></ToolbarButtons>
    </div>
  );
};

export default TableToolbar;