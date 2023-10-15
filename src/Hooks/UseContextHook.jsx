import { useContext } from "react";
import { context } from "../App";

function UseContextHook() {
  const stateData = useContext(context);
  return (
    <div>
      {stateData.name}
      {stateData.sureName}
    </div>
  );
}

export default UseContextHook;
