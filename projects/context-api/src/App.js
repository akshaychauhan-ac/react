import "./App.css";
import { useContext } from "react";
import Context from "./context";

function App() {
  const { count, increment, decrement } = useContext(Context);
  return (
    <div
      className="App"
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <div style={{ width: "100px", display: "flex" }}>
        <button
          style={{ marginRight: "20px" }}
          onClick={() => {
            decrement();
          }}
        >
          -
        </button>
        <label>{count}</label>
        <button
          style={{ marginLeft: "20px" }}
          onClick={() => {
            increment();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
