import React from 'react'

function Usememochild({childComponentName}) {
    console.log("I am child")
  return (
    <div>
     {childComponentName()}
    </div>
  )
}

export default React.memo(Usememochild)
