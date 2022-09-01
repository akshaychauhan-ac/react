import { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = (props) => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <Context.Provider value={{ count, increment, decrement }}>
      {props.children}
    </Context.Provider>
  );
};

export default Context;
