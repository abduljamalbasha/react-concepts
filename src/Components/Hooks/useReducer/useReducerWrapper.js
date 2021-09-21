import React, {useReducer} from 'react'
import UseReducerCounter from './Counter';
import UseReducerCounterObject from './CounterObject';
import FetchDataWithReducer from './FetchData';
import ComponentA from './ReducerWithContext/ComponentA';
import ComponentB from './ReducerWithContext/ComponentB';
import ComponentC from './ReducerWithContext/ComponentC';

// Below code used in UseReduer with useContext example
export const counterContext = React.createContext()
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

const UseReducerWrapper = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>

      {/* UseReducer Example */}

      <UseReducerCounter />
      <UseReducerCounterObject />
      

      {/* useReducer With useContext */}

      <counterContext.Provider value= {{ countState: count , countDispatch: dispatch }}>
          <ComponentA />
          <ComponentB />
          <ComponentC />
      </counterContext.Provider>

      <FetchDataWithReducer />

      {/* UseReduer Example End */}

    </div>
  )
}

export default UseReducerWrapper