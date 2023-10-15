import { useReducer } from "react";
import React from "react";
const initialstate = {
  increamentByone: 0,
  incrementByFive: 5,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "IncreByOne":
      return {
        ...state,
        increamentByone: state.increamentByone + action.value,
      };
    case "increByFive":
      return {
        ...state,
        incrementByFive: state.incrementByFive + action.value,
      };
    default:
      return state;
  }
};

function UseReducerExam() {
  const [currentState, dispatch] = useReducer(reducer, initialstate);
  // console.log(initialstate);
  return (
    <>
      <p>{currentState.increamentByone}</p>
      <p>
        <button onClick={() => dispatch({ type: "IncreByOne", value: 1 })}>
          increamentByone
        </button>
      </p>
      <p>{currentState.incrementByFive}</p>
      <p>
        <button onClick={() => dispatch({ type: "increByFive", value: 5 })}>
          incrementByFive
        </button>
      </p>
    </>
  );
}

export default UseReducerExam;
