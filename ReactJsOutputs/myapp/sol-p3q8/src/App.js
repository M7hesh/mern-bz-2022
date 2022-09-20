import React, { useState } from "react";

export default function App() {
  /**
   * Challenge: Set up state to track our count (initial value is 0)
   */
  const [counter, setCounter] = useState(0);
  const handlePlus = () => {
    setCounter((prevState) => prevState + 1);
  };
  const handleMinus = () => {
    setCounter((prevState) => prevState - 1);
  };
  return (
    <div className="counter">
      <button onClick={handleMinus} className="counter--minus">
        –
      </button>
      <div className="counter--count">
        <h1>{counter}</h1>
      </div>
      <button onClick={handlePlus} className="counter--plus">
        +
      </button>
    </div>
  );
}
