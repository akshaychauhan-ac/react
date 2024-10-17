import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { getTasks } from "./store/taskSlice";

export default function ConfirmationDialog({
  openEdit,
  setOpenEdit,
  currentTask,
  singleItem,
  setSingleItem,
}) {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    fetch(
      `https://66d6b474006bfbe2e64e413f.mockapi.io/tasks/${currentTask.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(singleItem),
      }
    ).then(() => {
      dispatch(getTasks());
      setOpenEdit(false);
    });
  };

  const handleCancel = () => {
    setOpenEdit(false);
  };

  const updateTaskPayload = (e, val) => {
    setSingleItem({
      ...singleItem,
      [val]: e.target.value,
    });
  };

  return (
    <>
      <Dialog
        open={openEdit}
        keepMounted
        onClose={handleCancel}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{`Edit Task: ${singleItem.id}`}</DialogTitle>
        <DialogContent>
          <div
            style={{
              display: "flex",
              marginTop: "5px",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <TextField
              label="Title"
              value={singleItem.title}
              onChange={(e) => updateTaskPayload(e, "title")}
            />
            <TextField
              label="Assigned To"
              value={singleItem.assignedTo}
              onChange={(e) => updateTaskPayload(e, "assignedTo")}
            />
            <TextField
              select
              label="Status"
              variant="standard"
              value={singleItem.status}
              onChange={(e) => updateTaskPayload(e, "status")}
            >
              <MenuItem value="Open">Open</MenuItem>
              <MenuItem value="In-Progress">In-Progress</MenuItem>
              <MenuItem value="Under-review">Under-review</MenuItem>
              <MenuItem value="Done">Done</MenuItem>
            </TextField>
            <TextField
              select
              label="Priority"
              variant="standard"
              value={singleItem.priority}
              onChange={(e) => updateTaskPayload(e, "priority")}
            >
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="High">High</MenuItem>
            </TextField>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Ok</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
