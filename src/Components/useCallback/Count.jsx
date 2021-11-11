import React from "react";

const UCCountComponent = ( { count } ) => {
  console.log( 'Count component Rendering' )
  return (

    <h2>{count}</h2>

  )
}

export default React.memo( UCCountComponent )