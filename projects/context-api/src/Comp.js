import { useContext } from "react";
import Context from "./context";

function Comp() {
  const { count, increment, decrement } = useContext(Context);
  return (
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
  );
}

export default Comp;
