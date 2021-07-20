import React, { useState, useRef } from "react";
import { Toolbar, Title, ToolbarSpacer, Button, Bar } from "@ui5/webcomponents-react";
import { Label, Input, FlexBox } from "@ui5/webcomponents-react";
import { Table, TableColumn, TableRow, TableCell, TableGrowingMode, Dialog } from "@ui5/webcomponents-react";

const ListTable = props => {
  const dialogRef = useRef();
  const handleOpen = (e) => {
      dialogRef.current.open();
  };
  const handleClose = () => {
      dialogRef.current.close();
  };
  const handleSubmit = e => {
    console.log(createUserData);
      dialogRef.current.close();
  };
  const [createUserData, setCreateUserData] = useState({
    name: "",
    username: ""
  });
  const handleChangeName = e => {
    setCreateUserData(prevState => ({
      ...prevState,
      name: e.target.value
    }));
  };
  const handleChangeUsername = e => {
    setCreateUserData(prevState => ({
      ...prevState, 
      username: e.target.value
    }));
  };

  return (
    <div style={{margin: "0 1rem"}}>
      <Toolbar>
        <Title level={"H3"} style={{marginLeft: "1rem"}}>{props.tableTitle}</Title>
        <ToolbarSpacer />
        <Button key={"1"} design={"Transparent"} onClick={handleOpen}>{"Create"}</Button>
        <Button key={"2"} design={"Transparent"}>{"Delete"}</Button>
        <Dialog ref={dialogRef}
          header={<Bar middleContent={<Title level={"H3"}>Create User</Title>}/>}
          footer={<Bar endContent={
            <FlexBox>
              <Button style={{marginRight: "0.5rem"}} design={"Emphasized"} onClick={handleSubmit}>Save</Button>
              <Button design={"Transparent"} onClick={handleClose}>Close</Button>
            </FlexBox>
          } />}
        >
          <FlexBox style={{margin: "0.5rem 0.5rem 0 0.5rem"}} direction={"Column"}>
            <Label style={{marginBottom: "0.5rem"}}>Name</Label>
            <Input style={{marginBottom: "1rem", width: "100%"}} onInput={handleChangeName}></Input>
            <Label style={{marginBottom: "0.5rem"}}>Username</Label>
            <Input style={{marginBottom: "1rem", width: "100%"}} onInput={handleChangeUsername}></Input>
          </FlexBox>
        </Dialog>
      </Toolbar>
      <Table growing={TableGrowingMode.Scroll} growingThreshold={"5"} mode={"MultiSelect"} columns={
        <>
          <TableColumn>
            <Label>Name</Label>
          </TableColumn>
          <TableColumn>
            <Label>Username</Label>
          </TableColumn>
          <TableColumn>
            <Label>Phone</Label>
          </TableColumn>
          <TableColumn>
            <Label>Website</Label>
          </TableColumn>
        </>
      }>
        {props.data.map((row) => {
          return (
            <TableRow key={row.id}>
              <TableCell style={{marginLeft: "1rem"}}>{row.name}</TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.website}</TableCell>
            </TableRow>
          );
        })}
      </Table>
    </div>
  );
};
  
export default ListTable;