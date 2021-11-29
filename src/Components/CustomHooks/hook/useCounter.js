import {useState} from 'react';

const useCounter = (initialCount =0, value ) => {

  const [counter, setCounter] = useState( initialCount )

  const incrementCounter = () => {
    setCounter( counter + value )
  }

  const decrementCounter = () => {
    setCounter( counter - value )
  }

  const resetCounter = () => {
    setCounter( initialCount )
  }

  return [counter, incrementCounter, decrementCounter, resetCounter]
};

export default useCounter;