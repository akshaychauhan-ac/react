import logo from './logo.svg';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>useState hook</h1>
        <UseState></UseState>
        <h1>useEffect hook</h1>
        <UseEffect></UseEffect>
      </div>
    </div>
  );
}

export default App;
