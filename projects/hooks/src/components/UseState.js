import React, { useState } from 'react';

export default function UseState() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <label style={{ marginRight: '30px' }}>{counter}</label>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
