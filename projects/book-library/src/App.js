import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import ViewBooks from "./ViewBooks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<Home />} />
            <Route path="view" element={<ViewBooks />} />
            <Route path="*" element={<h1>Invalid Page</h1>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
