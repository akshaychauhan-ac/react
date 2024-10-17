import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListTable from "./ListTable";
import ViewDetails from "./ViewDetails";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/">
              <Route index element={<ListTable />} />
              <Route path="/view/:id" element={<ViewDetails />} />
              <Route path="*" element={<h1>Invalid Page</h1>} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
