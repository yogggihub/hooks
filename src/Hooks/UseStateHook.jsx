import { useState } from "react";
const UseStateHook = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Counter Value {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
};
export default UseStateHook;
