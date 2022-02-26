import { createContext, useEffect, useState } from "react";

const ListContext = createContext();

const ListProvider = (props) => {
  const [list, setList] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const addToWatchlist = (item) => {
    if (!watchlist.find((element) => element === item)) {
      setWatchlist([...watchlist, item]);
      console.log(`${item} has been added to the watchlist.`);
    }
  };
  const removeFromWatchlist = (item, i) => {
    const finalList = [...watchlist];

    finalList.splice(i, 1);
    setWatchlist([...finalList]);
    console.log(`${item} has been removed from the watchlist.`);
    if (!finalList.length) {
      console.log(`Watchlist is now empty.`);
    }
  };

  useEffect(() => {
    setList([
      "RELIANCE",
      "ICICIBANK",
      "TATAMOTORS",
      "HDFCBANK",
      "INFY",
      "HCLTECH",
    ]);
  }, []);

  return (
    <ListContext.Provider
      value={{ list, watchlist, addToWatchlist, removeFromWatchlist }}
      {...props}
    />
  );
};

export { ListContext, ListProvider };
