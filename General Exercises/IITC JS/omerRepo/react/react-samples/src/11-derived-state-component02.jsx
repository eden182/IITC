import React, { useState } from "react";

// TODO: Render the Items amount
export default function DerivedStateComponent02() {
  const [items, setItems] = useState(["item", "item", "item"]);
  const amount = items.length;

  function handleAddItem() {
    setItems((prev) => {
      return [...prev, "item"];
    });
  }

  return (
    <>
      <button onClick={handleAddItem}>Add item</button>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <div>{item}</div>
            </li>
          );
        })}
      </ul>
      <p>Items amount: {amount}</p>
    </>
  );
}
