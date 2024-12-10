import React, { useEffect, useRef, useState } from "react";

function UseRefHookComponent() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [count, setCount] = useState(0);

  const isActiveRef = useRef(false);
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    console.log("mount");
    firstNameRef.current.focus();
  }, []);

  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }
    console.log("count has changed");
  }, [count]);

  function onSubmit(ev) {
    ev.preventDefault();

    console.log(firstNameRef.current.value);
    console.log(lastNameRef.current.value);

    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    firstNameRef.current.focus();
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            ref={firstNameRef}
            id="firstName"
            type="text"
          />
        </div>

        <br />
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            ref={lastNameRef}
            id="lastName"
            type="text"
          />
        </div>

        <button disabled={isActiveRef.current}>Submit</button>
      </form>

      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>inc</button>
    </div>
  );
}

export default UseRefHookComponent;
