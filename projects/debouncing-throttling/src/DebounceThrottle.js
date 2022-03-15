import React, { useCallback, useState } from "react";

const DebounceThrottle = () => {
  const [suggestions, setSuggestions] = useState("");

  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, delay);
    };
  };
  const throttle = (fn, delay) => {
    let last = 0;
    return (...args) => {
      const now = new Date().getTime();
      if (now - last < delay) {
        return;
      }
      last = now;

      return fn(...args);
    };
  };

  const handleChange = (value) => {
    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then((res) => res.json())
      .then((json) => setSuggestions(json.data.items));
  };

  const optimizedFn = useCallback(debounce(handleChange, 500), []);
  // const optimizedFn = useCallback(throttle(handleChange, 1000), []);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Debouncing in React JS</h2>

      <input
        type="text"
        className="search"
        placeholder="Enter something here..."
        onChange={(e) => optimizedFn(e.target.value)}
      />

      {suggestions.length > 0 && (
        <div className="autocomplete">
          {suggestions.map((el, i) => (
            <div key={i} className="autocompleteItems">
              <span>{el.name}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DebounceThrottle;
