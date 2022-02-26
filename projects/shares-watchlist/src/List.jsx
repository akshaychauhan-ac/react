import { useContext } from "react";
import { ListContext } from "./Context";

const List = () => {
  const value = useContext(ListContext);

  return (
    <>
      <section style={{ width: "50%", float: "left" }}>
        <p>List</p>
        <ul>
          {value.list.map((item, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  value.addToWatchlist(item);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default List;
