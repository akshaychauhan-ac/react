import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const getUsers = async (iTop) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    let newData = [];

    for (let i = 0; i < iTop; i++) {
      newData.push({
        id: data[i].id,
        userId: data[i].userId,
        title: data[i].title.slice(0, 40),
        body: data[i].body.slice(0, 80),
      });
    }

    setPosts(newData);
  };
  useEffect(() => {
    getUsers(10);
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts &&
            posts.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <button
        onClick={() => {
          getUsers(showMore ? 10 : 20);
          setShowMore(!showMore);
        }}
      >
        {!showMore ? "Show More" : "Show Less"}
      </button>
    </div>
  );
}

export default App;
