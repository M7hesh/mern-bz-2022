import React from "react";

export default function Form() {
  const handleChange = (e) => {
    console.log("Changed");
    console.log(e.target.value);
  };
  return (
    <form>
      <input onChange={handleChange} type="text" placeholder="First Name" />
    </form>
  );
}
