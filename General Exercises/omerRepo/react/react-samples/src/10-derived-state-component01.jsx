import React, { useState } from "react";

// TODO: Render the Double number
export default function DerivedStateComponent01() {
  const [number, setNumber] = useState(0);

  // Derived State
  const double = number * 2;

  function handleIncrement() {
    setNumber(number + 1);
  }

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <p>Original: {number}</p>
      <p>Double:{double}</p>
    </div>
  );
}
