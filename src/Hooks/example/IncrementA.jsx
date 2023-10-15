import Usecust from "../Usecust";

function IncrementA() {
  const [count, CounterName, increment, reset] = Usecust();
  return (
    <div>
      <p>
        {CounterName} : {count}
      </p>
      <button onClick={increment}>Increment A</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default IncrementA;
