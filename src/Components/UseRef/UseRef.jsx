import React, { useEffect, useRef } from 'react';


function UseRefCompoent () {
  const inputRef = useRef( null )
  useEffect( () => {
    inputRef.current.focus()
  }, [] )


  return (

    <div>
      <input ref={inputRef} type="text" className="border p-2 border-gray-500 rounded" />
    </div>
  );
}

export default UseRefCompoent;