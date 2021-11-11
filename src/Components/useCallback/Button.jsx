import React from "react";

const UCButtonComponent = ( { clickHandle, children } ) => {
  console.log( `${children} -Button component Rendering` )
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
      onClick={clickHandle}>
      {children}
    </button>
  )
}

export default React.memo( UCButtonComponent )