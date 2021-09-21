import React from "react";

const HoverCounter = (props) => {
  return (
    
    <div className="text-lg mt-4" >
      <h1 onMouseOver={props.IncrementCounter} >Hover { props.count } times</h1>
   </div>
 ) 
}

export default HoverCounter