import { useState, useCallback } from "react";
import Usememochild from "../component/Usememochild";

const UseMemoHooks = () => {
  const [count, setCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const childComponentName = useCallback(() => {
    return "Hello";
  }, [childCount]);

  return (
    <>
      {count}
      <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setChildCount(childCount + 1)}>
        Child Increment
      </button>
      <Usememochild childComponentName={childComponentName} />
    </>
  );
};
export default UseMemoHooks;
