import { useState } from "react";

const CallBackFunction = (props) =>{
  const [studentName, setStudentName] = useState()
  const setData = (event) =>{
    event.preventDefault();
    props.getData(studentName)
  }
  return(
    <>
    <form onSubmit={setData}>
    <input type="text" value={studentName} onChange={(e)=>setStudentName(e.target.value)}/>
    <button type="submit">Submit</button>
    </form>
    
    </>
  )
}
export default CallBackFunction;