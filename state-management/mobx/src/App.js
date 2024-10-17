import './App.css';
import { observer } from "mobx-react-lite";
import { store } from "./store";

const App = observer(() => {
  return (
    <div style={{height: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div style={{display: "flex", gap: "1rem"}}>
        <button onClick={() => store.decrement()}>-</button>
        <label>{store.counter}</label>
        <button onClick={() => store.increment()}>+</button>
      </div>
    </div> 
  );
});

export default App;
