import React, { useState } from "react";

const Counter = (props) => {
 const [counter, setCounter] = useState( 0 )
    
    const IncrementCounter = () => {
      setCounter(counter + 1)
    }
  
  return (
    <div>
      {/* {props.render( counter, IncrementCounter )} */}
      {props.children(counter, IncrementCounter)}
   </div>
 ) 
}

export default Counter