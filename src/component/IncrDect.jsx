import UseCustomHook from "../Hooks/useCustomHook";
const IncrDect = () => {
  const [count, increment, Decrement, reset] = UseCustomHook();
  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};
export default IncrDect;
