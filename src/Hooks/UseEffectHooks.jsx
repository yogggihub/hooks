import { useState, useEffect } from "react";
import React from "react";

function UseEffectHooks() {
  const [count, setCount] = useState(0);
  // condinatily render
  console.log("start")
  useEffect(() => {
    console.log("useEffect Hook");
    document.title = `Total Count ${count}`;
  }, [count]);

  return (
    <>
    {console.log("inside return")}
      <button onClick={() => setCount(count + 1)}>Counter {count}</button>
    </>
  );
}

export default UseEffectHooks;
