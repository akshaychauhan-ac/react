import { useContext } from "react";
import { ListContext } from "./Context";

const Watchlist = () => {
  const value = useContext(ListContext);

  return (
    <>
      <section style={{ width: "50%", float: "left" }}>
        <p>Watchlist</p>
        <ul>
          {value.watchlist.map((item, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  value.removeFromWatchlist(item, i);
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

export default Watchlist;
