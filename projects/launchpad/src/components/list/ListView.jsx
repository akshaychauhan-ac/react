import React from "react";
import Header from "../Header";
import ListTable from "./ListTable";
import TableToolbar from "./TableToolbar";

const ListView = () => {
  const launchpadStyle = { backgroundColor: "#e6e9ea" };
  const tableTitle = "Users";
  const toolbarButtons =  [{
    key: 1,
    text: "Create"
  }, {
    key: 2,
    text: "Delete"
  }];

  return (
    <div style={launchpadStyle}>
      <Header title={"Users"}></Header>
      <TableToolbar title={tableTitle} buttons={toolbarButtons}></TableToolbar>
      <ListTable></ListTable>
    </div>
  );
};

export default ListView;