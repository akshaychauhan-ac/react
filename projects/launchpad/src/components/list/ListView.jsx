import React, { useState, useEffect, useRef } from "react";
import Header from "../Header";
import ListTable from "./ListTable";
import { Dialog } from '@ui5/webcomponents-react';
import { Toolbar, Title, ToolbarSpacer, Button, Bar } from "@ui5/webcomponents-react";
import tilesList from "../../data/Tiles";
import axios from "axios";

const ListView = props => {
  const [users, setUsers] = useState([]);

  const launchpadStyle = { backgroundColor: "#e6e9ea" };
  const appDetails = tilesList.filter(app => app.code === props.match.params.id)[0];
  const tableTitle = appDetails.title + " (" + users.length + ")";

  const dialogRef = useRef();
  const handleOpen = (e) => {
      dialogRef.current.open();
  };
  const handleClose = () => {
      dialogRef.current.close();
  };

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
        <Button key={"1"} design={"Transparent"} onClick={handleOpen}>{"Create"}</Button>
        <Button key={"2"} design={"Transparent"} onClick={handleOpen}>{"Delete"}</Button>
        <Dialog
          ref={dialogRef}
          header={<Bar middleContent={<Title level={"H3"}>Create User</Title>}/>}
          footer={<Bar endContent={<Button onClick={handleClose}>Close</Button>} />}
        >
        </Dialog>
      </Toolbar>
      <ListTable data={users}></ListTable>
    </div>
  );
};

export default ListView;