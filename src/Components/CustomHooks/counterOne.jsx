import React from 'react'
import useCounter from './hook/useCounter'

const CounterOneComponent = () => {

  const [counter, incrementCounter, decrementCounter, resetCounter] = useCounter( 0, 1 )

  return (
    <div>
      <h1 className="text-xxl"> Counter 1 - {counter}</h1>
      <button className="rounded p-4 ml-2 border border-gray-500 bg-blue-400" onClick={incrementCounter}>Increment</button>
      <button className="rounded p-4 ml-2 border border-gray-500 bg-blue-400" onClick={decrementCounter}>Decrement</button>
      <button className="rounded p-4 ml-2 border border-gray-500 bg-blue-400" onClick={resetCounter}>Reset</button>
    </div>
  )
}

export default CounterOneComponent