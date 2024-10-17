import { useLocation, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ViewDetails = () => {
  const { state } = useLocation();
  const { id, title, assignedTo, priority, status, startDate, endDate } = state;

  const navigate = useNavigate();

  // const handleSubmit = () => {
  //   fetch(
  //     `https://66d6b474006bfbe2e64e413f.mockapi.io/tasks/${currentTask.id}`,
  //     {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(singleItem),
  //     }
  //   ).then(() => {
  //     setOpenEdit(false);
  //     setReloadGetApi((prev) => !prev);
  //   });
  // };

  // const handleCancel = () => {
  //   setOpenEdit(false);
  // };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "40%",
        alignItems: "center",
        margin: "auto",
        border: "1px solid",
        borderRadius: "10px",
        paddingBottom: "1.5rem",
      }}
    >
      <h3>Details for ID: {id}</h3>
      <TextField disabled id="outlined-disabled" label="Title" value={title} />
      <TextField
        disabled
        id="outlined-disabled"
        label="Assigned By"
        value={assignedTo}
      />
      <TextField
        disabled
        id="outlined-disabled"
        label="Status"
        value={status}
      />
      <TextField
        disabled
        id="outlined-disabled"
        label="Priority"
        value={priority}
      />
      <TextField
        disabled
        id="outlined-disabled"
        label="Start Date"
        value={startDate}
      />
      <TextField
        disabled
        id="outlined-disabled"
        label="End Date"
        value={endDate}
      />
      <Button
        variant="outlined"
        onClick={() => {
          navigate("/");
        }}
      >
        Back To Tasks
      </Button>
    </div>
  );
};

export default ViewDetails;
