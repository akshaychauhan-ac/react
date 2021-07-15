import React, { useState, useEffect } from "react";
import Header from "../Header";
import ListTable from "./ListTable";
import { Dialog } from '@ui5/webcomponents-react';
import { Toolbar, Title, ToolbarSpacer, Button } from "@ui5/webcomponents-react";
import tilesList from "../../data/Tiles";
import axios from "axios";

const ListView = props => {
  const [users, setUsers] = useState([]);

  const launchpadStyle = { backgroundColor: "#e6e9ea" };
  const appDetails = tilesList.filter(app => app.code === props.match.params.id)[0];
  const tableTitle = appDetails.title + " (" + users.length + ")";
  const toolbarButtons =  [{
    key: 1,
    text: "Create",
    action: "createDialog"
  }, {
    key: 2,
    text: "Delete"
  }];

  async function getUsers () {
    const data = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    setUsers(data.data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div style={launchpadStyle}>
      <Header title={appDetails.title}></Header>
      <Toolbar>
        <Title level={"H3"} style={{marginLeft: "1rem"}}>{tableTitle}</Title>
        <ToolbarSpacer />
        {toolbarButtons.map(button => <Button key={button.key} design={"Transparent"}>{button.text}</Button>)}
      </Toolbar>
      <ListTable data={users}></ListTable>
    </div>
  );
};

export default ListView;