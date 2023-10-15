import Usecust from "../Usecust";

function IncrementB() {
  const [count, CounterName, increment, reset] = Usecust();
  return (
    <div>
      <p>
        {CounterName}: {count}
      </p>
      <button onClick={increment}>Increment B</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default IncrementB;
