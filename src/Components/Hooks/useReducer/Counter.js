import React, { useReducer } from "react";


const initialState = 0;
const reducer = ( state, action ) => {
  switch ( action ) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
}
const UseReducerCounter = () => {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1 className="text-left text-lg">UseReducer Example</h1>

      {`Count: ${count}`}
      <button type="button"
        className="inline-flex ml-5 mb-3 items-center text-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => { dispatch( 'increment' ) }}>Increment</button>
      <button type="button"
        className="inline-flex ml-5 mb-3 items-center text-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => { dispatch( 'decrement' ) }}>Decrement</button>
      <button
        type="button"
        className="inline-flex ml-5 mb-3 items-center text-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => { dispatch( 'reset' ) }}>Reset</button>
  </div>
)
}

export default UseReducerCounter