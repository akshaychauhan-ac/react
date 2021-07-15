import React, { useRef } from "react";
import { Toolbar, Title, ToolbarSpacer, Button, Bar } from "@ui5/webcomponents-react";
import { Label } from "@ui5/webcomponents-react";
import { Table, TableColumn, TableRow, TableCell, TableGrowingMode, Dialog } from "@ui5/webcomponents-react";

const ListTable = props => {
  const dialogRef = useRef();
  const handleOpen = (e) => {
      dialogRef.current.open();
  };
  const handleClose = () => {
      dialogRef.current.close();
  };

  return (
    <div style={{margin: "0 1rem"}}>
      <Toolbar>
        <Title level={"H3"} style={{marginLeft: "1rem"}}>{props.tableTitle}</Title>
        <ToolbarSpacer />
        <Button key={"1"} design={"Transparent"} onClick={handleOpen}>{"Create"}</Button>
        <Button key={"2"} design={"Transparent"}>{"Delete"}</Button>
        <Dialog
          ref={dialogRef}
          header={<Bar middleContent={<Title level={"H3"}>Create User</Title>}/>}
          footer={<Bar endContent={<Button onClick={handleClose}>Close</Button>} />}
        >
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