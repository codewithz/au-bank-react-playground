import React, { useState } from "react";

export default function CounterComponent() {
  const [counter, setCounter] = useState(0);

  const decrement = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <h3>Counter Component</h3>
      <button onClick={decrement}>Decrement</button>
      &nbsp; &nbsp;
      <label>{counter}</label>
      &nbsp; &nbsp;
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}
