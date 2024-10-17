import './App.css';
import useStore from "./store";

function App() {
  const { counter, increment, decrement } = useStore();

  return (
    <div style={{height: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div style={{display: "flex", gap: "1rem"}}>
        <button onClick={() => decrement()}>-</button>
        <label>{counter}</label>
        <button onClick={() => increment()}>+</button>
      </div>
    </div>
  );
}

export default App;
