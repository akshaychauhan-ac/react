import React from "react";
import { Label } from "@ui5/webcomponents-react";
import { Table, TableColumn, TableRow, TableCell, TableGrowingMode } from "@ui5/webcomponents-react";

const ListTable = props => {

  return (
    <Table growing={TableGrowingMode.Scroll} growingThreshold={"5"} columns={
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
          <TableRow role="checkbox" key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.username}</TableCell>
            <TableCell>{row.phone}</TableCell>
            <TableCell>{row.website}</TableCell>
          </TableRow>
        );
      })}
    </Table>
  );
};
  
export default ListTable;