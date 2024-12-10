import React from "react";

function ListsComponent() {
  const fruits = ["banana", "melon", "apple"];

  return (
    <>
      <ul>
        {fruits.map((fruit, index) => {
          return (
            <li key={fruit}>
              <div>Fruit: {fruit}</div>
              <div>Index: {index}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListsComponent;
