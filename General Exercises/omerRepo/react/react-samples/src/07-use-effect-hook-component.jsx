import React, { useEffect, useState } from "react";

// function UseEffectHookComponent() {
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setShow((prev) => !prev)}>toggle</button>
//       <div>{show ? <Counter /> : null}</div>
//     </div>
//   );
// }

function UseEffectHookComponent() {
  const [count, setCount] = useState(0);
  const [baba, setBaba] = useState(false);

  function handleCount() {
    setCount(count + 1);
  }

  function handleClick() {
    console.log("click");
  }

  useEffect(() => {
    // component did mount
    console.log("mount");
    document.addEventListener("click", handleClick);

    // component will unmount (clean-up function)
    return () => {
      console.log("unmount");
      // document.removeEventListener("click", handleClick);
    };
  }, []);

  console.log("app render" + " " + count);

  // useEffect(() => {
  //   // component did update (state has changed)
  //   console.log(`count ${count}`);

  //   // component will update (state will be change)
  //   return () => console.log(`count from cleanup function ${count}`);
  // }, [count]);

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={handleCount}>inc</button>
      {/* <button onClick={() => setBaba((prev) => !prev)}>set baba</button> */}
    </div>
  );
}

export default UseEffectHookComponent;
