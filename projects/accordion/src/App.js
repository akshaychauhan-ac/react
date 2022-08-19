import logo from "./logo.svg";
import "./App.css";
import Component from "./Component";

function App() {
  const structure = [
    {
      id: 1,
      text: "public",
      children: [
        {
          id: 2,
          text: "index.html",
        },
        {
          id: 3,
          text: "manifest.json",
        },
        {
          id: 4,
          text: "favicon.ico",
        },
      ],
    },
    {
      id: 5,
      text: "src",
      children: [
        {
          id: 6,
          text: "App.js",
        },
        {
          id: 7,
          text: "App.css",
        },
        {
          id: 8,
          text: "index.js",
        },
        {
          id: 9,
          text: "index.css",
        },
        {
          id: 10,
          text: "logo.svg",
        },
      ],
    },
    {
      id: 11,
      text: "package.json",
    },
    {
      id: 12,
      text: "README.md",
    },
  ];
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      {structure.map((item) => {
        return <Component key={item.id} item={item}></Component>;
      })}
    </div>
  );
}

export default App;
