import React from "react";
import Tile from "./Tile";
import tilesList from "../data/Tiles";
import { useHistory } from "react-router-dom";

const Tiles = () => {
  const tileListItemStyle = {
    float: "left",
    listStyleType: "none",
    cursor: "pointer",
    border: "1px solid transparent",
    boxShadow:
      "0 0 0 0.0625rem rgba(0,0,0,0.1), 0 0.125rem 0.5rem 0 rgba(0,0,0,0.1)",
    borderRadius: "0.25rem",
    margin: "0 0.4375rem 0.4375rem 0"
  };
  const history = useHistory();
  console.log(useHistory());

  const handleRowClick = oEvent => {
    history.push(`/${oEvent.code}`);

    console.log(oEvent);
  };

  return (
    <ul>
      {tilesList.map(tile => (
        <li
          key={tile.id}
          onClick={handleRowClick.bind(this, tile)}
          style={tileListItemStyle}
        >
          <Tile title={tile.title}></Tile>
        </li>
      ))}
    </ul>
  );
};

export default Tiles;
