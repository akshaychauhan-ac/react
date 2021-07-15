import React, { useState, useEffect, useRef } from "react";
import Header from "../Header";
import ListTable from "./ListTable";
import tilesList from "../../data/Tiles";
import axios from "axios";

const ListView = props => {
  const [users, setUsers] = useState([]);

  const launchpadStyle = { backgroundColor: "#e6e9ea" };
  const appDetails = tilesList.filter(app => app.code === props.match.params.id)[0];
  const tableTitle = appDetails.title + " (" + users.length + ")";

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
      <ListTable tableTitle={tableTitle} data={users}></ListTable>
    </div>
  );
};

export default ListView;