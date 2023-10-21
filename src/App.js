import { createContext, useContext, useState } from "react";
import UseStateHook from "./Hooks/UseStateHook";
import UseEffectHooks from "./Hooks/UseEffectHooks";
// import UseContextHook from "./Hooks/UseContextHook";
import "./App.css";
import UseReducerHook from "./Hooks/UseReducerHook";
import UseRefHook from "./Hooks/UseRefHook";
import IncrDect from "./component/IncrDect";
import IncrementDect from "./component/IncrementDect";
import IncrementA from "./Hooks/example/IncrementA";
import IncrementB from "./Hooks/example/IncrementB";
import UseReducerExam from "./Hooks/example/UseReducerExam";
import FetchData from "./Hooks/example/FetchData";
import Bcomponent from "./component/Bcomponent";
import UseMemoHook from "./Hooks/UseMemoHook";
import UseMomoHooksExam from "./component/useMemoHooksExam";
import UseMemoHooks from "./Hooks/UseMemoHooks";
import CallBackFunction from "./Hooks/CallBackFunction";
export const context = createContext();
function App() {
  const[childData, setChildData] = useState()
  const getData = (data) => {
    setChildData(data);
  };
  return (
    <div className="App">
      <context.Provider value={{ name: "Kruti", Class: "Javascript" }}>
        {/* <UseStateHook /> */}
        {/* <UseEffectHooks /> */}
        {/* <UseReducerHook />
      <UseContextHook/>
      <UseRefHook/> */}
        {/* <IncrDect/> */}
        {/* <IncrementA/>
      <IncrementB/> */}
        {/* <UseReducerExam/> */}
        {/* <FetchData /> */}
        {/* <IncrDect/>
        <IncrementDect/> */}
        {/* <UseReducerHook/> */}
        {/* <Bcomponent/> */}
        {/* <UseContextHook/> */}
      </context.Provider>
      {/* <UseMemoHook/> */}
      {/* <UseMomoHooksExam/> */}
      {/* <UseMemoHooks/> */}
      {childData}
      <CallBackFunction getData={getData} />
    </div>
  );
}

export default App;
