import React, { useContext } from "react";
import { counterContext } from "../useReducerWrapper";

const ComponentF = () => {
  
  const countContext = useContext( counterContext )
  // console.log('countContext',countContext.countState)
  return (
    <div>
      {/* <h1>Component F {`Count: ${countContext}`}</h1> */}
      <button
        type="button"
        className="inline-flex ml-5 items-center text-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => { countContext.countDispatch( 'increment' ) }}>Increment</button>
      <button
        type="button"
        className="inline-flex ml-5 items-center text-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => { countContext.countDispatch( 'decrement' ) }}>Decrement</button>
      <button
        type="button"
        className="inline-flex ml-5 items-center text-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => { countContext.countDispatch( 'reset' ) }}>Reset</button>
  </div>
)
}

export default ComponentF