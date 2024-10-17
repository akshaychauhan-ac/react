import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { getTasks } from "./store/taskSlice";

export default function ConfirmationDialog({ open, setOpen, currentTask }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    fetch(
      `https://66d6b474006bfbe2e64e413f.mockapi.io/tasks/${currentTask.id}`,
      { method: "DELETE" }
    ).then(() => {
      setOpen(false);
      dispatch(getTasks());
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Delete Task?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete the task - {currentTask.id}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}>Yes</Button>
          <Button onClick={handleClose}>No</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
