import "./App.css";
import Modal from "./Modal";
import React, { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <button
        disabled={open}
        onClick={() => {
          setOpen(!open);
        }}
      >
        Open
      </button>
      {open && <Modal close={setOpen}></Modal>}
    </div>
  );
}

export default App;
