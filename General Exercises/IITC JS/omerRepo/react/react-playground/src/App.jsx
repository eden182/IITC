import React, { useState } from "react";

export default function App() {
  const [items, setItems] = useState(["baba", "bubu"]);
  const [papa, setPapa] = useState(false);
  return (
    <>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <button
        onClick={() => {
          items.push("somthing");
          setPapa((prev) => !prev);
        }}
      >
        Add something
      </button>
    </>
  );
}
