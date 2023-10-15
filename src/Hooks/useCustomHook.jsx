import { useState } from "react";
const UseCustomHook = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 5);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return [count, increment, Decrement, reset];
};
export default UseCustomHook;
