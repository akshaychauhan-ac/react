import React, { useState, useEffect } from 'react';

export default function UseEffect() {
  const [counter, setCounter] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  useEffect(() => {
    setMultiplier(counter * counter);
  }, [counter]);

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
      <div>
        <label style={{ marginRight: '30px' }}>{multiplier}</label>
      </div>
    </div>
  );
}
