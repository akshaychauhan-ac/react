import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  useEffect(() => {
    let timeout: any;
    if (start) {
      timeout = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    }
  }, [start]);
  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <label>{time}</label>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => {
            setStart(true);
          }}
        >
          Start
        </button>
        <button onClick={() => {
            setStart(false);
          }}>Pause</button>
        <button onClick={() => {
            setStart(false);
            setTime(0);
          }}>Reset</button>
      </div>
    </div>
  );
}
export default App;