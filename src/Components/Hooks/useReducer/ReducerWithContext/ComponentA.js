import React, { useContext } from "react";
import { counterContext } from "../useReducerWrapper";

const ComponentA = () => {
  
const countContext = useContext(counterContext)
  return (
    <div>
      <h1>Component A {`Count: ${countContext.countState}`}</h1>
      <button type="button"
        className="inline-flex ml-5 mb-3 items-center text-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => { countContext.countDispatch( 'increment' ) }}>Increment</button>
      <button type="button"
        className="inline-flex ml-5 mb-3 items-center text-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => { countContext.countDispatch( 'decrement' ) }}>Decrement</button>
      <button type="button"
        className="inline-flex ml-5 mb-3 items-center text-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => { countContext.countDispatch( 'reset' ) }}>Reset</button>
  </div>
)
}

export default ComponentA