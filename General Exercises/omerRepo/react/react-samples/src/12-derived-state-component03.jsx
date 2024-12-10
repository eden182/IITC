import React, { useRef, useState } from "react";

// TODO: filter the Items
export default function DerivedStateComponent03() {
  const [items, setItems] = useState(["baba", "bubu", "yuval"]);
  const [query, setQuery] = useState("");

  const filtereditems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const newItemInputRef = useRef(null);

  function handleAddItem() {
    const newItem = newItemInputRef.current.value;
    setItems((prev) => {
      return [...prev, newItem];
    });
  }

  function handleSearch(ev) {
    setQuery(ev.target.value);
  }

  return (
    <>
      <input
        value={query}
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      />

      <ul>
        {filtereditems.map((item, index) => {
          return (
            <li key={index}>
              <div>{item}</div>
            </li>
          );
        })}
      </ul>

      <input
        type="text"
        ref={newItemInputRef}
        placeholder="Enter name..."
      />
      <button onClick={handleAddItem}>Add item</button>
    </>
  );
}
