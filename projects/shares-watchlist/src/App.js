import logo from "./logo.svg";
import "./App.css";

import List from "./List";
import Watchlist from "./Watchlist";

function App() {
  return (
    <div>
      <div style={{ width: "100%" }}>
        <List></List>
        <Watchlist></Watchlist>
      </div>
    </div>
  );
}

export default App;
