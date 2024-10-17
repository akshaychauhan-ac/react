import * as React from "react";
import "./ListTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useState } from "react";
import ConfirmationDialog from "./ConfirmationDialog";
import EditDialog from "./EditDialog";
import { useNavigate } from "react-router-dom";
import { getTasks } from "./store/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import { visuallyHidden } from "@mui/utils";
import { useMemo } from "react";

export default function ListTable() {
  const [tasks, setTasks] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState({
    index: 0,
    title: "",
    assignedTo: "",
    status: "",
    priority: "",
    startDate: "",
    endDate: "",
  });
  const [singleItem, setSingleItem] = useState({
    id: 0,
    title: "",
    assignedTo: "",
    status: "",
    priority: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.tasks);

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("title");
  const headCells = [
    {
      id: "title",
      label: "Title",
    },
    {
      id: "assignedBy",
      label: "Assigned By",
    },
    {
      id: "status",
      label: "Status",
    },
    {
      id: "priority",
      label: "Priority",
    },
  ];

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  useEffect(() => {
    setTasks(data);
  }, [data]);

  const [visibleRows, setVisibleRows] = useState([]);

  useEffect(() => {
    if (tasks?.length) {
      setVisibleRows([...tasks].sort(getComparator(order, orderBy)));
    }
  }, [tasks]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClick = (row) => {
    navigate(`/view/${row.id}`, {
      state: row,
    });
  };

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  // const visibleRows = useMemo(
  //   () => {
  //     return [...tasks]
  //       .sort(getComparator(order, orderBy));
  //   },
  //   [order, orderBy]
  // );

  function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow>
          {headCells?.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
          <TableCell>Start Date</TableCell>
          <TableCell>End Date</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
    );
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Toolbar>
          <Typography sx={{ flex: "1 1 100%" }} variant="h6" component="div">
            Tasks
          </Typography>
        </Toolbar>
        <Table
          className="listTable"
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {visibleRows?.map((row, idx) => (
              <TableRow
                key={row.id}
                hover
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  onClick={() => handleClick(row)}
                >
                  {row.title}
                </TableCell>
                <TableCell onClick={() => handleClick(row)}>
                  {row.assignedTo}
                </TableCell>
                <TableCell onClick={() => handleClick(row)}>
                  {row.status}
                </TableCell>
                <TableCell onClick={() => handleClick(row)}>
                  {row.priority}
                </TableCell>
                <TableCell onClick={() => handleClick(row)}>
                  {row.startDate}
                </TableCell>
                <TableCell onClick={() => handleClick(row)}>
                  {row.endDate}
                </TableCell>
                <TableCell>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        setCurrentTask(row);
                        setSingleItem({ ...row });
                        setOpenEdit(true);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        setCurrentTask(row);
                        setOpen(true);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EditDialog
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
        currentTask={currentTask}
        singleItem={singleItem}
        setSingleItem={setSingleItem}
      />
      <ConfirmationDialog
        open={open}
        setOpen={setOpen}
        currentTask={currentTask}
      />
    </>
  );
}
