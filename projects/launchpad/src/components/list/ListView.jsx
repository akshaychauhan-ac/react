import React from "react";
import Header from "../Header";
import ListTable from "./ListTable";
import TableToolbar from "./TableToolbar";
import tilesList from "../../data/Tiles";

const ListView = props => {
  const launchpadStyle = { backgroundColor: "#e6e9ea" };
  const appDetails = tilesList.filter(app => app.code === props.match.params.id)[0];
  const toolbarButtons =  [{
    key: 1,
    text: "Create"
  }, {
    key: 2,
    text: "Delete"
  }];
  console.log(props);

  return (
    <div style={launchpadStyle}>
      <Header title={appDetails.title}></Header>
      <TableToolbar title={appDetails.title} buttons={toolbarButtons}></TableToolbar>
      <ListTable></ListTable>
    </div>
  );
};

export default ListView;