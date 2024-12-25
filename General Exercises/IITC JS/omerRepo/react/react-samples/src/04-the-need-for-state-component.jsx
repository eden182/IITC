import React, { useState } from "react";

// NOTE: This code is useless... it is just an example for why we NEED state
function TheNeedForStateComponent() {
  console.log("app render...");

  let count = 0;
  const [baba, setBaba] = useState(false);

  function incrementCount() {
    setBaba((prev) => !prev);
    count++;
    console.log("count", count);
  }

  return (
    <div>
      <p>{count}</p>
      <p>{baba.toString()}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

export default TheNeedForStateComponent;
