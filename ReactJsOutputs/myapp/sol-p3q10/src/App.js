import React, { useState } from "react";

export default function App() {
  /**
   * Challenge:
   * - Initialize state for `isGoingOut` as a boolean
   * - Make it so clicking the div.state--value flips that
   *   boolean value (true -> false, false -> true)
   * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
   */
  const [isGoingOut, setIsGoingOut] = useState(true);
  const toggleState = () => {
    setIsGoingOut(!isGoingOut);
  };
  return (
    <div className="state">
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      <div onClick={toggleState} className="state--value">
        <h1>{isGoingOut ? "Yes" : "No"}</h1>
      </div>
    </div>
  );
}
