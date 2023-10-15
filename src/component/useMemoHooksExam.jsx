import { useMemo, useState } from "react";

const useMomoHooksExam = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const counterOneInc = () => {
    setCounterOne(counterOne + 1);
  };
  const counterTwoInc = () => {
    setCounterTwo(counterTwo + 1);
  };
  const evenNum = useMemo(() => {
    console.log("even Function");
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  },[counterOne]);
  return (
    <>
      {evenNum ? "even" : "Odd"}
      <br></br>
      <button onClick={counterOneInc}>CounterOne</button>
      <br></br>
      {counterTwo}
      <br></br>
      <button onClick={counterTwoInc}>CounterTwo</button>
    </>
  );
};
export default useMomoHooksExam;
