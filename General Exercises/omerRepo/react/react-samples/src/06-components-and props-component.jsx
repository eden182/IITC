import React, { useState } from "react";

function ComponentsAndPropsComponent() {
  console.log("App render...");
  const [count_1, setCount_1] = useState(0);
  const [count_2, setCount_2] = useState(0);

  return (
    <>
      <div>Total: {count_1 + count_2} </div>
      <Counter
        count={count_1}
        setCount={setCount_1}
        title="Omer"
        borderColor="red"
      />
      <Counter
        count={count_2}
        setCount={setCount_2}
        title="BABA"
        borderColor="green"
      />
    </>
  );
}

function Counter(props) {
  console.log("counter render" + props.title);
  return (
    <div
      style={{
        border: `10px solid ${props.borderColor}`,
        marginBlock: "1rem",
        padding: "1rem",
      }}
    >
      <h2>{props.title}</h2>
      <div>{props.count}</div>
      <button onClick={() => props.setCount(props.count + 1)}>incerment</button>
    </div>
  );
}

export default ComponentsAndPropsComponent;
