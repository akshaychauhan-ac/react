import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";

function App() {
  // div1.innerText = div1.offsetWidth + " px";
  // div3.innerText = div3.offsetWidth + " px";

  useEffect(() => {
    let div1 = document.getElementById("div1");
    let div3 = document.getElementById("div2");
    const div1Event = function (e) {
      const div1Width = div1.offsetWidth;
      const div3Width = div3.offsetWidth;
      const offset = div1Width - e.offsetX;
      if (offset > 0) {
        div1.style.width = div1Width - offset + "px";
        div3.style.width = div3Width + offset + "px";
      }
      div1.innerText = div1.offsetWidth;
      div3.innerText = div3.offsetWidth;
    };

    const div3Event = function (e) {
      const div1Width = div1.offsetWidth;
      const div3Width = div3.offsetWidth;
      const offset = e.offsetX;
      div1.style.width = div1Width + offset + "px";
      div3.style.width = div3Width - offset + "px";
      div1.innerText = div1.offsetWidth;
      div3.innerText = div3.offsetWidth;
    };
    document.getElementById("slider").addEventListener("mousedown", (e) => {
      div1.addEventListener("mousemove", div1Event);
      div3.addEventListener("mousemove", div3Event);
    });
    document.addEventListener("mouseup", function (e) {
      div1.removeEventListener("mousemove", div1Event);
      div3.removeEventListener("mousemove", div3Event);
    });
  }, []);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        margin: "50px",
        width: "404px",
        height: "200px",
      }}
    >
      <div
        id="div1"
        style={{ border: "1px solid", height: "200px", width: "200px" }}
      ></div>
      <div
        id="slider"
        style={{ border: "2px solid", height: "200px", cursor: "ew-resize" }}
      ></div>
      <div
        id="div2"
        style={{ border: "1px solid", height: "200px", width: "200px" }}
      ></div>
    </div>
  );
}

export default App;
