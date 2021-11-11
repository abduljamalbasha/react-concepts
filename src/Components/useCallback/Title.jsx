import React from "react";

const UCTitleComponent = ( { title } ) => {
  console.log( 'Title component Rendering' )
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default React.memo( UCTitleComponent )