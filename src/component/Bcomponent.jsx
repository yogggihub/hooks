import { useContext } from 'react'
import {context} from "../App";
function Bcomponent() {
  const data = useContext(context)
  return (
    <>
    {data.Class}
    </>
  )
}

export default Bcomponent
