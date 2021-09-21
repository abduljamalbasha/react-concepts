import React, { useReducer } from "react";


const initialState = {
  firstCounter: 0,
  secondCounter: 10
};
const reducer = ( state, action ) => {
  switch ( action.type ) {
    case "increment":
      return {...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
     case "increment2":
      return { ...state,  secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }

}
const UseReducerCounterObject = () => {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1 className="text-lg text-left">UseReducer Example</h1>

      {`First Counter: ${count.firstCounter}`} <br />
      {`Second Counter: ${count.secondCounter}`}<br />
      <button type="button"
        className="inline-flex ml-5 mb-3 items-center text-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => { dispatch( { type: 'increment', value: 1 } ) }}>Increment</button>
      <button type="button"
        className="inline-flex ml-5 mb-3 items-center text-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => { dispatch( { type: 'decrement', value: 1 } ) }}>Decrement</button><br />
      <button type="button"
        className="inline-flex ml-5 mb-3 items-center text-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => { dispatch( { type: 'increment', value: 5 } ) }}>Increment 5</button>
      <button type="button"
        className="inline-flex ml-5 mb-3 items-center text-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => { dispatch( { type: 'decrement', value: 5 } ) }}>Decrement 5</button><br />
      <button type="button"
        className="inline-flex ml-5 mb-3 items-center text-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => { dispatch( { type: 'increment2', value: 1 } ) }}>Increment second Counter</button>
      <button type="button"
        className="inline-flex ml-5 mb-3 items-center text-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => { dispatch( { type: 'decrement2', value: 1 } ) }}>Decrement second Counter</button><br />
      <button type="button"
        className="inline-flex ml-5 mb-3 items-center text-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => { dispatch( { type: 'reset' } ) }}>Reset</button>

  </div>
)
}

export default UseReducerCounterObject