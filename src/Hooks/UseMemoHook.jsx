import React, { useMemo, useState } from 'react'

const UsememoExam = () => {
    const [counterfirst,setcounter]=useState(0);
    const [countersecond,setcountersecond]=useState(0);
     const setnumber=()=>
     {
         setcounter(counterfirst+1);
     }
     const setnumber2=()=>{
         setcountersecond(countersecond+1);
     }
     const checknum=useMemo(()=>
     {
        let i=0;
        while(i<20)i++;
        return counterfirst%2===0;

     },[counterfirst])

  return (
    <>
    <button onClick={setnumber}> Counter {counterfirst}</button>
     <span>{checknum?'Even':'odd'}</span>
    <button onClick={setnumber2}> Counter {countersecond}</button>
    </>
    )
}

export default UsememoExam
