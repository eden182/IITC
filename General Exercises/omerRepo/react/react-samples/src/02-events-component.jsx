import React from "react";

function EventsComponent() {
  const fruits = ["banana", "melon", "apple"];

  function logInnerText(ev) {
    console.log(ev.target.innerText);
  }

  function logItem(item, ev) {
    console.log(item);
  }

  return (
    <>
      <h1 onClick={logInnerText}>Hello React</h1>
      <h1 onClick={logInnerText}>Hello baba</h1>
      <ul>
        {fruits.map((fruit, index) => {
          return (
            <li
              key={fruit}
              onClick={(ev) => logItem(fruit, ev)}
            >
              <div>Fruit: {fruit}</div>
              <div>Index: {index}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default EventsComponent;
