import React from "react";

export default function App() {
  return (
    <div className="container">
      <img src="https://picsum.photos/640/360" />
      <button
        onClick={() => console.log("I was clicked")}
        onMouseOver={() => console.log("Hover")}
      >
        Click me
      </button>
    </div>
  );
}
