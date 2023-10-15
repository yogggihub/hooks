import { useContext, useReducer } from "react";
// simple reducer
// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };
// const UseReducerHook = () => {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       <div>{count}</div>
//       <button onClick={() => dispatch("increment")}>Increment</button>
//       <button onClick={() => dispatch("decrement")}>Decrement</button>
//       <button onClick={() => dispatch("reset")}>Reset</button>
//     </>
//   );
// };
// export default UseReducerHook;

// Advanced Reducer
const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "incrementByFive":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrementByFive":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const UseReducerHook = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>{count.firstCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <div>{count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "incrementByFive", value: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrementByFive", value: 5 })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};
export default UseReducerHook;
