import { useContext } from 'react'
import {context} from "../App";
function Acomponent(props) {
  const data = useContext(context)
  return (
    <>
    {data.Class}
    </>
  )
}

export default Acomponent
