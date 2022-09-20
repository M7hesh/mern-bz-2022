import React, { useState } from "react";

export default function App() {
  const [isImportant, setIsImportant] = useState("Yes");
  const handleClick = () => {
    setIsImportant("No");
  };
  return (
    <div className="state">
      <h1 className="state--title">Is state important to know?</h1>
      <div onClick={handleClick} className="state--value">
        <h1>{isImportant}</h1>
      </div>
    </div>
  );
}
