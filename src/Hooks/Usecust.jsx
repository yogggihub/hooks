import { useState } from "react";
const Usecust = () => {
  const [count, setCount] = useState(0);
  const CounterName = "Counter";
  const increment = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  return [count, CounterName, increment, reset];
};

export default Usecust;
