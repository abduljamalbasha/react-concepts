import {useState} from 'react';

const useInput = (initialState) => {

  const [value, setValue] = useState( initialState )
  
  const reset = () => {
    setValue(initialState)
  }

  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value)
    }
  }
  return [reset, bind, value]
};

export default useInput; 