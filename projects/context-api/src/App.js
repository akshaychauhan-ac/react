import "./App.css";
import { useContext } from "react";
import Comp from "./Comp";
import Context from "./context";

function App() {
  const { count, increment, decrement } = useContext(Context);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <div style={{ width: "100px", display: "flex", marginBottom: "20px" }}>
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
      <Comp></Comp>
    </div>
  );
}

export default App;
